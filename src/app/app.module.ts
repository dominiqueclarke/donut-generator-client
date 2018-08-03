import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { DonutToppingListComponent } from './components/donut-topping-list/donut-topping-list.component';
import { DonutBaseListComponent } from './components/donut-base-list/donut-base-list.component';
import { DonutOrderComponent } from './components/donut-order/donut-order.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

import { DonutService } from './services/donut.service';

@NgModule({
  declarations: [
    AppComponent,
    DonutToppingListComponent,
    DonutBaseListComponent,
    DonutOrderComponent,
    CheckoutComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DonutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
