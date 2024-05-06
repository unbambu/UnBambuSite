import { Component } from '@angular/core';

@Component({
  selector: 'app-togglemode',
  templateUrl: './togglemode.component.html',
  styleUrl: './togglemode.component.scss'
})
export class TogglemodeComponent {
  changeMode() {
    const htmlTag = document.documentElement;
    if (htmlTag.className.includes("dark")) {
      htmlTag.className = 'light'
    } else {
      htmlTag.className = 'dark'
    }
  }
}
