import { Component, OnInit } from '@angular/core';

class Project {
  src: string;
  header: string;
  description: string;
  href: string;
 
  constructor(src: string, header: string, description: string,href: string) {
    this.src = src;
    this.header = header;
    this.description = description;
    this.href = href;
    
  }
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public angularProjects: Array<Project> = [
     new Project("assets/img/projectPlaceholder.jpg","Stay tuned","upcoming...",""),
     new Project("assets/img/projectPlaceholder.jpg","Stay tuned","upcoming...",""),
     new Project("assets/img/projectPlaceholder.jpg","Stay tuned","upcoming...",""),
  ];

  public jsProjects: Array<Project> = [
    new Project("assets/img/projectPlaceholder.jpg","Stay tuned","upcoming...",""),
    new Project("assets/img/projectPlaceholder.jpg","Stay tuned","upcoming...",""),
    new Project("assets/img/projectPlaceholder.jpg","Stay tuned","upcoming...",""),
    new Project("assets/img/projectPlaceholder.jpg","Stay tuned","upcoming...",""),
  ];

  public allProjects: Array<Project> = [
    new Project("assets/img/join.png","Join",
    "project manegment tool: Allows a group of users to create and assign tasks, check the progress via an user specific kanban board and organize the taskmanager with flags.",
    "https://nils-spiller.de/projects/join/index.html"),
    new Project("assets/img/elPolloLoco.png","El Pollo Loco",
    " plane Javascript jump and run game: Randomization give you a slightly different game every reload. I hope you got your gamerpants on, this can be a hectic walkthrough. Good luck!",
    "https://nils-spiller.de/projects/elPolloLoco/index.html"),
    new Project("assets/img/kochWelt.png","Kochwelt",
    "plane HTML/CSS cooking website: A static but neat designed website to share recepies and get inspiration. Also the hosts can be contacted via form. Hungry for some code?",
    "https://nils-spiller.de/projects/kochWelt/prod/index.html"),
    new Project("assets/img/ringOfFire.png","Ring of fire","implementation of the popular drinking game","https://nils-spiller.de/projects/ring-of-fire/index.html"),
  ];

  public pinnedProjects: Array<Project> = [
    new Project("assets/img/join.png","Join",
    "project manegment tool: Allows a group of users to create and assign tasks, check the progress via an user specific kanban board and organize the taskmanager with flags.",
    "https://nils-spiller.de/projects/join/index.html"),
    new Project("assets/img/elPolloLoco.png","El Pollo Loco",
    " plane Javascript jump and run game: Randomization give you a slightly different game every reload. I hope you got your gamerpants on, this can be a hectic walkthrough. Good luck!",
    "https://nils-spiller.de/projects/elPolloLoco/index.html"),
    new Project("assets/img/kochWelt.png","Kochwelt",
    "plane HTML/CSS cooking website: A static but neat designed website to share recepies and get inspiration. Also the hosts can be contacted via form. Hungry for some code?",
    "https://nils-spiller.de/projects/kochWelt/prod/index.html"),
    new Project("assets/img/ringOfFire.png","Ring of fire",
    "Typescript project with Angular and Material: Implementation of the popular card game. You can play this game with your friends to have a fun time while the stack is getting smaller. Prost!",
    "https://nils-spiller.de/projects/ring-of-fire/index.html"),
  ];
  
  public allIsShown:boolean = false;
  public angularIsShown:boolean = false;
  public jsIsShown:boolean = false;
  public pinnedIsShown:boolean = true;

  public buttonAll: any ;
  public buttonJs: any ;
  public buttonAngular: any ;
  public buttonPinned: any ;
  public sliders=document.querySelectorAll(".slider");

  
  
  constructor() {
    
    
   }

  ngOnInit(): void {
    setInterval(() => {
      this.sliders=document.querySelectorAll(".slider");
    this.slideIn();
    },300)
  }
  showAll(): void {
    this.pinnedIsShown = false;
   this.allIsShown = true;
   this.angularIsShown=false;
   this.jsIsShown=false;
   this.defineElements();
   if (this.buttonAll) {
     this.buttonAll.classList.add('toggeld');
     if(this.buttonAngular && this.buttonAngular.classList.contains('toggeld')){
      this.buttonAngular.classList.remove('toggeld');
     }
     if(this.buttonJs && this.buttonJs.classList.contains('toggeld')){
      this.buttonJs.classList.remove('toggeld');
     }
     if(this.buttonPinned && this.buttonPinned.classList.contains('toggeld')){
      this.buttonPinned.classList.remove('toggeld');
     }
   }
   
  }


  showAngular(): void {
    this.pinnedIsShown = false;
    this.allIsShown = false;
    this.angularIsShown=true;
    this.jsIsShown=false;
    this.defineElements();
    if (this.buttonAngular) {
      this.buttonAngular.classList.add('toggeld');
      if(this.buttonAll && this.buttonAll.classList.contains('toggeld')){
       this.buttonAll.classList.remove('toggeld');
      }
      if(this.buttonJs && this.buttonJs.classList.contains('toggeld')){
       this.buttonJs.classList.remove('toggeld');
      }
      if(this.buttonPinned && this.buttonPinned.classList.contains('toggeld')){
        this.buttonPinned.classList.remove('toggeld');
       }
    }
    
   }

   showJs(): void {
    this.pinnedIsShown = false;
    this.allIsShown = false;
    this.angularIsShown=false;
    this.jsIsShown=true;
    this.defineElements();
    if (this.buttonJs) {
      this.buttonJs.classList.add('toggeld');
      if(this.buttonAll && this.buttonAll.classList.contains('toggeld')){
       this.buttonAll.classList.remove('toggeld');
      }
      if(this.buttonAngular && this.buttonAngular.classList.contains('toggeld')){
       this.buttonAngular.classList.remove('toggeld');
      }
      if(this.buttonPinned && this.buttonPinned.classList.contains('toggeld')){
        this.buttonPinned.classList.remove('toggeld');
       }
    }
    
   }

  defineElements(): void {
    
    this.buttonAll=document.getElementById('all');
    this.buttonJs = document.getElementById('js');
    this.buttonAngular = document.getElementById('angular');
    this.buttonPinned= document.getElementById('pinned');

  }



  showPinned(): void {
    this.pinnedIsShown = true;
    this.angularIsShown=false;
    this.allIsShown=false;
    this.jsIsShown=false;
    this.defineElements();
    if (this.buttonPinned) {
      this.buttonPinned.classList.add('toggeld');
      if(this.buttonAngular && this.buttonAngular.classList.contains('toggeld')){
       this.buttonAngular.classList.remove('toggeld');
      }
      if(this.buttonJs && this.buttonJs.classList.contains('toggeld')){
       this.buttonJs.classList.remove('toggeld');
      }
      if(this.buttonAll && this.buttonAll.classList.contains('toggeld')){
        this.buttonAll.classList.remove('toggeld');
       }
    }
    
   }

   slideIn(): void {
    const appearOptions={
      threshold:0 ,
      rootMargin: "0px 0px -300px 0px",
    };
    const appearOnScroll= new IntersectionObserver((entries,appearOnScroll)=>{
      entries.forEach(entry=>{
        if (!entry.isIntersecting){
          entry.target.classList.remove('appear');
          return;}
        else{
         
          entry.target.classList.add('appear');
         // appearOnScroll.unobserve(entry.target);
        }
      });
    },appearOptions);




    this.sliders.forEach(slider=>{
     appearOnScroll.observe(slider);
    });
  }
}
