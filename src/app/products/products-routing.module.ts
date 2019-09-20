import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellService } from '@app/shell/shell.service';
import { extract } from '@app/core';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  ShellService.childRoutes([
    // Module is lazy loaded, see app-routing.module.ts
    { path: 'products', component: ProductsComponent, data: { title: extract('Products') } },
    { path: 'product-details/:id', component: ProductDetailsComponent, data: { title: extract('Product Details') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductsRoutingModule {}
