import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription, filter, interval, map } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number = 0;
  timeLapsed: number | string = '';
  timeLapsed2: number | string = '';
  message1: string = "";
  message2: string = "";
  sampleObservable: Subscription = new Subscription;
  sampleObservable2: Subscription = new Subscription;
  customObervable: Observable<number> = new Observable;
  customObervable2: Observable<number> = new Observable;
  constructor(private route: ActivatedRoute, private user: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    //Custom interval observable - ends with an error
    this.customObervable = Observable.create((observer: {
      error(): unknown; next: (arg0: number) => void; 
})  => {
      let count=-2;
      setInterval(() => {
        observer.next(count);
        if(count == 5) {
          observer.error();
        }
        count++;
      }, 2000)
    })

   
//Usage of Rxjs Operators
    this.sampleObservable = this.customObervable.pipe(filter(
      (data) => {return data>0;}
    ),map(
      data => data + "seconds"
    )).subscribe(
      (      count) => this.timeLapsed = count,
      (      error: any) => this.message1 = "It has reached 5 seconds. - Error"
    )
      //Custom interval observable - ends after completing
    this.customObervable2 = Observable.create((observer: {
      complete(): unknown;
      next: (arg0: number) => void; 
})  => {
      let count=0;
      setInterval(() => {
        observer.next(count);
        if(count == 3) {
          observer.complete();
        }
        count++;
      }, 1000)
    })

    this.sampleObservable2 = this.customObervable2.subscribe(
      count => this.timeLapsed2 = count,
      complete => this.message2 = "It has reached 3 seconds."
    )

  }
  ngOnDestroy(): void {
    this.sampleObservable.unsubscribe();
  }
//Subject
  activateEmit(){
    this.user.activatedEmitter.next(true);
  }

}
