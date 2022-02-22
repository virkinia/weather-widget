import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notificationSource: BehaviorSubject<boolean>;
  notification$: Observable<boolean>;

  constructor() {
    this._notificationSource = new BehaviorSubject<boolean>(false);
    this.notification$ = this._notificationSource.asObservable();
  }

  set notification(value: boolean) {
    this._notificationSource.next(value);

    if(value) {
     /*  setTimeout(() => {
        this.notification = false;
      }, 5000); */
    }
  }

}
