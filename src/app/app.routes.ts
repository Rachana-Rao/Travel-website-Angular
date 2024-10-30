
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { BookingComponent } from './booking/booking.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { TravelEditComponent } from './travel-edit/travel-edit.component';

 
export const routes: Routes = [
    {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
    },
 
    {
        path:'home',
        component:HomeComponent
    },
 
    {
        path:'about-us',
        component:AboutUsComponent
    },
   
    {
        path:'travel-list',
        component:TravelListComponent
    },
    {
        path:'travel-details/:tourID',
        component:TravelDetailsComponent
    },
    {
        path:'contact-us',
        component:ContactUsComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'travel-details/:id/edit',
        component:TravelEditComponent
    },
    {  path: 'travel-edit/:id', 
      component: TravelEditComponent 
    },
   
 
 
];

