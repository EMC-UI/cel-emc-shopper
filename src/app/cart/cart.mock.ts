import {ICartItem} from './cart.model'
import {Record} from 'immutable'

export class MockLocalStorage {
  retrieve(key: string) {
    return []
  }
  store(key, stuff): void {}
  clear(key): void {}
}

export class TestCartItem extends Record({
  id: '',
  name: '',
  desc: '',
  price: 0.00,
  quantity: 1
}) implements ICartItem<TestCartItem> {
  id: string
  name: string
  desc?: string
  category?: string
  price?: number
  quantity?: number

  setQuantity(number): TestCartItem {
    return new TestCartItem({
      id: this.id,
      name: this.name,
      desc: this.desc,
      category: this.category,
      price: this.price,
      quantity: this.quantity + 1
    })
  }
}
