import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../resources/product.service';
import {Router} from '@angular/router';
import {UserService} from '../../resources/user.service';
import {StateService} from '../../resources/state.service';
import {Product} from '../../models/product.model';
import {AuthenticationService} from '../../resources/authentication.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/user.model';

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

  constructor(private productService: ProductService,
              private userService: UserService,
              private router: Router,
              private stateService: StateService,
              private modalService: NgbModal,
              public authService: AuthenticationService) { }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
    this.getProduct();
  }

  getProduct() {
    const id = this.router.url.split('/', 4).pop();
    this.productService.getProductById(id).subscribe(product =>  {
      this.product = product;
      this.product.id = id;
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

  show(content) {
    this.modalService.open(content);
  }
}
