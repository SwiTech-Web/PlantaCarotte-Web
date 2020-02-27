import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../resources/product.service';
import {Router} from '@angular/router';
import {UserService} from '../../resources/user.service';
import {StateService} from '../../resources/state.service';
import {Product} from '../../models/product.model';
import {AuthenticationService} from '../../resources/authentication.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/user.model';
import {RentedService} from "../../resources/rented.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  isMobile: boolean
  product: Product;
  user: User;
  similarProducts: Product[] = [];
  id = this.router.url.split('/', 4).pop();

  constructor(private productService: ProductService,
              private userService: UserService,
              private router: Router,
              private stateService: StateService,
              private modalService: NgbModal,
              private rentedService: RentedService,
              public authService: AuthenticationService) { }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
    this.getProduct();
  }

  getProduct() {
    this.productService.getProductById(this.id).subscribe(product =>  {
      this.product = product;
      this.product.id = this.id;
      this.getUserDetails();
      this.getSimilarProduct( this.product.type);
    });
  }

  getUserDetails() {
    this.userService.getUserById(this.product.uid).subscribe(user => this.user = user);
  }

  getSimilarProduct(type: string) {
    this.productService.getProductsByType(type).subscribe(products => this.similarProducts = products)
  }

  rentProduct() {
    let rent:any = {
      rid: this.authService.userData.uid,
      pid: this.product.id
    }
    this.rentedService.postARequest(rent).then(() => {
      window.alert('Une demande de location a été envoyer. VOIR PAGE MES DEMANDE DE LOCATION');
    }).catch((error) => {
      window.alert(error);
    });
  }

  show(content) {
    this.modalService.open(content);
  }
}
