
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResulttableComponent } from './resulttable.component';
import {MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {AppModule} from '../app.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResulttableComponent', () => {
  let component: ResulttableComponent;
  let fixture: ComponentFixture<ResulttableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        // ResulttableComponent
      ],
      imports: [
        AppModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: MatSnackBar,
          useValue: {
            open: jasmine.createSpy()
          }
        },
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResulttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  describe('openDialog function', () => {
    it('should be defined', () => {
      expect(component.openDialog).toBeDefined();
    });
  });

  describe('reloadData function', () => {
    it('should be defined', () => {
      expect(component.reloadData).toBeDefined();
    });

    describe('when called', () => {
      it('should call the ngOnInit() function', () => {
        spyOn(component, 'ngOnInit');

        component.reloadData();

        expect(component.ngOnInit).toHaveBeenCalled();
      });
    });
  });
});
