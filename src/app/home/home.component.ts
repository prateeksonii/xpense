import { Component } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  googleProvider = new GoogleAuthProvider();

  constructor(private auth: Auth, private router: Router) {}

  async handleSignIn() {
    try {
      await signInWithPopup(this.auth, this.googleProvider);
      this.router.navigate(['dashboard'], { replaceUrl: true });
    } catch (err) {
      console.log(err);
    }
  }
}
