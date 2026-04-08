import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EndpointServiceService {

  constructor() { }

  public SERVER_URL = "http://localhost:8084";
  public MESSAGE = this.SERVER_URL + "/Message";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL + "/TimeTable";
  public JASPERREPORT = this.SERVER_URL + "/Jasper";

  public CUSTOMER = this.SERVER_URL + "/Customer";
  public EMPLOYEE = this.SERVER_URL + "/Employee";
  public COMPENSATION = this.SERVER_URL + "/Compensation";
  public SETTING = this.SERVER_URL + "/Setting";
  public COUPON = this.SERVER_URL + "/Coupon";
  public INQUIRY = this.SERVER_URL + "/Inquiry";
  public SHOPPING = this.SERVER_URL + "/Shopping";
  public REVIEW = this.SERVER_URL + "/Review";
  public CONTACT = this.SERVER_URL + "/Contact";
  public SUBSCRIPTION = this.SERVER_URL + "/Subscription";
  public SESSION = this.SERVER_URL + "/Session";
  public PROFILE = this.SERVER_URL + "/Profile";
  public LOCATION = this.SERVER_URL + "/Location";
  public BANK = this.SERVER_URL + "/Bank";
  public DEVICE = this.SERVER_URL + "/Device";
  public PRIORITY = this.SERVER_URL + "/Priority";
  public SUPPLIER = this.SERVER_URL + "/Supplier";
  public PROMOTION = this.SERVER_URL + "/Promotion";
  public ASSET = this.SERVER_URL + "/Asset";
  public PLACEMENT = this.SERVER_URL + "/Placement";
  public COMPLAINT = this.SERVER_URL + "/Complaint";
  public JOB = this.SERVER_URL + "/Job";
  public INSURANCE = this.SERVER_URL + "/Insurance";
  public PHOTOGRAPHY = this.SERVER_URL + "/Photography";
  public DEPARTMENT = this.SERVER_URL + "/Department";
  public DELIVERY = this.SERVER_URL + "/Delivery";
  public APILOG = this.SERVER_URL + "/APILog";
  public INVESTOR = this.SERVER_URL + "/Investor";
  public TICKET = this.SERVER_URL + "/Ticket";
  public LOANNOTE = this.SERVER_URL + "/Loannote";
  public BLOG = this.SERVER_URL + "/Blog";
  public VENUE = this.SERVER_URL + "/Venue";
  public TIMEZONE = this.SERVER_URL + "/Timezone";
}