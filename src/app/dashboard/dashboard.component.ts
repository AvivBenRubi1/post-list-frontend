import { Component, OnInit } from '@angular/core';
import { PostComponent } from "../shared/components/post/post.component";
import { Post } from '../models/post.model';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common'
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PostService } from '../services/post.service';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from "../shared/components/create-post/create-post.component";
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [PostService],
  imports: [PostComponent, ButtonModule, CardModule, CommonModule, IconFieldModule, InputIconModule, InputTextModule, DropdownModule, FormsModule, CreatePostComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  selectedFilter = "Title";
  search: string = "";
  posts: Array<Post>;
  constructor(private postService: PostService) {

  }
  loadPosts() {
    this.postService.getAllPosts().subscribe(fetchedPosts => { this.posts = fetchedPosts; });
  }
  ngOnInit(): void {
    this.loadPosts();
  }
  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
  async addPost(newPostObservable: Observable<Post>) {
    const newPost = await firstValueFrom(newPostObservable);
    this.posts.push(newPost);
  }
  filterPosts() {
    this.postService.getByFilter(this.search, this.selectedFilter).subscribe(fetchedPosts => { this.posts = fetchedPosts; })
  }

}
