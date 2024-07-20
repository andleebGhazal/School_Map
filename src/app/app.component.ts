import { Component, OnInit } from '@angular/core';
import {latLng, tileLayer} from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = '2D Map';
  options = {
    layers:[
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution:'&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
    ],
    zoom: 3,
    center: latLng(51.505, -0.09)
  };
  ngOnInit(): void{
  }
}
