import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() onClose = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }
  closeModal(){
    this.onClose.emit(true);
  }
}
