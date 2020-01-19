import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.component.html',
  styleUrls: ['./rate-product.component.css']
})
export class RateProductComponent implements OnInit {
  @Input() rate: number;

  constructor() { }

  ngOnInit() {
  }

}
