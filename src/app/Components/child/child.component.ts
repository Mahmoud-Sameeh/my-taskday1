import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

@Input() Message:string
@Input() fromfather:string
  ngOnInit(): void {
  }

}
