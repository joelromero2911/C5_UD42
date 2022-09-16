import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { CharactersComponent } from './characters/characters.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { VerDetallesComponent } from './ver-detalles/ver-detalles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters', pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'ver-detalles/:id',
    component: VerDetallesComponent
  },
  {
    path: 'add',
    component: AddCharacterComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
