import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { SortPipe } from './sort.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.guard';
registerLocaleData(localePl);


const routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    HttpClientModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pl-PL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
