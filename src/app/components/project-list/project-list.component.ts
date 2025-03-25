import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProjectResponse, UserResponse } from 'src/services';
import { selectProjects } from 'src/services/states/projects/projects.selectors';
import { selectUserByName } from 'src/services/states/users/users.selectors';

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  // userProjects$: Observable<ProjectResponse[] | undefined>;
  constructor(private store: Store) {
    // this.userProjects$ = new Observable<ProjectResponse[]>();
    // this.userProjects$ = this.store.select(selectProjects);
  }
}
