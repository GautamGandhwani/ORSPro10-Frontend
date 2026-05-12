import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-smartparking-list',
  templateUrl: './smartparking-list.component.html',
  styleUrls: ['./smartparking-list.component.css']
})
export class SmartparkingListComponent extends BaseListCtl {

  constructor (public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
          super(locator.endpoints.SMARTPARKING, locator, route); 
      }
}