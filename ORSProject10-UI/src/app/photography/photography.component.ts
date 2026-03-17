import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.PHOTOGRAPHY, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.clientName);
    flag = flag && validator.isNotNullObject(form.eventType);
    flag = flag && validator.isNotNullObject(form.bookingDate);
    flag = flag && validator.isNotNullObject(form.photographerName);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.clientName = data.clientName;
    form.eventType = data.eventType;
    form.bookingDate = data.bookingDate;
    form.photographerName = data.photographerName;
  }
}