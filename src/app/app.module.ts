import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCheckboxComponent } from './components/card-checkbox/card-checkbox.component';
import { CardCotacaoComponent } from './components/card-cotacao/card-cotacao.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormTitularSeguroComponent } from './components/form-titular-seguro/form-titular-seguro.component';
import { ListaCoberturasComponent } from './components/lista-coberturas/lista-coberturas.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortoSeguroCondicoesComponent } from './components/porto-seguro-condicoes/porto-seguro-condicoes.component';
import { QuestionarioImovelComponent } from './components/questionario-imovel/questionario-imovel.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { StepperCotacaoComponent } from './components/stepper-cotacao/stepper-cotacao.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultadoCotacaoComponent } from './pages/resultado-cotacao/resultado-cotacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepperCotacaoComponent,
    NavbarComponent,
    FooterComponent,
    CardCheckboxComponent,
    RadioGroupComponent,
    FormTitularSeguroComponent,
    PortoSeguroCondicoesComponent,
    ListaCoberturasComponent,
    QuestionarioImovelComponent,
    ResultadoCotacaoComponent,
    CardCotacaoComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
