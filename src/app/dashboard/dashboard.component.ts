import { Component } from '@angular/core';
import { PostComponent } from "../shared/components/post/post.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
