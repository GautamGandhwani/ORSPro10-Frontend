import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loannote',
  templateUrl: './loannote.component.html',
  styleUrls: ['./loannote.component.css']
})
export class LoannoteComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.LOANNOTE, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
  
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.lenderName);
      flag = flag && validator.isNotNullObject(form.loanAmount);
      flag = flag && validator.isNotNullObject(form.interestRate);
      flag = flag && validator.isNotNullObject(form.maturityDate);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.lenderName = data.lenderName;
      form.loanAmount = data.loanAmount;
      form.interestRate = data.interestRate;
      form.maturityDate = data.maturityDate;
    }
}