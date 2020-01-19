import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../resources/product.service";
import {Product} from "../../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: any[] = [];
  format: string = 'dd/mm/yyyy, hh:mm';

  constructor(private productService:ProductService,
              private route: Router) { }

  ngOnInit() {
    this.listAllProducts();
  }
  listAllProducts() {
    this.productService.getProducts().subscribe(product => {
      this.products = product;
    });
  }
}
