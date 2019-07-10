import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistroComponent implements OnInit {


  registroForm: FormGroup;

  private unsubscribe = new Subject();

  constructor(
    private fb: FormBuilder,
    private registroSrv: RegisterService
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      area: ['', ],
      rol: ['', ],
      bio: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    const email = this.registroForm.get('email').value;
    if(this.registroForm.valid && this.validEmail(email)){
      const registroData = {
        nombre: this.registroForm.get('nombre').value,
        email: email,
        password: this.registroForm.get('password').value,
        area: this.registroForm.get('area').value,
        rol: this.registroForm.get('rol').value,
        bio: this.registroForm.get('bio').value,
      }
      this.registroSrv.doRegister(registroData)
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(resp =>{
        console.log('Registro successfull');
      });

    }
  }

  private validEmail(email){//Validacion correos vodafone
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@vodafone.com|corp.vodafone.es$/;
    return re.test(String(email).toLowerCase());
  }
}
