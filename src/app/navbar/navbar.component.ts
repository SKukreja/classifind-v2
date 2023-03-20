import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  user = new User("Sumit", "test", "sumit@kukreja.net")
  loggedIn : boolean = true
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

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { username, password } = form.value;
    this.authService.login(username, password).subscribe(data => {
      const token = data.token;
      this.authService.setToken(token);
      // redirect to dashboard
    });
  }
}

export class User {

  constructor(
    public name: string,
    public password: string,
    public email: string
  ) {  }

}
