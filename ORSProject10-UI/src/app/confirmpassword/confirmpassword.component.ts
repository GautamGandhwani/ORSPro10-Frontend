import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.CONFIRMPASSWORD, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.confirmCode);
    flag = flag && validator.isNotNullObject(form.userName);
    flag = flag && validator.isNotNullObject(form.confirmValue);
    flag = flag && validator.isNotNullObject(form.status);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.confirmCode = data.confirmCode;
    form.userName = data.userName;
    form.confirmValue = data.confirmValue;
    form.status = data.status;
  }
}