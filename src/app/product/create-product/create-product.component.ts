import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../resources/product.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  validations = {
    check1: true,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
  };
  checked = {
    checked1: '1',
    checked2: '2',
    checked3: '3',
    checked4: '4',
    checked5: '5',
    checked6: '6',
    checked7: '7',
  };

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

  validate(checked : string){
    if(checked === this.checked.checked2) {
      this.validations.check1 = false;
      this.validations.check2 = true;
    }
    else if(checked === this.checked.checked3) {
      this.validations.check2 = false;
      this.validations.check3 = true;
    }
    else if(checked === this.checked.checked4) {
      this.validations.check3 = false;
      this.validations.check4 = true;
    }
    else if(checked === this.checked.checked5) {
      this.validations.check4 = false;
      this.validations.check5 = true;
    }
    else if(checked === this.checked.checked6) {
      this.validations.check5 = false;
      this.validations.check6 = true;
    }
    else if(checked === this.checked.checked7) {
      this.validations.check6 = false;
      this.validations.check7 = true;
    }
  }
}
