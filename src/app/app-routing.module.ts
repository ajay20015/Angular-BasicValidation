import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';
import { StudentHomePageComponent } from './Components/student-home-page/student-home-page.component';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { StudentRegistrationComponent } from './Components/student-registration/student-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', title: 'Login', component: StudentLoginComponent },
  {
    path: 'registeration',
    title: 'Registration',
    component: StudentRegistrationComponent,
  },
  {
    path: 'studentPortal',
    title: 'Student-Poratal',
    component: StudentHomePageComponent,
  },
  { path: '**', title: 'PageNotFound', component: ErrorComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
