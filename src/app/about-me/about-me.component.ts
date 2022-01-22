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
public imgSrc: string="assets/img/profile.jpg";
public aboutText: string="I'm an outdoor sports enthusiast (Kayaking forever) and front-end developer who loves pushing bounderies";
  aboutInfo={
    url : this.imgSrc,
    text : this.aboutText
  }

  public steps : step[]= [
    {
      url:"assets/img/walk-line.png",
      headline:"The journey began",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad dicta consequatur animi tempore. Facilis maxime corrupti eos. Nostrum eum dolor consectetur id laudantium doloribus est voluptas libero reprehenderit porro!"

    },
    {
      url:"assets/img/walk-line.png",
      headline:"The journey began",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad dicta consequatur animi tempore. Facilis maxime corrupti eos. Nostrum eum dolor consectetur id laudantium doloribus est voluptas libero reprehenderit porro!"

    },
    {
      url:"assets/img/walk-line.png",
      headline:"The journey began",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad dicta consequatur animi tempore. Facilis maxime corrupti eos. Nostrum eum dolor consectetur id laudantium doloribus est voluptas libero reprehenderit porro!"

    },
    {
      url:"assets/img/walk-line.png",
      headline:"The journey began",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad dicta consequatur animi tempore. Facilis maxime corrupti eos. Nostrum eum dolor consectetur id laudantium doloribus est voluptas libero reprehenderit porro!"

    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
