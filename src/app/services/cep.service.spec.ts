import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { CepService } from './cep.service';

describe('Service: CepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CepService],
    });
  });

  it('should ...', inject([CepService], (service: CepService) => {
    expect(service).toBeTruthy();
  }));
});
