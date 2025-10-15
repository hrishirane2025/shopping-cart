import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartItems, Product } from '../../../models/products.model';
import { ProductsService } from '../../../services/products.service';
import { map, Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ProductCardComponent, MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  allProducts:Product[] = [];
  cartItems$!:Observable<number>;
  cartDataItems:CartItems[] = [];
  
  constructor(private productService: ProductsService, private cartService: CartService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((result)=>{
      this.allProducts = result;
    })

    // cart
    this.cartItems$ = this.cartService.selectedCartItems$.pipe(map((ele)=> ele.length));
    this.cartService.selectedCartItems$.subscribe((result)=>{
      this.cartDataItems = result;
    })
  }
}
