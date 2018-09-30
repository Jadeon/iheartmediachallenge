import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { SubdialogComponent } from '../subdialog/subdialog.component';

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

  url: string = 'r/all';
  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private http: HttpClient, public dialog: MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(SubdialogComponent, {
      width: '450px',
      data: {url: this.url}
    });

  dialogRef.afterClosed().subscribe(
    result => { 
      this.url = result;
      this.ngAfterViewInit();
    });  
  }
  reloadData(): void{
    this.ngAfterViewInit();
  }

  ngAfterViewInit(){

    this.dataService = new DataService(this.http);
    merge(this.sort.sortChange)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.dataService!.getPosts(this.sort.active, this.url);        
      }),
      map(data => {
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.data.dist;
        console.log(this.resultsLength);
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


