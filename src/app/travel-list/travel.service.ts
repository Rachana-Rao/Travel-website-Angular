// Code-1
// import { Injectable } from "@angular/core";
// import { IBooking } from "./travel-list.model";

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {
//   private destinations: IBooking[] = [
//     {
//       tourID: 1,
//       img: 'assets/images/paris.jpg',
//       name: 'Paris',
//       location: 'France',
//       rating: 4.8,
//       price: 45000
//     },
//     {
//       tourID: 2,
//       img: 'assets/images/NYC.jpg',
//       name: 'New York',
//       location: 'USA',
//       rating: 4.7,
//       price: 20000
//     },
//     {
//       tourID: 3,
//       img: 'assets/images/rome.jpg',
//       name: 'Rome',
//       location: 'Italy',
//       rating: 4.9,
//       price: 18000
//     },
//     {
//       tourID: 4,
//       img: 'assets/images/london.jpg',
//       name: 'London',
//       location: 'UK',
//       rating: 4.8,
//       price: 17500
//     },
//     {
//       tourID: 5,
//       img: 'assets/images/sydney.jpg',
//       name: 'Sydney',
//       location: 'Australia',
//       rating: 4.6,
//       price: 22000
//     },
//     {
//       tourID: 6,
//       img: 'assets/images/tokyo.jpg',
//       name: 'Tokyo',
//       location: 'Japan',
//       rating: 3.5,
//       price: 19000
//     },
//     {
//       tourID: 7,
//       img: 'assets/images/moscow.jpg',
//       name: 'Moscow',
//       location: 'Russia',
//       rating: 4.7,
//       price: 16000
//     },
//     {
//       tourID: 8,
//       img: 'assets/images/barcelona.jpg',
//       name: 'Barcelona',
//       location: 'Spain',
//       rating: 4.0,
//       price: 17000
//     },
//     {
//       tourID: 9,
//       img: 'assets/images/maldives.jpg',
//       name: 'Maldives',
//       location: 'Maldives',
//       rating: 4.0,
//       price: 30000
//     },
//   ];

//   // Get all bookings
//   getBooking(): IBooking[] {
//     return [...this.destinations];
//   }

//   // Get a specific travel by ID
//   getTravelById(id: number): IBooking | undefined {
//     return this.destinations.find(travel => travel.tourID === id);
//   }

//   // Add a new travel destination
//   addTravel(newTravel: IBooking): void {
//     // Generate a new ID based on the max existing ID + 1
//     const maxId = Math.max(...this.destinations.map(t => t.tourID));
//     newTravel.tourID = maxId + 1;
//     this.destinations.push(newTravel);
//   }

//   // Update an existing travel destination
//   updateTravel(updatedTravel: IBooking): void {
//     const index = this.destinations.findIndex(travel => travel.tourID === updatedTravel.tourID);
//     if (index !== -1) {
//       this.destinations[index] = updatedTravel;
//     }
//   }

//   // Delete a travel destination by ID
//   deleteTravel(id: number): void {
//     this.destinations = this.destinations.filter(travel => travel.tourID !== id);
//   }
// }

//Code-2
import { Injectable } from "@angular/core";
import { IBooking } from "./travel-list.model";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private destinations: IBooking[] = [
    {
      tourID: 1,
      img: 'assets/images/paris.jpg',
      name: 'Paris',
      location: 'France',
      rating: 4.8,
      price: 45000
    },
    {
      tourID: 2,
      img: 'assets/images/NYC.jpg',
      name: 'New York',
      location: 'USA',
      rating: 4.7,
      price: 20000
    },
    {
      tourID: 3,
      img: 'assets/images/rome.jpg',
      name: 'Rome',
      location: 'Italy',
      rating: 4.9,
      price: 18000
    },
    {
      tourID: 4,
      img: 'assets/images/london.jpg',
      name: 'London',
      location: 'UK',
      rating: 4.8,
      price: 17500
    },
    {
      tourID: 5,
      img: 'assets/images/sydney.jpg',
      name: 'Sydney',
      location: 'Australia',
      rating: 4.6,
      price: 22000
    },
    {
      tourID: 6,
      img: 'assets/images/tokyo.jpg',
      name: 'Tokyo',
      location: 'Japan',
      rating: 3.5,
      price: 19000
    },
    {
      tourID: 7,
      img: 'assets/images/moscow.jpg',
      name: 'Moscow',
      location: 'Russia',
      rating: 4.7,
      price: 16000
    },
    {
      tourID: 8,
      img: 'assets/images/barcelona.jpg',
      name: 'Barcelona',
      location: 'Spain',
      rating: 4.0,
      price: 17000
    },
    {
      tourID: 9,
      img: 'assets/images/maldives.jpg',
      name: 'Maldives',
      location: 'Maldives',
      rating: 4.0,
      price: 30000
    },
    
  ];

  // Get all bookings
  getBooking(): IBooking[] {
    return [...this.destinations];
  }

  // Get a specific travel by ID
  getTravelById(id: number): IBooking | undefined {
    return this.destinations.find(travel => travel.tourID === id);
  }

  // Add a new booking
  addBooking(newBooking: IBooking): void {
    const newId = Math.max(...this.destinations.map(dest => dest.tourID)) + 1;
    this.destinations.push({ ...newBooking, tourID: newId });
  }

  // Update an existing booking
  updateBooking(updatedBooking: IBooking): void {
    const index = this.destinations.findIndex(dest => dest.tourID === updatedBooking.tourID);
    if (index !== -1) {
      this.destinations[index] = updatedBooking;
    }
  }

  // Delete a booking by ID
  deleteBooking(id: number): void {
    this.destinations = this.destinations.filter(dest => dest.tourID !== id);
  }
}


