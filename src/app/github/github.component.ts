import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  users: any[] = [];

  search: string = ''

  ngOnInit() {
    this.getAllUser()
  }

  getAllUser() {
    this.githubService.getUsers().subscribe((response: any) => {
      this.users = response
    })
  }

  destroyUser(data: any) {
    console.log('je suis le papa', data)

    this.users = this.users.filter(user => user.id !== data.user.id)
  }

  searchUser() {
    this.githubService.searchUser(this.search).subscribe((response: any) => {
      this.users = response.items
    })
  }
}
