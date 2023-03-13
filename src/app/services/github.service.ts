import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUsers() {
      return this.http.get("https://api.github.com/users")
  }

  searchUser(query: string) {
    return this.http.get(`https://api.github.com/search/users?q=${query}`)
  }
}
