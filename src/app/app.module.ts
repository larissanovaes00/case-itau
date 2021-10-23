import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { StepperCotacaoComponent } from './pages/stepper-cotacao/stepper-cotacao.component';
import { CardCheckboxComponent } from './components/card-checkbox/card-checkbox.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepperCotacaoComponent,
    NavbarComponent,
    FooterComponent,
    CardCheckboxComponent,
    RadioGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    MatRadioModule,
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
