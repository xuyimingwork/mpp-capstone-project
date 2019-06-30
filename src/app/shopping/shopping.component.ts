import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataItem } from '../data-item';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  items: Array<DataItem>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(categories => {
      this.items = this.dataService.getItems(categories);
    });
  }
}
