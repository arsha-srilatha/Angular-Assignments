import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { OnDutyService } from '../on-duty.service';
import { CanComponentDeactivate } from 'src/app/employee-details/employee-details-edit/can-deactivate-guard.service';

@Component({
  selector: 'app-on-duty-edit',
  templateUrl: './on-duty-edit.component.html',
  styleUrls: ['./on-duty-edit.component.css'],
})
export class OnDutyEditComponent implements OnInit, CanComponentDeactivate {
  //Variables
  onDuty: { name: string; duty: string }[];
  observe: Subscription = new Subscription();
  editMode: boolean = false;
  selected: string = '';
  duty: string = '';
  isAuthenticated: string = 'false';
  updated: boolean = false;
  isLoading: boolean = false;

  constructor(private onduty: OnDutyService, private route: ActivatedRoute) {
    //Check whether the on-duty list is in editing mode.
    if (this.route.snapshot.fragment == 'editing') {
      this.isAuthenticated = 'true';
      this.editMode = true;
    } else {
      this.isAuthenticated = 'false';
      this.editMode = false;
    }
  }

  //Fetch On-duty list from backend.
  ngOnInit() {
    this.observe = this.route.fragment.subscribe((fragment) => {
      console.log('Fragment' + fragment);
    });
    this.isLoading = true;
    this.onduty.fetchDutyList().subscribe((response) => {
      if (response == null) {
        this.onDuty = this.onduty.getDutyList();
      } else {
        this.onDuty = response;
        this.onduty.ondutyList = this.onDuty;
      }
      this.isLoading = false;
    });
  }

  //Select an employee to update the duty.
  onEdit(employee) {
    if (employee.duty !== 'absent') {
      this.selected = employee.name;
    } else {
      alert('Update attendance in employee list first!!');
      this.selected = '';
    }
  }

  //Update the duty of the selected employee
  onUpdate() {
    this.updated = true;
    for (let employee of this.onDuty) {
      if (employee.name == this.selected) {
        employee.duty = this.duty;
      }
    }
  }

  //Store the updated on-duty list to backend
  onSave() {
    this.onduty.saveDutyList(this.onDuty, this.isAuthenticated);
    this.selected = '';
    this.updated = false;
  }

  canDeactivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.updated) {
      return confirm('Do you want to leave without saving changes?');
    } else {
      return true;
    }
  }
}
