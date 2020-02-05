import { Component, OnInit } from '@angular/core';
import {StateService} from '../resources/state.service';
import {UserService} from '../resources/user.service';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {ProductService} from '../resources/product.service';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isMobile: boolean;
  user: User;
  id = this.router.url.split('/', 4).pop();
  userProducts: Product[] = [];

  constructor(private stateService: StateService,
              private userService: UserService,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
    this.getUserDetails();
    this.getProductByUsers();
  }

  getUserDetails() {
    this.userService.getUserById(this.id).subscribe(user => this.user = user);
  }
  getProductByUsers() {
    this.productService.getProductsByUserId(this.id).subscribe(product => this.userProducts = product);
  }

}
