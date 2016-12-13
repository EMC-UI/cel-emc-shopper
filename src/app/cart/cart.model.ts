/**
 * Created by cromed on 12/13/16.
 */
import {Record} from 'immutable'

export interface iCartItem {
  id: string
  name: string
  desc?: string
  category?: string
  price?: number
  quantity?: number
}

const CartItemRecord = Record({
  id: '',
  name: '',
  desc: '',
  price: 0.00,
  quantity: 0
}, 'CartItemRecord')

export class CartItem extends CartItemRecord implements iCartItem {
  id: string
  name: string
  desc: string
  category: string
  price: number
  quantity: number
  constructor(props) {
    super(props)
  }
}
