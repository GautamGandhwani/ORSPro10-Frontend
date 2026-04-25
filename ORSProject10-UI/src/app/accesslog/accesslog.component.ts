import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accesslog',
  templateUrl: './accesslog.component.html',
  styleUrls: ['./accesslog.component.css']
})
export class AccesslogComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.ACCESSLOG, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.accessLogCode);
      flag = flag && validator.isNotNullObject(form.userName);
      flag = flag && validator.isNotNullObject(form.accessTime);
      flag = flag && validator.isNotNullObject(form.status);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.accessLogCode = data.accessLogCode;
      form.userName = data.userName;
      form.accessTime = data.accessTime;
      form.status = data.status;
    }
}