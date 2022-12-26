import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isHome = true;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.isHome = this.router.url === '/dashboard';
  }

  signOut() {
    this.auth
      .signOut()
      .then(() => this.router.navigate(['.']))
      .catch((err) => console.log(err));
  }
}
