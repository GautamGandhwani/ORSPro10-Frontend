
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
import { PriopityComponent } from './priopity/priopity.component';
import { PriorityListComponent } from './priopity/priority-list.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier/supplier-list.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionListComponent } from './promotion/promotion-list.component';
import { AssetComponent } from './asset/asset.component';
import { AssetListComponent } from './asset/asset-list.component';
import { PlacementComponent } from './placement/placement.component';
import { PlacementListComponent } from './placement/placement-list.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ComplaintListComponent } from './complaint/complaint-list.component';
import { JobComponent } from './job/job.component';
import { JobListComponent } from './job/job-list.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceListComponent } from './insurance/insurance-list.component';
import { PhotographyComponent } from './photography/photography.component';
import { PhotographyListComponent } from './photography/photography-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryListComponent } from './delivery/delivery-list.component';
import { ApilogComponent } from './apilog/apilog.component';
import { ApilogListComponent } from './apilog/apilog-list.component';
import { InvestorComponent } from './investor/investor.component';
import { InvestorListComponent } from './investor/investor-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket/ticket-list.component';
import { LoannoteComponent } from './loannote/loannote.component';
import { LoannoteListComponent } from './loannote/loannote-list.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blog-list.component';
import { VenueComponent } from './venue/venue.component';
import { VenueListComponent } from './venue/venue-list.component';
import { TimezoneComponent } from './timezone/timezone.component';
import { TimezoneListComponent } from './timezone/timezone-list.component';
import { RidesharingComponent } from './ridesharing/ridesharing.component';
import { RidesharingListComponent } from './ridesharing/ridesharing-list.component';
import { LanguageComponent } from './language/language.component';
import { LanguageListComponent } from './language/language-list.component';
import { DebuglogComponent } from './debuglog/debuglog.component';
import { DebuglogListComponent } from './debuglog/debuglog-list.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list.component';
import { EncryptionComponent } from './encryption/encryption.component';
import { EncryptionListComponent } from './encryption/encryption-list.component';
import { ArtifactComponent } from './artifact/artifact.component';
import { ArtifactListComponent } from './artifact/artifact-list.component';
import { BillingComponent } from './billing/billing.component';
import { BillingListComponent } from './billing/billing-list.component';
import { DataretentionComponent } from './dataretention/dataretention.component';
import { DataretentionListComponent } from './dataretention/dataretention-list.component';
import { ApikeyComponent } from './apikey/apikey.component';
import { ApikeyListComponent } from './apikey/apikey-list.component';
import { AccesslogComponent } from './accesslog/accesslog.component';
import { AccesslogListComponent } from './accesslog/accesslog-list.component';
import { BlockComponent } from './block/block.component';
import { BlockListComponent } from './block/block-list.component';
import { ChangerequestComponent } from './changerequest/changerequest.component';
import { ChangerequestListComponent } from './changerequest/changerequest-list.component';
import { NotificationruleComponent } from './notificationrule/notificationrule.component';
import { NotificationruleListComponent } from './notificationrule/notificationrule-list.component';
import { UsersessionComponent } from './usersession/usersession.component';
import { UsersessionListComponent } from './usersession/usersession-list.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import { ConfirmpasswordListComponent } from './confirmpassword/confirmpassword-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationListComponent } from './registration/registration-list.component';
import { GenderComponent } from './gender/gender.component';
import { GenderListComponent } from './gender/gender-list.component';
import { SmartparkingComponent } from './smartparking/smartparking.component';
import { SmartparkingListComponent } from './smartparking/smartparking-list.component';




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

    // ***********SMART PARKING*************

    {
        path: 'smartparking',
        component: SmartparkingComponent
    },
    {
        path: 'smartparkinglist',
        component: SmartparkingListComponent
    },
    {
        path: 'smartparking/:id',
        component: SmartparkingComponent
    },

    // ***********GENDER*************

    {
        path: 'gender',
        component: GenderComponent
    },
    {
        path: 'genderlist',
        component: GenderListComponent
    },
    {
        path: 'gender/:id',
        component: GenderComponent
    },

    // ***********RESISTRATION*************

    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'registrationlist',
        component: RegistrationListComponent
    },
    {
        path: 'registration/:id',
        component: RegistrationComponent
    },

    // ***********CONFIRM PASSWORD*************

    {
        path: 'confirmpassword',
        component: ConfirmpasswordComponent
    },
    {
        path: 'confirmpasswordlist',
        component: ConfirmpasswordListComponent
    },
    {
        path: 'confirmpassword/:id',
        component: ConfirmpasswordComponent
    },

    // ***********User Session*************

    {
        path: 'usersession',
        component: UsersessionComponent
    },
    {
        path: 'usersessionlist',
        component: UsersessionListComponent
    },
    {
        path: 'usersession/:id',
        component: UsersessionComponent
    },

    // ***********Notification Rule*************

    {
        path: 'notificationrule',
        component: NotificationruleComponent
    },
    {
        path: 'notificationrulelist',
        component: NotificationruleListComponent
    },
    {
        path: 'notificationrule/:id',
        component: NotificationruleComponent
    },

    // ***********Change Request*************

    {
        path: 'changerequest',
        component: ChangerequestComponent
    },
    {
        path: 'changerequestlist',
        component: ChangerequestListComponent
    },
    {
        path: 'changerequest/:id',
        component: ChangerequestComponent
    },

    // ***********BLOCK*************

    {
        path: 'block',
        component: BlockComponent
    },
    {
        path: 'blocklist',
        component: BlockListComponent
    },
    {
        path: 'block/:id',
        component: BlockComponent
    },

    // ***********ACCESSLOG*************

    {
        path: 'accesslog',
        component: AccesslogComponent
    },
    {
        path: 'accessloglist',
        component: AccesslogListComponent
    },
    {
        path: 'accesslog/:id',
        component: AccesslogComponent
    },

    // ***********APIKEY*************

    {
        path: 'apikey',
        component: ApikeyComponent
    },
    {
        path: 'apikeylist',
        component: ApikeyListComponent
    },
    {
        path: 'apikey/:id',
        component: ApikeyComponent
    },

    // ***********DATARETENTION*************

    {
        path: 'dataretention',
        component: DataretentionComponent
    },
    {
        path: 'dataretentionlist',
        component: DataretentionListComponent
    },
    {
        path: 'dataretention/:id',
        component: DataretentionComponent
    },


    // ***********BILLING*************

    {
        path: 'billing',
        component: BillingComponent
    },
    {
        path: 'billinglist',
        component: BillingListComponent
    },
    {
        path: 'billing/:id',
        component: BillingComponent
    },

    // ***********ARTIFACT*************

    {
        path: 'artifact',
        component: ArtifactComponent
    },
    {
        path: 'artifactlist',
        component: ArtifactListComponent
    },
    {
        path: 'artifact/:id',
        component: ArtifactComponent
    },

    // ***********ENCRYPTION*************

    {
        path: 'encryption',
        component: EncryptionComponent
    },
    {
        path: 'encryptionlist',
        component: EncryptionListComponent
    },
    {
        path: 'encryption/:id',
        component: EncryptionComponent
    },

    // ***********APPOINTMENT*************

    {
        path: 'appointment',
        component: AppointmentComponent
    },
    {
        path: 'appointmentlist',
        component: AppointmentListComponent
    },
    {
        path: 'appointment/:id',
        component: AppointmentComponent
    },

    // ***********DEBUG LOG*************

    {
        path: 'debuglog',
        component: DebuglogComponent
    },
    {
        path: 'debugloglist',
        component: DebuglogListComponent
    },
    {
        path: 'debuglog/:id',
        component: DebuglogComponent
    },

    // ***********LANGUAGE*************

    {
        path: 'language',
        component: LanguageComponent
    },
    {
        path: 'languagelist',
        component: LanguageListComponent
    },
    {
        path: 'language/:id',
        component: LanguageComponent
    },

    // ***********RIDESHARING*************

    {
        path: 'ridesharing',
        component: RidesharingComponent
    },
    {
        path: 'ridesharinglist',
        component: RidesharingListComponent
    },
    {
        path: 'ridesharing/:id',
        component: RidesharingComponent
    },

    // ***********TIMEZONE*************

    {
        path: 'timezone',
        component: TimezoneComponent
    },
    {
        path: 'timezonelist',
        component: TimezoneListComponent
    },
    {
        path: 'timezone/:id',
        component: TimezoneComponent
    },

    // ***********VANUE*************

    {
        path: 'venue',
        component: VenueComponent
    },
    {
        path: 'venuelist',
        component: VenueListComponent
    },
    {
        path: 'venue/:id',
        component: VenueComponent
    },

    // ***********BOLG*************

    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'bloglist',
        component: BlogListComponent
    },
    {
        path: 'blog/:id',
        component: BlogComponent
    },

    // ***********LOANNOTE*************

    {
        path: 'loannote',
        component: LoannoteComponent
    },
    {
        path: 'loannotelist',
        component: LoannoteListComponent
    },
    {
        path: 'loannote/:id',
        component: LoannoteComponent
    },

    // ***********TICKET*************

    {
        path: 'ticket',
        component: TicketComponent
    },
    {
        path: 'ticketlist',
        component: TicketListComponent
    },
    {
        path: 'ticket/:id',
        component: TicketComponent
    },

    // ***********INVESTOR*************

    {
        path: 'investor',
        component: InvestorComponent
    },
    {
        path: 'investorlist',
        component: InvestorListComponent
    },
    {
        path: 'investor/:id',
        component: InvestorComponent
    },

    // ***********APILOG*************

    {
        path: 'apilog',
        component: ApilogComponent
    },
    {
        path: 'apiloglist',
        component: ApilogListComponent
    },
    {
        path: 'apilog/:id',
        component: ApilogComponent
    },

    // ***********DELIVERY*************

    {
        path: 'delivery',
        component: DeliveryComponent
    },
    {
        path: 'deliverylist',
        component: DeliveryListComponent
    },
    {
        path: 'delivery/:id',
        component: DeliveryComponent
    },

    // ***********department*************

    {
        path: 'department',
        component: DepartmentComponent
    },
    {
        path: 'departmentlist',
        component: DepartmentListComponent
    },
    {
        path: 'department/:id',
        component: DepartmentComponent
    },

    // ***********PHOTOGRAPHY*************

    {
        path: 'photography',
        component: PhotographyComponent
    },
    {
        path: 'photographylist',
        component: PhotographyListComponent
    },
    {
        path: 'photography/:id',
        component: PhotographyComponent
    },

    // ***********INSURANCE*************

    {
        path: 'insurance',
        component: InsuranceComponent
    },
    {
        path: 'insurancelist',
        component: InsuranceListComponent
    },
    {
        path: 'insurance/:id',
        component: InsuranceComponent
    },

    // ***********JOB*************

    {
        path: 'job',
        component: JobComponent
    },
    {
        path: 'joblist',
        component: JobListComponent
    },
    {
        path: 'job/:id',
        component: JobComponent
    },

    // ***********COMPLAIN*************

    {
        path: 'complaint',
        component: ComplaintComponent
    },
    {
        path: 'complaintlist',
        component: ComplaintListComponent
    },
    {
        path: 'complaint/:id',
        component: ComplaintComponent
    },


    // ***********PLACEMENT*************

    {
        path: 'placement',
        component: PlacementComponent
    },
    {
        path: 'placementlist',
        component: PlacementListComponent
    },
    {
        path: 'placement/:id',
        component: PlacementComponent
    },

    // ***********ASSET*************

    {
        path: 'asset',
        component: AssetComponent
    },
    {
        path: 'assetlist',
        component: AssetListComponent
    },
    {
        path: 'asset/:id',
        component: AssetComponent
    },

    // ***********PROMOTION*************

    {
        path: 'promotion',
        component: PromotionComponent
    },
    {
        path: 'promotionlist',
        component: PromotionListComponent
    },
    {
        path: 'promotion/:id',
        component: PromotionComponent
    },

    // ***********SUPPLIER*************

    {
        path: 'supplier',
        component: SupplierComponent
    },
    {
        path: 'supplierlist',
        component: SupplierListComponent
    },
    {
        path: 'supplier/:id',
        component: SupplierComponent
    },

    // ***********PRIORITY*************

    {
        path: 'priority',
        component: PriopityComponent
    },
    {
        path: 'prioritylist',
        component: PriorityListComponent
    },

    {
        path: 'priority/:id',
        component: PriopityComponent
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