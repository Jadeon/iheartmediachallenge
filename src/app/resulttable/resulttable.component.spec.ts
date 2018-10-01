
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResulttableComponent } from './resulttable.component';
import { MatTableModule } from '@angular/material';

describe('ResulttableComponent', () => {
  let component: ResulttableComponent;
  let fixture: ComponentFixture<ResulttableComponent>;

  component.reloadData();

  expect()

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulttableComponent ]
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
