import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AltaService } from 'src/app/services/alta.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  meetTypeSelected: string;
  altaForm: FormGroup;
  departamentos: any[] = ['A', 'B', 'C'];
  public activeCheck:string;
  private unsubscribe = new Subject();

  constructor(
    private fb: FormBuilder,
    private altaSrv: AltaService
  ) {
    this.altaForm = this.fb.group({
      meetype: ['GROUP', Validators.required],
      departament: ['', ],
      radiotime: ['', [Validators.required]]
    });
  }


  ngOnInit() {

  }
  checkActive(value, event){
    this.activeCheck = value;
    console.log(this.activeCheck);
  }
  onSubmit() {
    if (this.altaForm.valid) {
        const newPool = {
          queue: this.altaForm.get('meetype').value,
          action: 'UP',
          horario: this.altaForm.get('radiotime').value
        }
        this.altaSrv.insertPool(newPool)
        .pipe(
          takeUntil(this.unsubscribe)
        )
        .subscribe(resp =>{
          console.log('Alta pool successfull');
        });
    }
  }
}
