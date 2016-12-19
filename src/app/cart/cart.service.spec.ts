import { TestBed, inject } from '@angular/core/testing'
import {CartService} from './cart.service'
import { LocalStorageService } from 'ng2-webstorage'
import {List} from 'immutable'
import {TestCartItem, MockLocalStorage} from './cart.mock'

describe('Service: Cart', () => {

  let testItem: TestCartItem = new TestCartItem({ id: '1', name: 'testItem' })

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService, { provide: LocalStorageService, useClass: MockLocalStorage }]
    })
  })

  beforeEach(inject([LocalStorageService, CartService], (localStorage: LocalStorageService, service: CartService<TestCartItem>) => {
    localStorage.clear(service.key)
    service.cartItems.next(List(<TestCartItem[]>[]))
  }))

  it('should exist and be empty', inject([CartService], (service: CartService<TestCartItem>) => {
    expect(service).toBeTruthy()
    expect(service.cartItems.getValue().size).toEqual(0)
  }))

  it('should getItems', inject([CartService], (service: CartService<TestCartItem>) => {
    expect(service.cartItems.getValue().size).toEqual(0)
    service.addItem(testItem)
    expect(service.cartItems.getValue().size).toEqual(1)
  }))

  it('should hasItem', inject([CartService], (service: CartService<TestCartItem>) => {
    expect(service.hasItem(testItem)).toEqual(false)
    service.addItem(testItem)
    expect(service.hasItem(testItem)).toEqual(true)
  }))

  it('should addItem', inject([CartService], (service: CartService<TestCartItem>) => {
    expect(service.cartItems.getValue().size).toEqual(0)
    service.addItem(testItem)
    expect(service.hasItem(testItem)).toEqual(true)
  }))

  it('should removeItem', inject([CartService], (service: CartService<TestCartItem>) => {
    service.addItem(testItem)
    expect(service.hasItem(testItem)).toEqual(true)
    service.removeItem(testItem)
    expect(service.hasItem(testItem)).toEqual(false)
  }))

  it('should toggleItem', inject([CartService], (service: CartService<TestCartItem>) => {
    expect(service.hasItem(testItem)).toEqual(false)
    service.toggleItem(testItem)
    expect(service.hasItem(testItem)).toEqual(true)
    service.toggleItem(testItem)
    expect(service.hasItem(testItem)).toEqual(false)
  }))

  it('should update quantities if item already exists', inject([CartService], (service: CartService<TestCartItem>) => {
    expect(service.hasItem(testItem)).toEqual(false)
    service.addItem(testItem)
    service.addItem(testItem)
    let items = service.cartItems.getValue()
    expect(items.get(0).quantity).toEqual(2)
  }))

})
