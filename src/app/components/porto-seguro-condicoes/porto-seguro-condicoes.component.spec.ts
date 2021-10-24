import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortoSeguroCondicoesComponent } from './porto-seguro-condicoes.component';

describe('PortoSeguroCondicoesComponent', () => {
  let component: PortoSeguroCondicoesComponent;
  let fixture: ComponentFixture<PortoSeguroCondicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortoSeguroCondicoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortoSeguroCondicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
