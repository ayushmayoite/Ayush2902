/**
 * tests/get-products.test.ts
 * Unit tests for lib/getProducts.ts helper functions.
 * Supabase is mocked so these run without a real DB connection.
 */
import { getProducts, getProductsByCategory, getProductBySlug } from '../lib/getProducts';

// ── Mock Supabase ──────────────────────────────────────────────────────────────
const mockSelect = jest.fn();
const mockOrder = jest.fn();
const mockEq = jest.fn();
const mockSingle = jest.fn();

const chainMock = {
    select: mockSelect,
    order: mockOrder,
    eq: mockEq,
    single: mockSingle,
};

// Chainable builder: each method returns the chain object
mockSelect.mockReturnValue(chainMock);
mockOrder.mockReturnValue(chainMock);
mockEq.mockReturnValue(chainMock);

jest.mock('../lib/db', () => ({
    supabase: {
        from: jest.fn(() => chainMock),
    },
}));

// ── Sample data fixtures ───────────────────────────────────────────────────────

const MOCK_PRODUCTS = [
    {
        id: 'prod-1',
        category_id: 'oando-seating',
        series: 'Ergo',
        name: 'Ergo Chair',
        slug: 'ergo-chair',
        images: ['/images/ergo-chair-1.webp', '/images/ergo-chair-2.webp'],
        flagship_image: '/images/ergo-chair-1.webp',
        specs: { dimensions: '70x70x120cm', materials: ['Mesh'], features: ['Lumbar support'], sustainability_score: 8 },
        series_id: 'ergo-series',
        series_name: 'Ergo Series',
        created_at: '2024-01-01T00:00:00Z',
    },
    {
        id: 'prod-2',
        category_id: 'oando-tables',
        series: 'Executive',
        name: 'Executive Table',
        slug: 'executive-table',
        images: ['/images/exec-table-1.webp'],
        flagship_image: '/images/exec-table-1.webp',
        specs: { dimensions: '180x90x75cm', materials: ['Wood'], features: ['Cable management'], sustainability_score: 6 },
        series_id: 'exec-series',
        series_name: 'Executive Series',
        created_at: '2024-01-02T00:00:00Z',
    },
];

// ── Tests ──────────────────────────────────────────────────────────────────────

describe('getProducts()', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockSelect.mockReturnValue(chainMock);
        mockOrder.mockReturnValue(chainMock);
        mockEq.mockReturnValue(chainMock);
    });

    test('returns mapped products on success', async () => {
        mockOrder.mockResolvedValueOnce({ data: MOCK_PRODUCTS, error: null });

        const products = await getProducts();

        expect(products).toHaveLength(2);
        expect(products[0].name).toBe('Ergo Chair');
        expect(products[0].images).toEqual(['/images/ergo-chair-1.webp', '/images/ergo-chair-2.webp']);
    });

    test('returns empty array on Supabase error', async () => {
        mockOrder.mockResolvedValueOnce({ data: null, error: { message: 'DB failure' } });

        const products = await getProducts();

        expect(products).toHaveLength(0);
    });

    test('returns empty array when data is null', async () => {
        mockOrder.mockResolvedValueOnce({ data: null, error: null });

        const products = await getProducts();
        expect(products).toHaveLength(0);
    });

    test('ensures images field is always an array', async () => {
        const productWithNullImages = { ...MOCK_PRODUCTS[0], images: null };
        mockOrder.mockResolvedValueOnce({ data: [productWithNullImages], error: null });

        const products = await getProducts();
        expect(products[0].images).toEqual([]);
    });
});

describe('getProductsByCategory()', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockSelect.mockReturnValue(chainMock);
        mockEq.mockReturnValue(chainMock);
        mockOrder.mockReturnValue(chainMock);
    });

    test('filters products by category_id', async () => {
        const seatingProducts = MOCK_PRODUCTS.filter(p => p.category_id === 'oando-seating');
        mockOrder.mockResolvedValueOnce({ data: seatingProducts, error: null });

        const products = await getProductsByCategory('oando-seating');

        expect(products).toHaveLength(1);
        expect(products[0].category_id).toBe('oando-seating');
    });

    test('returns empty array on DB error', async () => {
        mockOrder.mockResolvedValueOnce({ data: null, error: { message: 'Not found' } });

        const products = await getProductsByCategory('non-existent');
        expect(products).toHaveLength(0);
    });

    test('preserves images array from DB row', async () => {
        mockOrder.mockResolvedValueOnce({ data: [MOCK_PRODUCTS[0]], error: null });

        const products = await getProductsByCategory('oando-seating');
        expect(Array.isArray(products[0].images)).toBe(true);
        expect(products[0].images.length).toBeGreaterThan(0);
    });
});

describe('getProductBySlug()', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockSelect.mockReturnValue(chainMock);
        mockEq.mockReturnValue(chainMock);
        mockSingle.mockReturnValue(chainMock);
    });

    test('returns product data when slug matches', async () => {
        mockSingle.mockResolvedValueOnce({ data: MOCK_PRODUCTS[0], error: null });

        const product = await getProductBySlug('ergo-chair');

        expect(product).not.toBeNull();
        expect(product?.slug).toBe('ergo-chair');
        expect(product?.name).toBe('Ergo Chair');
    });

    test('returns null when slug not found', async () => {
        mockSingle.mockResolvedValueOnce({ data: null, error: { message: 'Not found', code: 'PGRST116' } });

        const product = await getProductBySlug('non-existent-slug');
        expect(product).toBeNull();
    });
});
