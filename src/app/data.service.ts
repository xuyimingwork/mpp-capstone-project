import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataCategory } from './data-category';
import { Observable } from 'rxjs';

const URL = 'https://webmppcapstone.blob.core.windows.net/data/itemsdata.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Observable<Array<DataCategory>>;
  constructor(private http: HttpClient) { }

  getData() {
    if (!this.data) {
      this.data = this.http.get<Array<DataCategory>>(URL);
    }
    return this.data;
  }

  getItem(categories: Array<DataCategory>, category: string, subcategory: string, name: string) {
    const target = categories.find(item => item.category.toLowerCase() === category.toLowerCase());
    if (!target) { return null; }

    const subtarget = target.subcategories.find(item => item.name.toLowerCase() === subcategory.toLowerCase());
    if (!subtarget) { return null; }

    return subtarget.items.find(item => item.name.toLowerCase()
      === name.toLowerCase());
  }

  getItems(categories: Array<DataCategory>) {
    const items = [];
    categories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        subcategory.items.forEach(item => {
          items.push(item);
        });
      });
    });
    return items;
  }
}
