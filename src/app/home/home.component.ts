import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentUser } from 'src/services/states/users/users.selectors';
// import { refreshUser } from '../utils/entities/user-utils';
import {
  ProjectListResponse,
  ProjectStatusEnum,
  UserResponse,
} from 'src/services';
import { selectProjects } from 'src/services/states/projects/projects.selectors';
import { FeedbackState } from 'src/services/states/feedbacks/feedbacks.reducers';
import { selectFeedbacks } from 'src/services/states/feedbacks/feedbacks.selectors';
import { getRatingSeverity } from '../utils/feedbacks/feedbacks-utils';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  /**
   * Logged User
   */
  currentUser$: Observable<UserResponse | undefined> =
    new Observable<UserResponse>();
  /**
   * Main User Job
   */
  userMainJob: string;
  /**
   * Observable user's projects.
   */
  userProjects$: Observable<ProjectListResponse | undefined> =
    new Observable<ProjectListResponse>();
  /**
   * Observable user's feedbacks.
   */
  userFeedbacks$: Observable<FeedbackState | undefined> =
    new Observable<FeedbackState>();

  constructor(private store: Store) {
    this.currentUser$ = this.store.select(selectCurrentUser);
    this.userProjects$ = this.store.select(selectProjects);
    this.userFeedbacks$ = this.store.select(selectFeedbacks);
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
    this.userFeedbacks$.subscribe(f => {
      console.log(f);
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
  getRating(rating: number) {
    return getRatingSeverity(rating);
  }
}
