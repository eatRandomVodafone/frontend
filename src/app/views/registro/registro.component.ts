import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      area: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      bio: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    const email = this.registroForm.get('email');
    if(this.registroForm.valid && this.validEmail(email)){
      const registroData = {
        nombre: this.registroForm.get('nombre'),
        email: email,
        password: this.registroForm.get('password'),
        area: this.registroForm.get('area'),
        rol: this.registroForm.get('rol'),
        bio: this.registroForm.get('bio'),
      }
      // this.userSrv.checkLogin(loginData)
      // .pipe(
      //   takeUntil(this.unsubscribe)
      // )
      // .subscribe(resp =>{
      //   // this.tokenSrv.saveToken(resp.jwt);

      // });

    }
  }

  private validEmail(email){//Validacion correos vodafone
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@vodafone.com|corp.vodafone.es$/;
    return re.test(String(email).toLowerCase());
  }
}
