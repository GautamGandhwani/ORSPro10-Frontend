import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dataretention',
  templateUrl: './dataretention.component.html',
  styleUrls: ['./dataretention.component.css']
})
export class DataretentionComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.DATARETENTION, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
  
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.retentionCode);
      flag = flag && validator.isNotNullObject(form.retentionType);
      flag = flag && validator.isNotNullObject(form.duration);
      flag = flag && validator.isNotNullObject(form.status);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.retentionCode = data.retentionCode;
      form.retentionType = data.retentionType;
      form.duration = data.duration;
      form.status = data.status;
    }
}
