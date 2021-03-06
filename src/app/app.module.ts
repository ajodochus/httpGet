import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
 
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitHubService } from './github.service';
//import { MatRadioModule } from '@angular/material/radio';

//import { ListFollowingComponent } from './list-following/list-following.component';
//import { ListReposComponent } from './list-repos/list-repos.component';
 
@NgModule({
  declarations: [
    AppComponent,
   // ListFollowingComponent,
    //ListReposComponent
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //MatRadioModule
  ],
  providers: [GitHubService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }