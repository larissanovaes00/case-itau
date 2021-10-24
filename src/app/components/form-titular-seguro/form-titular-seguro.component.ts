import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from './../../services/cep.service';

@Component({
  selector: 'app-form-titular-seguro',
  templateUrl: './form-titular-seguro.component.html',
  styleUrls: ['./form-titular-seguro.component.scss'],
})
export class FormTitularSeguroComponent implements OnInit {
  @ViewChild('cepInput')
  public cepInput!: ElementRef;
  formularioTitular: FormGroup | any;
  dadosEndereco: any;

  constructor(
    private cepService: CepService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formularioTitular = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.pattern(/[A-Za-z]/)]],
      cpf: [null, [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
      cep: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      numero: [null, [Validators.required]],
      complemento: [null],
      bairro: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      estado: [null, [Validators.required]],
    });

    this.formularioTitular.get('cep').valueChanges.subscribe((cep: any) => {
      if (cep.length === 8) {
        this.getCep(cep);
      }
    });

    this.formularioTitular
      .get('endereco')
      .valueChanges.subscribe((cep: any) => {
        if (cep.length === 8) {
          this.getCep(cep);
        }
      });
  }

  onSubmit() {
    console.log(this.formularioTitular);
  }

  getCep(cep: string) {
    this.cepService.consultaCEP(cep).subscribe((e) => {
      this.dadosEndereco = e;
      this.updateField();
    });
  }

  updateField() {
    this.formularioTitular.patchValue({
      endereco: this.dadosEndereco.logradouro,
      bairro: this.dadosEndereco.bairro,
      cidade: this.dadosEndereco.localidade,
      estado: this.dadosEndereco.uf,
    });
  }
}
