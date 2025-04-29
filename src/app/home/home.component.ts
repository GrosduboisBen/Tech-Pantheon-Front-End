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
import { filter, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  currentUser$: Observable<UserResponse | undefined>;
  userMainJob = '';

  userProjects$: Observable<ProjectListResponse | undefined>;
  userFeedbacks$: Observable<FeedbackState | undefined>;
  userPricing$: Observable<PricingState | undefined>;

  previewUrl$!: Observable<SafeUrl | null>;
  previewMime$!: Observable<string | null>;
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
  }

  ngOnInit(): void {
    this.store.select(selectCurrentUser).subscribe(user => {
      if (user) {
        this.userMainJob = user.main_job ?? '';

        const id = 'testuser';
        const path = '/CV Benoit.pdf'; // ← à rendre dynamique plus tard

        this.store.dispatch(previewFile({ id, path }));

        this.previewLoading$ = this.store.select(
          selectPreviewLoading(id, path)
        );
        this.previewError$ = this.store.select(selectPreviewError(id, path));

        const blob$ = this.store
          .select(selectPreviewBlob(id, path))
          .pipe(shareReplay(1));
        this.previewMime$ = blob$.pipe(map(blob => blob?.type ?? null));

        this.previewUrl$ = blob$.pipe(
          map(blob => {
            if (!blob) return null;
            const url = URL.createObjectURL(blob);
            if (blob.type === 'application/pdf') {
              return this.sanitizer.bypassSecurityTrustResourceUrl(url);
            }
            return this.sanitizer.bypassSecurityTrustUrl(url);
          })
        );
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
  getRating(rating: number) {
    return getRatingSeverity(rating);
  }
}
