import { supabase } from '../lib/db';

describe('Image Mismatches', () => {
    test('No chair in tables', async () => {
        // We expect the database and env vars to be available during this test
        const { data, error } = await supabase
            .from('products')
            .select('name, images')
            .eq('category_id', 'oando-tables');

        // Skip if no data or fail explicitly if there's an error
        if (error) {
            throw error;
        }

        expect(data).toBeDefined();

        // According to requirements, no table product should have 'chair' in its images
        data?.forEach(p => {
            const imagesStr = p.images?.join(' ').toLowerCase() || '';
            expect(imagesStr).not.toContain('chair');
        });
    });

    test('No chair or table in storage', async () => {
        const { data, error } = await supabase
            .from('products')
            .select('name, images')
            .eq('category_id', 'oando-storage');

        if (error) {
            throw error;
        }

        expect(data).toBeDefined();

        data?.forEach(p => {
            const imagesStr = p.images?.join(' ').toLowerCase() || '';
            expect(imagesStr).not.toContain('chair');
            expect(imagesStr).not.toContain('table');
        });
    });
});
