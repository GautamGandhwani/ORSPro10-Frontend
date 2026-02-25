import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.COMPLAINT, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.complaintCode);
    flag = flag && validator.isNotNullObject(form.complaintTitle);
     flag = flag && validator.isNotNullObject(form.raisedBy);
    flag = flag && validator.isNotNullObject(form.complaintStatus);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.complaintCode = data.complaintCode;
    form.complaintTitle = data.complaintTitle;
    form.raisedBy = data.raisedBy;
    form.complaintStatus = data.complaintStatus;
  }
}
