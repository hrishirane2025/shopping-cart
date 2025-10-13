import { Component, Input } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/products.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!:Product;
  
  constructor(private productService: ProductsService, private snackBar:MatSnackBar){}

  addProduct(product:Product) {
    const isProductAdded = this.productService.addProducts(product);
    if(isProductAdded) {
      this.snackBar.open(isProductAdded, '',{duration: 2000})
    }
  }

}
