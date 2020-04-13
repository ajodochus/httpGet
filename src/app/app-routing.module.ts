import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListReposComponent} from './list-repos/list-repos.component';
import {ListFollowingComponent} from './list-following/list-following.component';


const routes: Routes = [
  {path: 'listRepos', component: ListReposComponent},
  {path: 'listFollowing', component: ListFollowingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ListFollowingComponent, ListReposComponent]
