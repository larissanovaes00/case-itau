import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCotacaoComponent } from './resultado-cotacao.component';

describe('ResultadoCotacaoComponent', () => {
  let component: ResultadoCotacaoComponent;
  let fixture: ComponentFixture<ResultadoCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoCotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
