import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCoberturasComponent } from './lista-coberturas.component';

describe('ListaCoberturasComponent', () => {
  let component: ListaCoberturasComponent;
  let fixture: ComponentFixture<ListaCoberturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCoberturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
