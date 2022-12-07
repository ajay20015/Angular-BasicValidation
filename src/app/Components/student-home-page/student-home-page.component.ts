import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home-page',
  templateUrl: './student-home-page.component.html',
  styleUrls: ['./student-home-page.component.css'],
})
export class StudentHomePageComponent {
  constructor(public router: Router) {}

  logout() {
    this.router.navigate(['login']);
  }
}
