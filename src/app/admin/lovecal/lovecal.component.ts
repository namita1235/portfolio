import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lovecal',
  templateUrl: './lovecal.component.html',
  styleUrls: ['./lovecal.component.css']
})
export class LovecalComponent implements OnInit {

  num = 0 ;
  hide = false;
  loveform = new FormGroup ({
    name: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    secname: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
  });

  public calculate(): void  
  {
    this.num = (Math.random()  * 100) + 1;
    this.hide = true;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
