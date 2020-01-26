import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../resources/product.service';
import {AuthenticationService} from '../../resources/authentication.service';
import {Product} from '../../models/product.model';
import {StateService} from '../../resources/state.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  isMobile: boolean;
  products: Product[] = [];
  format = 'dd/mm/yyyy, hh:mm';
  filterProductType: any = {type: ''};

  constructor(private productService: ProductService,
              public authService: AuthenticationService,
              private stateService: StateService) {

  }

  ngOnInit() {
    this.listAllProducts();
    this.isMobile = this.stateService.getSate();
  }

  listAllProducts() {
    this.productService.getProducts().subscribe(product => this.products = product);
  }
}
