import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductViewService } from '../product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {
  @Input() id = -1;
  name = "";
  private productSub = new Subject<void>();

  constructor(private productViewService: ProductViewService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }

  private getProduct() {
    this.productViewService.getProduct(this.id).pipe(
      takeUntil(this.productSub)
    ).subscribe(product => {
      if (product) {
        this.name = product.name;
      }
    });
  }
}
