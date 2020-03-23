import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-responsive',
  templateUrl: './header-responsive.component.html',
  styleUrls: ['./header-responsive.component.scss']
})
export class HeaderResponsiveComponent implements OnInit {

  title = 'My standard Material Header';
  toggle = false;

  items = [
    { name: 'Item 1', link: '' },
    { name: 'Item 2', link: '' },
    { name: 'Item 3', link: '' },
  ];

  toggleSidebar() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
