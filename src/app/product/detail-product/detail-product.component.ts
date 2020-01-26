import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../resources/product.service';
import {Router} from '@angular/router';
import {UserService} from '../../resources/user.service';
import {StateService} from '../../resources/state.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  isMobile: boolean
  product: any;
  user: any;

  constructor(private productService: ProductService,
              private userService: UserService,
              private router: Router,
              private stateService: StateService) { }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
    this.getProduct();
  }

  getProduct() {
    const url = this.router.url;
    const splitUrl = url.split("/", 4);
    const id = splitUrl.pop();
    this.productService.getProductById(id).subscribe(product =>  {
      this.product = product;
      this.getUserDetails();
    });
  }

  getUserDetails() {
    this.userService.getUserById(this.product.uid).subscribe(user => this.user = user);
  }
}
