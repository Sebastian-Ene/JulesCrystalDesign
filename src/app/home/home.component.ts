import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  index = 1;
  timerId;
  constructor() {}

  click() {
    this.index < 5 ? this.index++ : (this.index = 1);
    clearInterval(this.timerId);
    this.timer();
  }
  timer() {
    this.timerId = setInterval(() => {
      this.index < 5 ? this.index++ : (this.index = 1);
    }, 3000);
  }
  ngOnInit(): void {
    this.timer();
  }
}
