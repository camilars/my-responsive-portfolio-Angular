import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isOpenMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.isOpenMenu ? this.isOpenMenu = false : this.isOpenMenu = true;
  }

}
