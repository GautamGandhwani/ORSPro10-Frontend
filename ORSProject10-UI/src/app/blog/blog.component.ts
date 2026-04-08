import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.BLOG, locator, route);
  }

  onUpload(userform: FormData) {
    this.submit();
    console.log(this.form.data.id + '---- after submit');

  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.blogCode);
    flag = flag && validator.isNotNullObject(form.title);
    flag = flag && validator.isNotNullObject(form.author);
    flag = flag && validator.isNotNullObject(form.status);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.blogCode = data.blogCode;
    form.title = data.title;
    form.author = data.author;
    form.status = data.status;
  }
}