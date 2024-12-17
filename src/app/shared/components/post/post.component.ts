import { Component, Input} from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post: Post;
}
