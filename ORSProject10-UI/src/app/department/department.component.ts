import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.DEPARTMENT, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.departmentCode);
    flag = flag && validator.isNotNullObject(form.departmentName);
    flag = flag && validator.isNotNullObject(form.departmentHead);
    flag = flag && validator.isNotNullObject(form.departmentStatus);
    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.departmentCode = data.departmentCode;
    form.departmentName = data.departmentName;
    form.departmentHead = data.departmentHead;
    form.departmentStatus = data.departmentStatus;
  }
}