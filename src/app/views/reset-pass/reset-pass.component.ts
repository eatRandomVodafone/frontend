import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ResetPassService } from 'src/app/services/resetpass.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {

  public completeForm = false;
  public resetpassForm: FormGroup;
  public isModalHidden = true;
  private unsubscribe = new Subject();


  constructor(
    private fb: FormBuilder,
    private resetPassSrv: ResetPassService,
    private route: Router) {
    this.resetpassForm = this.fb.group({
      email: ['', [Validators.required]]
    });
  }


  ngOnInit() {
    this.onValueChanges();

  }

  statusModal(value) {
    this.isModalHidden = value;
  }

  private onValueChanges(){
    this.resetpassForm.valueChanges
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(() => {
        this.completeForm = this.resetpassForm.valid ? true : false;
      });
  }

  onSubmit() {
    if (this.resetpassForm.valid) {
      this.completeForm = true;

      const resetPassData = {
        email: this.resetpassForm.get('email').value
      }
      this.resetPassSrv.resetPass(resetPassData)
        .pipe(
          takeUntil(this.unsubscribe)
        )
        .subscribe(resp => {
          console.log('Reset pass successfull');
        });

        this.statusModal(false);

    } else {
      this.completeForm = false;
    }
  }

  redirect(){
    this.route.navigate(['/login']);
  }

}
