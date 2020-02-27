import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../resources/authentication.service';
import {ProductService} from '../resources/product.service';
import {Product} from '../models/product.model';
import {Router} from "@angular/router";
import {RentedService} from "../resources/rented.service";
import {Rent} from "../models/rent.model";
import {UserService} from "../resources/user.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  products: Product[] = [];
  rents: Rent[] = [];
  result: any;
  user: User;
  product: Product;
  data: {};
  requestData: any[] = [];

  constructor(public authService: AuthenticationService,
              private productService: ProductService,
              private userService: UserService,
              private router: Router,
              private rentedService: RentedService) { }

  ngOnInit() {
    if(this.authService.isLoggedIn) {
      this.getProductsUser();
    }
  }

  getRentRequest(list: Product[]) {
    list.forEach(p => {
      this.rentedService.getRentByProductId(p.id).subscribe(rent => {
        this.result = rent.pop();
        if(this.result != undefined) {
          this.rents.push(this.result);
        }
      });
    });
  }

  getRequestData(rents: Rent[]) {
    rents.forEach(rent => {
      this.userService.getUserById(rent.rid).subscribe(user => this.user = user);
      this.productService.getProductById(rent.pid).subscribe(product => this.product = product);
      this.data = {'user': this.user, 'product': this.product};
      console.log(this.data);
      this.requestData.push(this.data);
    });
  }

  getProductsUser() {
    const id = this.router.url.split('/', 4).pop();
    this.productService.getProductsByUserId(id).subscribe(products => {
      this.products = products;
      this.getRentRequest(this.products);

      console.log(this.rents);
      this.getRequestData(this.rents);
      console.log(this.requestData);

      if(this.products.length <= 0) {
        this.router.navigate(['product/list']);
      }
    });
  }
}
