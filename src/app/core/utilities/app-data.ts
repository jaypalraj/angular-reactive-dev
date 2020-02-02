import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductData } from 'src/app/data/product-data';
import { ProductCategoryData } from 'src/app/data/product-category-data';
import { SupplierData } from 'src/app/data/supplier-data';

export class AppData implements InMemoryDbService {
    
    createDb(){
        const products = ProductData.products;
        const productCategories = ProductCategoryData.categories;
        const suppliers = SupplierData.suppliers;

        return { products, productCategories, suppliers };
    }

}