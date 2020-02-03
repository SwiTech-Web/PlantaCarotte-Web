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
    check8: false,
    check9: false,
  };
  checked = {
    checked1: '1',
    checked2: '2',
    checked3: '3',
    checked4: '4',
    checked5: '5',
    checked6: '6',
    checked7: '7',
    checked8: '8',
    checked9: '9',
  };

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

  validate(checked: string) {
    if (checked === this.checked.checked2) {
      this.validations.check1 = false;
      this.validations.check2 = true;
    } else if (checked === this.checked.checked3) {
      this.validations.check2 = false;
      this.validations.check3 = true;
    } else if (checked === this.checked.checked4) {
      this.validations.check3 = false;
      this.validations.check4 = true;
    } else if (checked === this.checked.checked5) {
      this.validations.check4 = false;
      this.validations.check5 = true;
    } else if (checked === this.checked.checked6) {
      this.validations.check5 = false;
      this.validations.check6 = true;
    } else if (checked === this.checked.checked7) {
      this.validations.check6 = false;
      this.validations.check7 = true;
    } else if (checked === this.checked.checked8) {
      this.validations.check7 = false;
      this.validations.check8 = true;
    } else if (checked === this.checked.checked9) {
      this.validations.check8 = false;
      this.validations.check9 = true;
    }
  }

  back(checked: string) {
    if (checked === this.checked.checked2) {
      this.validations.check1 = true;
      this.validations.check2 = false;
    } else if (checked === this.checked.checked3) {
      this.validations.check2 = true;
      this.validations.check3 = false;
    } else if (checked === this.checked.checked4) {
      this.validations.check3 = true;
      this.validations.check4 = false;
    } else if (checked === this.checked.checked5) {
      this.validations.check4 = true;
      this.validations.check5 = false;
    } else if (checked === this.checked.checked6) {
      this.validations.check5 = true;
      this.validations.check6 = false;
    } else if (checked === this.checked.checked7) {
      this.validations.check6 = true;
      this.validations.check7 = false;
    } else if (checked === this.checked.checked8) {
      this.validations.check7 = true;
      this.validations.check8 = false;
    } else if (checked === this.checked.checked8) {
      this.validations.check8 = true;
      this.validations.check9 = false;
    }
  }
}
