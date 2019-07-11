import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { TokenService } from 'src/app/services/token.service';

// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  completeForm = false;
  errorMail = false;
  private unsubscribe = new Subject();

  constructor(
    private userSrv: UserService,
    private fb: FormBuilder,
    private aRoute: ActivatedRoute,
    private titleService: Title,
    private route: Router,
    private tokenSrv: TokenService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.onValueChanges();

    // Set title page
    this.aRoute.data
      .subscribe(data => this.titleService.setTitle(data.title));
  }

  onSubmit() {
    const email = this.loginForm.get('email').value;
    if (this.loginForm.valid && this.validEmail(email)) {
      const loginData = {
        username: email,
        password: this.loginForm.get('password').value
      };
      this.userSrv.checkLogin(loginData)
        .pipe(
          takeUntil(this.unsubscribe)
        )
        .subscribe(resp =>{
          this.route.navigate(['/alta']);
          this.tokenSrv.setToken(resp['jwt']);

        });
      this.errorMail = false;
    } else {
      this.errorMail = true;
    }
  }

  private onValueChanges() {
    this.loginForm.valueChanges
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(() => {
        this.completeForm = this.loginForm.valid ? true : false;
      });
  }

  private validEmail(email) {//Validacion correos vodafone
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@vodafone.com|corp.vodafone.es$/;
    return re.test(String(email).toLowerCase());
  }
}
