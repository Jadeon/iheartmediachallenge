import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-subdialog',
  templateUrl: './subdialog.component.html',
  styleUrls: ['./subdialog.component.css']
})
export class SubdialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SubdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
}
