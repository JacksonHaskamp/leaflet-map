import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient) {}


  
  createMarker(marker: any) {
    const apiUrl = 'http://localhost:3000/markers'; // Replace with your API endpoint
    return this.http.post(apiUrl, marker);
  }
  
  getMarkers() {
    const apiUrl = 'http://localhost:3000/markers'; // Replace with your API endpoint
    return this.http.get(apiUrl);
  }
  

}
