import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  
  login(email: string, password: string) {
    const apiUrl = 'http://localhost:3000/api/login'; // Replace with your API endpoint
    return this.http.post(apiUrl, { email, password });
  }
  
  register(email: string, password: string) {
    const apiUrl = 'http://localhost:3000/api/register'; // Replace with your API endpoint
    return this.http.post(apiUrl, { email, password });
  }
  


}
