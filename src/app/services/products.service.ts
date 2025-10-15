import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItems, Product } from '../models/products.model';
import { BehaviorSubject, map, Observable, reduce } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private mockData = "assets/mock-data/mock-products.json";
  private mockDataURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.mockDataURL);
  }

}
