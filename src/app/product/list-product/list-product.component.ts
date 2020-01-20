import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../resources/product.service";
import {Product} from "../../models/product.model";
import {Router} from "@angular/router";
import {LikedService} from "../../resources/liked.service";
import {AuthenticationService} from "../../resources/authentication.service";
import {Liked} from "../../models/liked.model";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: any[] = [];
  likes: Liked[] = [];
  format: string = 'dd/mm/yyyy, hh:mm';

  constructor(private productService: ProductService,
              private likedService: LikedService,
              public authService: AuthenticationService) { }

  ngOnInit() {
    this.listAllProducts();
    this.listOfLikes();
  }

  listAllProducts() {
    this.productService.getProducts().subscribe(product => this.products = product);
  }

  listOfLikes() {
    this.likedService.getLikes().subscribe(like => {
      this.likes = like;
    });
  }
  putALike(uid, pid) {
    this.likedService.addALike(uid, pid).then();
  }

  isLiked(productId: string) {
    if(this.authService.isLoggedIn === true) {
      for(let like of this.likes) {
        if(like.pid == productId && like.uid === this.authService.userData.uid) {
          return true;
        }
      }
    }
    return false;
  }
}
