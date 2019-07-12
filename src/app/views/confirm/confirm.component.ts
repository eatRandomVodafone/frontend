import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  public userList = [];
  public imgList = [
      'icons-info-mesa/ente-desconocido-amarilo.png',
      'icons-info-mesa/ente-desconocido-verde.png',
      'icons-info-mesa/ente-desconocido.png',
      'icons-info-mesa/ente-desconocido-amarilo.png',
      ]
  public textList = [
    'Me gusta la tortilla con patatas',
    'Los chuletones cuando más grandes, mejor',
    'Odio la verdura',
    'Unas birras "pa" cuando'
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
      'textgrey': '"5 Piezas de fruta al día dan alegría"'
    }
  ]
  public asignaciones: any = {};
  private decodejwt : string;

  constructor(
    private aRoute: ActivatedRoute,
    private titleService: Title,
    private tokenSrv: TokenService
  ) { }

  ngOnInit() {
    // Set title page
    this.aRoute.data
      .subscribe(data => this.titleService.setTitle(data.title));


      this.decodejwt = JSON.parse(atob(this.tokenSrv.getToken().split('.')[1]));
      console.log('confirm', this.decodejwt);

      this.decodejwt['detalleAsignacion'].forEach((element, index) => {
        let tempo = element.split('%');
        let aux = {
          'img': 'icons-info-mesa/ente-desconocido-amarilo.png',
          'textbold': tempo[0],
          'category': tempo[1],
          'textgrey': '"Me gustan los macarrones"'
        }
        this.userList.push(aux);
        this.asignaciones[index] = tempo;
       });
      console.log(this.asignaciones);
  }

}
