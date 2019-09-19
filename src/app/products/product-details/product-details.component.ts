import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@app/core/models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product(null, null, null);
  id: any;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get('id');

      this.getProductById(this.id);
    });
  }

  getProductById(id: any) {
    this.productsService.getProductById(id).subscribe((x: Product) => {
      this.product = x;
      console.log(this.product);
      // this.isLoading = false;
    });
  }
}
