// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
// import { IBooking } from './travel-list.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {
//   private bookingsUrl = 'api/bookings'; 

//   constructor(private http: HttpClient) {}

//   getBookings(): Observable<IBooking[]> {
//     return this.http.get<IBooking[]>(this.bookingsUrl).pipe(
//       tap(data => console.log('All bookings:', JSON.stringify(data))),
//       catchError(this.handleError)
//     );
//   }

//   getBookingById(id: number): Observable<IBooking | undefined> {
//     return this.getBookings().pipe(
//       map((bookings: IBooking[]) => bookings.find(b => b.tourID === id)),
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse): Observable<never> {
//     console.error('An error occurred:', error.message);
//     return throwError(() => new Error('Something went wrong; please try again later.'));
//   }
// }


import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { IBooking } from "./travel-list.model";
 
@Injectable({
  providedIn: 'root'
})
export class TravelistService {
  private apiUrl = 'api/travels.json';
  private travels: IBooking[] = [];
 
  constructor(private http: HttpClient) {}
 
 
  getBooking(): Observable<IBooking[]> {
    return this.http.get<IBooking[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching bookings', error);
        return of([]);
      })
    );
  }
 
 
  getTravelById(id: number): Observable<IBooking | undefined> {
    return this.getBooking().pipe(
      map(travels => travels.find(travel => travel.tourID === id))
    );
  }
 
 
  addTravel(newTravel: IBooking): void {
    this.travels.push(newTravel);
  }
 
  updateTravel(travel: IBooking): void {
    const index = this.travels.findIndex(x => x.tourID === travel.tourID);
    if (index !== -1) {
      this.travels[index] = travel;
    }
  }
 
 
  deleteTravel(id: number): void {
    const index = this.travels.findIndex(travel => travel.tourID === id);
    if (index !== -1) {
      this.travels.splice(index, 1);
    }
  }
}