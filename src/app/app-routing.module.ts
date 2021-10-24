import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperCotacaoComponent } from './components/stepper-cotacao/stepper-cotacao.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cotacao', component: StepperCotacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
