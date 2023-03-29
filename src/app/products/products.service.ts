import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

interface ProductDTO {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'any'
})
export class ProductsService {

  constructor(private http: HttpClient) { }



  private productsUrl = 'https://fakestoreapi.com/products';

  private convertToProduct(product: ProductDTO): Product {
    return {
      id: product.id,
      name: product.title,
      price: product.price
    };
  }

  addProduct(name: string, price: number): Observable<Product> {
    return this.http.post<ProductDTO>(this.productsUrl, { 
      title: name, 
      price: price 
    }).pipe(
      map(product => this.convertToProduct(product))
    );}


  getProducts(): Observable<Product[]> {
    return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
      map(products => products.map(product => {
        return this.convertToProduct(product);
      })));
    }

    getProduct(id: number): Observable<Product> {
      return this.http.get<ProductDTO>(`${this.productsUrl}/${id}`).pipe(
        map(product => this.convertToProduct(product))
      );
    }
}