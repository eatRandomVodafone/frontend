import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { AltaComponent } from './views/alta/alta.component';
import { StatusComponent } from './views/status/status.component';
import { ConfirmComponent } from './views/confirm/confirm.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SvgSpritesheetDirective } from './directives/sprite-sheet.directive';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/tokenInt';
import { HeaderComponent } from './components/header/header.component';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> feature/login

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    AltaComponent,
    StatusComponent,
    ConfirmComponent,
    ProfileComponent,
    SvgSpritesheetDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
<<<<<<< HEAD
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
=======
>>>>>>> feature/login
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
