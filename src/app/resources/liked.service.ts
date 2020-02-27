import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {Liked} from '../models/liked.model';

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

