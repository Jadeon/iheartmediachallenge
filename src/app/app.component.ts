import { Component } from '@angular/core';
import { ResulttableComponent } from './resulttable/resulttable.component';
import { SubdialogComponent} from './subdialog/subdialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Simple Reddit Browser';
  public constructor() {}
}