import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ContentComponent } from './component/content/content.component';
import { InStockComponent } from './component/in-stock/in-stock.component';
import { BasketComponent } from './component/basket/basket.component';
import { OrderCultivationComponent } from './component/order-cultivation/order-cultivation.component';
import { AdminNomenclatureComponent } from './component/admin/admin-nomenclature/admin-nomenclature.component';
import { AdminNomenclatureInStockComponent } from './component/admin/admin-nomenclature-in-stock/admin-nomenclature-in-stock.component';
import { AdminPriceComponent } from './component/admin/admin-price/admin-price.component';
import { AdminNewsComponent } from './component/admin/admin-news/admin-news.component';
import { AdminOrderComponent } from './component/admin/admin-order/admin-order.component';
import { OrderComponent } from './component/order/order.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'content', component: ContentComponent},
  {path: 'in-stock', component: InStockComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'order-cultivation', component: OrderCultivationComponent},
  {path: 'order', component: OrderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin/nomenclature', component: AdminNomenclatureComponent},
  {path: 'admin/nomenclatureInStock', component: AdminNomenclatureInStockComponent},
  {path: 'admin/price', component: AdminPriceComponent},
  {path: 'admin/news', component: AdminNewsComponent},
  {path: 'admin/order', component: AdminOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
