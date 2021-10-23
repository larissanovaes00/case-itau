import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperCotacaoComponent } from './stepper-cotacao.component';

describe('StepperCotacaoComponent', () => {
  let component: StepperCotacaoComponent;
  let fixture: ComponentFixture<StepperCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperCotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
