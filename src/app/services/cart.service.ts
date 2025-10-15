import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartItems, Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private selectedProducts = new BehaviorSubject<CartItems[]>([]);
  selectedCartItems$ = this.selectedProducts as Observable<CartItems[]>;
  constructor() { }

    addProducts(product:Product):string {
    const currentCartItems = this.selectedProducts.getValue();
    const index = currentCartItems.findIndex((item)=> item.product.id === product.id );
    let successMsg;
    if(index !== -1) {
      currentCartItems[index].quantity +=1;
      successMsg = "You have this product in your cart. We have increased the quantity by 1";
    } else {
      currentCartItems.push({product, quantity:1})
      successMsg = "Product added to cart";
    }
    this.selectedProducts.next(currentCartItems);
    return successMsg;
  }

  removeProductFromCart(cartItem:CartItems) {
    const currentCartItems = this.selectedProducts.getValue();
    const filterItems =currentCartItems.filter((item)=> item.product.id !== cartItem.product.id);
    this.selectedProducts.next(filterItems);
  }

  getCartCount():Observable<number> {
    return this.selectedCartItems$.pipe(map((items)=> items.length));
  }
  
  getTotal():Observable<number> {
    return this.selectedCartItems$.pipe(
      map(items => items.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
      }, 0)));
  }

  removeAll() {
    this.selectedProducts.next([]);
  }
}
