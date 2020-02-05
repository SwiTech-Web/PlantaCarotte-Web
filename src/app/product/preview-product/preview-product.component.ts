import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-preview-product',
  templateUrl: './preview-product.component.html',
  styleUrls: ['./preview-product.component.css']
})
export class PreviewProductComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }
}
