import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { DataItem } from '../data-item';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, combineLatest } from 'rxjs';

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
    this.dataService.getData().subscribe(categories => {
      combineLatest(this.route.queryParamMap, this.route.paramMap).subscribe((args) => {
        const [query, params] = args;
        const queryName = query.get('name');
        if (query.get('name')) {
          this.item = this.dataService.getItems(categories).find(item => item.name === queryName);
        } else {
          this.item = this.dataService.getItem(categories, params.get('category'), params.get('subcategory'), params.get('name'));
        }
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
