import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserByName } from 'src/services/states/users/users.selectors';
import { refreshUser } from '../utils/entities/user-utils';
import {
  ProjectListResponse,
  ProjectResponse,
  UserResponse,
} from 'src/services';
import {
  selectProjects,
} from 'src/services/states/projects/projects.selectors';
import { loadUserProjects } from 'src/services/states/projects/projects.actions';
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
  userProjects$: Observable<ProjectResponse[] | undefined> = new Observable<ProjectResponse[]>();
  constructor(private store: Store) {
    this.currentUser$ = this.store.select(selectUserByName('Ben'));
    this.userProjects$ = this.store.select(selectProjects);
    this.userMainJob = '';
  }

  ngOnInit(): void {
    refreshUser(this.store, 'Ben');
    this.store.select(selectUserByName('Ben')).subscribe(user => {
      if (user) {
        this.userMainJob = user.main_job ?? '';
      }
    });
  }
}
