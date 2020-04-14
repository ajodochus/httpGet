import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GitHubService } from './../github.service';
import { repos } from './../repos';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.css']
})
export class ListReposComponent implements OnInit{

  userName: string;
  repos: repos[];
  loading: boolean = false;
  errorMessage;

  constructor(private githubService: GitHubService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('user');
    this.getRepos();
  }



  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.get_repos_from_user(this.userName)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received');
          this.repos = this.set_date(response);
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false;
        })
  }
  public toggle(show_item: string) {
      
  }

  public set_date(response) {
    const RE_DATE = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
    for (var i = 0; i < response.length; i++) {
      const matchObj = RE_DATE.exec(response[i].created_at);
      const year = matchObj[1]; // 1999
      const month = matchObj[2]; // 12
      const day = matchObj[3]; // 31
      response[i].created_at = day + "." + month + "." + year;
    }
    return response;
  }

}