// import { Injectable } from "@angular/core";
// import { IBooking } from "./travel-list.model";

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {
//   updateTravel(travel: IBooking) {
//     throw new Error('Method not implemented.');
//   }
//   private destinations: IBooking[] = [
//     {
//       tourID: 1,
//       img: 'assets/images/paris.jpg',
//       name: 'Paris',
//       location: 'France',
//       rating: 4.8,
//       price: 45000
//     },
//     {
//       tourID: 2,
//       img: 'assets/images/NYC.jpg',
//       name: 'New York',
//       location: 'USA',
//       rating: 4.7,
//       price: 20000
//     },
//     {
//     tourID: 3,
//     img: 'assets/images/rome.jpg',
//     name: 'Rome',
//     location: 'Italy',
//     rating: 4.9,
//     price: 18000
//   },
//   {
//     tourID: 4,
//     img: 'assets/images/london.jpg',
//     name: 'London',
//     location: 'UK',
//     rating: 4.8,
//     price: 17500
//   },
//   {
//     tourID: 5,
//     img: 'assets/images/sydney.jpg',
//     name: 'Sydney',
//     location: 'Australia',
//     rating: 4.6,
//     price: 22000
//   },
//   {
//     tourID: 6,
//     img: 'assets/images/tokyo.jpg',
//     name: 'Tokyo',
//     location: 'Japan',
//     rating: 3.5,
//     price: 19000
//   },
//   {
//     tourID: 7,
//     img: 'assets/images/moscow.jpg',
//     name: 'Moscow',
//     location: 'Russia',
//     rating: 4.7,
//     price: 16000
//   },
//   {
//     tourID: 8,
//     img: 'assets/images/barcelona.jpg',
//     name: 'Barcelona',
//     location: 'Spain',
//     rating: 4.0,
//     price: 17000
//   },
//   {
//     tourID: 9,
//     img: 'assets/images/maldives.jpg',
//     name: 'Maldives',
//     location: 'Maldives',
//     rating: 4.0,
//     price: 30000
//   },
  
    
//   ];


// getBooking(): IBooking[] {
//   return [...this.destinations];
// }

// // Get a specific travel by ID
// getTravelById(id: number): IBooking | undefined {
//   return this.destinations.find(travel => travel.tourID === id);
// }

// Update an existing booking
// updateBooking(updatedTravel: IBooking): void {
//   const index = this.destinations.findIndex(dest => dest.tourID === updatedTravel.tourID);
//   if (index !== -1) {
//     this.destinations[index] = updatedTravel;
//   }
// }

// // Delete a booking by ID
// deleteBooking(id: number): void {
//   const index = this.destinations.findIndex(dest => dest.tourID === id);
//   if (index !== -1) {
//     this.destinations.splice(index, 1);
//   }
// }
// }

// getBooking(): IBooking[] {
//   return this.destinations;
// }

// getTravelById(id: number): IBooking | undefined {
//   return this.destinations.find(b => b.tourID === id);
// }


// updateBooking(updatedTravel: IBooking): void {
//   const index = this.destinations.findIndex(dest => dest.tourID === updatedTravel.tourID);
//   if (index !== -1) {
//     this.destinations[index] = updatedTravel;
//   }
// }

// deleteTravelById(id: number): void {
//   this.destinations = this.destinations.filter(b => b.tourID !== id);
// }
// }