import {Component, Input, OnInit} from '@angular/core';
import {StateService} from '../../resources/state.service';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-summary-product',
  templateUrl: './summary-product.component.html',
  styleUrls: ['./summary-product.component.css']
})
export class SummaryProductComponent implements OnInit {
  @Input() product: Product;
  @Input() enableFavorite: boolean;
  constructor() { }

  ngOnInit() {
  }
}
