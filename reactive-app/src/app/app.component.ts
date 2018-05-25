import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName = "Naomi";
  lastName = "Miller";
  address = "452 Holly Lane, Hopewell, VA 23860";
  favoriteNumber = 125;

  onSubmit() {
    alert("Form submitted.");
    console.log("Form submitted");
  }
}
