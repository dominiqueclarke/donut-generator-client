
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
  { path: 'order',
    component: OrderPageComponent,
    data: { title: 'Donut Order Form' }
  },
  { path: 'checkout',
    component: CheckoutComponent,
    data: { title: 'Checkout Donut Order' }
  },
  {
    path: '',
    redirectTo: 'order',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
