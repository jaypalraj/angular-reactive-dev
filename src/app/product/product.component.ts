import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { ProductCategoryService } from '../core/services/product-category.service';


@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService
            , private productCategoryService:ProductCategoryService) { }

  products$ = this.productService.products$;
  productCategories$ = this.productCategoryService.categories$;
  productWithCategory$ = this.productService.productWithCategory$;


  ngOnInit() {

  }

}
