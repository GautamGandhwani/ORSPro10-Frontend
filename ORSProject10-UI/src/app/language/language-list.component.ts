import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent extends BaseListCtl {

  constructor (public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
          super(locator.endpoints.LANGUAGE, locator, route) ; 
      }
}