import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {Liked} from '../models/liked.model';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LikedService {

  constructor(private db: AngularFirestore) { }

  getLikes(): Observable<Liked[]> {
    return this.db.collection<Liked>('liked').valueChanges({ idField: 'id'});
  }

  getLikesByUser(id: string): Observable<Liked[]> {
    return this.db.collection<Liked>('liked', ref =>
      ref.where('uid', '==', id)).valueChanges({ idField: 'id'});
  }

  addALike(like: any) {
    return this.db.collection('liked').add(like);
  }

  deleteLike(id: string){
    this.db.collection('liked').doc(id).delete().then();
  }

}

