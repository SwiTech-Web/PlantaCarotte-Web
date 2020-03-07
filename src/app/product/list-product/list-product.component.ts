import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../resources/product.service';
import {AuthenticationService} from '../../resources/authentication.service';
import {Product} from '../../models/product.model';
import {StateService} from '../../resources/state.service';
import {NgxUiLoaderService} from "ngx-ui-loader";

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
  pageOfItems:  Array<any>;
  totalProduct = 0;


  constructor(private productService: ProductService,
              public authService: AuthenticationService,
              private stateService: StateService,
              private spinner: NgxUiLoaderService) {

  }

  ngOnInit() {
    this.listAllProducts();
    this.isMobile = this.stateService.getSate();
  }

  onChangePage(pageOfItems:  Array<any>) {
    this.pageOfItems = pageOfItems;
    window.scroll(0,0);
    this.totalProduct += pageOfItems.length;
  }

  listAllProducts() {
    this.spinner.start();
    this.productService.getProducts().subscribe(product => {
      this.products = product;
      this.spinner.stop();
    });
  }

  applyFilter() {
    this.filterProduct = {
      $or: [{type: this.textFilter}, {name: this.textFilter}]
    };
  }
}
