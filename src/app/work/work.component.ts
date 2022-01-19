import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  
  public allIsShown:boolean = true;
  public angularIsShown:boolean = false;
  public jsIsShown:boolean = false;
  public sourcesAll: string[]=[
    "assets/img/projectPlaceholder.jpg",
    "assets/img/projectPlaceholder.jpg",
    "assets/img/projectPlaceholder.jpg",
    "assets/img/projectPlaceholder.jpg",
    "assets/img/projectPlaceholder.jpg",
    "assets/img/projectPlaceholder.jpg",
  ];
  
  
  constructor() {
    
    
   }

  ngOnInit(): void {
  }
  showAll(): void {
    this.allIsShown = true;
    let button = document.getElementById('all');
   if (button) {
     button.classList.add('toggeld');
   }
   
  }
}
