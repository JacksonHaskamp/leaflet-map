import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarkerService } from '../marker.service';
import * as L from 'leaflet';
import 'leaflet.awesome-markers';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnDestroy {
  map: L.Map | undefined;
  markersLayer: L.LayerGroup | undefined;
  customIcon: L.Icon | undefined;

  iconSizes: [number, number][] = [
    [10, 25],
    [20, 50],
    [30, 75],
  ];
  selectedIconSize: [number, number] = this.iconSizes[0];

  constructor(private markerService: MarkerService) {}

  ngOnInit() {
    this.initMap();
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.off('click');
      this.map.remove();
    }
  }

  initMap() {
    this.map = L.map('map').setView([39.0997, -94.5786], 13);
    this.markersLayer = new L.LayerGroup();
    this.markersLayer.addTo(this.map);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoidmVydGliZWF0IiwiYSI6ImNsaDg5dGE4dDA0OWYzbXM5ZDRnam02N2MifQ.itLsS7uETccoCPvw2fryQw'
    }).addTo(this.map);

    this.customIcon = L.icon({
      iconUrl: 'assets/marker-purple.png',
      iconSize: this.selectedIconSize,
      iconAnchor: [this.selectedIconSize[0] / 2, this.selectedIconSize[1]],
      popupAnchor: [0, -this.selectedIconSize[1]],
    });

    this.loadMarkers();

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const marker = L.marker(e.latlng, { icon: this.customIcon }).addTo(this.markersLayer!);

      const markerData = {
        name: 'New Marker',
        description: 'A new marker added to the map.',
        position: {
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        },
        iconSize: this.selectedIconSize, // Add this line
      };
      

      this.markerService.createMarker(markerData).subscribe((newMarker: any) => {
        marker.bindPopup(`<b>\${newMarker.name}</b><br>\${newMarker.description}`);
      });
    });
  }

  loadMarkers() {
    this.markerService.getMarkers().subscribe((markers: any) => {
      markers.forEach((markerData: any) => {
        const iconSize = markerData.iconSize ? (markerData.iconSize as L.PointTuple) : [25, 41] as L.PointTuple;
        const customIconWithSize = L.icon({
          iconUrl: 'assets/marker-purple.png',
          iconSize,
          iconAnchor: [iconSize[0] / 2, iconSize[1]],
          popupAnchor: [0, -iconSize[1]],
        });

        const marker = L.marker([markerData.position.lat, markerData.position.lng], { icon: customIconWithSize }).addTo(this.markersLayer!);
        marker.bindPopup(`<b>\${markerData.name}</b><br>\${markerData.description}`);
      });
    });
  }

  changeIconSize(event: Event) {
    const target = event.target as HTMLSelectElement;
    const sizeIndex = Number(target.value);
    this.selectedIconSize = this.iconSizes[sizeIndex];
    this.customIcon = L.icon({
      iconUrl: 'assets/marker-purple.png',
      iconSize: this.selectedIconSize,
      iconAnchor: [this.selectedIconSize[0] / 2, this.selectedIconSize[1]],
      popupAnchor: [0, -this.selectedIconSize[1]],
    });
  }
  
}
