import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '@app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = 'products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // console.log(this.apiUrl);
    return this.http.get(this.apiUrl).pipe(
      map((res: Product[]) => {
        return res as Product[];
      })
    );
  }

  getProductById(id: number): Observable<Product> {
    // console.log(this.apiUrl);
    return this.http.get(this.apiUrl + '/' + id).pipe(
      map((res: Product) => {
        return res as Product;
      })
    );
  }
}
