import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserByName } from 'src/services/states/users/users.selectors';
import { refreshUser } from '../utils/entities/user-utils';
import { UserResponse } from 'src/services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  currentUser$: Observable<UserResponse | undefined> =
    new Observable<UserResponse>();
  userMainJob: string;
  constructor(private store: Store) {
    this.userMainJob = '';
  }

  ngOnInit(): void {
    refreshUser(this.store, 'Ben');
    this.currentUser$ = this.store.select(selectUserByName('Ben'));
    this.store.select(selectUserByName('Ben')).subscribe(user => {
      if (user) {
        this.userMainJob = user.main_job ?? '';
      }
    });
    // this.loading$ = this.store.select(selectUserLoading);
  }
}
