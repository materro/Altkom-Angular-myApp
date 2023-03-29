import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnChanges {

  @Input() id = -1;
  product$: Observable<Product> | undefined;
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();

  constructor(private productsService: ProductsService, public authService: AuthService) {}

  // constructor() {
  //   console.log(`Name is ${this.name} in the constructor`);
  // }
  // ngOnInit(): void {
  //   console.log(`Name is ${this.name} in the ngOnInit`);
  // }

  ngOnChanges(): void {
    this.product$ = this.productsService.getProduct(this.id);
  }

  changePrice(product: Product,price: number) {
    this.productsService.updateProduct(product.id, price).subscribe(() => {
      alert(`${product.name} = Price changed`);
    });
  }

    buy() {
      this.bought.emit();
    }

  // get productName(): string {
  //     console.log(`Get ${this.name}`)
  //     return this.name;
  //   }
  }
