import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent extends BaseListCtl {

   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
      super(locator.endpoints.PROMOTION, locator, route);
    }
}