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
  public answer: String;
  public round = 0;
  public roundQuestion: Questions;

  constructor() {
    this.roundQuestion = this.questions[this.round];
  }

  ngOnInit() {
  }

  public checkAnswer (): void {

    this.round++;
    this.roundQuestion = this.questions[this.round];
  }

  public updateAnswer (answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;

  }

}
