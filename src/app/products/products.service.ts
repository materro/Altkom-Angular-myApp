import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

interface ProductDTO {
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'any'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private productsUrl = 'https://fakestoreapi.com/products';


  getProducts(): Observable<Product[]> {
    return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
      map(products => products.map(product => {
        return {
          name: product.title,
          price: product.price
        }}))
        );
      }
 
}