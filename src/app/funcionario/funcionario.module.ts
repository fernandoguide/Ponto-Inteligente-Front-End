import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FuncionarioComponent } from './components/funcionario.component';



@NgModule({
  declarations: [
    ListagemComponent,
    LancamentoComponent,
    FuncionarioComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class FuncionarioModule { }
