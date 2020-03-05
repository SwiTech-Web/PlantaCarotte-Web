import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Rent} from '../models/rent.model';

@Injectable({
  providedIn: 'root'
})
export class RentedService {

  constructor(private db: AngularFirestore) { }

  getRentByProductId(id: string): Observable<Rent[]> {
    return this.db.collection<Rent>('rent', ref =>
      ref.where('pid', '==', id)).valueChanges({ idField: 'id'});
  }

  postARequest(rent: any) {
    return this.db.collection('rent').add(rent);
  }

  deleteRentRequest(id: string){
    this.db.collection('rent').doc(id).delete().then();
  }
}
