import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { Observable } from 'rxjs';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {
  total$!: Observable<number>;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.total$ = this.cartService.getTotal();
  }

}
