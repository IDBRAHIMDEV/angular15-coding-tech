import { ArticleService } from './../services/article.service';
import { Article } from './../models/article';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  myArticle: Article = {
    title: '',
    content: ''
  }
  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
      this.route.params.subscribe((params: any) => this.getOneArticle(params.id))
  }

  getOneArticle(id: number) {
    this.articleService.getArticle(id).subscribe(response => this.myArticle = response)
  }
}
