import { Component, OnInit } from '@angular/core';
import {ProductService} from '../resources/product.service';
import {Product} from '../models/product.model';
import {StateService} from '../resources/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMobile: boolean;
  products: Product[] = [];
  constructor(private productService: ProductService,
              private stateService: StateService) { }

  ngOnInit() {
    this.getNewProducts();
    this.isMobile = this.stateService.getSate();
  }

  getNewProducts() {
    this.productService.getLimitedList().subscribe(product => this.products = product);
  }
}
