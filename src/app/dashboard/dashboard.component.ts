import { Component } from '@angular/core';
import { PostComponent } from "../shared/components/post/post.component";
import { Post } from '../models/post.model';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { CommonModule } from '@angular/common'
import {IconFieldModule} from 'primeng/iconfield'
import {InputIconModule}from 'primeng/inputicon';
import {InputTextModule} from 'primeng/inputtext';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PostComponent, ButtonModule, CardModule, CommonModule, IconFieldModule, InputIconModule, InputTextModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  testPost: Post = {
    author: "aviv",
    content: "my first post dfgdf g gdfgdfdg gdfgd dfgdf gdfgdfgd fg df gdfg dfgd fgd dfgdf gdg d gdg dzg dfg srfdg fhg dsf ghdf hdgfh dfgh dgf hdgf",
    title: "my title",
    likes: 8
  }
  posts = [this.testPost, this.testPost]

}
