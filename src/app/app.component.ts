import { Component } from '@angular/core';

import { GitHubService } from './github.service';
import { repos } from './repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  show_repos: boolean = true;
  show_following: boolean = false;

}