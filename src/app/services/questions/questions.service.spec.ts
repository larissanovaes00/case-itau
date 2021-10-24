/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionsService } from './questions.service';

describe('Service: Questions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuestionsService]
    });
  });

  it('should ...', inject([QuestionsService], (service: QuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
