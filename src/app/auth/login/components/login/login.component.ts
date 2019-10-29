import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Login } from '../../models';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // logar() {
  //   if (this.form.invalid) {
  //     this.snackBar.open(
  //       'Dados invalidos', 'Erro', { duration: 3000 });
  //     return;
  //   }
  //   const login: Login = this.form.value;
  //   // alert(JSON.stringify(login));
  //   alert(`Email: ${login.email} e senha ${login.senha}`);
  // }

  logar() {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)  // faz a chamada do servico de login
      .subscribe( // subscribe se divide em 2 blocos , o casso de sucesso e o casso de erro
        data => {

          // console.log(JSON.stringify(data)); // para analisar o retorno do servidor

          // tslint:disable-next-line: no-string-literal
          localStorage['token'] = data['data']['token']; // armazena o token no localStorage

          const usuarioData = JSON.parse( // extraindo o perfil do usuario os dados ficam armazenados dentro do token JWT
            atob(data['data']['token'].split('.')[1]));  // atob eh um decoder de base 64 que foi utilizado para decodificar
          // o token JWT para extrair  o perfil do usuario , usando o split('.') e [1] para pegar o primeiro paramentro
          // console.log(JSON.stringify(usuarioData)); // mostrando o perfil do usuario no console

          if (usuarioData['role'] == 'ROLE_ADMIN') {
            // alert('Deve Redirecionar para apagina de admin');
            this.router.navigate(['/admin']);

          } else {
            // alert('Deve Redirecionar para apagina de funcionario');
            this.router.navigate(['/funcionario']);
          }
        },
        err => {
          // console.log(JSON.stringify(err));

          let msg: string = 'Tente novamente em instantes.';
          // tslint:disable-next-line: triple-equals
          // tslint:disable-next-line: no-string-literal
          if (err['status'] === 401) {
            msg = 'Email/senha inválido(s).';
          }
          this.snackBar.open(msg, 'Erro', { duration: 3000 });
        }
      );
  }

}
