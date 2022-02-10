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
 
  public elements: HTMLElement[];
  public typingContainer:HTMLElement;

  constructor() {
    this.typingContainer= (<HTMLElement>document.getElementById("typing-container"));
   
    this.elements =[];
    this.skills=[
      new Skill("assets/img/Group 205.png","HTML/CSS",
      
      "My very first projects are plain HTML/CSS. check my gitHub nilsSpi for some static but neatly designed webpages like KochWelt and sakura Ramen. in the later projects I used SCSS and the framework bootstrap, i.e in the quizApp"),
      new Skill("assets/img/java script.png","JavaScript",
      "example JS projects of mine in my gitHub: Join,El-Pollo-loco"),
      new Skill("assets/img/angular.png","Angular",
      "example JS projects of mine in my gitHub: Ring of Fire,myPage"),
      new Skill("assets/img/ts-logo-128.png","TypeScript",
      "example JS projects of mine in my gitHub: Ring of Fire,myPage"),
      new Skill("assets/img/Git-Icon-1788C 2.png","Git",
      "I love team projects!The version control is extreme useful. apropos Git... check my gitHub for my team projects like KochWelt and Join"),
      new Skill("assets/img/icons8-rest-api-80 2.png",
      "Rest APIs",
      "example API projects of mine in my gitHub: Render the Saurus,pokedex"),
      new Skill("assets/img/octave-logo.png","Octave",
      "By studying mathematics i learned to work with octave and matlab. Especially numerical methods and optimization of non linear functions are beloved subjects of mine"),
    ];
    setTimeout(()=>{
    this.elements= this.defineElements();
   this.typing();
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
