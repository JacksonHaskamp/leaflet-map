import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  register() {
    
    this.authService.register(this.email, this.password).subscribe(
      (response) => {
        console.log(response);
        // Handle successful registration
      },
      (error) => {
        console.error(error);
        // Handle error during registration
      }
    );
  }
}
