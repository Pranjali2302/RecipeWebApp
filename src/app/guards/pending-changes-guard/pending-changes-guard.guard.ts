import { ComponentCanDeactivate } from './../../interfaces/component-can-deactivate';
import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class PendingChangesGuardGuard implements CanActivate ,CanDeactivate<ComponentCanDeactivate> {
  toNavigate:boolean;
  constructor( private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
    if(component.canDeactivate()) {
      this.toNavigate = window.confirm('You have unsaved changes..Do you really want to Navigate?Press Cancel to go back and save these changes, or OK to lose these changes.');
    }
    return this.toNavigate;
  }
}
