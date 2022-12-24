import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'xpense';

  constructor(private auth: Auth) {}

  ngOnInit() {
    this.auth.onAuthStateChanged((user) => console.log(user));
  }
}
