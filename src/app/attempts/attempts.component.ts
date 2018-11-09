import { Heart } from '../shared/hearts.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  public lives: Array<Heart> = [new Heart(true), new Heart(true), new Heart(true)];
  @Input() public attempts: number;

  constructor() {

  }

  ngOnInit() {
    console.log(this.attempts);
  }

}
