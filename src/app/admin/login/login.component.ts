import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { validateLocaleAndSetLanguage } from 'typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform = new FormGroup({
  name : new FormControl(''),
  contact : new FormControl(''),
  address : new FormControl(''),
  email : new FormControl('', [Validators.required, Validators.email]),
  password : new FormControl('', Validators.minLength(6)),


});

public onsubmit(): void
{
 console.log(this.loginform);

}




  constructor() { }

  ngOnInit(): void {
  }

}
