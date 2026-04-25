import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificationrule',
  templateUrl: './notificationrule.component.html',
  styleUrls: ['./notificationrule.component.css']
})
export class NotificationruleComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.NOTIFICATIONRULE, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.ruleCode);
      flag = flag && validator.isNotNullObject(form.event);
      flag = flag && validator.isNotNullObject(form.triggerType);
      flag = flag && validator.isNotNullObject(form.status);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.ruleCode = data.ruleCode;
      form.event = data.event;
      form.triggerType = data.triggerType;
      form.status = data.status;
    }
}