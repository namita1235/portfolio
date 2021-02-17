import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getData()
  {
    return{
      name: 'shakil',
      age: 23,
      address: 'jashedpur',
    }
  }

  constructor() { }
}
