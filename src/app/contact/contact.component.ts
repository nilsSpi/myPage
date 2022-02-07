import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  

  ngOnInit(): void {
  }

  resetForm(): void {
    (<HTMLFormElement>document.getElementById("contactForm")).reset();
  }

  contact = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://nils-spiller.de/sendMail.php', // Ex. www.my-domain/sendMail.php

    body: (payload: any) => JSON.stringify(payload),

    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  constructor(private http: HttpClient) {}

  

  onSubmit(ngForm :any) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
        ngForm.reset();
    }
  }
}
