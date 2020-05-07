import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ArtComponent } from '../art/art.component';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}
  view = 'none';
  showSocials() {
    if (this.view === 'block') {
      this.view = 'none';
      return this.view;
    } else {
      this.view = 'block';
      return this.view;
    }
  }
  ngOnInit(): void {}
}
