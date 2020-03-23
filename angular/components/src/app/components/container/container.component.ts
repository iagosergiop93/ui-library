import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.opened = !this.opened;
  }

}
