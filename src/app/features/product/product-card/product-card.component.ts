import { Component, Input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!:Product;
  
  constructor(private cartService: CartService, private snackBar:MatSnackBar){}

  addProduct(product:Product) {
    const isProductAdded = this.cartService.addProducts(product);
    if(isProductAdded) {
      this.snackBar.open(isProductAdded, '',{duration: 2000})
    }
  }

}
