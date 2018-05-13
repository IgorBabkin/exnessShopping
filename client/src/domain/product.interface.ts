export type ProductId = string;
export type ProductName = string;
export type Money = number;

export enum Size {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
}

export type Sizes = Size[];

export interface IProduct {
    name: ProductName;
    price: Money;
    sizes: Sizes;
}

export type IProducts = {
    [productId in string]: IProduct;
};
