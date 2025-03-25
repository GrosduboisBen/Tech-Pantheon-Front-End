import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router'
import { Observable } from 'rxjs'
import { User } from 'src/app/models/APP/models'
import { UserService } from '../customServices'

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor (private readonly userService: UserService) {}

  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | Promise<User> | User {
    return this.userService.get()
  }
}
