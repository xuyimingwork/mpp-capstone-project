import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataCategory } from '../data-category';
import { DataItem } from '../data-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<DataItem>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(categories => {
      const items = [];
      categories.forEach(category => {
        category.subcategories.forEach(subcategory => {
          subcategory.items.forEach(item => {
            items.push(item);
          });
        });
      });
      this.items = items;
    });
  }

  getItemRouterLink(item: DataItem) {
    return `/product/${item.category}/${item.subcategory}/${item.name}`;
  }
}
