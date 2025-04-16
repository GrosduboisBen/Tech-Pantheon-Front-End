import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
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
import { PricingState } from 'src/services/states/pricings/pricings.reducers';
import { selectPricing } from 'src/services/states/pricings/pricings.selectors';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { previewFile } from 'src/services/states/cdn-services/cdn-services.actions';
import {
  selectPreviewBlob,
  selectPreviewError,
  selectPreviewLoading,
} from 'src/services/states/cdn-services/cdn-services.selectors';
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

  userPricing$: Observable<PricingState | undefined> =
    new Observable<PricingState>();

  previewUrl$!: Observable<SafeUrl | null>;
  previewLoading$!: Observable<boolean>;
  previewError$!: Observable<any>;

  constructor(
    private store: Store,
    private sanitizer: DomSanitizer
  ) {
    this.currentUser$ = this.store.select(selectCurrentUser);
    this.userProjects$ = this.store.select(selectProjects);
    this.userFeedbacks$ = this.store.select(selectFeedbacks);
    this.userPricing$ = this.store.select(selectPricing);

    this.userMainJob = '';
  }

  ngOnInit(): void {
    // TODO: ADD Authentication logic.
    this.userProjects$ = this.store.select(selectProjects);
    this.store.select(selectCurrentUser).subscribe(user => {
      if (user) {
        this.userMainJob = user.main_job ?? '';

        const id = 'testuser';
        const path = '/CV Benoit.pdf'; // tu peux rendre ça dynamique si besoin plus tard

        this.store.dispatch(previewFile({ id, path }));

        this.previewLoading$ = this.store.select(
          selectPreviewLoading(id, path)
        );
        this.previewError$ = this.store.select(selectPreviewError(id, path));
        this.previewUrl$ = this.store.select(selectPreviewBlob(id, path)).pipe(
          map(blob => {
            if (!blob) return null;
            const url = URL.createObjectURL(blob as Blob);
            return this.sanitizer.bypassSecurityTrustUrl(url);
          })
        );
      }
    });
    this.userPricing$.subscribe(pricings => {
      console.log(pricings);
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
