import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
})
export class StudentLoginComponent implements OnInit {
  studentDetail!: FormGroup;
  constructor(private studentLogin: FormBuilder, public router: Router) {}

  get email() {
    return this.studentDetail.get('email');
  }

  get password() {
    return this.studentDetail.get('password');
  }

  ngOnInit() {
    this.studentDetail = this.studentLogin.group({
      email: ['', [Validators.required, Validators.pattern(/123@gmail.com/)]],
      password: ['', [Validators.required, Validators.pattern(/12345/)]],
    });
  }

  login(data: FormGroup) {
    console.log(data.value);
    this.router.navigate(['registeration']);
  }
}
