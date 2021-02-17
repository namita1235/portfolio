import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { BiodataComponent } from './biodata/biodata.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule} from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArrayobjectComponent } from './arrayobject/arrayobject.component';
import { RegistrationComponent } from './registration/registration.component';
import { LovecalComponent } from './lovecal/lovecal.component';


@NgModule({
  declarations: [LoginComponent, AboutmeComponent, CalculatorComponent, BiodataComponent, ContactComponent, PagenotfoundComponent, ArrayobjectComponent, RegistrationComponent, LovecalComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatSelectModule,
    FormsModule,

  ],
  exports: [
  LoginComponent,
AboutmeComponent,
BiodataComponent,
ContactComponent,
],
schemas: [
  CUSTOM_ELEMENTS_SCHEMA,

  NO_ERRORS_SCHEMA,
]
})


export class AdminModule { }
