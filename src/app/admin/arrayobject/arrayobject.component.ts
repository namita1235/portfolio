import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-arrayobject',
  templateUrl: './arrayobject.component.html',
  styleUrls: ['./arrayobject.component.css'],
})
export class ArrayobjectComponent implements OnInit {
  value =  '';
  valuu = '';
  valuuu =  '';

  public arryobject(): void {
    var arry = [
      { name: 'shakil', roll: 143, class: 'ukg' },
      { name: 'belal', roll: 144, class: 'ukg' },
      { name: 'shadow', roll: 145, class: '1st Class' },
      { name: 'shakib', roll: 146, class: 'ukg' },
      { name: 'sahil', roll: 147, class: 'lkg' },
    ];


    // for (let i in arry) {
    //   this.value = Object.values(arry[i]);
    //   this.valuu = Object.values(arry[i]);
    //   this.valuuu = Object.values(arry[i]);
    // }

    var array = [1, 'shakil', 'ahmad', 4, 3];
    array.pop();
    array.push('dilshad');
    array.shift();
    array.unshift('hello');
    array.sort();
    array.indexOf(4);
    var data = array.toString();
    console.log(data);

    for (var val of array) {
      console.log(val);
    }
  }

  public object() {
    let j = 0;
    let i = 0;

    for (let j = 0; j <= 5; j++) {
      console.log('*'.repeat(j));
    }
  }

  // tslint:disable-next-line: member-ordering
  arry = [
    { name: 'Shakil', roll: 143, classes: 'ukg' },
    { name: 'Belal', roll: 144, classes: 'ukg' },
    { name: 'Shadow', roll: 145, classes: '1st Class' },
    { name: 'Shakib', roll: 146, classes: 'ukg' },
    { name: 'Sahil', roll: 147, classes: 'lkg' },
  ];
  public deletearray(index: any) {
    this.arry.splice(index, 1);
  }

  add(name: any, roll: any, classes: any) {
    this.arry.push({ name, roll, classes });
  }
  newname  = '';
  newroll = 0;
  newclasses  = '';
  index = 0;

  edit(index: any) {
    this.newname = this.arry[index].name;
    this.newroll = this.arry[index].roll;
    this.newclasses = this.arry[index].classes;
    this.index = index;
  }

  public update(name: any, roll: any, classes: any) {
    this.arry.splice(this.index, 1, {
      name,
      roll,
      classes,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
