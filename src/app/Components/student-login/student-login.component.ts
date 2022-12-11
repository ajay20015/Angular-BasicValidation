import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],
  animations: [
    trigger('Login', [
      transition(':enter', [
        style({
          transform: 'translatey(-150%)',
        }),
        animate(
          '0.5s',
          style({
            transform: 'translateX(0)',
          })
        ),
      ]),
    ]),
    trigger('Toggle', [
      state(
        'Toggle1',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('* => Toggle1', [
        style({
          transform: 'translateX(-150%)',
          height: '0px',
        }),
        animate(
          '0.5s',
          style({
            transform: 'translateX(0)',
            height: '*',
          })
        ),
      ]),
      transition('Toggle1 => *', [
        animate(
          '0.5s',
          style({
            transform: 'translateX(-150%)',
          })
        ),
      ]),
    ]),
  ],
})
export class StudentLoginComponent implements OnInit {
  studentDetail!: FormGroup;
  toggleShow: boolean = false;
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
  toggle() {
    this.toggleShow = !this.toggleShow;
  }
}
