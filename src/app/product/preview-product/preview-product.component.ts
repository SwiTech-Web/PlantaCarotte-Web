import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {Liked} from '../../models/liked.model';
import {ProductService} from '../../resources/product.service';
import {LikedService} from '../../resources/liked.service';
import {AuthenticationService} from '../../resources/authentication.service';

@Component({
  selector: 'app-preview-product',
  templateUrl: './preview-product.component.html',
  styleUrls: ['./preview-product.component.css']
})
export class PreviewProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private productService: ProductService,
              private likedService: LikedService,
              public authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
}
