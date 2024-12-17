import { Component } from '@angular/core';
import { PostComponent } from "../shared/components/post/post.component";
import { Post } from '../models/post.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  testPost: Post = {
    author: "aviv",
    content: "my first post",
    title: "my title"
  }
}
