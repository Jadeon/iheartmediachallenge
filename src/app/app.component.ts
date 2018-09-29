import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SubdialogComponent } from './subdialog/subdialog.component';

export interface DialogData {
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Simple Reddit Browser';

  url: string;

  constructor(public dialog: MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(SubdialogComponent, {
      width: '450px',
      data: {url: this.url}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.url = result;
    });
  }
}
