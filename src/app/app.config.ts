import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { routes } from './app.routes';
import { HttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
 
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(FormsModule,HttpClient), provideAnimationsAsync()
    
  ]
};

