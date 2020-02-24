import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  title = 'My standard Material Header';

  items = [
    { name: 'Item 1', link: '' },
    { name: 'Item 2', link: '' },
    { name: 'Item 3', link: '' },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.toggle.emit();
  }

}
