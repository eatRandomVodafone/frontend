import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegistroComponent } from './views/registro/registro.component';
import { AltaComponent } from './views/alta/alta.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ConfirmComponent } from './views/confirm/confirm.component';
import { StatusComponent } from './views/status/status.component';
import { TokenGuard } from './guards/token.guard';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent },
  { path: 'alta', component: AltaComponent,  canLoad:[TokenGuard]  },
  { path: 'profile', component: ProfileComponent,  canLoad:[TokenGuard]  },
  { path: 'confirm', component: ConfirmComponent,  canLoad:[TokenGuard] },
  { path: 'status', component: StatusComponent,  canLoad:[TokenGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
