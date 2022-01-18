import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  homeDisplayed=false;
  constructor() {
    setTimeout(() =>{
      this.highlightLinks();
    },1000)
    
   }

  ngOnInit(): void {
  }

  highlightLinks(){
  setInterval(() =>{
    let scroll=document.documentElement.scrollTop || document.body.scrollTop;
    let heightHome = document.getElementById('home-content')?.offsetHeight;
    
    if(heightHome && scroll<heightHome){
      
      console.log('home displayed')
      this.homeDisplayed=true;
    }
    else {
      this.homeDisplayed=false;
    }
    
  },1000)
   
  }
  
}
