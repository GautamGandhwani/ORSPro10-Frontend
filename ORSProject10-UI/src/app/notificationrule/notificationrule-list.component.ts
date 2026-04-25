import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { BaseListCtl } from '../base-list.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notificationrule-list',
  templateUrl: './notificationrule-list.component.html',
  styleUrls: ['./notificationrule-list.component.css']
})
export class NotificationruleListComponent extends BaseListCtl {

  constructor (public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
          super(locator.endpoints.NOTIFICATIONRULE, locator, route); 
      }
}