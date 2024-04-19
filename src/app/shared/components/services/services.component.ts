import { Component, OnInit } from '@angular/core';
import { TranslateApp } from '../../services/translate.service';
import { TranslateAppParser } from '../../services/translateparser.service';

@Component({
  selector: 'app-services',
  /*standalone: true,
  imports: [],*/
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit
{
  services: 
  { 
    logo: string; 
    title: string, 
    desc: string 
  } = 
  {
    logo: '',
    title: '',
    desc: ''
  };
   

  constructor (  public translate: TranslateApp, public translateparser: TranslateAppParser) 
  { 
    //translateparser.getValue("./assets/i18n/en.json","Services.desc")   

    const elements =

     [
      "1- Green Code, Green Ux, Infraestructura.<br>", 
      "2- Nos adaptamos a la organización y cliente de acuerdo con el presupuesto y sus necesidades. <br>",
      "3- Servicio de asesoramiento, diagnóstico y evaluación de los diferentes productos digitales del cliente y su impacto en el ambiente."
  ];


//console.log(elements.join(' '));

    //translateparser.getValue({ Services: { desc: '1- Green Code, Green Ux, Infraestructura.<br>' }}, 'Services.desc')
    //translate.SetLang('en', 'en');

    
  }
  ngOnInit() 
  {
   /* this.services = 
      {
      
        logo: this.trans.services.logo,
        title: this.trans.services.title,
        desc: this.trans.services.desc,
      }*/
    
  }
  
 /* services = [
    {
    
      logo: this.trans.services.logo,
      title: this.trans.services.title,
      desc: this.trans.services.desc,
    }
  ]*/


}
