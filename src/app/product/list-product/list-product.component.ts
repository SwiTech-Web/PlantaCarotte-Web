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
  filterProduct: any = {type: '', name: ''};
  textFilter = '';
  check1: boolean;

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

  applyFilter() {
    this.filterProduct = {
      $or: [{type: this.textFilter}, {name: this.textFilter}]
    };
  }

  CheckFilter(value:boolean) {
    this.check1 = value
    if (this.check1 == true) {
      this.filterProduct = {type: 'Permaculture'}
    } else {
      this.filterProduct = {type: ''}
    }
  }
}
