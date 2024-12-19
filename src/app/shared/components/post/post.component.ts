import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Post } from '../../../models/post.model';
import { PostService } from '../../../services/post.service';
import { UpdatePostDto } from '../../../dtos/update-post.dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  providers: [PostService],
  imports: [CardModule, ButtonModule, FormsModule, CommonModule, InputTextModule, InputTextareaModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  constructor(private postService: PostService) { }
  isEditing = false;
  updatePostDto: UpdatePostDto = new UpdatePostDto();
  @Output() deletePost = new EventEmitter<number>(); // EventEmitter to notify parent

  onDelete(): void {
    this.postService.deletePost(this.post.id).subscribe();
    this.deletePost.emit(this.post.id); // Emit the post ID to the parent
  }

  onEdit() {
    this.updatePostDto = {...this.post};
    this.isEditing = true;
  }

  onSave() {
    this.postService.updatePost(this.post.id, this.updatePostDto).subscribe();
    this.post = {...this.post, ...this.updatePostDto}
    this.isEditing = false;
  }

  onCancel() {
    this.updatePostDto = {...this.post};
    this.isEditing = false;
  }
  
  async onLike() {
    this.post.likes = await firstValueFrom(this.postService.likePost(this.post.id));
  }

  @Input() post: Post;
}
