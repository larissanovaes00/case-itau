import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { Answers } from 'src/app/models/answers.model';
import { Question } from 'src/app/models/question.model';
import { Questions } from 'src/app/models/questions.model';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-questionario-imovel',
  templateUrl: './questionario-imovel.component.html',
  styleUrls: ['./questionario-imovel.component.scss'],
})
export class QuestionarioImovelComponent implements OnInit {
  questions: Question[] = [];
  answers: Answers[] = [];

  formData: Questions[] = [];

  constructor(
    private questionsService: QuestionsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    return this.questionsService
      .getQuestions()
      .pipe(
        map((res) => {
          this.questions = res;
          this.answers = res.map((e) => e.respostas) as Answers[];
        })
      )
      .subscribe();
  }

  openModal = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ModalComponent, dialogConfig);
  };

  closeModal = () => {
    this.dialog.closeAll();
  };

  change = (e: Questions) => {
    if (
      this.formData.findIndex((el: any, index) => {
        if (el.id_questao === e.id_questao) {
          this.formData.splice(index, 1);
        }
      })
    )
      this.formData.push(e);
    localStorage.setItem('Questionario-imovel', JSON.stringify(this.formData));
  };
}
