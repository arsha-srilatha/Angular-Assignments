import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timeLapsed: number | undefined
  sampleObservable: Subscription = new Subscription;
  activated: boolean = false;
  constructor(private user: UserService) { }

  ngOnInit() {
    //Built-in interval observable
    this.sampleObservable = interval(1000).subscribe(
      count => this.timeLapsed = count
    )

    this.user.activatedEmitter.subscribe(data => this.activated = data )
  }
 
}
