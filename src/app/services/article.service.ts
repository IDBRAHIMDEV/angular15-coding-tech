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
    return this.http.post<Article>(this.baseUrl, data)
  }

  getArticle(id: number) {
    return this.http.get<Article>(`${this.baseUrl}/${id}`)
  }

  putArticle(id: number | undefined, data: Article) {
    return this.http.put<Article>(`${this.baseUrl}/${id}`, data)
  }

  deleteArticle(id: number | undefined) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
