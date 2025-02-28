import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectHeaderSubtitle,
  selectHeaderTitle,
} from 'src/services/states/headers/headers.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  public title$: Observable<string>;
  public subTitle$: Observable<string>;
  private router: Router = new Router();

  constructor(private store: Store) {
    this.title$ = this.store.select(selectHeaderTitle);
    this.subTitle$ = this.store.select(selectHeaderSubtitle);
  }
  /**
   * getTitle
   */
  public fetchTitle() {
    this.title$ = this.store.select(selectHeaderTitle);
  }

  public getSubtitle() {
    this.subTitle$ = this.store.select(selectHeaderSubtitle);
    return this.subTitle$ ? this.subTitle$ : '';
  }
  ngOnInit() {
    this.title$ = this.store.select(selectHeaderTitle);
    this.subTitle$ = this.store.select(selectHeaderSubtitle);
  }
  navigateHome() {
    this.router.navigateByUrl('/home');
  }
}
