import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.DELIVERY, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.deliveryCode);
    flag = flag && validator.isNotNullObject(form.deliveryAddress);
     flag = flag && validator.isNotNullObject(form.deliveryDate);
    flag = flag && validator.isNotNullObject(form.deliveryStatus);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.deliveryCode = data.deliveryCode;
    form.deliveryAddress = data.deliveryAddress;
    form.deliveryDate = data.deliveryDate;
    form.deliveryStatus = data.deliveryStatus;
  }
}