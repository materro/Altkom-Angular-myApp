import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  // template: `<h1>{{title}}</h1>`,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  
  title = 'Products';
  today = new Date();
  selectedProduct: Product | undefined;
  products: Product[] = [
    {
      name:'Kurs Angular',
      price: 1000
    },
    {
      name:'Kurs React',
      price: 2000
    },
    {
      name:'Kurs HTML',
      price: 3000
    },
    {
      name:'Kurs HTML2',
      price: 3000
    },
    {
      name:'Kurs HTML3',
      price: 3000
    },
    {
      name:'Kurs HTML4',
      price: 3000
    },
    {
      name:'Kurs HTML5',
      price: 3000
    }


  ]; 

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }


  onBuy() {
    window.alert(`You bought the ${this.selectedProduct?.name} !`);
  }

  trackByProducts(index: number, name: string):string {
    return name;
  }
}
