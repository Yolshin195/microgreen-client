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
import { UploadImageComponent } from './component/upload-image/upload-image.component';
import { PathImgPipe } from './pipe/path-img.pipe';

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
    PathImgPipe
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
