import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../resources/authentication.service';
import {ProductService} from '../resources/product.service';
import {Product} from '../models/product.model';
import {Router} from '@angular/router';
import {RentedService} from '../resources/rented.service';
import {Rent} from '../models/rent.model';
import {UserService} from '../resources/user.service';
import {User} from '../models/user.model';
import {RentRequest} from '../models/rentRequest.model';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})

export class RentComponent implements OnInit {
  products: Product[] = [];
  rent: Rent;
  data: RentRequest;
  requestData: RentRequest[] = [];

  constructor(public authService: AuthenticationService,
              private productService: ProductService,
              private userService: UserService,
              private router: Router,
              private rentedService: RentedService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.getProductsUser();
    }
  }

  getRentRequest(list: Product[]) {
    list.forEach(p => {
      this.rentedService.getRentByProductId(p.id).subscribe(rent => {
        this.rent = rent.pop();
        if (this.rent !== undefined) {
          this.getRequestData(this.rent);
        }
      });
    });
  }
  getRequestData(rent: Rent) {
    this.userService.getUserById(rent.rid).subscribe(user => {
      this.productService.getProductById(rent.pid).subscribe(product => {
        this.data = {id: rent.id, user, product};
        this.requestData.push(this.data);
      });
    });
  }

  getProductsUser() {
    const id = this.router.url.split('/', 4).pop();
    this.productService.getProductsByUserId(id).subscribe(products => {
      this.products = products;
      this.getRentRequest(this.products);
      if (this.products.length <= 0) {
        this.router.navigate(['product/list']);
      }
    });
  }

  deleteARequest(id: string) {
   this.rentedService.deleteRentRequest(id);
   this.requestData = [];
   this.getRentRequest(this.products);
  }
}
