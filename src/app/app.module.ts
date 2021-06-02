import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './component/content/content.component';
import { InStockComponent } from './component/in-stock/in-stock.component';
import { OrderCultivationComponent } from './component/order-cultivation/order-cultivation.component';
import { MainComponent } from './component/main/main.component';
import { BasketComponent } from './component/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    InStockComponent,
    OrderCultivationComponent,
    MainComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
