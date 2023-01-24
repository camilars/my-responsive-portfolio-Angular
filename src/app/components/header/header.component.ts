import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpenMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.isOpenMenu ? this.isOpenMenu = false : this.isOpenMenu = true;
  }

  closeMenu() {
    this.isOpenMenu = false;
  }
}
