import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  tabs: Array<{ name: string; content: string; disabled: boolean }> = [];
  nzTabPosition: NzTabPosition = 'left';
  selectedIndex = 27;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  log(args: any[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      this.tabs.push({
        name: `Tab ${i}`,
        disabled: i === 28,
        content: `Content of tab ${i}`
      });
    }
  }
}
