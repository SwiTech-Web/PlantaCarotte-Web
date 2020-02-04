import { Component, OnInit } from '@angular/core';
import {ProductService} from '../resources/product.service';
import {Product} from '../models/product.model';
import {LikedService} from '../resources/liked.service';
import {AuthenticationService} from '../resources/authentication.service';
import {Liked} from '../models/liked.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService,
              private likedService: LikedService,
              private router: Router,
              public authenticationService: AuthenticationService) { }

  ngOnInit() {
    if (this.authenticationService.isLoggedIn) {
      this.listOfLikes();
    }
  }

  listOfLikes() {
    const id = this.router.url.split('/', 4).pop();
    this.likedService.getLikesByUser(id).subscribe(like => this.listLikedProducts(like));
  }

  listLikedProducts(like: Liked[]) {
    like.filter(id => this.productService.getProductById(id.pid).subscribe(product => {
        // @ts-ignore
        product.id = id.pid;
        this.products.push(product as Product)
      console.log(this.products);
    }));
  }
}
