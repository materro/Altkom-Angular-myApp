import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [
    { provide: ProductsService, useClass: ProductsService }]
})
export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'Products';
  today = new Date();
  selectedProduct: Product | undefined;
  products: Product[] = [];
  private productSub: Subscription | undefined;

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  constructor(private productService: ProductsService) { }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  onBuy() {
    window.alert(`You bought the ${this.selectedProduct?.name} !`);
  }

  trackByProducts(index: number, name: string): string {
    return name;
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => {
    this.products = products;
  });
}

onAdd(product: Product) {
  this.products.push(product);
}

}
