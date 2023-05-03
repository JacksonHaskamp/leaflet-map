import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  email = '';
  password = '';

  constructor(private authService: AuthenticationService) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(/* Your logic here */);

  }
}
