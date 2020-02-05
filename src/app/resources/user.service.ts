import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getUsers(): Observable<User[]> {
    return this.db.collection<User>('users').valueChanges({ idField: 'id' });
  }

  getUserById(id: string): Observable<User> {
    return this.db.doc<User>('users/' + id).valueChanges();
  }

}

