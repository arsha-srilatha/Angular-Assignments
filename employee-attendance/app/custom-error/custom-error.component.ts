import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.css'],
})
export class CustomErrorComponent implements OnInit {
  errorMessage: any;
  observe: Subscription = new Subscription();

  //Fetch data from route
  constructor(private router: Router) {
    this.errorMessage = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {}
}
