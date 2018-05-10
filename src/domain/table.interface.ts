import {IProduct} from './product.interface';

export type TableId = number;

export type EditTable = Pick<IProduct, 'id'> & Partial<IProduct>;

export type IProducts = IProduct[];
