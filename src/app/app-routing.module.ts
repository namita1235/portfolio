import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AboutmeComponent } from './admin/aboutme/aboutme.component';
import { CalculatorComponent } from './admin/calculator/calculator.component';
import { BiodataComponent } from './admin/biodata/biodata.component';
import { ContactComponent } from './admin/contact/contact.component';
import {PagenotfoundComponent} from './admin/pagenotfound/pagenotfound.component';
import { ArrayobjectComponent } from './admin/arrayobject/arrayobject.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import {LovecalComponent} from './admin/lovecal/lovecal.component';

const routes: Routes = [


    {
      path: 'sign up',
      component: LoginComponent
    },
    {
      path: 'aboutme',
      component: AboutmeComponent
    },
    {
      path: 'calculator',
      component: CalculatorComponent
    },
    {
      path: 'biodata',
      component: BiodataComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'arrayobject',
      component: ArrayobjectComponent
    },
    {
      path: 'registration',
      component: RegistrationComponent
    },
    {
      path: 'lovecal',
      component: LovecalComponent
    },
    {
      path: '**',
      component: PagenotfoundComponent
    },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
