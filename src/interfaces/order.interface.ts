export interface IOrder<T> {
  id: number;
  userId: number;
  productsIds: T;
}