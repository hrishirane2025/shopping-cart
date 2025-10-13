import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { ProductsService } from '../../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {
  total$!: Observable<number>;

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.total$ = this.productService.getTotal();
  }

}
