import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterPollComponent } from './views/register-poll/register-poll.component';
import { StatusComponent } from './views/status/status.component';
import { ConfirmComponent } from './views/confirm/confirm.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SvgSpritesheetDirective } from './directives/sprite-sheet.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SlideComponent } from './components/slide/slide.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { ResetPassComponent } from './views/reset-pass/reset-pass.component';
import { SelectComponent } from './components/select/select.component';
import { UserRegisterComponent } from './views/user-register/user-register.component';
import { TestingComponentsComponent } from './views/testing-components/testing-components.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterPollComponent,
    RegisterPollComponent,
    StatusComponent,
    ConfirmComponent,
    ProfileComponent,
    SvgSpritesheetDirective,
    HeaderComponent,
    SvgSpritesheetDirective,
    SlideComponent,
    CardComponent,
    ModalComponent,
    ResetPassComponent,
    SelectComponent,
    UserRegisterComponent,
    TestingComponentsComponent,
    CarouselComponent,
    CarouselItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
