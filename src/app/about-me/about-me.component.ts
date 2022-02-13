import { Component, OnInit } from '@angular/core';

class step {
  url: string;
  headline: string;
  text: string;
  constructor() {
    this.url="";
    this.headline="";
    this.text="";
  }
}


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
public imgSrc: string="assets/img/profilePic2.jpg";
public aboutText: string="I like nature related activities like hiking and climbing. Furthermore I am an active chess player and play for 5 years in the Hamburger Chess Club."+
"Feel free to challenge my lichess alter ego Slin in the realm of 64 squares, if you are brave enough.";
  aboutInfo={
    url : this.imgSrc,
    text : this.aboutText
  }

  public sliders=document.querySelectorAll(".slider");
  public faders=document.querySelectorAll(".fader");

  public steps : step[]= [
    {
      url:"assets/img/search-line.png",
      headline:"The journey began",
      text:"I got in touch with programming during my semester courses numerical methods and non-linear optimization."+
      "I learned to solve mathematical problems with Octave/Matlab and I had great fun programming quick and efficient methods and algorithms to solve problems."

    },
    {
      url:"assets/img/heart-line.png",
      headline:"The first steps",
      text:"Because I wanted to learn more about programming, I did self studies to increase my view on that topic and build some basic projects. Especially the vast variety of front end development amazed me and so I applied courses of udemy and codecamp."

    },
    {
      url:"assets/img/heart-line.png",
      headline:"Getting a road map",
      text:"I decided to commit to front end development. I became a student of developerAkademie a german coding bootcamp, to get a professinal road map of front end development."

    },
    {
      url:"assets/img/walk-line.png",
      headline:"Walking up the road",
      text:"The bootcamp was an awesome experiece. I loved to build team and solo projects while having the pleasure of an creative and active community."

    },
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.sliders=document.querySelectorAll(".slider");
      this.faders=document.querySelectorAll(".fader");
    this.slideIn();
    },100)
    
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

    this.faders.forEach(fader=>{
      appearOnScroll.observe(fader);
    })
  }

}
