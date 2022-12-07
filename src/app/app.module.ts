import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './Components/student-registration/student-registration.component';
import { StudentLoginComponent } from './Components/student-login/student-login.component';
import { StudentHomePageComponent } from './Components/student-home-page/student-home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    StudentLoginComponent,
    StudentHomePageComponent,
    ErrorComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
