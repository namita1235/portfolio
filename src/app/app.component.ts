import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Shakil Ahmad' ;
  about = false;
  contact = false;
  project = false;
  galary = false;
  name: any = '';
  constructor(private service: ServiceService)
  {
    console.warn(this.service.getData().name);
    this.name = this.service.getData();
  }


  public done(): void
  {
    alert('Your Message is Send Successfully');
  }




public hidetoggle(): void
{
  window.location.reload();

}
}
