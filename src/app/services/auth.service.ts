import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, Firestore } from '@angular/fire/firestore';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { setDoc } from '@firebase/firestore';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  googleProvider = new GoogleAuthProvider();

  constructor(private auth: Auth, private store: Firestore) {}

  async signIn() {
    const { user } = await signInWithPopup(this.auth, this.googleProvider);

    return setDoc(doc(this.store, 'users', user.uid), {
      email: user.email!,
      name: user.displayName || 'Anonymous',
    } as IUser);
  }
}
