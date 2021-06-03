import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ContentComponent } from './component/content/content.component';
import { InStockComponent } from './component/in-stock/in-stock.component';
import { BasketComponent } from './component/basket/basket.component';
import { OrderCultivationComponent } from './component/order-cultivation/order-cultivation.component';
import { AdminNomenclatureComponent } from './component/admin/admin-nomenclature/admin-nomenclature.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'content', component: ContentComponent},
  {path: 'in-stock', component: InStockComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'order-cultivation', component: OrderCultivationComponent},
  {path: 'nomenclature', component: AdminNomenclatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
