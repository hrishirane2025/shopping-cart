import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MatListModule, RouterLink, RouterLinkActive, MatBadgeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cartItemsCount$!:Observable<number>;

  constructor(private cartService: CartService){ }

  ngOnInit(): void {
      this.cartItemsCount$ = this.cartService.getCartCount();
  }

}
