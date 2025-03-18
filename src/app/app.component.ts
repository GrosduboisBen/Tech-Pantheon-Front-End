import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUserById } from 'src/services/states/users/users.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(
      //TODO: Trigger on auth when implemented ( no straight ids )
      loadUserById({ userId: '99aa0321-07d1-49ec-bad3-3fb633cd2729' })
    );
  }
}
