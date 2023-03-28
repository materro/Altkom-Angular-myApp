import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { SortPipe } from './sort.pipe';
import { CopyrightDirective } from './copyright.directive';
registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    CopyrightDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pl-PL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
