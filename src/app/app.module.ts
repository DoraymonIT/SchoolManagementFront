/**Angular Core Imports **/
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

/**Angular Material Imports **/
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatTreeModule } from "@angular/material/tree";
// import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatStepperModule } from "@angular/material/stepper";

/* Autres  */
// import { ConfirmDialogModule, FileUploadModule, TableModule } from "primeng";
// import { TabViewModule } from "primeng/tabview";
// import { FieldsetModule } from "primeng/fieldset";
// import { CardModule } from "primeng/card";
// import { ChartModule } from "primeng/chart";
import { MatSelectFilterModule } from "mat-select-filter";
import { ToastrModule } from "ngx-toastr";

/** Components **/
import { AppComponent } from "./app.component";
import { LoginSideComponent } from "./login-side/login-side.component";
import { AdminSideComponent } from "./admin-side/admin-side.component";
import { OverviewComponent } from "./admin-side/overview/overview.component";
import { StudentsComponent } from "./admin-side/students/students.component";
import { TeachersComponent } from "./admin-side/teachers/teachers.component";
import { CreateTeacherComponent } from "./admin-side/create-teacher/create-teacher.component";
import { CreateStudentComponent } from "./admin-side/create-student/create-student.component";
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import {CarouselModule} from 'primeng/carousel';
import { EtudiantLoginComponent } from './etudiant-login/etudiant-login.component';
import { EtudiantCompteComponent } from './etudiant-compte/etudiant-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSideComponent,
    AdminSideComponent,
    OverviewComponent,
    StudentsComponent,
    TeachersComponent,
    CreateTeacherComponent,
    CreateStudentComponent,
    PagePrincipaleComponent,
    EtudiantLoginComponent,
    EtudiantCompteComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    MatSidenavModule,
    MatSelectModule,
    MatSelectFilterModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatTreeModule,
    // MatProgressBarModule,
    MatListModule,
    MatNativeDateModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    ToastrModule,
    MatTabsModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDatepickerModule,
    // FileUploadModule,
    MatRadioModule,
    MatCardModule,
    // TabViewModule,
    // FieldsetModule,
    // TableModule,
    MatStepperModule,
    // CardModule,
    // ChartModule,
    // ConfirmDialogModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
