import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './components/listagem/listagem.component';



@NgModule({
  declarations: [
    ListagemComponent,
    LancamentoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FuncionarioModule { }
