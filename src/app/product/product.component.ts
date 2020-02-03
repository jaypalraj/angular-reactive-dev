import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { ProductCategoryService } from '../core/services/product-category.service';
import { Subject, BehaviorSubject, combineLatest, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {


  productCategories$ = this.productCategoryService.categories$;


  private categorySelectedSubject = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  constructor(private productService:ProductService
            , private productCategoryService:ProductCategoryService) { }

  
  products$ = combineLatest([
    this.productService.productWithCategory$,
    this.categorySelectedAction$
  ]).pipe(
      map(([products,selectedCategoryId]) => 
        products.filter(product => selectedCategoryId ? product.categoryId === selectedCategoryId : true)  
    ),catchError(err => {
        console.log(err);
        return EMPTY;
    })
  );


  ngOnInit() {

  }

  OnSelectedCategoryChanged(categoryId: string): void{
    this.categorySelectedSubject.next(+categoryId);
  }
}
