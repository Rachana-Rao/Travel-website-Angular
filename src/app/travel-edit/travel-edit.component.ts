
// import { Component, OnInit } from '@angular/core';
// import { TravelDetailsComponent } from '../travel-details/travel-details.component';
// import { ActivatedRoute, Router } from '@angular/router';
// import { IBooking } from '../travel-list/travel-list.model';
// import { BookingService } from '../travel-list/travel.service';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-travel-edit',
//   standalone: true,
//   imports: [TravelDetailsComponent, FormsModule],
//   templateUrl: './travel-edit.component.html',
//   styleUrls: ['./travel-edit.component.css']
// })
// export class TravelEditComponent implements OnInit {
//   id: number | undefined;
//   travel: IBooking | undefined;

//   constructor(
//     private router: Router,
//     private route: ActivatedRoute,
//     private bookService: BookingService
//   ) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((map) => {
//       this.id = +map.get('tourID')!;
//       this.travel = this.bookService.getTravelById(this.id);
      
//       // Handle case if travel is undefined
//       if (!this.travel) {
//         console.error('Travel not found');
//         this.router.navigate(['/travel-list']);
//       }
//     });
//   }

//   onSave() {
//     if (this.travel) {
//       this.bookService.updateTravel(this.travel);
//       alert("Destination updated successfully!");
//       this.router.navigate(['/travel-list']);
//     } else {
//       alert("Could not update destination; data is missing.");
//     }
//   }
// }


import { Component } from '@angular/core';
import { IBooking } from '../travel-list/travel-list.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../travel-list/travel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

 
@Component({
  selector: 'app-travel-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './travel-edit.component.html',
  styleUrls: ['./travel-edit.component.css']
})
export class TravelEditComponent {
  id: number | undefined;
  travel: IBooking = {
    tourID: 0,
    img: '',
    name: '',
    location: '',
    rating: 0,
    price: 0,
   
  };
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookingService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id')!;
      const travelDetails = this.bookService.getTravelById(this.id);
      if (travelDetails) {
        this.travel = travelDetails;
      }
    });
  }
 
  onSave() {
    if (this.travel) {
      this.bookService.updateBooking(this.travel);
      alert("Travel destination updated successfully");
      this.router.navigate(['/travel-list']);
    } else {
      alert("No travel destination selected to update.");
    }
  }
}


