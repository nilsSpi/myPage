import { Component, OnInit } from '@angular/core';

class Project {
  src: string;
  header: string;
  description: string;
 
  constructor(src: string, header: string, description: string){
    this.src = src;
    this.header = header;
    this.description = description;
    
  }
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public angularProjects: Array<Project> = [
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
  ];

  public jsProjects: Array<Project> = [
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
  ];

  public allProjects: Array<Project> = [
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
    new Project("assets/img/projectPlaceholder.jpg","Join","project debugger"),
  ];
  
  public allIsShown:boolean = true;
  public angularIsShown:boolean = false;
  public jsIsShown:boolean = false;

  public buttonAll: any ;
  public buttonJs: any ;
  public buttonAngular: any ;

  
  
  constructor() {
    
    
   }

  ngOnInit(): void {
  }
  showAll(): void {
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
   }
   
  }


  showAngular(): void {
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
    }
    
   }

   showJs(): void {
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
    }
    
   }

  defineElements(): void {
    
    this.buttonAll=document.getElementById('all');
    this.buttonJs = document.getElementById('js');
    this.buttonAngular = document.getElementById('angular');

  }
}
