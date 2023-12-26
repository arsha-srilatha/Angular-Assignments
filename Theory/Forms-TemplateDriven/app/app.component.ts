import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') userForm: NgForm | undefined;
  defaultName: string = "Jane Doe";
  answer : string = "";
  genders = ["male", "female"];
  user = { name: '', email: ''};
  submitted = false;
  constructor() {}

  /*Using ViewChild to Access the Form*/
  onSubmit(){
    console.log(this.userForm);
    this.submitted = true;
    this.user.name = this.userForm?.value.username;
    this.user.email = this.userForm?.value.email;
  }

  /*Passing Element Reference as Argument*/
  // onSubmit(form : NgForm){
  //   console.log(form);
  // }

  suggestUserName() {
    const suggestedName = "John Doe";
    /* Rewrites the entire form */
  //   this.userForm?.setValue({
  //     userData : {
  //       username : suggestedName,
  //       email: ''
  //     },
  //     secret : 'pet',
  //     userAnswer: '',
  //     gender: 'male'
  //   });

  /* Rewrite specific fields */
  this.userForm?.form.patchValue({
    userData: {
      username: suggestedName
    }
  })
  }


  ngOnInit() {}
}
