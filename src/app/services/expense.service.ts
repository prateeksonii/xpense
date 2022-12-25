import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private store: Firestore) {}

  addExpense(title: string, amount: number, type: string) {
    return addDoc(collection(this.store, 'expenses'), {
      title,
      amount,
      type,
      timestamp: serverTimestamp(),
    });
  }

  getExpenses() {
    return getDocs(
      query(collection(this.store, 'expenses'), orderBy('timestamp', 'desc'))
    );
  }
}
