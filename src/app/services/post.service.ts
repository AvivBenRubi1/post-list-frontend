import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Filters } from '../enums/filters.enum';

@Injectable()
export class PostService {
  private baseUrl = 'https://localhost:7037/posts';
  
  constructor(private http: HttpClient) {}

  // Create a new post
  createPost(createPostDto: CreatePostDto): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}`, createPostDto);
  }

  // Delete a post by ID
  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.baseUrl}/${id}`);
  }

  // Read a post by ID
  readPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  // Get all posts
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}`);
  }

  // Update a post by ID
  updatePost(id: number, updatePostDto: Post): Observable<Post> {
    return this.http.patch<Post>(`${this.baseUrl}/${id}`, updatePostDto);
  }

  // Get posts by search and filter
  getByFilter(search: string, filter: string): Observable<Post[]> {
    let params = new HttpParams();
    if (search) {
      params = params.set('search', search);
    }
    params = params.set('filter', filter);
    return this.http.get<Post[]>(`${this.baseUrl}/get-by`, { params });
  }
}