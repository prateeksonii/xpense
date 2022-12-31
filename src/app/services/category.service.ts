import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  getDocs,
  serverTimestamp,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private store: Firestore, private auth: AuthService) {}

  async create(name: string) {
    const user = await this.auth.getCurrentUser();
    return addDoc(
      collection(this.store, 'categories', user!.uid, 'categories'),
      {
        name,
        timestamp: serverTimestamp(),
      }
    );
  }

  async get() {
    const user = await this.auth.getCurrentUser();
    return getDocs(
      collection(this.store, 'categories', user!.uid, 'categories')
    );
  }
}
