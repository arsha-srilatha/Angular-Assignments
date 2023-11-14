import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy{
  employee: {name: string, id: number, experience: number} = {name: '', id: 0, experience: 0};
  observe: Subscription = new Subscription;
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data)=>{
        this.employee = data['employee']
      });
   // this.employee.id = this.route.snapshot.params['id'];
   // this.employee.name = this.route.snapshot.params['name']//Won't update the data as the component is already loaded.

   //this.observe= this.route.params.subscribe(
   //   (params: Params) =>{
    //    this.employee.id = params['id'];
    //    this.employee.name = params['name'];//Update data whenever url is also updated.
     // }
   // )
  }
  ngOnDestroy(){
    this.observe.unsubscribe(); //observable won't get destroyed once navigated from component. Thus, needs to be done manually.
  }

}
