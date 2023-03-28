import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  // template: `<h1>{{title}}</h1>`,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  
  title = 'Products';
  selectedProduct = '';
  products = ['Kurs Angular','Kurs React','Kurs C++'];

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.name);
    }
  }


  onBuy(name: string) {
    window.alert(`You bought the ${name} !`);
  }

  trackByProducts(index: number, name: string):string {
    return name;
  }
}
