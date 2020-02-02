import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/product/interfaces/iproduct';

import { tap, catchError, map } from 'rxjs/operators'
import { CommonHelper } from '../utilities/common-helper';
import { ProductCategoryService } from './product-category.service';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products';

  constructor(private http:HttpClient
            , private productCategoryService:ProductCategoryService
            , private commonHelper:CommonHelper) { }

  products$ = this.http.get<IProduct[]>(this.productUrl)
    .pipe(catchError(this.commonHelper.handleServiceError));

  
  productWithCategory$ = combineLatest([
    this.products$,
    this.productCategoryService.categories$
  ]).pipe(
    map(([products,categories]) =>
      products.map(product => ({
        ...product,
        price: product.price * 1.5,
        category: categories.find(c => product.categoryId === c.id).name,
        searchKey: [product.productName]
      }) as IProduct )
    )
  );

    
}
