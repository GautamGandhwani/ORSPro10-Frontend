import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpServiceService } from './http-service.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataValidator } from './utility/data-validator';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { CookieService } from 'ngx-cookie-service';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserComponent } from './user/user.component';

import { UserListComponent } from './user/user-list.component';

import { RoleComponent } from './role/role.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { RoleListComponent } from './role/role-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from "./timetable/timetable-list.component";
import { SubjectListComponent } from "./subject/subject-list.component";
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from "./loader/loader.component";
import { NavbarComponent } from './navbar/navbar.component';

import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './auth.service';
import { MyprofileComponent } from './user/myprofile.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customer-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { CompensationComponent } from './compensation/compensation.component';
import { CompensationlistComponent } from './compensation/compensationlist.component';
import { SettingComponent } from './setting/setting.component';
import { SettingListComponent } from './setting/setting-list.component';
import { CouponComponent } from './coupon/coupon.component';
import { CouponListComponent } from './coupon/coupon-list.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InquiryListComponent } from './inquiry/inquiry-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list.component';
import { ReviewComponent } from './review/review.component';
import { ReviewListComponent } from './review/review-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact/contact-list.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionListComponent } from './subscription/subscription-list.component';
import { SessionComponent } from './session/session.component';
import { SessionListComponent } from './session/session-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileListComponent } from './profile/profile-list.component';
import { LocationComponent } from './location/location.component';
import { LocationListComponent } from './location/location-list.component';
import { BankComponent } from './bank/bank.component';
import { BankListComponent } from './bank/bank-list.component';




// import { AuthService } from './auth.service';


export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MarksheetComponent,
    MarksheetListComponent,
    StudentComponent,
    StudentListComponent,
    CollegeComponent,
    CollegeListComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    MessageComponent,
    MessageListComponent,
    UserComponent,
    UserListComponent,

    RoleComponent,
    RoleListComponent,
    CourseComponent,
    SubjectComponent,
    SubjectListComponent,
    TimetableComponent,
    CourseListComponent,
    FacultyComponent,
    FacultyListComponent,
    TimetableComponent,
    TimetableListComponent,
    MarksheetmeritListComponent,
    GetmarksheetComponent,
    ChangepasswordComponent,
    LoaderComponent,
    FileComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    MyprofileComponent,
    ProductComponent,
    ProductListComponent,
    CustomerComponent,
    CustomerlistComponent,
    EmployeeComponent,
    EmployeeListComponent,
    CompensationComponent,
    CompensationlistComponent,
    SettingComponent,
    SettingListComponent,
    CouponComponent,
    CouponListComponent,
    InquiryComponent,
    InquiryListComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ReviewComponent,
    ReviewListComponent,
    ContactComponent,
    ContactListComponent,
    SubscriptionComponent,
    SubscriptionListComponent,
    SessionComponent,
    SessionListComponent,
    ProfileComponent,
    ProfileListComponent,
    LocationComponent,
    LocationListComponent,
    BankComponent,
    BankListComponent,
    
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: myHttpLoader,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    },
    HttpServiceService,
    DataValidator,
    CookieService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {

}