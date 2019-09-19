import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
  providers: [ProductsService]
})
export class ProductsModule {}
