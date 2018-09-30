import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ComponentFixture} from '@angular/core/testing/src/component_fixture';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular-template'`, async(() => {
    expect(app.title).toEqual('angular-template');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled: any = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-template!');
  }));
});
