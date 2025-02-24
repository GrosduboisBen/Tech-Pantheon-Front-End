import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectHeaderSubtitle,
  selectHeaderTitle,
} from 'src/services/states/headers/headers.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public title$: Observable<string>;
  public subTitle$: Observable<string>;
  constructor(private store: Store) {
    this.title$ = this.store.select(selectHeaderTitle);
    this.subTitle$ = this.store.select(selectHeaderSubtitle);
    this.title$.subscribe(title => console.log('🎯 Titre actuel :', title));
    this.subTitle$.subscribe(subTitle =>
      console.log('🎯 Sous-titre actuel :', subTitle)
    );
    this.store.subscribe(state => console.log('🗂️ Store global:', state));
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
}
