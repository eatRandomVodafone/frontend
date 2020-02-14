import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {ResetPassService} from 'src/app/services/resetpass.service';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

  public title = '¿Has olvidado tu contraseña?';
  public btnText = 'Recordar contraseña';
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aRoute: ActivatedRoute,
    private titleService: Title,
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

  redirect() {
    this.route.navigate(['/login']);
  }

}
