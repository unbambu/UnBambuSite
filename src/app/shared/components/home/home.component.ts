import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
 /* standalone: true,
  imports: [],*/
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title = 'Home';
  target: any;
  active: any = '#contact';
  currentRoute: any;

  ScrollIntoView(elem: string) {
    this.active = elem;
    let ele = document.querySelector(elem) as any;    
    ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
