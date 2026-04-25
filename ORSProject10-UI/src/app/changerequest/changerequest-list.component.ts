import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-changerequest-list',
  templateUrl: './changerequest-list.component.html',
  styleUrls: ['./changerequest-list.component.css']
})
export class ChangerequestListComponent extends BaseListCtl {

  constructor (public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
          super(locator.endpoints.CHANGEREQUEST, locator, route); 
      }
}