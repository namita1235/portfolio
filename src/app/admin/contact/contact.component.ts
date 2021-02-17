import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  textarea = new FormControl('', [Validators.required]);
  hide = true;

  // tslint:disable-next-line: typedef
  getErrorMessage()
  {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrortextMessage(): void
  {
    if (this.textarea.hasError('required'))
    {
     // return ' You have to enter a Message ';
    }
  }
public submit(): void
{

}
  constructor() { }

  ngOnInit(): void {
  }

}
