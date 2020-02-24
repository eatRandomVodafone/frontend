import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponentsComponent } from './testing-components.component';

describe('TestingComponentsComponent', () => {
  let component: TestingComponentsComponent;
  let fixture: ComponentFixture<TestingComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
