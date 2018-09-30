import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
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
  public displayedColumns: string[] = ['title', 'score', 'comment', 'url'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public dataService: DataService;
  public resultsLength: number = 0;
  public isLoadingResults: boolean = false;
  public isRateLimitReached: boolean = false;
  public url: string = 'r/all';
  public prevurl: string = '';
  @ViewChild(MatSort) public sort: MatSort;

  public constructor(private readonly http: HttpClient , public dialog: MatDialog, public snackBar: MatSnackBar) {}

  public openDialog(optional: string): void {
    const regex: RegExp = new RegExp('^r/[-a-zA-Z0-9]*[a-zA-Z90-9_]{2,23}$');
    const dialogRef = this.dialog.open(SubdialogComponent, {
      width: '450px',
      data: {url: this.url, optional}
    });

  dialogRef.afterClosed().subscribe(result => {
      this.prevurl = this.url;
      this.url = result;
      // check if url was undefined, or empty, if either case keep previous url.
      if ( this.url === undefined || this.url.trim() === '') {
        this.url = this.prevurl;
      }
      // make sure url matches appropriate regex format to ignore malformed urls.
      if ( !regex.test( this.url )) {
        this.openDialog('Wrong Sub-Reddit Format - Use:"r/<subredditname>"');
      }
      // if url is not the same as the previous refresh the DOM
      if ( this.prevurl !== this.url ) {
        this.ngAfterViewInit();
      }
    });
  }

  public reloadData(): void {
    this.ngAfterViewInit();
    this.snackBar.open(`${this.url} is now reloaded`, 'OK', {duration: 3000, });
  }

  public ngAfterViewInit(): void {
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
        return data.data.children;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe(data => this.dataSource.data = data);
    console.log(this.dataSource.data.length);
  }
}


