import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apilog',
  templateUrl: './apilog.component.html',
  styleUrls: ['./apilog.component.css']
})
export class ApilogComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.APILOG, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.apiCode);
    flag = flag && validator.isNotNullObject(form.apiName);
     flag = flag && validator.isNotNullObject(form.requestTime);
    flag = flag && validator.isNotNullObject(form.responseStatus);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.apiCode = data.apiCode;
    form.apiName = data.apiName;
    form.requestTime = data.requestTime;
    form.responseStatus = data.responseStatus;
  }
}