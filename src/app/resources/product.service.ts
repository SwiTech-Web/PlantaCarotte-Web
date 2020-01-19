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
    return this.db.collection<Product>('products').valueChanges({ idField: 'id' });
  }

  getProductById(id: string) {
    return this.db.collection<Product>('products').doc(id).valueChanges();
  }

  getProductsByType(type: string){
    // return this.db.collection<Product>('products').().valueChanges();
  }

  createProduct(type, city, dpts, name, description, size, price) {
    const product: Product = {
      type: type,
      city: city,
      dpts: dpts,
      name: name,
      description: description,
      size: size,
      price: price,
      rate : 0,
      rent: false,
      like: false,
      date: new Date(),
      uid: this.authService.userData.uid
    }

    return this.db.collection('products').add(product)
    .then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  deleteProduct(id: string){
    this.db.collection('products').doc(id).delete()
      .then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
    }).catch((error) => {
      window.alert(error.message)
    });
  }
}

