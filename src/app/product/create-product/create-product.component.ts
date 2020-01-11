import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../resources/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {

  }
}
