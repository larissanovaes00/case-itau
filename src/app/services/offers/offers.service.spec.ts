/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { OfertasService } from './offers.service';

describe('Service: Ofertas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OfertasService]
    });
  });

  it('should ...', inject([OfertasService], (service: OfertasService) => {
    expect(service).toBeTruthy();
  }));
});
