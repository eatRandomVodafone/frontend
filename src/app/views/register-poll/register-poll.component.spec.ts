import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPollComponent } from './register-poll.component';

describe('RegistroComponent', () => {
  let component: RegisterPollComponent;
  let fixture: ComponentFixture<RegisterPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
