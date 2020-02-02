import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonHelper } from '../utilities/common-helper';
import { IProductCategory } from 'src/app/product/interfaces/iproduct-category';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private categoryUrl = "api/productCategories";

  constructor(private http:HttpClient, private commonHelper:CommonHelper) { }

  categories$ = this.http.get<IProductCategory[]>(this.categoryUrl)
    .pipe(catchError(this.commonHelper.handleServiceError));

  
}
