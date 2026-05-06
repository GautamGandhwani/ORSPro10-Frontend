import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usersession-list',
  templateUrl: './usersession-list.component.html',
  styleUrls: ['./usersession-list.component.css']
})
export class UsersessionListComponent extends BaseListCtl {

   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
      super(locator.endpoints.USERSESSION, locator, route);
    }
  }