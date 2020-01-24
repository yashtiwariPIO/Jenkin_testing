import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css'],
  animations: [
    trigger('sideanimation',[
      
      transition(':enter', [  
        style({opacity: .8, transform: 'translateX(-100%)', offset: 1.0}),
        animate('.5s ease-out')
      ]),
 
      transition(':leave', [
        animate('.5s ease-in', 
        style({opacity: .8, transform: 'translateX(-100%)',  offset: 1.0}))  
      ]),
    ]),
    trigger('navlinkanimation',[
      
      transition(':enter', [  
        style({opacity: .8, transform: 'translateY(0%)', offset: 1.0}),
        animate('.5s ease-out')
      ]),
 
      transition(':leave', [
        animate('.5s ease-in', 
        style({opacity: .8, transform: 'translateY(-50%)',  offset: 1.0}))  
      ]),
    ]),
    trigger('mainsectionanimation',[
      state('normal',style({'margin-left':'0px'})),
      state('isCollapsed',style({'margin-left':'220px'})),
      transition('normal => isCollapsed', animate('.5s ease-out')),
      transition('isCollapsed => normal', animate('.5s ease-in')),
      
    ])
    
  ]
  
})
export class Dashboard1Component implements OnInit {
  isCollapsed:boolean = true;
  isBodyClick:boolean = true;
  isClick1:boolean = true;
  isClick2:boolean = true;
  isClick3:boolean = true;
  isClick4:boolean = true;
  isClick5:boolean = true;
  state = "normal";
  
  constructor() { }
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
    this.state=='normal' ? this.state='isCollapsed' : this.state='normal';
      
  }
  bodyclick(){
    this.isBodyClick = true;
    
  }
 
  toggleLinks1(){
    this.isClick1 = !this.isClick1;
    this.isClick2 = true;
    this.isClick3 = true;
    this.isClick4 = true;
    this.isClick5 = true;
  }
  toggleLinks2(){
    this.isClick1 = true;
    this.isClick2 = !this.isClick2;
    this.isClick3 = true;
    this.isClick4 = true;
    this.isClick5 = true;
    
  }
  toggleLinks3(){
    this.isClick1 = true;
    this.isClick2 = true;
    this.isClick3 = !this.isClick3;
    this.isClick4 = true;
    this.isClick5 = true;
   
    
    
  }
  toggleLinks4(){
    this.isClick1 = true;
    this.isClick2 = true;
    this.isClick3 = true;
    this.isClick4 = !this.isClick4;
    this.isClick5 = true;
  }
  toggleLinks5(){
    this.isClick1 = true;
    this.isClick2 = true;
    this.isClick3 = true;
    this.isClick4 = true;
    this.isClick5 = !this.isClick5;
  }

  ngOnInit() {
  }

}
