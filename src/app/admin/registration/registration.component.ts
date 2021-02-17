import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regisform = new FormGroup({
    firstname : new FormControl('', Validators.required),
    middlename : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required),
    fathername : new FormControl('', Validators.required),
    mothername : new FormControl('', Validators.required),
    dob : new FormControl('', Validators.required),
    main : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    categorie : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    contact : new FormControl('', [Validators.required, Validators.minLength(10)]),

  });
  public submitregis(): void
  {

  }

  constructor(  ) {


   }

  ngOnInit(): void {
  }

}
