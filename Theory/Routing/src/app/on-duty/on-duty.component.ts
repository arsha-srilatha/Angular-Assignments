import { Component, OnInit } from '@angular/core';
import { OnDutyService } from './on-duty.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-on-duty',
  templateUrl: './on-duty.component.html',
  styleUrls: ['./on-duty.component.css']
})
export class OnDutyComponent implements OnInit{
  empId: string = '';
  editAllowed: boolean = false;
  loggedIn: boolean = false;
  observe: Subscription = new Subscription;
 constructor( private route: ActivatedRoute, private router: Router){
  this.loggedIn = false;
  }
ngOnInit(): void {
  console.log(this.route.snapshot.fragment);
  this.observe = this.route.params.subscribe(
    (params: Params) => console.log(params)
  );
}
  
onEditDuties(){
    if(this.empId !=='900'){
      alert('You are not allowed to edit.')
    }
    else {
      this.router.navigate(['on-duty-edit', '900'], {relativeTo: this.route, queryParamsHandling: 'preserve', fragment: 'editing'})
    }
}
}
