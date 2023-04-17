import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore';

  isOpen = false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  onLinkClick() {
    this.isOpen = false;
  }
}
