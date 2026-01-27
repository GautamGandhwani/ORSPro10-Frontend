import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.css']
})
export class CompensationComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.COMPENSATION, locator, route);
  }
   validate() {
    return this.validateForm(this.form.data);
  }
}