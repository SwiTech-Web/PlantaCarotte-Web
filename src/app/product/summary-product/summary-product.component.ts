import { Component, OnInit } from '@angular/core';
import {StateService} from '../../resources/state.service';

@Component({
  selector: 'app-summary-product',
  templateUrl: './summary-product.component.html',
  styleUrls: ['./summary-product.component.css']
})
export class SummaryProductComponent implements OnInit {
  isMobile: boolean;
  constructor(private stateService: StateService) { }
  explorer = [{
      name: 'Terrain',
      image: '../../../assets/images/bg-home.jpg'
    },
    {
      name: 'Jardins',
      image: '../../../assets/images/bg-home.jpg'
    },
    {
      name: 'Lacs & Etangs',
      image: '../../../assets/images/banner-list-dark.jpg'
    }];

  ngOnInit() {
    this.isMobile =  this.stateService.getSate();
  }
}
