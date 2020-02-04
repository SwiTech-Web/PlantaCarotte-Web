import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {Liked} from "../models/liked.model";

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

  getLikedProducts(list: string[]) {
    // return this.db.collection<Product>('products')(function (querySnapshot) {
    //   querySnapshot.forEach(function (doc) {
    //     console.log(doc.id, ' => ', doc.data());
    //   });
    // });
  }

  getProductById(id: string) {
    return this.db.collection('products').doc(id).valueChanges();
  }
  getProductsByType(type: string): Observable<Product[]> {
    return this.db.collection<Product>('products', ref => ref.where('type', '==', type)).valueChanges({ idField: 'id' });
  }

  getLimitedList(): Observable<Product[]> {
    return this.db.collection<Product>('products', ref => ref.limit(3)).valueChanges({ idField: 'id' });
  }

  createProduct(type, city, dpts, name, description, size, price) {
    const product: any = {
      type,
      city,
      dpts,
      name,
      description,
      size,
      price,
      rate : 0,
      rent: false,
      like: false,
      date: new Date(),
      uid: this.authService.userData.uid
    };

    return this.db.collection('products').add(product)
    .then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  deleteProduct(id: string) {
    this.db.collection('products').doc(id).delete()
      .then(() => {
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
    }).catch((error) => {
      window.alert(error.message);
    });
  }
}

