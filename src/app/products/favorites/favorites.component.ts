import { Component, Host, OnInit, Optional } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [
    { provide: ProductsService, useClass: FavoritesService }
  ]
})
export class FavoritesComponent implements OnInit {

  products: Product[] = [];

  constructor(@Host() @Optional() private productService: ProductsService ) { }

  ngOnInit(): void {
    this.productService.getProducts();
  }

}

