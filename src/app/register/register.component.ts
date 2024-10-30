// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-customer',
//   standalone: true,
//   imports: [CommonModule,ReactiveFormsModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })

// export class RegisterComponent implements OnInit {
// RegForm!: FormGroup;
// city: any;
// message: any;
  
//   ngOnInit(): void {
//   this.RegForm = new FormGroup({
//     name:new FormControl('',
//     [Validators.required,
//      Validators.minLength(4)]),
//      email:new FormControl('',
//      [Validators.required
//       ]),
 
//   });
//   }

//   get name(){return this.RegForm.get('name');}
//   get email(){return this.RegForm.get('email');}
  

//   onSave()
//   {
//     console.log(this.RegForm.value)
//   }
// }


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  RegForm!: FormGroup;

  ngOnInit(): void {
    this.RegForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      // city: new FormControl('', [
      //   Validators.required
      // ]),
    });
  }

  get name() { return this.RegForm.get('name'); }
  get email() { return this.RegForm.get('email'); }
  //get city() { return this.RegForm.get('city'); }
 

  onSave() {
    //debugger;
    console.log(this.RegForm.value);
  }
}
