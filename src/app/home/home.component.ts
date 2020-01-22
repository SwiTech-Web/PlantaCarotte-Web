import { Component, OnInit } from '@angular/core';
import {ProductService} from "../resources/product.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getNewProducts();
  }

  getNewProducts() {
    this.productService.getLimitedList().subscribe(product => this.products = product);
  }
}
