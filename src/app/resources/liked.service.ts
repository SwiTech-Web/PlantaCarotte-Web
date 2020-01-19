import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LikedService {

  constructor(private db: AngularFirestore) { }

  getLikeByUser(id: string) {
    // return this.db.collection<User>('liked').doc(id).valueChanges();
  }

}

