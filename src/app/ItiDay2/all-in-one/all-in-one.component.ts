import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent implements OnInit {

  constructor() { }
  namee:string="";
  age:number
  students:{}[]=[]
  add(){
    let student :{}={n:this.namee,g:this.age}
    this.students.push(student)
    console.log(this.students)
  }
  ngOnInit(): void {
  }

}
