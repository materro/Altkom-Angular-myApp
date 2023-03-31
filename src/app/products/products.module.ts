import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDeleteComponent } from './product-delete/product-delete.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    FavoritesComponent,
    ProductViewComponent,
    ProductCreateComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductComponent,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
