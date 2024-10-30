/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import this for pipes like currency

@Component({
  selector: 'app-home',
  standalone: true, // Standalone component
  imports: [CommonModule], // <-- Add CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  places = [
    {
      name: 'Tropical Paradise',
      description: 'A beautiful beach destination with crystal-clear water.',
      rent: 150,
      imageUrl: 'assets/tropical.jpg'
    },
    {
      name: 'Mountain Retreat',
      description: 'A serene place nestled in the mountains.',
      rent: 200,
      imageUrl: 'assets/mountain.jpg'
    },
    {
      name: 'City Lights',
      description: 'A vibrant city experience with top-notch amenities.',
      rent: 250,
      imageUrl: 'assets/city.jpg'
    }
  ];

  constructor() {}
}
*/




// import { Component, OnInit } from '@angular/core';



// @Component({
//   selector: 'app-welcome',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() {}

//   ngOnInit() {
//     // Show the "Enjoy the Journey" popup after 2 seconds
//     setTimeout(() => {
//       const popup = document.getElementById('popup');
//       if (popup) {
//         popup.classList.add('popup-show');
//       }
//     }, 2000); // Show the pop-up after 2 seconds
//   }
// }


import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-welcome',
  standalone:true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [MatSlideToggleModule]
})
export class HomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    // Check if the code is running in the browser to safely use 'document'
    if (isPlatformBrowser(this.platformId)) {
      // Show the "Enjoy the Journey" popup after 2 seconds
      setTimeout(() => {
        const popup = document.getElementById('popup');
        if (popup) {
          popup.classList.add('popup-show');
        }
      }, 2000); // Show the pop-up after 2 seconds
    }
  }
 
}
class AppComponent {}
