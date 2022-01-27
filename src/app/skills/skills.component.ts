import { Component, OnInit } from '@angular/core';


class Skill {
  src: string;
  text: string;
  description: string;
  constructor(src: string, text: string,description: string){
    this.src = src;
    this.text = text;
    this.description = description;
  }
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public hiddenP: HTMLElement;
  public skills: Skill[];
  public elements: HTMLElement[];

  constructor() {
    this.hiddenP= (<HTMLElement>document.getElementById("hiddenP"));
    this.elements =[];
    this.skills=[
      new Skill("assets/img/Group 205.png","HTML/CSS","I learned Html/css"),
      new Skill("assets/img/java script.png","JavaScript","I learned Html/css"),
      new Skill("assets/img/angular.png","Angular","I learned Html/css"),
      new Skill("assets/img/ts-logo-128.png","TypeScript","I learned Html/css"),
      new Skill("assets/img/Git-Icon-1788C 2.png","Git","I learned Html/css"),
      new Skill("assets/img/icons8-rest-api-80 2.png","Rest APIs","I learned Html/css"),
      new Skill("assets/img/octave-logo.png","Octave","I learned Html/css"),
    ];
    setTimeout(()=>{
    this.elements= this.defineElements();
    this.hiddenP= (<HTMLElement>document.getElementById("hiddenP"));
    this.displayText();
    },100);
    
   }

  ngOnInit(): void {
  }


  defineElements(): HTMLElement[] {
    
    let result : HTMLElement[]=[]; 
    this.skills.forEach((skill,index)=>{
      let element = (<HTMLElement>document.getElementById("skill-"+index));
      result.push(element);
    })
    console.log(result);
    
    return result;
  }


  displayText(): void {
    let skills=this.skills;
    let hiddenP=this.hiddenP;
    this.elements.forEach((element,index)=>{
     
        element.addEventListener("mouseover", function() {
          hiddenP.classList.remove("opa-zero");
          hiddenP.innerHTML=skills[index].description;
           console.log("mouseover",element.id) });
        element.addEventListener("mouseout", function() {
          hiddenP.classList.add("opa-zero");
          hiddenP.innerHTML=".....";
        })
     
    })
  }

}
