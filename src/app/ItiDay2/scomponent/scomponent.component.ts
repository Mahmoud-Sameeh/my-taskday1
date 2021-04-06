import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scomponent',
  templateUrl: './scomponent.component.html',
  styleUrls: ['./scomponent.component.css']
})
export class ScomponentComponent implements OnInit {

  constructor() { }
  @Input() getlist :{};
   check(){
     console.log(this.getlist)
   }
  ngOnInit(): void {
  }

}
