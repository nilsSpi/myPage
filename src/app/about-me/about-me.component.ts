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
public aboutText: string="I like nature related activities like hiking and climbing. Furthermore I am an active chess player and play for 5 years in the Hamburger Chess Club. I love to build responsive and modern websites and applications. ";
  aboutInfo={
    url : this.imgSrc,
    text : this.aboutText
  }

  public steps : step[]= [
    {
      url:"assets/img/search-line.png",
      headline:"The journey began",
      text:"I got in touch with programming during my semester courses numerical methods and non-linear optimization. I learned to solve mathematical problems with Octave/Matlab, also i got my feed wet with java for the course softwareengeneering 1."

    },
    {
      url:"assets/img/heart-line.png",
      headline:"The first steps",
      text:"Because I loved softwareengineering I did some self studies, to increase my view on that subject. Especially the vast variety of frent end development amazed me and so i did courses of udemy and codecamp to get some basic knowledge in HTML/CSS and JavaScript"

    },
    {
      url:"assets/img/heart-line.png",
      headline:"Getting a road map",
      text:"I decided to commit to front end development. I became a student of developerAkademie a german coding bootcamp, to get a professinal introduction in front end development."

    },
    {
      url:"assets/img/walk-line.png",
      headline:"Walking up the road",
      text:"During codecamp  I learned HTML/CSS JavaScript from scratch to achiev beeing confident in the basics. In addition I learend TypeScript,Git,Scrum and Angular."

    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
