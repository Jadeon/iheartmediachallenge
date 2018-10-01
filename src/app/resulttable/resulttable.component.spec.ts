
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResulttableComponent } from './resulttable.component';
import { MatTableModule, MatSnackBar } from '@angular/material';
import { reload } from './resulttable.component';

describe ( 'reload', () => {
  it ( 'should open the snackbar', () => {
    reload();
    spyOn(this.snackBar, 'open');
  })
});

describe('ResulttableComponent', () => {
  let component: ResulttableComponent;
  let fixture: ComponentFixture<ResulttableComponent>;
  let snackBar: MatSnackBar;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulttableComponent ],
      imports: [MatSnackBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResulttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should compile', () => {
    expect(component).toBeTruthy();
  });


});
