import { Component, OnInit } from '@angular/core';
import {
  trigger,
  animate,
  style,
  transition,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('disp_bar', [
      state(
        'hide_bar',
        style({
          transform: 'translate(18em,0em)',
          opacity: '0',
        })
      ),
      state(
        'show_bar',
        style({ transform: 'translate(0em,0em)', opacity: '1' })
      ),
      transition('show_bar <=> hide_bar', [animate('0.30s ease-out')]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  routch() {
    if (this.isOpen === true) {
      this.isOpen = !this.isOpen;
    }
    window.scroll(0, 0);
  }

  ngOnInit(): void {}
}
