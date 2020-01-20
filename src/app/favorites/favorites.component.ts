import { Component, OnInit } from '@angular/core';
import {ProductService} from "../resources/product.service";
import {Product} from "../models/product.model";
import {LikedService} from "../resources/liked.service";
import {AuthenticationService} from "../resources/authentication.service";
import {Liked} from "../models/liked.model";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
              private likedService: LikedService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.likedIdsList();
  }

  likedIdsList() {
    this.likedService.getLikeByUser(this.authenticationService.userData.uid).subscribe(ids => {
      this.listLikedProducts(ids);
    });
  }

  listLikedProducts(ids: Liked[]){
    for (const product of ids) {
      this.productService.getProductById(product.pid).subscribe(product => this.products.push(<Product>product))
    }
  }
}
