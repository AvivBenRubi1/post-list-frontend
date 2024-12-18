import { Component, OnInit } from '@angular/core';
import { PostComponent } from "../shared/components/post/post.component";
import { Post } from '../models/post.model';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common'
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [PostService],
  imports: [PostComponent, ButtonModule, CardModule, CommonModule, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(private postService: PostService) {

  }
  refreshPosts() {
    this.postService.getAllPosts().subscribe(fetchedPosts => {this.posts = fetchedPosts;});
  }
  ngOnInit(): void {
    this.refreshPosts();
  }
  deletePost(id: number) {
    this.postService.deletePost(id).subscribe();
    this.refreshPosts();
  }
  posts: Array<Post>;

}
