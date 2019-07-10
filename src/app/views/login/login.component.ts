import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  completeForm = false;
  private unsubscribe = new Subject();

  constructor(
    private userSrv: UserService,
    private fb: FormBuilder
    // private tokenSrv: TokenService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
   }

  ngOnInit() {
    this.onValueChanges();
  }
  onSubmit(){
    const email = this.loginForm.get('email').value;
    if(this.loginForm.valid && this.validEmail(email)){
      const loginData = {
        email: email,
        password: this.loginForm.get('password').value
      }
      this.userSrv.checkLogin(loginData)
      .pipe(
        takeUntil(this.unsubscribe)
        )
        .subscribe(resp =>{
          // this.tokenSrv.saveToken(resp.jwt);

        });

      }
    }

  private onValueChanges(){
    this.loginForm.valueChanges
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(() => {
        this.completeForm = this.loginForm.valid ? true : false;
      });
  }

  private validEmail(email){//Validacion correos vodafone
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@vodafone.com|corp.vodafone.es$/;
    return re.test(String(email).toLowerCase());
  }
}
