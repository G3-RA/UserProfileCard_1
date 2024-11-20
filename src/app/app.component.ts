import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserProfileCard';

  name: string = 'Amie Adams';
  age: number = 28;
  profilePicture: string = '../assets/profilePhoto.jpg';
  email: string = 'aaammie_adamss@gmail.com';

  //Input binding
  // profileInput () { }

//Input Binding: Extend the task by allowing the UserProfileCard component to receive a user object from a parent component using @Input (to practice input property binding).

}
