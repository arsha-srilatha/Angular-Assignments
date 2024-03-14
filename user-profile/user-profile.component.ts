import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  NgModelGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  @ViewChild('userData') userData: NgModelGroup;
  userAdded: string;
  userEmail: string;
  submitted: boolean = false;

  projectForm: FormGroup;

  onSubmit() {
    this.submitted = true;
    this.userAdded = this.profileForm.form.value.userData.username;
    this.userEmail = this.userData.value.email;
    this.projectForm = new FormGroup({
      projectData: new FormGroup({
        username: new FormControl(this.userAdded, [
          Validators.required,
          this.usernameCheck.bind(this),
        ]),
        projectname: new FormControl(null, Validators.required),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.emailCheck.bind(this)
        ),
      }),
      projectstatus: new FormControl('critical'),
      tools: new FormArray([]),
    });
    this.profileForm.reset();
  }

  getErrorsUserName() {
    return (<FormControl>this.projectForm.get('projectData.username')).errors;
  }

  getErrorsEmail() {
    return (<FormControl>this.projectForm.get('projectData.email')).errors;
  }

  onSubmitProject() {
    console.log(this.projectForm);
  }

  get controls() {
    return (this.projectForm.get('tools') as FormArray).controls;
  }

  onAddTools() {
    const tool = new FormControl(null, Validators.required);
    (<FormArray>this.projectForm.get('tools')).push(tool);
  }

  usernameCheck(control: FormControl): { [s: string]: boolean } {
    if (control.value !== this.userAdded) {
      return { forbiddenUsername: true };
    } else return null;
  }

  emailCheck(control: FormControl): Promise<any> {
    const promise = new Promise<{ [s: string]: boolean }>((resolve, reject) => {
      setInterval(() => {
        if (control.value !== this.userEmail) {
          return resolve({ forbiddenEmailName: true });
        } else return null;
      }, 5000);
    });
    return promise;
  }

  ngOnInit(): void {}
}
