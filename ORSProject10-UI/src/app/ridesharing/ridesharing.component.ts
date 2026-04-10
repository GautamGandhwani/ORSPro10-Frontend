import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ridesharing',
  templateUrl: './ridesharing.component.html',
  styleUrls: ['./ridesharing.component.css']
})
export class RidesharingComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.RIDESHARING, locator, route);
        }
  
   onUpload(userform: FormData) {
      this.submit();
      console.log(this.form.data.id + '---- after submit');
  
    }
  
    validateForm(form) {
      let flag = true;
      let validator = this.serviceLocator.dataValidator;
      flag = flag && validator.isNotNullObject(form.driverName);
      flag = flag && validator.isNotNullObject(form.vehicleType);
      flag = flag && validator.isNotNullObject(form.rideDistance);
      flag = flag && validator.isNotNullObject(form.fareAmount);
  
      return flag;
    }
  
    populateForm(form, data) {
      form.id = data.id;
      form.driverName = data.driverName;
      form.vehicleType = data.vehicleType;
      form.rideDistance = data.rideDistance;
      form.fareAmount = data.fareAmount;
    }
}