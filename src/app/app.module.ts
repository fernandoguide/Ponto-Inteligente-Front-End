import { CadastroPfModule } from './auth/cadastro-pf/cadastro-pf.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { LoginModule } from './auth/login/login.module';
import { LoginRoutingModule } from './auth/login/login-routing.module';
import { CadastroPjModule } from './auth/cadastro-pj/cadastro-pj.module';
import { CadastroPjRoutingModule } from './auth/cadastro-pj/cadastro-pj-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { CadastroPfRoutingModule } from './auth/cadastro-pf/components/cadastro-pf-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,


    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
