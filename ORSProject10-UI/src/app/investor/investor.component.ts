import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.INVESTOR, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
  
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.investorName);
      flag = flag && validator.isNotNullObject(form.investmentAmount);
      flag = flag && validator.isNotNullObject(form.investmentType);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.investorName = data.investorName;
      form.investmentAmount = data.investmentAmount;
      form.investmentType = data.investmentType;
    }
}