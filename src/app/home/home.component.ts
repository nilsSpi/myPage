import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sliders=document.querySelectorAll(".slider");
  constructor() {

   }

  ngOnInit(): void {
    setTimeout(() =>{
      this.sliders=document.querySelectorAll(".slider");
    },100);
  }

  showContact(){
    document.getElementById('contact-container')?.scrollIntoView();
  }

  slideIn(): void {
    const appearOptions={
      threshold:0 ,
      rootMargin: "0px 0px -200px 0px",
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
