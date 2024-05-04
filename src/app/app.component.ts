import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";
import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateApp } from './shared/services/translate.service';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'UnBambuSite';
  target: any;
  active: any = '#home';
  currentRoute: any;  
  selectedValue: string = '';

  
  public langs: Array<{ name: string; code: string }> = [];
  public activeLang = '';
  public showSidebar = true;


  @ViewChild(MatDrawer)
  drawer!: MatDrawer;
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,    
    public router: Router, 
    public translate: TranslateApp
  ){
    this.currentRoute = true;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.windowScroll, true);       
    this.translate.SetLang("en","en");
    this.activeLang = 'en';
    this.selectedValue = 'English';
    this.getLangs();
   
  }
/*
  get showSideBar() {
    return this._showSidebar();
  }
  set showSideBar(value: boolean) {
    this._showSidebar.set(value);
  }*/

  windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar != null) {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("is-sticky");
        console.log("remove is-sticky" )
      } else {
        navbar.classList.remove("is-sticky");
        console.log("remove is-sticky" )
      }
    }
  }

  ScrollIntoView(elem: string) {
    this.active = elem;
    let ele = document.querySelector(elem) as any;
    ele.scrollIntoView({ behavior: 'smooth', block: 'start' });  
    this.drawer.toggle();

    
  }

 
  drawerToggle() {
    this.drawer.toggle();    
    this.showSidebar = !this.showSidebar ;
    
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
