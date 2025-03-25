import { Injectable } from '@angular/core'
import {
  CanActivate,
  UrlTree,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'
import { isUndefined } from 'lodash'
import { Observable } from 'rxjs'
import { User } from 'src/app/models/APP/models'
import { UserService } from '../customServices'

@Injectable()
export class userCountryCodeGuard implements CanActivate {
  constructor (
    private readonly router: Router,
    private readonly userService: UserService) {}

  async canActivate (
    activatedRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    return await this.userService.get()
      .then((user: User) => {
        if (isUndefined(user.countryCode)) {
          return this.router.parseUrl('')
        }
        return true
      })
    //    return this.router.parseUrl( state.url );
  }
}
