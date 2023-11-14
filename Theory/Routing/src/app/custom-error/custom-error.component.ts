import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.css']
})
export class CustomErrorComponent implements OnInit {
errorMessage: string = "";
observe: Subscription = new Subscription;

constructor(private route: ActivatedRoute) {}
ngOnInit(): void {
  this.errorMessage = this.route.snapshot.data['message'];
this.observe = this.route.data.subscribe(
  (data: Data) => this.errorMessage = data['message']
)
}
}
