import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subdialog',
  templateUrl: './subdialog.component.html',
  styleUrls: ['./subdialog.component.css']
})
export class SubdialogComponent {

  public constructor(
    public dialogRef: MatDialogRef<SubdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    public onNoClick(): void {
      this.dialogRef.close();
    }
}
