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
      
      "My very first projects are plain HTML/CSS. check my gitHub nilsSpi for some static but neatly designed webpages like KochWelt and sakura Ramen. in the later projects I used SCSS and the framework bootstrap, i.e in the quizApp"),
      new Skill("assets/img/java script.png","JavaScript",
      "JavaScript gave me the power to add logic to my projects. apropos projects..check my gitHub nilsSpi for some js projects of mine, like classical tictactoe, or the jump and run El-Pollo-Loco, or the kanban board Join."),
      new Skill("assets/img/angular.png","Angular",
      "I really like the sturcture of angular. check my gitHub nilsSpi for my angular projects like myPage or Ring of Fire"),
      new Skill("assets/img/ts-logo-128.png","TypeScript",
      "Because I knew the type system of Java I had a smooth transit from Js to Ts. Check my gitHub for my Ts projects like myPage and Ring of Fire"),
      new Skill("assets/img/Git-Icon-1788C 2.png","Git",
      "I love team projects!The version control is extreme useful. apropos Git... check my gitHub for my team projects like KochWelt and Join"),
      new Skill("assets/img/icons8-rest-api-80 2.png",
      "Rest APIs","I learned API"),
      new Skill("assets/img/octave-logo.png","Octave",
      "By studying mathematics i learned to work with octave and matlab. Especially numerical methods and optimization of non linear functions are beloved subjects of mine"),
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
