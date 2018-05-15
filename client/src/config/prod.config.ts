import {IConfig} from './config.interface';

export const prodConfig: IConfig = {
    CONNECTION_URL: process.env.BASE_NAME ? process.env.BASE_NAME : '',
    API: {
        products: '/api/products.json',
    }
};
