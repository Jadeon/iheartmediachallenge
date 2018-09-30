import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'app-resulttable',
  templateUrl: './resulttable.component.html',
  styleUrls: ['./resulttable.component.css']
})

export class ResulttableComponent implements AfterViewInit {
  displayedColumns = ['title', 'score', 'comment', 'url'];
  dataSource = new MatTableDataSource()
  dataService: DataService;

  resultsLength = 0;  
  isLoadingResults = false;
  isRateLimitReached = false;
  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private http: HttpClient){}

  ngAfterViewInit(){
    this.dataService = new DataService(this.http);

    merge(this.sort.sortChange)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.dataService!.getPosts(this.sort.active);        
      }),
      map(data => {
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.data.dist;
        return data.data.children;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe(data => this.dataSource.data = data);
  
  } 
}


