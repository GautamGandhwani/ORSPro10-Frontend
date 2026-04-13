import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-debuglog',
  templateUrl: './debuglog.component.html',
  styleUrls: ['./debuglog.component.css']
})
export class DebuglogComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.DEBUGLOG, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
  
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.debugCode);
      flag = flag && validator.isNotNullObject(form.message);
      flag = flag && validator.isNotNullObject(form.logLevel);
      flag = flag && validator.isNotNullObject(form.status);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.debugCode = data.debugCode;
      form.message = data.message;
      form.logLevel = data.logLevel;
      form.status = data.status;
    }
}