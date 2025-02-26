import { Store } from '@ngrx/store';
import { loadUsers } from 'src/services/states/users/users.actions';
import { selectUserByName } from 'src/services/states/users/users.selectors';

export function refreshUser(store: Store, userName: string) {
  const currentUser = store.select(selectUserByName(userName));
  if (!currentUser) {
    store.dispatch(loadUsers({}));
  }
}
