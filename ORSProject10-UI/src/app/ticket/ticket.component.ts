import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
      super(locator.endpoints.TICKET, locator, route);
    }

    onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.categoryName);
    flag = flag && validator.isNotNullObject(form.price);
    flag = flag && validator.isNotNullObject(form.availableSeats);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.categoryName = data.categoryName;
    form.price = data.price;
    form.availableSeats = data.availableSeats;
  }
}