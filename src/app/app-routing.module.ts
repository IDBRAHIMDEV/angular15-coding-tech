import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { GithubComponent } from './github/github.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: "", component: HomeComponent  },
  { path: "courses", component: CoursesComponent  },
  { path: "github", component: GithubComponent  },
  { path: "blog", component: BlogComponent  },
  { path: "blog/post/:id", component: PostComponent  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
