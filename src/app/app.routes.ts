import { Routes } from '@angular/router';
import { ProductComponent } from './features/product/product/product.component';
import { CartDetailsComponent } from './features/cart/cart-details/cart-details.component';

export const routes: Routes = [
    {path:'', redirectTo: 'product', pathMatch: 'full' },
    {path:'product', component: ProductComponent},
    {path:'cart', component: CartDetailsComponent},
    {path: '**', redirectTo: 'product'}
];
