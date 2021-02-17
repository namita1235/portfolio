import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit {
  name2 = ' ' ;
fname2 = ' ';
mname2 = ' ';
quali1 = ' ';
quali22 = ' ';
quali32 = ' ';
addr2 = ' ';
gender2 = ' ';
dob2 = ' ';
nat2 = ' ';
relig2 = ' ';
quali24 = false;
quali34 = false;
btn3 = false;
btn2 =  true;
// tslint:disable-next-line: max-line-length
public inputdata( name: any, fname: any, mname: any , quali: any , addr: any, gender: any , dob: any, nat: any, relig: any)
{
   this.name2 =  name;
   this.fname2 = fname;
   this.mname2 = mname;
   this.quali1 = quali;
  //  this.quali22 = quali2;
  //  this.quali32 = quali3;
   this.addr2 = addr;
   this.gender2 = gender;
   this.dob2 = dob;
   this.nat2 = nat;
   this.relig2 = relig;
}
public click2(): void
{
  this.quali24 = true;
  this.btn3 = true;
  this.btn2 = false;

}
public click3(): void
{
  this.quali34 = true;
  this.btn3 = false;
  this.btn2 =  false;
}


  constructor() { }

  ngOnInit(): void {
  }

}
