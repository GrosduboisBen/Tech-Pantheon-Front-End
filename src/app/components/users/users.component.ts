import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers } from 'src/services/states/users/users.actions';
import {
  selectAllUsers,
  selectUserLoading,
} from 'src/services/states/users/users.selectors';
import { UserResponse } from 'src/services';
import { UserState } from 'src/services/states/users/users.reducers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<UserResponse[]> = new Observable<UserResponse[]>();
  loading$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers({}));
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectUserLoading);
  }

  /**
   * name
   */
  public addUser() {
    
  }
}
