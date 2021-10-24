import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCotacaoComponent } from './card-cotacao.component';

describe('CardCotacaoComponent', () => {
  let component: CardCotacaoComponent;
  let fixture: ComponentFixture<CardCotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
