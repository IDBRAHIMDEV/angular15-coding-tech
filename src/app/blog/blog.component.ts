import { Article } from './../models/article';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articleForm = new FormGroup({
    title: new UntypedFormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern('[0-9a-zA-Z ]*')]),
    content: new UntypedFormControl('', Validators.required),
  })

  articles: Article[] = []

  list: boolean = true

  editable: boolean = false

  showForm: boolean = false

  myArticle: Article = {
    title: "",
    content: ""
  }

  toggleForm() {
    this.showForm = !this.showForm
  }

  changeMode(etat: boolean) {
    this.list = etat
    console.log(this.list)
  }

  saveArticle() {

    console.log(this.articleForm.value)

    if(this.articleForm.invalid) {
      alert("please verify the content on the form !")
      return
    }

    let { title, content } = this.articleForm.value

    this.articleService.persistArticle({title, content}).subscribe((response) => {
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

  log(myTitle: any) {
    console.log(myTitle)
  }

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
      this.articleService.getArticles().subscribe((response) => this.articles = response)
  }

}
