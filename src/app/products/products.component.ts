import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './products.service';
import { Product } from '../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  serverVariable = 'Select product';
  selectedProduct: Product = new Product(null, null, null);

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
    this.getProductByProductId(1);
  }

  getProducts() {
    this.productsService.getProducts().subscribe((x: Product[]) => {
      this.products = x;
      console.log(this.products);
    });
  }

  getProductByProductId(id: number) {
    // const id=1;
    console.log('id: ', id);
    console.log(typeof id);

    this.productsService.getProductById(id).subscribe((product: Product) => {
      this.selectedProduct = product;
    });
  }
}
