/**
 * Created by Tomasz Gogolewski on 28.05.2017.
 */
export class Post {

  topic: string;
  author: string;
  content: string;
  comments: Comment [];

  constructor(topic: string, author: string, content: string) {
    this.topic = topic;
    this.author = author;
    this.content = content;
    this.comments = [];
  }

}
