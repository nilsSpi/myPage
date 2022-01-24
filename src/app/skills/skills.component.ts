import { Component, OnInit } from '@angular/core';

class Skill {
  src: string;
  text: string;
  constructor(src: string, text: string){
    this.src = src;
    this.text = text;
  }
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: Skill[];

  constructor() {
    this.skills=[
      new Skill("assets/img/angular.png","Angular"),
      new Skill("assets/img/angular.png","Angular"),
      new Skill("assets/img/angular.png","Angular"),
      new Skill("assets/img/angular.png","Angular"),
      new Skill("assets/img/angular.png","Angular"),
    ];
   }

  ngOnInit(): void {
  }

}
