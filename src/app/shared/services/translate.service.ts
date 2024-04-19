import { Injectable, OnInit  } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Injectable({
  providedIn: 'root'
})
export class TranslateApp implements OnInit{

  public langs: string[] = [];
  public activeLang = '';

  public LANGUAGES: Array<{ name: string; code: string }> = [
    { name: 'English', code: 'en' },    
    { name: 'Español', code: 'es' },
    { name: 'Français', code: 'fr' },
    { name: 'Italiano', code: 'it' },
    { name: 'Português', code: 'pr' },
    
    
];
 
  
  constructor(private translate: TranslateService) 
  { 
   
   
  }

  ngOnInit() 
  {
  
  }

  
  
  SetLang(deflang: string, uselang: string)
  {    
    this.translate.setDefaultLang(deflang);
    this.translate.use(uselang);

  }

  
  switchLang(lang: string) {
    this.langs = this.translate.getLangs();
    this.activeLang = lang;
  }


  getLangs(): Array<{ name: string; code: string }> {      
   return this.LANGUAGES;
  }
}
