import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCheckboxComponent } from './components/card-checkbox/card-checkbox.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { HomeComponent } from './pages/home/home.component';
import { StepperCotacaoComponent } from './pages/stepper-cotacao/stepper-cotacao.component';
import { FormTitularSeguroComponent } from './components/form-titular-seguro/form-titular-seguro.component';
import { PortoSeguroCondicoesComponent } from './components/porto-seguro-condicoes/porto-seguro-condicoes.component';
import { ListaCoberturasComponent } from './components/lista-coberturas/lista-coberturas.component';
import { QuestionarioImovelComponent } from './components/questionario-imovel/questionario-imovel.component';

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
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
