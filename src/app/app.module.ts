import { CadastroPfModule } from './auth/cadastro-pf/cadastro-pf.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginModule } from './auth/login/login.module';
import { LoginRoutingModule } from './auth/login/login-routing.module';
import { CadastroPjModule } from './auth/cadastro-pj/cadastro-pj.module';
import { CadastroPjRoutingModule } from './auth/cadastro-pj/cadastro-pj-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { CadastroPfRoutingModule } from './auth/cadastro-pf/components/cadastro-pf-routing.module';
import { FuncionarioModule } from './funcionario/funcionario.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    FuncionarioModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
