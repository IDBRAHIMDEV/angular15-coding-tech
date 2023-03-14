import { Article } from './../models/article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseUrl: string = "http://localhost:3000/articles" 

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<Article[]>(this.baseUrl)
  }

  persistArticle(data: Article) {
    return this.http.post(this.baseUrl, data)
  }

  getArticle(id: number) {
    return this.http.get<Article>(`${this.baseUrl}/${id}`)
  }

  putArticle(id: number, data: Article) {
    return this.http.put(`${this.baseUrl}/${id}`, data)
  }

  deleteArticle(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
