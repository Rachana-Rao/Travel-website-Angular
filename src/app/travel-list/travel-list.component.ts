

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IBooking } from './travel-list.model';
import { TravelRatingComponent } from '../travel-rating/travel-rating.component';
import { BookingService } from './travel.service';
import { TravelEditComponent } from '../travel-edit/travel-edit.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, TravelRatingComponent, RouterModule, TravelEditComponent] 
})
 export class TravelListComponent implements OnInit {
  searchTerm: string = ''; 
  destinations: IBooking[] = [];
  selectedId: number | null = null; // Property to store selected destination ID

  constructor(private _bookService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.destinations = this._bookService.getBooking();
  }

  get filteredDestinations() {
    const searchLower = this.searchTerm?.toLowerCase() || '';
    return this.destinations.filter(destination =>
      destination.name.toLowerCase().startsWith(searchLower)  
    );
  }

  onRatingClicked(message: string): void {
    alert(message);
  }

  // Select destination for editing or deletion
  selectDestination(id: number): void {
    this.selectedId = id;
  }

  onEdit(): void {
    if (this.selectedId !== null) {
      this.router.navigate(['/travel-edit', this.selectedId]);
    }
  }

  onDelete(): void {
    if (this.selectedId !== null) {
      alert(`Delete destination with ID: ${this.selectedId}`);
    }
  }
}

// export class TravelListComponent implements OnInit {
//   searchTerm: string = '';
//   destinations: IBooking[] = [];
//   sub!:Subscription;
//   errorMessage:string;

//   constructor(private _bookService: BookingService, private router: Router) {}

//   ngOnInit(): void {
//     this.destinations = this._bookService.getBooking();
//   }

//   // ngOnInit(): void {
    
//   //   console.log("At the onInit phase...");
    
//   //   // Subscribe to the BookingService to get the list of destinations
//   //   this.sub = this._bookService.getBooking()({
//   //     next: (travel: IBooking[]) => {
//   //       this.destinations = travel; 
//   //     },
//   //     error: (err) => {
//   //       this.errorMessage = err;
//   //       console.error("Error fetching bookings:", err);
//   //     }
//   //   });
//   // }

//   get filteredDestinations() {
//     const searchLower = this.searchTerm?.toLowerCase() || '';
//     return this.destinations.filter(destination =>
//       destination.name.toLowerCase().startsWith(searchLower)
//     );
//   }

//   onRatingClicked(message: string): void {
//     alert(message);
//   }

//   onEdit(destinationId: number): void {
//     this.router.navigate(['/travel-details', destinationId]);
//   }

//   onDelete(destinationId: number): void {
//     if (confirm(`Are you sure you want to delete this destination?`)) {
//       this._bookService.deleteTravelById(destinationId);
//       this.destinations = this.destinations.filter(d => d.tourID !== destinationId);
//     }
//   }
// }


