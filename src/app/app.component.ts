import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   gitUserName = 'ddd';


  constructor(private router: Router) {

  }

  gotoListFollowing(user) {
    this.router.navigate(['/listFollowing', user]);
  }
  gotoListRepos(user) {
    this.router.navigate(['/listRepos', user]);
  }

}
export var gitUserName;

