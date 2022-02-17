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
 
  public skills: Skill[];
  public typingIsShown:boolean = true;
  public elements: HTMLElement[];
  public typingContainer:HTMLElement;

  constructor() {
    this.typingContainer= (<HTMLElement>document.getElementById("typing-container"));
   
    this.elements =[];
    this.skills=[
      new Skill("assets/img/html-logo-new.png","HTML",
      " static but neatly designed webpages like KochWelt and sakuraRamen."),
      new Skill("assets/img/css-logo.png","CSS",
      " static but neatly designed webpages like KochWelt and sakuraRamen."),
      new Skill("assets/img/js-logo-new.png","JavaScript",
      "Join: project manegment tool,El-Pollo-loco: jump and run canvas game,tic tac toe"),
      new Skill("assets/img/angular-logo-new.svg","Angular",
      "Ring of fire: popular drinking game,myPage: code of this very site"),
      new Skill("assets/img/ts-logo-128.png","TypeScript",
      "Ring of fire: popular drinking game,Ring of fire multiplayer with firebase,myPage: code of this very site"),
      new Skill("assets/img/Git-Icon-1788C 2.png","Git",
      "...apropos Git... check my gitHub for my team projects like KochWelt and Join where we enjoyed the version control of git."),
      new Skill("assets/img/icons8-rest-api-80 2.png",
      "Rest APIs",
      "example API projects of mine : Render the Saurus,pokedex"),
      new Skill("assets/img/octave-logo.png","Octave",
      "By studying mathematics i learned to work with octave and matlab. Check my implementation for numerical quadrature or (non-)linear optimation."),
    ];
    setTimeout(()=>{
    this.elements= this.defineElements();
   this.typing();
    },100); 
   }



  ngOnInit(): void {
   
    this.checkTyping();
  }

  checkTyping(): void {
    setInterval(()=>{
      
      if (window.innerWidth < 560) { 
        this.typingIsShown = false;
      }
      else{
        this.typingIsShown = true;
      }
    },100);
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


 
 


  typing(): void {
    let skills=this.skills;

    this.elements.forEach((element,index)=>{
     
        element.addEventListener("mouseover", function() {
          let description = document.createElement("span");     
          description.innerHTML=skills[index].description;
          (<HTMLElement>document.getElementById('typing-container')).appendChild(description);
          (<HTMLElement>document.getElementById('typing-container')).classList.remove("opa-zero");
          description.classList.add("typingEffect");
          // console.log("mouseover",element.id)
           });

        element.addEventListener("mouseout", function() {
         (<HTMLElement>document.getElementById('typing-container')).innerHTML="";
         (<HTMLElement>document.getElementById('typing-container')).classList.add("opa-zero");
        })
     
    })
  }

}
