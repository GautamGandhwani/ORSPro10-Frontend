
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from "./course/course.component";
import { SubjectComponent } from "./subject/subject.component"
import { Subject, from } from 'rxjs';
import { RoleListComponent } from './role/role-list.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customer-list.component';
import { EmployeeComponent } from './employee/employee.component';
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
import { BankComponent } from './bank/bank.component';
import { BankListComponent } from './bank/bank-list.component';
import { DeviceComponent } from './device/device.component';
import { DeviceListComponent } from './device/device-list.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },

    // ***********EMPLOYEE*************
    {
        path: 'employee',
        component: EmployeeComponent
    },

    // ***********DEVICE*************

    {
        path: 'device',
        component: DeviceComponent
    },
    {
        path: 'devicelist',
        component: DeviceListComponent
    },
    {
        path: 'device/:id',
        component: DeviceComponent
    },

    // ***********BANK*************

    {
        path: 'bank',
        component: BankComponent
    },
    {
        path: 'banklist',
        component: BankListComponent
    },
    {
        path: 'bank/:id',
        component: BankComponent
    },

    // ***********LOCATION*************
    {
        path: 'location',
        component: ProfileComponent
    },
    {
        path: 'locationlist',
        component: ProfileListComponent
    },
    {
        path: 'locatione/:id',
        component: ProfileComponent
    },

    // ***********PROFILE*************
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'profilelist',
        component: ProfileListComponent
    },
    {
        path: 'profile/:id',
        component: ProfileComponent
    },

    // ***********SESSION*************
    {
        path: 'session',
        component: SessionComponent
    },
    {
        path: 'sessionlist',
        component: SessionListComponent
    },
    {
        path: 'session/:id',
        component: SessionComponent
    },

    // ***********SUBSCRIPTION*************
    {
        path: 'subscription',
        component: SubscriptionComponent
    },
    {
        path: 'subscriptionlist',
        component: SubscriptionListComponent
    },
    {
        path: 'subscription/:id',
        component: SubscriptionComponent
    },

    // ***********CONTACT*************
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'contactlist',
        component: ContactListComponent
    },
    {
        path: 'contact/:id',
        component: ContactComponent
    },

    // ***********REVIEW*************
    {
        path: 'review',
        component: ReviewComponent
    },
    {
        path: 'reviewlist',
        component: ReviewListComponent
    },
    {
        path: 'review/:id',
        component: ReviewComponent
    },

    // ***********SHOPPING*************
    {
        path: 'shopping',
        component: ShoppingComponent
    },
    {
        path: 'shoppinglist',
        component: ShoppingListComponent
    },
    {
        path: 'shopping/:id',
        component: ShoppingComponent
    },

    // ***********INQUIRY*************
    {
        path: 'inquiry',
        component: InquiryComponent
    },
    {
        path: 'inquirylist',
        component: InquiryListComponent
    },
    {
        path: 'inquiry/:id',
        component: InquiryComponent
    },

    // ***********COUPON*************
    {
        path: 'coupon',
        component: CouponComponent
    },
    {
        path: 'couponlist',
        component: CouponListComponent
    },
    {
        path: 'coupon/:id',
        component: CouponComponent
    },

    // ***********SETTING*************
    {
        path: 'setting',
        component: SettingComponent
    },
    {
        path: 'settinglist',
        component: SettingListComponent
    },
    {
        path: 'setting/:id',
        component: SettingComponent
    },

    //************Compensation************
    {
        path: 'compensation',
        component: CompensationComponent
    },
    {
        path: 'compensationlist',
        component: CompensationlistComponent
    },
    {
        path: 'compensation/:id',
        component: CompensationComponent
    },
    // ***********CUSTOMER*************

    {
        path: 'customer',
        component: CustomerComponent

    },
    {
        path: 'customerlist',
        component: CustomerlistComponent

    },
    {
        path: 'customet/:id',
        component: CustomerComponent

    },

    // ***********PRODUCT*************

    {
        path: 'product',
        component: ProductComponent

    },
    {
        path: 'productlist',
        component: ProductListComponent

    },
    {
        path: 'product/:id',
        component: ProductComponent

    },

    // ======================================
    {
        path: 'loader',
        component: LoaderComponent

    },
    //====================LOGIN====================
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'login/:userparams',
        component: LoginComponent
    },

    {
        path: 'spinner',
        component: SpinnerComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },

    //================================================
    {
        path: 'message',
        component: MessageComponent,

    },
    {
        path: 'message/:id',
        component: MessageComponent
    },
    {
        path: 'messagelist',
        component: MessageListComponent

    },
    //=======================MARKSHEET======================
    {
        path: 'marksheet',
        component: MarksheetComponent

    },
    {
        path: 'marksheet/:id',
        component: MarksheetComponent

    },
    {
        path: 'marksheetlist',
        component: MarksheetListComponent

    },
    {
        path: 'marksheetmeritlist',
        component: MarksheetmeritListComponent

    },
    {
        path: 'getmarksheet',
        component: GetmarksheetComponent

    },

    //==================COLLEGE======================
    {
        path: 'college',
        component: CollegeComponent

    },
    {
        path: 'college/:id',
        component: CollegeComponent

    },
    {
        path: 'collegelist',
        component: CollegeListComponent

    },

    //====================STUDENT====================
    {
        path: 'student',
        component: StudentComponent

    },
    {
        path: 'student/:id',
        component: StudentComponent

    },
    {
        path: 'studentlist',
        component: StudentListComponent

    },

    //===================USER===============
    {
        path: 'user',
        component: UserComponent

    },
    {
        path: 'user/:id',
        component: UserComponent

    },
    {
        path: 'userlist',
        component: UserListComponent

    },

    //======================ROLE=====================
    {
        path: 'role',
        component: RoleComponent

    },
    {
        path: 'rolelist',
        component: RoleListComponent

    },
    {
        path: 'role/:id',
        component: RoleComponent

    },

    //======================COURSE=====================
    {
        path: 'course',
        component: CourseComponent

    },
    {
        path: 'courselist',
        component: CourseListComponent

    },
    {
        path: 'course/:id',
        component: CourseComponent

    },

    //=====================FACLTY======================
    {

        path: 'faculty',
        component: FacultyComponent

    },
    {
        path: 'facultylist',
        component: FacultyListComponent

    },
    {
        path: 'faculty/:id',
        component: FacultyComponent

    },

    //=================TIMETABLE======================
    {
        path: 'timetable',
        component: TimetableComponent


    },
    {
        path: 'timetablelist',
        component: TimetableListComponent

    },
    {
        path: 'timetable/:id',
        component: TimetableComponent

    },

    //======================SUBJECT==================
    {
        path: 'subject',
        component: SubjectComponent

    },
    {
        path: 'subjectlist',
        component: SubjectListComponent

    },
    {
        path: 'subject/:id',
        component: SubjectComponent

    },

    //===================================================
    {
        path: 'myprofile',
        component: MyprofileComponent
    },
    {
        path: 'file',
        component: FileComponent
    },
    {
        path: 'changepassword',
        component: ChangepasswordComponent


    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})


export class AppRoutingModule { }