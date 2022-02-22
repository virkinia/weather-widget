import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {

  notification$: Observable<boolean>;

  constructor(private notificationService: NotificationService){
    this.notification$ = this.notificationService.notification$;
  };

  ngOnInit(): void {
  }

}
