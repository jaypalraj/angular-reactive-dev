
import { IProductCategory } from '../product/interfaces/iproduct-category';

export class ProductCategoryData {

  static categories: IProductCategory[] = [
    {
      id: 1,
      name: 'Garden'
    },
    {
      id: 3,
      name: 'Toolbox'
    },
    {
      id: 5,
      name: 'Gaming'
    }
  ];
}
