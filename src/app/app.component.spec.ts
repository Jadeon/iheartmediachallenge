import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { FormsModule } from '@angular/forms';
import {ComponentFixture} from '@angular/core/testing/src/component_fixture';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        // AppComponent
      ],
      imports: [
        AppModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Simple Reddit Browser'`, async(() => {
    expect(app.title).toEqual('Simple Reddit Browser');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled: any = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Simple Reddit Browser');
  }));
});
