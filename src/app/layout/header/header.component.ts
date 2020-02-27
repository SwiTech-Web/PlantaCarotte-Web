import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/resources/authentication.service';
import {StateService} from '../../resources/state.service';
import {LikedService} from '../../resources/liked.service';
import {Liked} from "../../models/liked.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductService} from '../../resources/product.service';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean;
  enableFavorite: boolean;
  enableRent: boolean;
  userLikes: Liked[] = [];
  products: Product[] = [];

  constructor(public authService: AuthenticationService,
              private stateService: StateService,
              private likedService: LikedService,
              private modalService: NgbModal,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
    this.enableFavorite = false;
    this.enableRent = false;
  }

  listOfLikes() {
    this.userLikes = [];
    this.likedService.getLikesByUser(this.authService.userData.uid).subscribe(like => {
      this.userLikes = like;
      if (this.userLikes.length > 0) {
        this.enableFavorite = true;
      } else {
        this.enableFavorite = false;
      }
    });
    this.getProductsUser();
  }

  getProductsUser() {
    this.productService.getProductsByUserId(this.authService.userData.uid).subscribe(products => {
      if (products.length > 0) {
        this.enableRent = true;
      } else {
        this.enableRent = false;
      }
    });
  }

  showModal(content) {
    if(this.isMobile) {
      this.closeMenu();
    }
    this.modalService.open(content);
  }

  openMenu() {
    if(this.authService.isLoggedIn) {
      this.listOfLikes();
    }
    document.getElementById('sideMenu').style.width = '85%';
  }

  closeMenu() {
    document.getElementById('sideMenu').style.width = '0';
  }
}
