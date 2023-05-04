import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-marker-list',
  templateUrl: './marker-list.component.html',
  styleUrls: ['./marker-list.component.css'],
})
export class MarkerListComponent implements OnInit {
  markers: any[] = [];
  selectedMarker: any = null;

  constructor(private markerService: MarkerService) {}

  ngOnInit() {
    this.loadMarkers();
  }

  loadMarkers() {
    this.markerService.getMarkers().subscribe((markers: any) => {
      this.markers = markers;
    });
  }

  selectMarker(marker: any) {
    this.selectedMarker = { ...marker };
  }

  saveChanges() {
    this.markerService.updateMarker(this.selectedMarker).subscribe(() => {
      const index = this.markers.findIndex((marker) => marker._id === this.selectedMarker._id);
      this.markers[index] = this.selectedMarker;
      this.selectedMarker = null;
    });
  }
}
