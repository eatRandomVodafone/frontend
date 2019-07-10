import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {


  public userList = [
    {
      'img': 'icons-info-mesa/ente-desconocido-amarilo.png',
      'textbold': 'Pilar',
      'category': 'Analist Digital',
      'textgrey': '"Me gustan los macarrones"'
    },
    {
      'img': 'icons-info-mesa/ente-desconocido-verde.png',
      'textbold': 'Diego',
      'category': 'Head of',
      'textgrey': 'La tortilla de patatas solo mola con cebolla'
    },
    {
      'img': 'icons-info-mesa/ente-desconocido.png',
      'textbold': 'Marta',
      'category': 'Bussines Analist',
      'textgrey': 'Los gatos siempre caen boca abajo'
    },
    {
      'img': 'icons-info-mesa/ente-desconocido-amarilo.png',
      'textbold': 'Ermenelgidlo',
      'category': 'Head of',
      'textgrey': 'Arroz con abichuelas'
    }
  ]
  public userEating = [
    {
      'img': 'icons-info-mesa/clock.png',
      'textbold': 'Comerás de 13H a 14H',
      'category': '11 de Julio de 2019',
      'textgrey': '"Cada segundo cuenta"'
    },

  ]
  public location = [
    {
      'img': 'icons-info-mesa/lugar.png',
      'textbold': 'Cantina de Vodafone Plaza',
      'category': 'Mesa Oktoberfest',
      'textgrey': '5 Piezas de fruta al día dan alegría'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
