import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentUser } from 'src/services/states/users/users.selectors';
// import { refreshUser } from '../utils/entities/user-utils';
import {
  ProjectListResponse,
  ProjectResponse,
  ProjectStatusEnum,
  UserResponse,
} from 'src/services';
import { selectProjects } from 'src/services/states/projects/projects.selectors';
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
  userProjects$: Observable<ProjectListResponse | undefined> =
    new Observable<ProjectListResponse>();
  constructor(private store: Store) {
    this.currentUser$ = this.store.select(selectCurrentUser);
    this.userProjects$ = this.store.select(selectProjects);
    this.userMainJob = '';
  }

  ngOnInit(): void {
    // TODO: ADD Authentication logic.
    this.userProjects$ = this.store.select(selectProjects);
    this.store.select(selectCurrentUser).subscribe(user => {
      if (user) {
        this.userMainJob = user.main_job ?? '';
      }
    });
  }
  getSeverity(status: ProjectStatusEnum) {
    switch (status) {
      case ProjectStatusEnum.Canceled:
        return 'danger';
      case ProjectStatusEnum.InProgress:
        return 'warn';
      case ProjectStatusEnum.Completed:
        return 'success';
      case ProjectStatusEnum.Proposed:
        return 'info';
    }
  }
}
