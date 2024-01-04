import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  introObj = {
    name: "Siva Ganesh Sagar",
    intro: "Angular developer with 2 years of experience in  developing highly interactive web applications with Angular, HTML, CSS, JavaScript and Agile Methodologies"
  }
}
