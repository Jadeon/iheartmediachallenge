import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public constructor(public http: HttpClient) { }

  public getPosts(sort: string, sub: string): Observable<RedditAPI> {
    const href: string = 'https://www.reddit.com/';
    const filter: string = '/top/.json?limit=10';
    console.log(`${href}${sub}${filter}`);
    return this.http.get<RedditAPI>(`${href}${sub}${filter}`);
  }
}

export interface RedditAPI {
  data: Data;
}
export interface Data {
  children: Posts[];
  dist: number;
}

export interface Posts {
  title: string;
  score: string;
  num_comments: string;
  permalink: string;
}


