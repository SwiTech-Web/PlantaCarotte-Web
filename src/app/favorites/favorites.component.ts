import { Component, OnInit } from '@angular/core';
import {ProductService} from "../resources/product.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listAllProducts();
  }

  listAllProducts() {
    this.productService.getProducts().subscribe(product => this.products = product);
  }
}
