import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../resources/product.service";
import {AuthenticationService} from "../../resources/authentication.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  format: string = 'dd/mm/yyyy, hh:mm';
  filterProductType: any = {type: ''};

  constructor(private productService: ProductService,
              public authService: AuthenticationService) {

  }

  ngOnInit() {
    this.listAllProducts();
  }

  listAllProducts() {
    this.productService.getProducts().subscribe(product => this.products = product);
  }
}
