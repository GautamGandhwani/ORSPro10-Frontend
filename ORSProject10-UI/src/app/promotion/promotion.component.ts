import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.PROMOTION, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.promotionCode);
    flag = flag && validator.isNotNullObject(form.promotionTitle);
     flag = flag && validator.isNotNullObject(form.startDate);
    flag = flag && validator.isNotNullObject(form.promotionStatus);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.promotionCode = data.promotionCode;
    form.promotionTitle = data.promotionTitle;
    form.startDate = data.startDate;
    form.promotionStatus = data.promotionStatus;
  }
}
