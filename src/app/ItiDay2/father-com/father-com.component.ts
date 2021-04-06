import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-com',
  templateUrl: './father-com.component.html',
  styleUrls: ['./father-com.component.css']
})
export class FatherComComponent implements OnInit {

  list:{}[]=[];
  constructor() { }
  recieve ($event){
     this.list=$event;
    // console.log(this.list)
  }

  ngOnInit(): void {
  }

}
