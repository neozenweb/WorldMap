import { Component } from '@angular/core';
import { DemoService } from '../demo.service';
import 'svgmap/dist/svgMap.min.css';
import { MapComponent } from '../map/map.component';
@Component({
  selector: 'app-map-image',
  templateUrl: './map-image.component.html',
  styleUrls: ['./map-image.component.scss']
})
export class MapImageComponent {
  countryResponse: any = {};
  countryName: string = '';
 
  constructor() { }
 
 
}
