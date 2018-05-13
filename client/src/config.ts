export const CONNECTION_URL = 'http://localhost:3002';

export interface IAPI {
    products: string;
}

export const API: IAPI = {
    products: '/api/products',
};
