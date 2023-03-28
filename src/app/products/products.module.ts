import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    FavoritesComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductComponent
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
