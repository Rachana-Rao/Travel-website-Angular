
import { Component } from '@angular/core';
import { User } from './contact-us.model';
import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: 'contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
user = new User();
email: any;


save(userForm: NgForm) {
  console.log("Form submitted:", userForm);
  if (userForm.valid) {
    console.log("Saved info: ", JSON.stringify(userForm.value));

   
    userForm.resetForm();
    this.user = new User();
  } else {
    console.log("Form is invalid.");
  }
}
}




