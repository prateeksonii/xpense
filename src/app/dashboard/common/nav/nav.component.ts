import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isHome = true;
  constructor(private router: Router) {}

  ngOnInit() {
    this.isHome = this.router.url === '/dashboard';
  }
}
