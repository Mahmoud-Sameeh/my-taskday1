import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {
  welcomestatment: string = "Welcome From ts";
  twfield:string="a";
  imgdirectory:string="assets"
  num:number=1
  interval:any
  binddata(e){
    console.log(e)
  }
  next()
  {
    if(this.num==4)
    {
      this.imgdir=`assets/images/`+1+`.jpg`
      this.num=1;
    }
    else{
      this.num+=1;

      this.imgdir=`assets/images/`+this.num+`.jpg`
      console.log(  this.imgdir)
    }
  }
  Prev()
  {
    if(this.num==1)
    {
      this.imgdir=`assets/images/`+4+`.jpg`
      this.num=4;
      console.log(this.num)
    }
    else{
      this.num-=1;

      this.imgdir=`assets/images/`+this.num+`.jpg`
      console.log(  this.imgdir)
    }
  }
  start(){
    clearInterval(this.interval)
   this.interval= setInterval(()=>{
      this.next()
    },2000)
  }
  stop(){
    clearInterval(this.interval)
  }
  imgdir=`assets/images/`+1+`.jpg`
    
  constructor() { }
  ngOnInit(): void {

  }

}
