import { Article } from './../models/article';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: Article[] = []

  list: boolean = true

  editable: boolean = false

  myArticle: Article = {
    title: "",
    content: ""
  }

  changeMode(etat: boolean) {
    this.list = etat
    console.log(this.list)
  }

  saveArticle() {
    this.articleService.persistArticle(this.myArticle).subscribe((response) => {
      this.articles = [response, ...this.articles]
      this.initArticle()
    })
  }

  initArticle() {
    this.myArticle = {
      title: "",
      content: ""
    }
  }

  updateArticle() {

    let { id, title, content } = this.myArticle

    this.articleService.putArticle(id, {title, content}).subscribe(response => {
      this.editable = false
      this.initArticle()
    })
  }

  editArticle(data: Article) {
    this.myArticle = data
    this.editable = true
  }
  

  destroyArticle(id: number | undefined) {

    if(!confirm('Are you to delete this article ? ')) {
      return
    }

    this.articleService.deleteArticle(id).subscribe(() => {
      this.articles = this.articles.filter(article => article.id !== id)
    })
  }

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
      this.articleService.getArticles().subscribe((response) => this.articles = response)
  }

}
