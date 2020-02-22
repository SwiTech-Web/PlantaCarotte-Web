import { Component, OnInit } from '@angular/core';
import {ProductService} from '../resources/product.service';
import {Product} from '../models/product.model';
import {StateService} from '../resources/state.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMobile: boolean;
  products: Product[] = [];
  constructor(private productService: ProductService,
              private stateService: StateService,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 2000);
    this.getNewProducts();
    this.isMobile = this.stateService.getSate();
  }

  getNewProducts() {
    this.productService.getLimitedList().subscribe(product => this.products = product);
  }
}
