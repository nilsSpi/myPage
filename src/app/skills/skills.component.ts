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
  public fadingEffect:HTMLElement;
  public elements: HTMLElement[];

  constructor() {
    this.fadingEffect= (<HTMLElement>document.getElementById("fadingEffect"));
    this.hiddenP= (<HTMLElement>document.getElementById("hiddenP"));
    this.elements =[];
    this.skills=[
      new Skill("assets/img/Group 205.png","HTML/CSS",
      
      "I learned Html/css"),
      new Skill("assets/img/java script.png","JavaScript",
      "I learned JS"),
      new Skill("assets/img/angular.png","Angular",
      "I learned Angular"),
      new Skill("assets/img/ts-logo-128.png","TypeScript",
      "I learned Typescript"),
      new Skill("assets/img/Git-Icon-1788C 2.png","Git",
      "I learned Git"),
      new Skill("assets/img/icons8-rest-api-80 2.png",
      "Rest APIs","I learned API"),
      new Skill("assets/img/octave-logo.png","Octave",
      "By studying mathematics i learned to work with octave and matlab. Especially numerical methods, optimaziation of non linear functions are beloved subjects of mine"),
    ];
    setTimeout(()=>{
    this.elements= this.defineElements();
    this.hiddenP= (<HTMLElement>document.getElementById("hiddenP"));
    this.fadingEffect= (<HTMLElement>document.getElementById("fadingEffect"));
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
    let fadingEffect=this.fadingEffect;
    this.elements.forEach((element,index)=>{
     
        element.addEventListener("mouseover", function() {
          fadingEffect.classList.add("fadingEffect");
          hiddenP.classList.remove("opa-zero");
          hiddenP.innerHTML=skills[index].description;
           console.log("mouseover",element.id) });
        element.addEventListener("mouseout", function() {
          fadingEffect.classList.remove("fadingEffect");
          hiddenP.classList.add("opa-zero");
          hiddenP.innerHTML=".....";
        })
     
    })
  }

}
