import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginSideComponent } from "./login-side/login-side.component";
import { AdminSideComponent } from "./admin-side/admin-side.component";
import { StudentsComponent } from "./admin-side/students/students.component";
import { OverviewComponent } from "./admin-side/overview/overview.component";
import { TeachersComponent } from "./admin-side/teachers/teachers.component";
import { CreateTeacherComponent } from "./admin-side/create-teacher/create-teacher.component";
import { CreateStudentComponent } from "./admin-side/create-student/create-student.component";
import {PagePrincipaleComponent} from "./page-principale/page-principale.component";
import {EtudiantLoginComponent} from "./etudiant-login/etudiant-login.component";
import {EtudiantCompteComponent} from "./etudiant-compte/etudiant-compte.component";

const routes: Routes = [
  {
    path: "",
    component: PagePrincipaleComponent,
  },
  {
    path: "admin",
    component: AdminSideComponent,
    children: [
      {
        path: "",
        component: OverviewComponent,
        outlet: "un",
      },
      {
        path: "overview",
        component: OverviewComponent,
        outlet: "un",
      },
      {
        path: "students-list",
        component: StudentsComponent,
        outlet: "un",
      },
      {
        path: "student-create",
        component: CreateStudentComponent,
        outlet: "un",
      },
      {
        path: "teachers-list",
        component: TeachersComponent,
        outlet: "un",
      },
      {
        path: "teacher-create",
        component: CreateTeacherComponent,
        outlet: "un",
      },
    ],
  },
  {
    path: "login",
    component: LoginSideComponent,
  },
  {
    path: "login-etudiant",
    component: EtudiantLoginComponent,
  },
  {
    path: "compte-etudiant",
    component: EtudiantCompteComponent,
  },
  {
    path: "logout",
    component: LoginSideComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
