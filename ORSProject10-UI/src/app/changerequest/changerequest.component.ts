import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-changerequest',
  templateUrl: './changerequest.component.html',
  styleUrls: ['./changerequest.component.css']
})
export class ChangerequestComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.CHANGEREQUEST, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.changeCode);
      flag = flag && validator.isNotNullObject(form.title);
      flag = flag && validator.isNotNullObject(form.requestedBy);
      flag = flag && validator.isNotNullObject(form.status);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.changeCode = data.changeCode;
      form.title = data.title;
      form.requestedBy = data.requestedBy;
      form.status = data.status;
    }
}