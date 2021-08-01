import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './component/content/content.component';
import { InStockComponent } from './component/in-stock/in-stock.component';
import { OrderCultivationComponent } from './component/order-cultivation/order-cultivation.component';
import { MainComponent } from './component/main/main.component';
import { BasketComponent } from './component/basket/basket.component';
import { AdminNomenclatureComponent } from './component/admin/admin-nomenclature/admin-nomenclature.component';
import { UploadImageComponent } from './component/form-control/upload-image/upload-image.component';
import { PathImgPipe } from './pipe/path-img.pipe';
import { AdminNomenclatureInStockComponent } from './component/admin/admin-nomenclature-in-stock/admin-nomenclature-in-stock.component';
import { CountComponent } from './component/form-control/count/count.component';
import { SelectNomenclatureComponent } from './component/form-control/select-nomenclature/select-nomenclature.component';
import { SelectPriceComponent } from './component/form-control/select-price/select-price.component';
import { AdminPriceComponent } from './component/admin/admin-price/admin-price.component';
import { BadgeBasketComponent } from './component/basket/badge-basket/badge-basket.component';
import { AdminNewsComponent } from './component/admin/admin-news/admin-news.component';
import { OrderComponent } from './component/order/order.component';
import { AdminOrderComponent } from './component/admin/admin-order/admin-order.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductControlComponent } from './component/form-control/product-control/product-control.component';
import { MainMarketingComponent } from './component/main/main-marketing/main-marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    InStockComponent,
    OrderCultivationComponent,
    MainComponent,
    BasketComponent,
    AdminNomenclatureComponent,
    UploadImageComponent,
    PathImgPipe,
    AdminNomenclatureInStockComponent,
    CountComponent,
    SelectNomenclatureComponent,
    SelectPriceComponent,
    AdminPriceComponent,
    BadgeBasketComponent,
    AdminNewsComponent,
    OrderComponent,
    AdminOrderComponent,
    LoginComponent,
    RegisterComponent,
    ProductControlComponent,
    MainMarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
