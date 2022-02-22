import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  city: string = 'Heidenheim';
  notification$: Observable<boolean>;

  constructor(private notificationService: NotificationService){
    this.notification$ = this.notificationService.notification$;
  };

  changeCity(value: string) {
    this.city = value;
  }

}
