import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  meetTypeSelected: string;
  altaForm: FormGroup;
  departamentos: any[] = ['A','B','C'];

  private unsubscribe = new Subject();

  constructor(
    private fb: FormBuilder,
  ) {
    this.altaForm = this.fb.group({
      meetType: ['', [Validators.required]],
      departament: ['', [Validators.required]],
      radioTime: ['', [Validators.required]]
    });
  }


  ngOnInit() {

  }

  onSubmit(){
    console.log("submit");
  }
}
