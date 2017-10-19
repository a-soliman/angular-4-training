import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
    
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value};
    input.value = '';
    
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.unshift(post)
        console.log(response.json())
      }, error => {
        alert('Something went wrong!');
        console.log(error);
      })
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('Something went wrong!');
        console.log(error);
      })
  }
  
  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, error => {
        alert('Post was not found!');
        console.log(error);
      })
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        }, 
        error => {
          alert('An unexpected error occurred.');
          console.log(error)
      })
  }
}
