import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  user = new User("Sumit", "test", "sumit@kukreja.net")
  loggedIn : boolean = false
  loggedOut : boolean = true
  
  login = () => {

  }
  logout = () => {
    
  }
  register = () => {

  }
  profile = () => {
    
  }
  getJobs = () => {

  }
}

export class User {

  constructor(
    public name: string,
    public password: string,
    public email: string
  ) {  }

}
