import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

  public isModalHidden = false;
  constructor() { }

  ngOnInit() {
  }

  statusModal(value) {
    this.isModalHidden = value;
  }

}
