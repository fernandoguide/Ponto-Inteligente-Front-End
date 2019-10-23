import { RouterModule } from '@angular/router';
import { LogarComponent } from './components/logar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';




@NgModule({
  declarations: [
    LoginComponent,
    LogarComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginModule { }
