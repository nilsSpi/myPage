import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  all=[];
  
  
  constructor() {
    this.all = [];
    
   }

  ngOnInit(): void {
  }
  showAll(): void {
    let button = document.getElementById('all');
    let renderContainer=document.getElementById('render-container');
    console.log(renderContainer)
   if (button) {
    console.log(button)
     button.classList.add('toggeld');
   }
   if(renderContainer){
    renderContainer.innerHTML ="";
    renderContainer.innerHTML += `
    <img class="work-img" src="assets/img/projectPlaceholder.jpg" alt="">
    <img class="work-img" src="assets/img/projectPlaceholder.jpg" alt="">
    <img class="work-img" src="assets/img/projectPlaceholder.jpg" alt="">
    <img class="work-img" src="assets/img/projectPlaceholder.jpg" alt="">
    <img class="work-img" src="assets/img/projectPlaceholder.jpg" alt="">
    <img class="work-img" src="assets/img/projectPlaceholder.jpg" alt="">`
   }
   
  }
}
