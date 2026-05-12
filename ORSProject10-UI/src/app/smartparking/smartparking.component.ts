import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-smartparking',
  templateUrl: './smartparking.component.html',
  styleUrls: ['./smartparking.component.css']
})
export class SmartparkingComponent extends BaseCtl {


  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.SMARTPARKING, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.parkingZone);
    flag = flag && validator.isNotNullObject(form.occupancyRate);
    flag = flag && validator.isNotNullObject(form.predictionTime);
    flag = flag && validator.isNotNullObject(form.availableSlots);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.parkingZone = data.parkingZone;
    form.occupancyRate = data.occupancyRate;
    form.predictionTime = data.predictionTime;
    form.availableSlots = data.availableSlots;
  }
}
