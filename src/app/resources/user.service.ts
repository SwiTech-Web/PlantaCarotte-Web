import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getUsers(): Observable<User[]> {
    return this.db.collection<User>('users').valueChanges({ idField: 'id' });
  }

  getUserById(id: string) {
    return this.db.collection<User>('users').doc(id).valueChanges();
  }

}

