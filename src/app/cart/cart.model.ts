export interface ICartItem<T> {
  id: string
  name: string
  desc?: string
  category?: string
  price?: number
  quantity?: number
  setQuantity(number): T
}
