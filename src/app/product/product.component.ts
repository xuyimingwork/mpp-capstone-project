import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { DataItem } from '../data-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  qty = 0;
  item: DataItem;

  constructor(private location: Location, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getData().subscribe(categories => {
        this.item = this.dataService.getItem(categories,
          params.get('category'), params.get('subcategory'), params.get('name'));
      });
    });
  }

  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  add() {
    console.log(this.qty);
  }

}
