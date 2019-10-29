import { CadastroPjService } from './services/cadastro-pj.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';

import {CadastrarPjComponent} from './components/cadastrar-pj/cadastrar-pj.component';
import {CadastroPjComponent} from './components/cadastro-pj.components';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  providers: [
    CadastroPjService
  ]
})
export class CadastroPjModule { }
