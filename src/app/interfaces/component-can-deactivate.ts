import { Observable } from 'rxjs/observable';
export interface ComponentCanDeactivate {
     canDeactivate: () => boolean | Observable<boolean>;
}
