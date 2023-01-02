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

  async addExpense(
    title: string,
    amount: number,
    type: string,
    categoryId: string | null
  ) {
    const user = await this.auth.getCurrentUser();
    return addDoc(collection(this.store, 'expenses', user!.uid, 'expenses'), {
      title,
      amount,
      type,
      categoryId,
      timestamp: serverTimestamp(),
    });
  }

  async getExpenses(categories?: string[]) {
    const user = await this.auth.getCurrentUser();

    if (categories && categories.length > 0) {
      return getDocs(
        query(
          collection(this.store, 'expenses', user!.uid, 'expenses'),
          where('categoryId', 'in', categories),
          orderBy('timestamp', 'desc')
        )
      );
    }

    return getDocs(
      query(
        collection(this.store, 'expenses', user!.uid, 'expenses'),
        orderBy('timestamp', 'desc')
      )
    );
  }
}
