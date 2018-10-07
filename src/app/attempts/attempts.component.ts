import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  public emptyHeart = '/assets/empty_heart.png';
  public fullHeart = '/assets/full_heart.png';

  constructor() { }

  ngOnInit() {
  }

}
