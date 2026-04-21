import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apikey',
  templateUrl: './apikey.component.html',
  styleUrls: ['./apikey.component.css']
})
export class ApikeyComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.APIKEY, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.apiKeyCode);
    flag = flag && validator.isNotNullObject(form.keyValue);
     flag = flag && validator.isNotNullObject(form.issuedTo);
    flag = flag && validator.isNotNullObject(form.status);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.apiKeyCode = data.apiKeyCode;
    form.keyValue = data.keyValue;
    form.issuedTo = data.issuedTo;
    form.status = data.status;
  }
}