import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmpassword-list',
  templateUrl: './confirmpassword-list.component.html',
  styleUrls: ['./confirmpassword-list.component.css']
})
export class ConfirmpasswordListComponent extends BaseListCtl {

  constructor (public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
          super(locator.endpoints.CONFIRMPASSWORD, locator, route); 
      }
}