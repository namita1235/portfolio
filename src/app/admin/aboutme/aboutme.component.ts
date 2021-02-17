import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
 about = false;
  contact = false;
  project = false;
  galary = false;
  hide = false;
  alert = false;
  login = true;
  storemail = 'belal@gmail.com';
  storepassword = 'belal143';

  public back(): void
  {
    window.location.reload ( );
  }
  public done(): void
  {
    alert(' Your Message is Send Successfully ');
  }


// tslint:disable-next-line: typedef
public check(email: string, password: string)
{
    // alert(email)
    // alert(password)
    // tslint:disable-next-line: triple-equals
    if (this.storemail == email && this.storepassword == password )
    {
    //  alert("Successfully Login :D")
      this.hide = true;
      this.login = false;
    }
    else{
      this.hide = false;
      this.login = true;
      this.alert = true;
     // alert("Sorry Wrong User Details.....!!! ")
    }

}
  constructor() { }

  ngOnInit(): void {
  }

}
