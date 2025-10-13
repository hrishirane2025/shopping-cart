import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CartCardComponent } from '../cart-card/cart-card.component';
import { ProductsService } from '../../../services/products.service';
import { CartItems } from '../../../models/products.model';
import { Observable } from 'rxjs';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationBoxComponent } from '../../../core/confirmation-box/confirmation-box.component';

@Component({
  selector: 'app-cart-details',
  imports: [CommonModule, MatButtonModule, MatCardModule, CartCardComponent, CartSummaryComponent, RouterLink],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent implements OnInit{

  cartItems:CartItems[]=[];
  cartCount$!:Observable<number>;
  
  constructor(private productService: ProductsService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.productService.selectedCartItems$.subscribe((result)=>{
      this.cartItems = result;
    })

    this.cartCount$ = this.productService.getCartCount();
  }

  emptyCart() {

    const dialogRef = this.dialog.open(ConfirmationBoxComponent, {
        width: '500px',
        data: { message: 'Are you sure you want to empty your cart?' }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.productService.removeAll();
        }
      });
  }

}
