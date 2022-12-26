import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private store: Firestore, private auth: AuthService) {}

  async addExpense(title: string, amount: number, type: string) {
    const user = await this.auth.getCurrentUser();
    return addDoc(collection(this.store, 'expenses', user!.uid, 'expenses'), {
      title,
      amount,
      type,
      timestamp: serverTimestamp(),
    });
  }

  async getExpenses() {
    const user = await this.auth.getCurrentUser();
    console.log(user);

    const docs = await getDocs(
      query(
        collection(this.store, 'expenses', user!.uid, 'expenses'),
        orderBy('timestamp', 'desc')
      )
    );
    console.log(docs);

    return docs;
  }
}
