import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CommentsListComponent} from './comments/comments-list/comments-list.component';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    CommentsListComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
