import { Component, Input, OnInit } from '@angular/core';
import { OnDutyService } from '../on-duty.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-on-duty-edit',
  templateUrl: './on-duty-edit.component.html',
  styleUrls: ['./on-duty-edit.component.css']
})
export class OnDutyEditComponent implements OnInit{
  duties: string[] = [];
  employees: string[] =[];
  observe: Subscription = new Subscription;
  editMode: boolean = false;
  constructor(private onduty: OnDutyService, private route: ActivatedRoute){
    this.duties = onduty.duties;
    this.employees = onduty.employees;
    if(this.route.snapshot.params['id'] == 900) {
      console.log('Hi, I am the store manager.')
      this.editMode = true;
    }
    else {
      this.editMode = false;
    }
  }
  
  ngOnInit(){
    this.observe = this.route.params.subscribe(
      (params: Params) => {
        console.log(params)
      })
  }
}
