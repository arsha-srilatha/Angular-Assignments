import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loggedIn: boolean = false;
constructor(private router: Router, private auth: AuthService){
  
}
loadEmployee(){
  this.router.navigate(['/employee-details']);
}

onLogin(){
  this.auth.login();
  this.loggedIn = true;
}
onLogout(){
  this.auth.logout();
  this.loggedIn = false;
}
}
