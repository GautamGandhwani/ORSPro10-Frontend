import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.BLOCK, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.blockCode);
      flag = flag && validator.isNotNullObject(form.userName);
      flag = flag && validator.isNotNullObject(form.reasion);
      flag = flag && validator.isNotNullObject(form.status);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.blockCode = data.blockCode;
      form.userName = data.userName;
      form.reasion = data.reasion;
      form.status = data.status;
    }
}