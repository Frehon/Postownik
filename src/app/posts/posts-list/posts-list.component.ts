import {Component, OnInit} from '@angular/core';
import {Post} from '../post';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post [] = [
    new Post('Temat Posta 1', 'Julita B', 'Content 1'),
    new Post('Temat Posta 2', 'Tomek G', 'Content 2')
  ];

  selectedPost: Post;

  constructor() {

  }

  ngOnInit() {
  }

  goToDetails(post: Post) {
    if (this.selectedPost === post) {
      this.selectedPost = null;
    } else {
      this.selectedPost = post;
    }
  }

}
