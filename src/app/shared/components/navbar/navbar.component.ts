import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateApp } from '../../services/translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
  
})

export class NavbarComponent implements OnInit {
  target: any;
  active: any = '#home';
  currentRoute: any;  
  selectedValue: string = '';
  public langs: Array<{ name: string; code: string }> = [];
  public activeLang = '';
  public open: boolean = false;
  isHamburguer = true;
  isShow= true;
 

  constructor(public router: Router, public translate: TranslateApp) {
   // if (router.url !== '/index-four' && router.url !== '/index-five' && router.url !== '/index-seven')
      this.currentRoute = true;
  }
  windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar != null) {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }
    }
  }

  ScrollIntoView(elem: string) {
    this.active = elem;
    let ele = document.querySelector(elem) as any;
    ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.toggleMenu()
    
    //this.isShow = !this.isShow;
  }

 
  ngOnInit() {
    window.addEventListener('scroll', this.windowScroll, true);       
    this.translate.SetLang("en","en");
    this.activeLang = 'en';
    this.selectedValue = 'English';
    this.getLangs();
  

   
  }

  toggleMenu() {
    let ele = document.getElementById('menu-collapse') as any;
    ele.classList.toggle('hidden');    
    //this.isShow = !this.isShow;
   

    
  }

  openMenu() {
   
    this.isShow = !this.isShow;
    
  /*
    let ele = document.getElementById('menu') as any;
    ele.classList.toggle('show');*/
   
  }

  switchLang(lang: string) {     
    this.langs = this.translate.getLangs();
    this.activeLang = lang;
    this.translate.SetLang(lang,lang);
  }


  getLangs() {
  
    this.langs = this.translate.getLangs();
  }

}

