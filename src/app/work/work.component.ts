import { Component, OnInit } from '@angular/core';

class Project {
  src: string;
  header: string;
  description: string;
  href: string;
  gitHub: string;
 
  constructor(src: string, header: string, description: string,href: string,gitHub: string) {
    this.src = src;
    this.header = header;
    this.description = description;
    this.href = href;
    this.gitHub = gitHub;
    
  }
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public angularProjects: Array<Project> = [
    new Project("./assets/img/ringoffire-inbed .png","Ring of fire","implementation of the popular drinking game",
    "https://nils-spiller.de/projects/ring-of-fire/index.html",""),
    new Project("./assets/img/simpleCRM_new.png","SimpleCRM","a simple customer relationship mangemant tool. data transfer with firebase","https://nils-spiller.de/projects/simple-crm/index.html",
    "https://github.com/nilsSpi/simpleCRM")
  ];

  public jsProjects: Array<Project> = [
    new Project("./assets/img/join-inbed1.png","Join",
    "project manegment tool: Allows a group of users to create and assign tasks, check the progress via an user specific kanban board and organize the taskmanager with flags.",
    "https://nils-spiller.de/projects/join/index.html","https://github.com/nilsSpi/join"),
    new Project("./assets/img/elPolloLoco-inbeded.png","El Pollo Loco",
    " plane Javascript jump and run game: Randomization give you a slightly different game every reload. I hope you got your gamerpants on, this can be a hectic walkthrough. Good luck!",
    "https://nils-spiller.de/projects/elPolloLoco/index.html",""),
  ];

  public allProjects: Array<Project> = [
    new Project("./assets/img/join-inbed1.png","Join",
    "project manegment tool: Allows a group of users to create and assign tasks, check the progress via an user specific kanban board and organize the taskmanager with flags.",
    "https://nils-spiller.de/projects/join/index.html","https://github.com/nilsSpi/join"),
    new Project("./assets/img/elPolloLoco-inbeded.png","El Pollo Loco",
    " plane Javascript jump and run game: Randomization give you a slightly different game every reload. I hope you got your gamerpants on, this can be a hectic walkthrough. Good luck!",
    "https://nils-spiller.de/projects/elPolloLoco/index.html",""),
    new Project("./assets/img/kochwelt-inbed.png","Kochwelt",
    "plane HTML/CSS cooking website: A static but neat designed website to share recepies and get inspiration. Also the hosts can be contacted via form. Hungry for some code?",
    "https://nils-spiller.de/projects/kochWelt/prod/index.html",""),
    new Project("./assets/img/ringoffire-inbed .png","Ring of fire","implementation of the popular drinking game",
    "https://nils-spiller.de/projects/ring-of-fire/index.html",""),
    new Project("./assets/img/simpleCRM_new.png","SimpleCRM","a simple customer relationship mangemant tool. data transfer with firebase","https://nils-spiller.de/projects/simple-crm",
    "https://github.com/nilsSpi/simpleCRM")
  ];

  public pinnedProjects: Array<Project> = [
    new Project("./assets/img/join-inbed1.png","Join",
    "project manegment tool: Allows a group of users to create and assign tasks, check the progress via an user specific kanban board and organize the taskmanager with flags.",
    "https://nils-spiller.de/projects/join/index.html","https://github.com/nilsSpi/join"),
    new Project("./assets/img/elPolloLoco-inbeded.png","El Pollo Loco",
    " plane Javascript jump and run game: Randomization give you a slightly different game every reload. I hope you got your gamerpants on, this can be a hectic walkthrough. Good luck!",
    "https://nils-spiller.de/projects/elPolloLoco/index.html",""),
    new Project("./assets/img/kochwelt-inbed.png","Kochwelt",
    "plane HTML/CSS cooking website: A static but neat designed website to share recepies and get inspiration. Also the hosts can be contacted via form. Hungry for some code?",
    "https://nils-spiller.de/projects/kochWelt/prod/index.html",""),
    new Project("./assets/img/ringoffire-inbed .png","Ring of fire","implementation of the popular drinking game",
    "https://nils-spiller.de/projects/ring-of-fire/index.html",""),
    new Project("./assets/img/simpleCRM_new.png","SimpleCRM","a simple customer relationship mangemant tool. data transfer with firebase","https://nils-spiller.de/projects/simple-crm",
    "https://github.com/nilsSpi/simpleCRM")
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
