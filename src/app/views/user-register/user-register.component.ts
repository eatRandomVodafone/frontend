import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public valueDepartments: Array<object> = [
    {
      value: '',
      show: 'Departamento'
    },
    {
      value: '00',
      show: 'Cero'
    },
    {
      value: '01',
      show: 'Uno'
    },
    {
      value: '02',
      show: 'Dos'
    },
    {
      value: '03',
      show: 'Tres'
    },
  ];
  public valueRoles: Array<object> = [
    {
      value: '',
      show: 'Departamento'
    },
    {
      value: '00',
      show: 'Cero'
    },
    {
      value: '01',
      show: 'Uno'
    },
    {
      value: '02',
      show: 'Dos'
    },
    {
      value: '03',
      show: 'Tres'
    },
  ];
  public textBtn = 'Registrarme';
  public historyText = 'Cuéntanos algo sobre ti';

  constructor(
    private fb: FormBuilder,
    private aRoute: ActivatedRoute,
    private titleService: Title
  ) {
  }

  ngOnInit() {

    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,
        Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@vodafone.com|corp.vodafone.es$')]],
      emailconfirm: ['', [Validators.required,
        Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@vodafone.com|corp.vodafone.es$')]],
    });

    // Set title page
    this.aRoute.data.subscribe(data => this.titleService.setTitle(data.title));
  }

  onSubmit() {
    console.log(this.registerForm);
  }
}
