import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { AppModule } from './app.module';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule( {
    imports: [
      AppModule
    ]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
