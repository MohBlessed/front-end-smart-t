import { Component, OnInit } from '@angular/core';
import { GarbageServiceService } from '../services/garbage-service.service';
import Swal from 'sweetalert2';

declare let L: { map: (arg0: string) => { (): any; new(): any; setView: { (arg0: number[], arg1: number): any; new(): any; }; }; tileLayer: (arg0: string, arg1: { attribution: string; }) => { (): any; new(): any; addTo: { (arg0: any): void; new(): any; }; }; marker: (arg0: any[]) => { (): any; new(): any; addTo: { (arg0: any): { (): any; new(): any; bindPopup: { (arg0: string): void; new(): any; }; }; new(): any; }; }; };

@Component({
  selector: 'app-garbage-point',
  templateUrl: './garbage-point.component.html',
  styleUrls: ['./garbage-point.component.css']
})
export class GarbagePointComponent implements OnInit{
  allGarbagePts: any;
  values = 0;
  name='';
  map: any;
  
  constructor(   private http: GarbageServiceService) { }
  ngOnInit(): void {
    this.getAll();
    // console.log(this.name);
    // this.http.search(this.name).subscribe(
    //   (data: any) => {
    //   this.allGarbagePts = data; 
    //  })

  }
  initializeMap() {
    this.map = L.map('map').setView([0, 0], 2); // Initial view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.allGarbagePts.forEach((point: { lat: any; lon: any; name: any; town: any; wasteLevels: any; }) => {
      L.marker([point.lat, point.lon])
        .addTo(this.map)
        .bindPopup(`<b>${point.name}</b><br>${point.town}<br>Waste Levels: ${point.wasteLevels}`);
    });
  }
  getAll(){
    const minValue = 0; // Replace with your actual "Min Value"
    const maxValue = 100; // Replace with your actual "Max Value"
    
    this.http.getAllGarbagePts().subscribe(
      (data: any) => {
        this.allGarbagePts = data; 
        this.initializeMap()
        console.log(this.allGarbagePts);
          this.getAll();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
 
  deleteProperty(id: number) {
    return this.http.deleteGarbagePoint(id).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          title: 'Garbage Point Deleted Successfully',
          icon: 'success',
          timer: 3000, // Time in milliseconds (2 seconds in this example)
          timerProgressBar: true, // Show timer progress bar
          showConfirmButton: false, // Hide the "OK" button
        });
        this.reloadPage();
      },
      error: () => {
        Swal.fire({
          title: 'Garbage Point Not Deleted',
          icon: 'error',
          timer: 2000, // Time in milliseconds (2 seconds in this example)
          timerProgressBar: true, // Show timer progress bar
          showConfirmButton: false, // Hide the "OK" button
        });
      },
    });
  }
  reloadPage(){
    window.location.reload();
  }
}
