import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore,
    public router: Router,
    public ngZone: NgZone,
    public authService: AuthenticationService) { }

  getProducts(): Observable<Product[]> {
    return this.db.collection<Product>('products').valueChanges();
  }

  createProduct(type, description, size) {
    const product: Product = {
      type: type,
      description: description,
      size: size,
      rent: false,
      date: new Date(),
      uid: this.authService.userData.uid
    }

    return this.db.collection('products').add(product)
    .then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
    }).catch((error) => {
      window.alert(error.message)
    });
  }
}
