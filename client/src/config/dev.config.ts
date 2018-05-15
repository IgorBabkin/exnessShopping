import {IConfig} from './config.interface';

export const devConfig: IConfig = {
    CONNECTION_URL: 'http://localhost:3002',
    API: {
        products: '/api/products',
    },
};
