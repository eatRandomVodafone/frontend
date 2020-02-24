import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {RegistroComponent} from './views/registro/registro.component';
import {AltaComponent} from './views/alta/alta.component';
import {ProfileComponent} from './views/profile/profile.component';
import {ConfirmComponent} from './views/confirm/confirm.component';
import {StatusComponent} from './views/status/status.component';
import {TokenGuard} from './guards/token.guard';
import {ResetPassComponent} from './views/reset-pass/reset-pass.component';
import {UserRegisterComponent} from './views/user-register/user-register.component';
import {TestingComponentsComponent} from './views/testing-components/testing-components.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestingComponentsComponent,
    data: {
      title: 'Eat 2 Meet | Testing de componentes'
    }
  },
  {
    path: 'user-register',
    component: UserRegisterComponent,
    data: {
      title: 'Eat 2 Meet | Registro de usuario'
    }
  },
  {
    path: 'register-poll',
    component: RegistroComponent,
    data: {
      title: 'Eat 2 Meet | Registro de usuario'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Eat 2 Meet | Login'
    }
  },
  {
    path: 'reset-password',
    component: ResetPassComponent,
    data: {
      title: 'Eat 2 Meet | Resetea tu contraseña'
    }
  },
  {
    path: 'alta',
    component: AltaComponent,
    canLoad: [TokenGuard],
    data: {
      title: 'Eat 2 Meet | Date de alta en el pool'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canLoad: [TokenGuard],
    data: {
      title: 'Eat 2 Meet | Perfil de usuario'
    }
  },
  {
    path: 'confirm',
    component: ConfirmComponent,
    canLoad: [TokenGuard],
    data: {
      title: 'Eat 2 Meet | Confirmación de la mesa'
    }
  },
  {
    path: 'status',
    component: StatusComponent,
    canLoad: [TokenGuard],
    data: {
      title: 'Eat 2 Meet | Estado de mesa'
    }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
