import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
  // encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnChanges, OnInit {

  @Input() id = -1;
  product$: Observable<Product> | undefined;
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();
  price: number | undefined;
  productDeleted = false;

  constructor(
    private productsService: ProductsService, 
    public authService: AuthService,
    private route: ActivatedRoute) {}

   

  // constructor() {
  //   console.log(`Name is ${this.name} in the constructor`);
  // }
  
  ngOnInit(): void {
 const id = this.route.snapshot.params['id'];
 this.product$ = this.productsService.getProduct(id);
// this.route.queryParamMap.subscribe(params => {
//   console.log(params.get('sortOrder'));
//   });
}


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

    deleteProduct(productId: number): void {
      this.productsService.deleteProduct(productId).subscribe({
        error: (e) => alert(`Product ${productId} cannot be deleted: ${e}`),
        complete: () => {
          this.productDeleted = true;
          console.info(`Product ${productId} successfully deleted`)
        },
      });
    }

  // get productName(): string {
  //     console.log(`Get ${this.name}`)
  //     return this.name;
  //   }
  }
