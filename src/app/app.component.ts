import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateApp } from './shared/services/translate.service';
import { MatDrawer } from '@angular/material/sidenav';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent   {
  
  target: any;
  active: any = '#home';
  currentRoute: any;  
  public selectedValue: string = '';

  
  public langs: Array<{ name: string; code: string }> = [];
  public activeLang = '';
  public showSidebar = true;


  @ViewChild(MatDrawer)
  drawer!: MatDrawer;
  
  constructor(
    
    public router: Router, 
    public translate: TranslateApp
  ){
    this.currentRoute = true;
  }

  ngOnInit() {
    
    this.translate.SetLang("en","en");
    this.activeLang = 'en';
    console.log('English')
    this.selectedValue = 'English';
    this.getLangs();
    //window.addEventListener('scroll', this.windowScroll, true);
   
  }
 

  ScrollIntoView(elem: string) {
    this.active = elem;
    let ele = document.querySelector(elem) as any;
    ele.scrollIntoView({ behavior: 'smooth', block: 'start' });  
    this.drawer.toggle();
    
  }

  windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar != null) {
      console.log(document.body.scrollTop + " " + document.documentElement.scrollTop)
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

 
  drawerToggle() {
    this.drawer.toggle();    
    this.showSidebar = !this.showSidebar ;
    
  }

  switchLang(lang: string) {     
    this.langs = this.translate.getLangs();
    this.activeLang = lang;
    this.translate.SetLang(lang,lang);


    /*this.Subject = new FormControl('', [Validators.required]);
    this.Subject.updateValueAndValidity();*/


  
  }


  getLangs() {
  
    this.langs = this.translate.getLangs();
  }

}
