import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioImovelComponent } from './questionario-imovel.component';

describe('QuestionarioImovelComponent', () => {
  let component: QuestionarioImovelComponent;
  let fixture: ComponentFixture<QuestionarioImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionarioImovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
