import { Component, OnInit } from '@angular/core';
import {
  E_NavigationItem,
  T_Navigation,
  createNavigationList,
} from '../utils/menu-utils/interfaces';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public navigationLabels: T_Navigation[] = createNavigationList();
  public tabs: E_NavigationItem[] = [];
  selectedIndex = 27;

  // TODO: Transform to navigation function
  log(args: any[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    this.navigationLabels.map(item => {
      this.tabs.push({
        name: item.title,
        disabled: false,
        content: `Content of tab ${item.key}`,
      });
    });

    // for (let i = 0; i < 30; i++) {
    //   this.tabs.push({
    //     name: `Tab ${i}`,
    //     disabled: i === 28,
    //     content: `Content of tab ${i}`
    //   });
    // }
  }
}
