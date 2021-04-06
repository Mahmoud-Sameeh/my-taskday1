import { Component,OnInit } from '@angular/core';

@Component({
    selector:'app-three',
    templateUrl:'./three.component.html',
    styleUrls:['./three.component.css']
})

export class threeComponent implements OnInit{
task1:string ="one way binding from class to component";
inpval:string="";

changetext(){
   this.inpval="Hello"

   this.task1="Hello"  
   console.log(this.inpval)
}
ShowMeText(e){
this.task1=e.target.value;
this.inpval=e.target.value;

console.log(e.target.value)
}
    ngOnInit(): void {
    }

}