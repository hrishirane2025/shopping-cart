import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CartItems } from '../../../models/products.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationBoxComponent } from '../../../core/confirmation-box/confirmation-box.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-card',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {

  @Input() item!:CartItems;
  constructor(private cartService: CartService, private dialog: MatDialog){}

  removeProduct(item:CartItems) {
    const dialogRef = this.dialog.open(ConfirmationBoxComponent, {
        width: '500px',
        data: { message: `Are you sure you want to remove <strong>${item.product.name}</strong> from cart?` }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.cartService.removeProductFromCart(item);
        }
      });
  }


}
