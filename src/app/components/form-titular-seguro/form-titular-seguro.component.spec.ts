import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTitularSeguroComponent } from './form-titular-seguro.component';

describe('FormTitularSeguroComponent', () => {
  let component: FormTitularSeguroComponent;
  let fixture: ComponentFixture<FormTitularSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTitularSeguroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTitularSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
