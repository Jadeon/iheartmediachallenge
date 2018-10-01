import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatSnackBarModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SubdialogComponent } from './subdialog/subdialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ResulttableComponent } from './resulttable/resulttable.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    SubdialogComponent,
    ResulttableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  entryComponents: [
    SubdialogComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
