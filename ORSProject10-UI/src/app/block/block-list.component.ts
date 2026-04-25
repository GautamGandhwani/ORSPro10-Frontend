import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent extends BaseListCtl {

  constructor (public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
          super(locator.endpoints.BLOCK, locator, route); 
      }
}