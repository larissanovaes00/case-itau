import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultadoCotacaoComponent } from './pages/resultado-cotacao/resultado-cotacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resultado-cotacao', component: ResultadoCotacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
