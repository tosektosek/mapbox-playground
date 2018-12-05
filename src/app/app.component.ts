import { Component, OnInit } from '@angular/core';
import { Marker } from 'mapbox-gl';
import { MarkerComponent } from 'ngx-mapbox-gl/lib/marker/marker.component';
export const warsawCoordinates = [21.23400, 52.21890];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  markers = [];
  ngOnInit() {

  }

  addMarker(event) {
    if (event.lngLat && event.originalEvent.target.className !== 'marker') {
      this.markers.push({ lngLat: event.lngLat });
    }
  }

  handleMarkerClick(event) {
    // console.log(event)
  }
}
