import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  homeDisplayed:boolean = false;
  portfolioDisplayed:boolean = false;
  aboutDisplayed:boolean = false;

  elements: HTMLElement[] = [];
  positionEL:Number[]=[]; 
  constructor() {
    
    setTimeout(() =>{
      
      this.elements=this.defineElements();
      this.positionEL=this.giveElementPosition(this.elements);
      this.highlightLinks();
    },100 )
    
   }

  ngOnInit(): void {
  }

  highlightLinks(){
  setInterval(() =>{
    let scroll=document.documentElement.scrollTop +200;
   // console.log("")
    
    if( scroll<this.positionEL[2]){
      this.homeDisplayed=true;
      this.aboutDisplayed=false;
      this.portfolioDisplayed=false;
    //  console.log("")
    }
    else if(scroll>=this.positionEL[2] && scroll <this.positionEL[3]) {
      this.homeDisplayed=false;
      this.aboutDisplayed=false;
      this.portfolioDisplayed=true;
    //  console.log("")
    }
    else if(scroll>=this.positionEL[3] && scroll<this.positionEL[4]) {
      this.homeDisplayed=false;
      this.aboutDisplayed=true;
      this.portfolioDisplayed=false;
    //  console.log("")
    }
    
  },100)
   
  }

  defineElements(): HTMLElement[] {
    let homeElement = (<HTMLElement>document.getElementById('home-container'));
    let skillElement = (<HTMLElement>document.getElementById('skills-container'));
    let workElement = (<HTMLElement>document.getElementById('work-container'));
    let aboutElement = (<HTMLElement>document.getElementById('aboutMe-container'));
    let contactElement = (<HTMLElement>document.getElementById('contact-container'));
    
    return [homeElement,skillElement,workElement,aboutElement,contactElement]
  }

  giveElementPosition(elArray:HTMLElement[]): Number[] {
    let positions:number[] =[];
  
    elArray.forEach(element => positions.push(element.offsetTop -200));

    return positions;
  }
  
}
