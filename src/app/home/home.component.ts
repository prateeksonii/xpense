import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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
