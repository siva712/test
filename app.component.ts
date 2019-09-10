import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project3';
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

myClickFunction(event){
  alert("Button is click");
  console.log(event);
}
changemonths (event) {
  alert("change month from dropdown");
  console.log(event);
}
}
