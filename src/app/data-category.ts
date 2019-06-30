import { DataSubcategory } from './data-subcategory';

export interface DataCategory {
  category: string;
  subcategories: Array<DataSubcategory>;
}
