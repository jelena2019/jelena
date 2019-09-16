import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
  providers: [ProductsService]
})
export class ProductsModule {}
