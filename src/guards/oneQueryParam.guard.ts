import { Injectable } from '@angular/core';
import {
    CanActivate,
    UrlTree,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class OneQueryParam implements CanActivate {
    constructor( private router: Router ) {}
    canActivate(
        activatedRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree {
        if ( Object.keys( activatedRoute.queryParams ).length > 1 ) {
            console.warn( new Error( `WARNING: it is not allowed to have more than one query parameter:${activatedRoute.queryParams}` ))
            return this.router.parseUrl( '' );
        }
        return true;
    }
}
