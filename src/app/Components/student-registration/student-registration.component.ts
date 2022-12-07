import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentPlacesService } from 'src/app/student-places.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
})
export class StudentRegistrationComponent implements OnInit {
  studentRegValue!: FormGroup;
  states: any = [];
  Country: any = [];
  constructor(
    private studentData: FormBuilder,
    public _state: StudentPlacesService,
    public router: Router
  ) {}

  ngOnInit() {
    this.studentRegValue = this.studentData.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      lastName: ['', [Validators.required]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
      ],
      pancardNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9A-Za-z]{6,10}$/)],
      ],
      aadharcardNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{12}$/)],
      ],
      address: this.studentData.group({
        city: ['', [Validators.required]],
        district: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      }),
    });
    this._state.getState().subscribe((res) => {
      this.states = res;
    });
    this._state.getCountry().subscribe((res) => {
      this.Country = res;
    });
  }

  get firstName() {
    return this.studentRegValue.get('firstName');
  }
  get lastName() {
    return this.studentRegValue.get('lastName');
  }
  get phoneNumber() {
    return this.studentRegValue.get('phoneNumber');
  }
  get pancardNumber() {
    return this.studentRegValue.get('pancardNumber');
  }
  get aadharcardNumber() {
    return this.studentRegValue.get('aadharcardNumber');
  }
  get city() {
    return this.studentRegValue.get('address.city');
  }
  get district() {
    return this.studentRegValue.get('address.district');
  }
  get state() {
    return this.studentRegValue.get('address.state');
  }
  get country() {
    return this.studentRegValue.get('address.country');
  }

  get pincode() {
    return this.studentRegValue.get('address.pincode');
  }

  submit(data: any) {
    console.log(data.value);
    this.router.navigate(['studentPortal']);
  }
}
