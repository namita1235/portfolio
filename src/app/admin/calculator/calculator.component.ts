import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

public mssg:string="CALCULATOR";

refresh(): void {

  window.location.reload();
}

inputValue = null;
outputValue = null;

public expression_str:String='';
public param_val:number=0;
public display_val:number=0;
public master_val:number=0;
public operator_str:String='';

public one(param:any)
{
  this.param_val = param;
  this.expression_str = this.expression_str + ' ' + this.param_val;
}



passOperator( operator_val: any) {

  switch (operator_val){
    case 'A': {
      this.expression_str = this.expression_str + '+';
      break;
    }
    case 'S': {
      this.expression_str = this.expression_str + '-';
      break;
    }
    case 'E': {
      this.expression_str = this.expression_str + '=';
      break;
    }
    case 'P': {
      this.expression_str = this.expression_str + '.';
      break;
    }
    case 'M': {
      this.expression_str = this.expression_str + '*';
      break;
    }
    case 'D': {
      this.expression_str = this.expression_str + '/';
      break;
    }

    default: {
        console.log('Default');
        break;
    }
}
}

calname = '';
calnage  ;
caladdr = '';
  constructor( private service: ServiceService) {
    this.calname = this.service.getData().name;
    this.calnage = this.service.getData().age;
    this.caladdr = this.service.getData().address;

  }

  ngOnInit(): void {
  }

}
