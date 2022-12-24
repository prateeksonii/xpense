import { Component } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Firestore, addDoc, setDoc, doc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IUser } from '../interfaces/IUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private auth: AuthService, private router: Router) {}

  async handleSignIn() {
    try {
      await this.auth.signIn();
      this.router.navigate(['dashboard'], { replaceUrl: true });
    } catch (err) {
      console.log(err);
    }
  }
}
