import { Component, OnInit } from '@angular/core';
import { Questions } from '../shared/questions.model';
import { QUESTIONS } from './questions-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public questions: Array<Questions> = QUESTIONS;
  public infos: Array<String> = ['Progress', 'Lives', 'Question:'];
  public answer: String = '';
  public round = 0;
  public barPercentage = 0;
  public attempts = 3;
  public roundQuestion: Questions;

  constructor() {
    this.roundUpdate();
  }

  ngOnInit() {
  }

  public roundUpdate(): void {
    this.roundQuestion = this.questions[this.round];
  }

  public checkAnswer(): void {

    if (this.roundQuestion.answer === this.answer) {

      this.round++;
      this.barPercentage = this.barPercentage + (100 / this.questions.length);
      this.roundUpdate();
      this.answer = '';

    } else {
      this.attempts--;

      if (this.attempts === 0) {
        alert('Game over :(');
      }

    }

  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;

  }

}
