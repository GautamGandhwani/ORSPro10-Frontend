import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.APPOINTMENT, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.patientName);
    flag = flag && validator.isNotNullObject(form.appointmentDate);
    flag = flag && validator.isNotNullObject(form.status);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.patientName = data.patientName;
    form.appointmentDate = data.appointmentDate;
    form.status = data.status;
  }
}