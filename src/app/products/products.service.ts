import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {
    return [
      {
        name: 'Kurs Angular',
        price: 1000
      },
      {
        name: 'Kurs React',
        price: 2000
      },
      {
        name: 'Kurs HTML',
        price: 3000
      },
      {
        name: 'Kurs HTML2',
        price: 3000
      },
      {
        name: 'Kurs HTML3',
        price: 3000
      },
      {
        name: 'Kurs HTML4',
        price: 3000
      },
      {
        name: 'Kurs HTML5',
        price: 3000
      }


    ];
  }
}