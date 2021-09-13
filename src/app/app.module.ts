import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitbucketComponent } from './bitbucket/bitbucket.component';
import { GithubComponent } from './github/github.component';
import { GitlabComponent } from './gitlab/gitlab.component';

@NgModule({
  declarations: [
    AppComponent,
    BitbucketComponent,
    GithubComponent,
    GitlabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
