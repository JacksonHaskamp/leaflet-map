import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  markerCreated: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) {}
  

  createMarker(marker: any) {
    const apiUrl = 'http://localhost:3000/markers';
    return this.http.post(apiUrl, marker).pipe(
      tap((newMarker: any) => {
        // Emit the created marker
        this.markerCreated.emit(newMarker);
      })
    );
  }

  getMarkers() {
    const apiUrl = 'http://localhost:3000/markers'; 
    return this.http.get(apiUrl);
  }

  updateMarker(marker: any) {
    const id = marker._id;
    console.log(id);
    return this.http.put('http://localhost:3000/markers/' + id, marker);
  }
  
  deleteMarker(id: string) {
    console.log(id);
    return this.http.delete('http://localhost:3000/markers/' + id);
  }
  
  
  
  

}
