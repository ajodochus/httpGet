import { Component, OnInit } from '@angular/core';
import { GitHubService } from './../github.service';
import { repos } from './../repos';
import { gitUserName } from './../app.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-following',
  templateUrl: './list-following.component.html',
  styleUrls: ['./list-following.component.css']
})
export class ListFollowingComponent implements OnInit {
  userName: string = "ajodochus"
  repos: repos[];
  loading: boolean = false;
  errorMessage;

  id: string;
  private sub: any;

  constructor(private githubService: GitHubService ) {
   
  }

  ngOnInit(): void {

    this.get_following();
  }

  public get_following() {
    this.loading = true;
    this.errorMessage = "";

    this.githubService.get_following_from_user('ajodochus')
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received');
          this.repos = response;
        });
  }

}
