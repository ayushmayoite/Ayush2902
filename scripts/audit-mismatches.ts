/**
 * Audit Supabase 'products' table for image mismatches.
 *
 * – Detects cross-category image paths (e.g. chair images in tables)
 * – Fixes mismatches by remapping paths to the correct category folder
 * – Outputs results as JSON to scripts/audit-results.json
 * – Batch-upserts fixed rows back to Supabase
 *
 * Usage:
 *   npx tsx scripts/audit-mismatches.ts            # audit only (dry run)
 *   npx tsx scripts/audit-mismatches.ts --fix       # audit + upsert fixes
 */

import { config } from 'dotenv';
import { resolve } from 'path';
config({ path: resolve(process.cwd(), '.env.local') });

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const shouldFix = process.argv.includes('--fix');

// ── Category → expected path segment mapping ────────────────────────────
const CATEGORY_SEGMENTS: Record<string, string> = {
    'oando-workstations': 'workstations',
    'oando-tables': 'tables',
    'oando-storage': 'storage',
    'oando-seating': 'seating',
    'oando-chairs': 'seating',
    'oando-other-seating': 'seating',
    'oando-soft-seating': 'soft-seating',
    'oando-educational': 'educational',
    'oando-collaborative': 'collaborative',
};

// Keywords that indicate a category mismatch
const CATEGORY_KEYWORDS: Record<string, string[]> = {
    'oando-tables': ['chair', 'seating', 'sofa', 'lounge'],
    'oando-workstations': ['chair', 'seating', 'sofa', 'table', 'lounge'],
    'oando-storage': ['chair', 'seating', 'sofa', 'table', 'desk'],
    'oando-seating': ['table', 'storage', 'cabinet', 'locker', 'workstation'],
    'oando-chairs': ['table', 'storage', 'cabinet', 'locker', 'workstation'],
    'oando-soft-seating': ['table', 'storage', 'cabinet', 'locker', 'workstation'],
};

interface AuditRow {
    productName: string;
    category: string;
    slug: string;
    mismatchedImage: string;
    fixedImage: string;
    status: 'mismatch' | 'ok';
}

interface FixedProduct {
    id: string;
    images: string[];
}

async function main() {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('  IMAGE MISMATCH AUDIT' + (shouldFix ? ' + FIX' : ' (DRY RUN)'));
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    const { data: products, error } = await supabase
        .from('products')
        .select('id, name, slug, category, category_id, images, flagship_image')
        .order('category');

    if (error) {
        console.error('❌ Supabase error:', error.message);
        process.exit(1);
    }
    if (!products || products.length === 0) {
        console.log('⚠️  No products found.');
        process.exit(0);
    }

    const auditResults: AuditRow[] = [];
    const fixedProducts: FixedProduct[] = [];
    let totalMismatches = 0;

    for (const p of products) {
        const catId = p.category_id || p.category;
        const images: string[] = Array.isArray(p.images) ? p.images : [];
        const forbidden = CATEGORY_KEYWORDS[catId] || [];
        const expectedSegment = CATEGORY_SEGMENTS[catId] || catId.replace('oando-', '');
        let hasMismatch = false;
        const fixedImages: string[] = [];

        for (const img of images) {
            // Skip external URLs
            if (img.startsWith('http')) {
                fixedImages.push(img);
                continue;
            }

            // Check for forbidden keywords in path
            const isMismatched = forbidden.some(kw => img.toLowerCase().includes(kw));

            if (isMismatched) {
                totalMismatches++;
                hasMismatch = true;

                // Fix: remap to the correct category folder
                const filename = img.split('/').pop() || 'product.webp';
                const fixedPath = `/images/${expectedSegment}/${filename}`;

                auditResults.push({
                    productName: p.name,
                    category: catId,
                    slug: p.slug,
                    mismatchedImage: img,
                    fixedImage: fixedPath,
                    status: 'mismatch',
                });

                fixedImages.push(fixedPath);
            } else {
                fixedImages.push(img);
            }
        }

        if (hasMismatch) {
            fixedProducts.push({ id: p.id, images: fixedImages });
        }
    }

    // ── Output results ────────────────────────────────────────────────────
    const outputPath = resolve(process.cwd(), 'scripts', 'audit-results.json');
    fs.writeFileSync(outputPath, JSON.stringify(auditResults, null, 2));
    console.log(`\n📄 Audit results written to: ${outputPath}`);

    // Print table
    console.log('\nProduct Name         | Category              | Mismatched Image       | Fixed Image');
    console.log('─────────────────────+───────────────────────+────────────────────────+─────────────────────────');
    for (const r of auditResults) {
        console.log(
            `${r.productName.padEnd(20)} | ${r.category.padEnd(21)} | ${r.mismatchedImage.padEnd(22)} | ${r.fixedImage}`
        );
    }

    console.log(`\n📊 Total: ${products.length} products scanned, ${totalMismatches} mismatches found.`);

    // ── Batch upsert fixes ────────────────────────────────────────────────
    if (shouldFix && fixedProducts.length > 0) {
        console.log(`\n🔧 Fixing ${fixedProducts.length} products via batch upsert...`);

        const BATCH = 50;
        let fixed = 0;
        for (let i = 0; i < fixedProducts.length; i += BATCH) {
            const batch = fixedProducts.slice(i, i + BATCH);
            const { error: upsertError } = await supabase
                .from('products')
                .upsert(batch, { onConflict: 'id' });

            if (upsertError) {
                console.error(`❌ Batch ${i}-${i + batch.length} failed:`, upsertError.message);
            } else {
                fixed += batch.length;
                console.log(`   ✅ Fixed ${fixed}/${fixedProducts.length}`);
            }
        }
        console.log(`\n🎉 Done! ${fixed} products updated.`);
    } else if (shouldFix) {
        console.log('\n✅ No mismatches to fix!');
    } else if (fixedProducts.length > 0) {
        console.log(`\n💡 Run with --fix to upsert ${fixedProducts.length} corrections.`);
    } else {
        console.log('\n✅ AUDIT PASSED — No cross-category image mismatches found.');
    }

    process.exit(totalMismatches > 0 && !shouldFix ? 1 : 0);
}

main().catch((err) => {
    console.error('Fatal:', err.message);
    process.exit(1);
});
