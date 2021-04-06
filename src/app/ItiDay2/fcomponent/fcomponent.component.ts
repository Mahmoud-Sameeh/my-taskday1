import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-fcomponent',
  templateUrl: './fcomponent.component.html',
  styleUrls: ['./fcomponent.component.css'],
})
export class FComponentComponent implements OnInit {
  constructor() {}
  namee: string = '';
  age: number;
  students: {}[] = [];
  add() {
    let student: { n: string; g: number } = { n: this.namee, g: this.age };
    this.students.push(student);
    //   console.log(this.students)
  }
  checker: boolean;
  attr: boolean = true;
  @Output() myevent = new EventEmitter();
  checkvalindation(): boolean {
    if (this.namee == '' || isNaN(this.age)) {
      this.checker = false;
      this.attr = true;
    }
    else if (this.age!=NaN&&this.age>18) {
      this.checker=false
      console.log(Number.isInteger(parseInt(this.namee)))
      if(Number.isInteger(parseInt(this.namee)) ==false)
      {
        
        this.attr=false
      }
      else{
        this.attr=true
        
      }
    
      console.log("sconed condition")
    } 
    else if (this.age < 18) {
      this.checker = true;
      this.attr = true;
      console.log('aaaaaa');
    } 
  
    return this.checker;
  }

  sender() {
    this.add();
    this.myevent.emit(this.students);
  }
  ngOnInit(): void {}
}
