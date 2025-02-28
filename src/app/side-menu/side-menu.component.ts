import { Component, OnInit } from '@angular/core';
import {
  E_NavigationItem,
  T_Navigation,
  createNavigationList,
} from '../utils/menu-utils/interfaces';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
    standalone: false
})
export class SideMenuComponent implements OnInit {
  private router: Router = new Router();
  public navigationLabels: T_Navigation[] = createNavigationList();
  public tabs: E_NavigationItem[] = [];
  selectedIndex = 0;

  tabNavigate(args: E_NavigationItem): void {
    const url = args.name.toLocaleLowerCase();
    if (!args.disabled) {
      this.router.navigateByUrl(`/${url}`);
    }
  }

  ngOnInit(): void {
    this.navigationLabels.map(item => {
      this.tabs.push({
        name: item.title,
        disabled: item.disabled,
      });
    });
  }
}
