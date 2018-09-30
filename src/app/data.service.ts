import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getPosts(sort: string, url: string): Observable<RedditAPI> {
    const href= 'https://www.reddit.com/'
    const filter= '/top/.json?limit=10'
    console.log(`${href}${url}${filter}`);
    return this.http.get<RedditAPI>(`${href}${url}${filter}`)  
    //r/gaming/top/.json?limit=10
  }
}

export interface RedditAPI{
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


