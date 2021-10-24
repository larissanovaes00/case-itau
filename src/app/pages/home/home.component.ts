import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  buttonText = 'faça sua cotação';
  h1Text = 'existe coisa melhor do que se sentir seguro em casa?';
  h1TextSecondary = 'encontre o plano residencial ideal pra você';
  @ViewChild('stepper')
  public stepper!: ElementRef;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateCotacaoPage = () => {
    this.router.navigate(['/cotacao']);
  };

  scrollStepper = () => {
    this.stepper.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
}
