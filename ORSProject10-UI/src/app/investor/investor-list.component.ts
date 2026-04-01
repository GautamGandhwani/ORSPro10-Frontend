import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-investor-list',
  templateUrl: './investor-list.component.html',
  styleUrls: ['./investor-list.component.css']
})
export class InvestorListComponent extends BaseListCtl {

  constructor (public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
          super(locator.endpoints.INVESTOR, locator, route) ; 
      }
}