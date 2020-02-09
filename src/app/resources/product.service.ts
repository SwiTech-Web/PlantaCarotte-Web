import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

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

  getProductById(id: string): Observable<Product> {
    return this.db.doc<Product>('products/'+ id).valueChanges();
  }

  getProductsByType(type: string): Observable<Product[]> {
    return this.db.collection<Product>('products', ref => ref.where('type', '==', type)).valueChanges({ idField: 'id' });
  }

  getLimitedList(): Observable<Product[]> {
    return this.db.collection<Product>('products', ref => ref.limit(3)).valueChanges({ idField: 'id' });
  }

  getProductsByUserId(id: string): Observable<Product[]> {
    return this.db.collection<Product>('products', ref => ref.where('uid', '==', id)).valueChanges({ idField: 'id' });
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

