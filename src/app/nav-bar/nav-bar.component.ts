import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ArtComponent } from '../art/art.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
