import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StateService} from "../../resources/state.service";

@Component({
  selector: 'app-types-product',
  templateUrl: './types-product.component.html',
  styleUrls: ['./types-product.component.css']
})
export class TypesProductComponent implements OnInit {
  isMobile: boolean;
  // @ts-ignore
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

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
      name: 'Permaculture',
      image: '../../../assets/images/bg-home.jpg'
    },

    {
      name: 'Lacs & Etangs',
      image: '../../../assets/images/banner-list-dark.jpg'
    },
    {
      name: 'Piscine',
      image: '../../../assets/images/banner-list-dark.jpg'
    }];

  ngOnInit() {
    this.isMobile =  this.stateService.getSate();
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 250), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 250), behavior: 'smooth' });
  }
}

