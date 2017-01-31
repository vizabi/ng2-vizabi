import { TestBed, inject } from '@angular/core/testing';
import { VizabiService } from './vizabi-service';

describe('Service: VizabiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VizabiService]
    });
  });

  it('should ...', inject([VizabiService], (service: VizabiService) => {
    expect(true).toBeTruthy();
  }));
});
