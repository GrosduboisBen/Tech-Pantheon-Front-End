import { Store } from '@ngrx/store';
import { loadUserById } from 'src/services/states/users/users.actions';
import { selectCurrentUser } from 'src/services/states/users/users.selectors';

/**
 *
 * @param store
 * @param userName
 */
export function refreshUser(store: Store, userId: string) {
  // store.select(selectCurrentUser).subscribe(resp => {
  //   if (!resp.active) {
  //     console.log(resp);
  //     loadUserById({ userId: userId });
  //   }
  // });
}
