import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root',
})
export class RightGuard implements CanActivate {
  constructor(private currentUserService: CurrentUserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const right = route.data['right'];
    return this.currentUserService.hasRight(right);
  }
}
