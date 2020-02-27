import {Component, OnInit} from '@angular/core';
import {SigninService} from 'src/app/services/signin.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {TokenService} from 'src/app/services/token.service';

// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private unsubscribe = new Subject();

  constructor(
    private userSrv: SigninService,
    private fb: FormBuilder,
    private aRoute: ActivatedRoute,
    private titleService: Title,
    private route: Router,
    private tokenSrv: TokenService
  ) {
  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
        Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@vodafone.com|corp.vodafone.es$')]],
      password: ['', [Validators.required]]
    });

    // Set title page
    this.aRoute.data
      .subscribe(data => this.titleService.setTitle(data.title));
  }

  onSubmit() {
    //TODO VALIDAR CON EL SERVICIO
    console.log(this.loginForm);
    /*const email = this.loginForm.get('email').value;
    if (this.loginForm.valid && this.validEmail(email)) {
      const loginData = {
        username: email,
        password: this.loginForm.get('password').value
      };

      // TODO: Revisar este codigo
      this.userSrv.checkLogin(loginData)
        .pipe(
          takeUntil(this.unsubscribe)
        )
        .subscribe(resp => {
          // this.route.navigate(['/alta']);
          this.tokenSrv.setToken(resp['jwt']);
          this.userSrv.userStatus()
            .subscribe(res => {
              const decodejwt = JSON.parse(atob(res['jwt'].split('.')[1]));
              this.tokenSrv.setToken(res['jwt']);
              let status = decodejwt['status'];
              if (status === null) {
                this.route.navigate(['/alta']);
                status = '';

              }
              if (status.indexOf('esperando') >= 0) {
                this.route.navigate(['/status']);

              } else if (status.indexOf('mesa') >= 0) {
                this.route.navigate(['/confirm']);

              }
              console.log(decodejwt);
            });
        });


      this.errorMail = false;
    } else {
      this.errorMail = true;
    }*/
  }

  get isPasswordValid() {
    return this.loginForm.controls['password'].dirty && this.loginForm.controls['password'].invalid;
  }

  get isMailValid() {
    return this.loginForm.controls['email'].dirty && this.loginForm.controls['email'].errors;
  }

  /*
  private onValueChanges() {
    this.loginForm.valueChanges
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(() => {
        this.completeForm = this.loginForm.valid ? true : false;
      });
  }
  */

}
