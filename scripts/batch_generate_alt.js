/* eslint-disable @typescript-eslint/no-require-imports */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const openRouterKey = process.env.OPENROUTER_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing credentials in .env.local (URL or Service Key)");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function generateAltText(product) {
    const prompt = `Generate a concise, SEO-friendly alt text (max 15 words) for a product image. Must include the keywords "furniture Patna Bihar" if appropriate.
Product category: ${product.category_id}
Product name: ${product.name}
${product.description ? `Description: ${product.description}` : ""}

The alt text should describe the furniture piece accurately for screen readers and SEO. Respond with ONLY the alt text string, no quotes.`;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${openRouterKey}`,
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "One and Only Furniture",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-4o-mini", // Use high-speed mini model as requested
                messages: [{ role: "user", content: prompt }],
                temperature: 0.3,
                max_tokens: 50
            })
        });

        const data = await response.json();
        return data.choices?.[0]?.message?.content?.trim() || `${product.name} - ${product.category_id}`;
    } catch (err) {
        console.error(`Failed to generate for ${product.name}:`, err.message);
        return `${product.name} - ${product.category_id}`; // Fallback
    }
}

async function batchRun() {
    console.log("Fetching products...");
    const { data: products, error } = await supabase
        .from('products')
        .select('id, name, category_id, description, alt_text');

    if (error) {
        console.error("Error fetching products:", error);
        process.exit(1);
    }

    console.log(`Found ${products.length} products. Generating Alt text...`);
    let updatedCount = 0;

    for (let i = 0; i < products.length; i++) {
        const p = products[i];
        
        // Skip if it already has alt text to save API calls, unless we want to force overwrite
        // Let's force overwrite for SEO keywords based on prompt
        console.log(`[${i+1}/${products.length}] Generating for ${p.name}...`);
        const aiAltText = await generateAltText(p);
        
        const { error: updateError } = await supabase
            .from('products')
            .update({ alt_text: aiAltText })
            .eq('id', p.id);
            
        if (updateError) {
             console.error(`  -> Failed to update DB for ${p.name}:`, updateError.message);
        } else {
             console.log(`  -> Saved: "${aiAltText}"`);
             updatedCount++;
        }
        
        // Sleep to avoid rate limits
        await new Promise(r => setTimeout(r, 500));
    }
    
    console.log(`\n🎉 Done! Updated ${updatedCount}/${products.length} products with SEO-optimized Alt Texts.`);
}

batchRun();
