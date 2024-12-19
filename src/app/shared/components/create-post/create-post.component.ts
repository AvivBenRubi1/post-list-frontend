import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CreatePostDto } from '../../../dtos/create-post.dto';
import { PostService } from '../../../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CardModule, ButtonModule, FormsModule, CommonModule, InputTextModule, InputTextareaModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  constructor(private postService: PostService){}
  newPost: CreatePostDto = new CreatePostDto();
  @Output() createPost = new EventEmitter<Observable<Post>>(); // EventEmitter to notify parent
  onCancelCreate() {
    this.newPost = new CreatePostDto();
  }
  onCreatePost() {
    this.createPost.emit(this.postService.createPost(this.newPost));
  }
}
