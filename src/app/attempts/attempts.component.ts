import { Heart } from '../shared/hearts.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnChanges {


  public lives: Array<Heart> = [new Heart(true), new Heart(true), new Heart(true)];
  @Input() public attempts: number;

  constructor() {

  }


  ngOnChanges(): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(this.attempts);
    if (this.attempts !== this.lives.length) {
        this.lives[(this.lives.length - this.attempts) - 1].isFull = false;
    }
  }

  //  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  // }

}
