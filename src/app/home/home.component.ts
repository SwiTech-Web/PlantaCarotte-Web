import { Component, OnInit } from '@angular/core';
import {ProductService} from '../resources/product.service';
import {Product} from '../models/product.model';
import {StateService} from '../resources/state.service';
import {LocationService} from "../resources/location.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMobile: boolean;
  products: Product[] = [];
  currentPosition: string;
  constructor(private productService: ProductService,
              private stateService: StateService,
              private  locationService: LocationService) { }

  ngOnInit() {
    this.isMobile = this.stateService.getSate();
    this.getNewProducts();

    this.locationService.getPosition().then(pos=> {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
      this.currentPosition = 'longitude: ' + pos.lng + ' /latitude: '+pos.lat;
    });
  }

  getNewProducts() {
    this.productService.getLimitedList().subscribe(product => this.products = product);
  }
}
