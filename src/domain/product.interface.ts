export type ProductId = number;
export type ProductName = string;
export type Money = number;

export interface IProduct {
    id: ProductId;
    name: ProductName;
    price: Money;
}
