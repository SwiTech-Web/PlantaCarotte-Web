import { Component, OnInit } from '@angular/core';
import {ProductService} from '../resources/product.service';
import {Product} from '../models/product.model';
import {LikedService} from '../resources/liked.service';
import {AuthenticationService} from '../resources/authentication.service';
import {Liked} from '../models/liked.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
              private likedService: LikedService,
              public authenticationService: AuthenticationService) { }

  ngOnInit() {
    if(this.authenticationService.isLoggedIn){
      this.listOfLikes();
    }
  }

  listOfLikes() {
    this.likedService.getLikesByUser(this.authenticationService.userData.uid).subscribe(like => {
      this.listLikedProducts(like);
    });
  }

  listLikedProducts(ids: Liked[]) {
    for (const product of ids) {
      this.productService.getProductById(product.pid).subscribe(products => this.products.push(products as Product));
    }
  }
}
