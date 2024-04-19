import { Component } from '@angular/core';

@Component({
  selector: 'app-switcher', 
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss'
})
export class SwitcherComponent {
  

  changeMode() {
    const htmlTag = document.documentElement;
    if (htmlTag.className.includes("dark")) {
      htmlTag.className = 'light'
    } else {
      htmlTag.className = 'dark'
    }
  }
}
