import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AppData } from './core/utilities/app-data';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
