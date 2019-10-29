import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FuncionarioComponent } from './components/funcionario.component';
import { SharedModule } from '../shared/shared.module';
import {
  MatCardModule,
  MatSortModule,
  MatPaginatorModule,
  MatTableModule,
  MatSnackBarModule,
  MatIconModule,
  MatTooltipModule,
  MatListModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';






@NgModule({
  declarations: [
    ListagemComponent,
    LancamentoComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    SharedModule
  ]
})
export class FuncionarioModule { }
