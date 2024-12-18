import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Post } from '../../../models/post.model';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  providers: [PostService],
  imports: [CardModule, ButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  constructor(private postService: PostService) { }

  deletePost() {
    this.postService.deletePost(this.post.id).subscribe();
    this.refreshPosts();
  }
  
  @Input() post: Post;
  @Input() refreshPosts: () => void;
}
