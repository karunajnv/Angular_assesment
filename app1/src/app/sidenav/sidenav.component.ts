import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { appRoutes, menuIcon } from '../route';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  @Output() loaded = new EventEmitter<any>();
  @ViewChild('accordion', { static: true }) Accordion: MatAccordion;
  categories = ['Overview', 'Stats', 'Projects', 'Chat', 'Calendar'];
  constructor() { }
  getRouteFor(category: string, subcategory?: string) {
    this.loaded.emit({ value: true });
    if (category === 'Overview') {
      return '/' + appRoutes[category];
    }
    if (category === 'Stats') {
      return '/' + appRoutes[category];
    }
    if (category === 'Projects') {
      return '/' + appRoutes[category];
    }
    if (category === 'Chat') {
      return '/' + appRoutes[category];
    }
    if (category === 'Calendar') {
      return '/' + appRoutes[category];
    }

    return '/' + appRoutes[subcategory];

  }
  getIcon(category) {
    return menuIcon[category];
  }
  setting() {

  }
  logout() { }
}
