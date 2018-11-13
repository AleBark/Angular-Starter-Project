import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public running = true;
  public won: boolean;

  public endGame(won: boolean): void {
    this.running = false;
    this.won = won;
  }
}
