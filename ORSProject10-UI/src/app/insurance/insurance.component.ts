import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.INSURANCE, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
  
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.policyNumber);
      flag = flag && validator.isNotNullObject(form.premiumAmount);
      flag = flag && validator.isNotNullObject(form.expiryDate);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.reviewName = data.policyNumber;
      form.rating = data.premiumAmount;
      form.reviewText = data.expiryDate;
    }
}