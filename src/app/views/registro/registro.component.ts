import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
