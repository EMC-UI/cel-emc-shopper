/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { CartComponent } from './cart.component'
import {CartService} from './cart.service'
import {LocalStorageService} from 'ng2-webstorage'
import {MockLocalStorage, TestCartItem} from './cart.mock'
import * as _ from 'lodash'

describe('CartComponent', () => {
  let component: CartComponent<TestCartItem>
  let fixture: ComponentFixture<CartComponent<TestCartItem>>
  let de: DebugElement
  let cartItem1 = new TestCartItem({id: '1', name: 'one'})
  let cartItem2 = new TestCartItem({id: '2', name: 'two'})
  let cartService: CartService<TestCartItem>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [ CartService, { provide: LocalStorageService, useClass: MockLocalStorage }]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    de = fixture.debugElement
    cartService = de.injector.get(CartService)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should collapse and expand', () => {
    let h3 = de.query(By.css('h3'))
    expect(h3.classes['open']).toEqual(true)
    h3.triggerEventHandler('click', {})
    fixture.detectChanges()
    expect(h3.classes['open']).toEqual(false)
  })

  it('should show a custom title', () => {
    component.cartTitle = 'Hello World'
    fixture.detectChanges()
    let h3 = de.query(By.css('h3'))
    expect(h3.nativeElement.textContent).toContain('Hello World')
  })

  it('should show a count and the correct count label', () => {
    let count = de.query(By.css('h3 span small'))
    expect(count.nativeElement.textContent).toContain('0 items')
  })

  it('should show added cart items', () => {
    let noitems = de.queryAll(By.css('ul.items li'))
    expect(noitems.length).toEqual(0)
    cartService.addItem(cartItem1)
    fixture.detectChanges()
    let items = de.queryAll(By.css('ul.items li'))
    expect(items.length).toEqual(1)
  })

  it('should remove all items', () => {

    cartService.addItem(cartItem1)
    cartService.addItem(cartItem2)
    fixture.detectChanges()
    let items = de.queryAll(By.css('ul.items li'))
    expect(items.length).toEqual(2)

    let removeAll = de.query(By.css('li.ghost small button'))
    removeAll.triggerEventHandler('click', {})
    fixture.detectChanges()

    let noitems = de.queryAll(By.css('ul.items li'))
    expect(noitems.length).toEqual(0)
  })

  it('should remove 1 item', () => {
    cartService.addItem(cartItem1)
    cartService.addItem(cartItem2)
    fixture.detectChanges()

    let items = de.queryAll(By.css('ul.items li'))
    expect(items.length).toEqual(2)

    let removeOne = items[0].query(By.css('button'))
    removeOne.triggerEventHandler('click', {})
    fixture.detectChanges()

    let noitems = de.queryAll(By.css('ul.items li'))
    expect(noitems.length).toEqual(1)
  })

  xit('should support a custom item template', () => {
    // waiting for this pr to get released from angular2 https://github.com/angular/angular/pull/11235

  })

  xit('should support a custom summary template', () => {
    // see above
  })

  it('should support a custom action label', () => {
    component.actionButtonLabel = 'Do It!'
    cartService.addItem(cartItem2)
    fixture.detectChanges()
    let buttons = de.queryAll(By.css('button'))
    expect(_.last(buttons).nativeElement.textContent).toEqual('Do It!')
  })

  it('should fire an event for checkout', (done) => {
    component.checkout.subscribe((items) => {
      expect(items.length).toEqual(2)
      done()
    })
    cartService.addItem(cartItem1)
    cartService.addItem(cartItem2)
    fixture.detectChanges()
    let buttons = de.queryAll(By.css('button'))
    _.last(buttons).triggerEventHandler('click', {})

  })
})

