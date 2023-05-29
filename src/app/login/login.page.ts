import { Component, OnInit } from '@angular/core';
import { TesteService } from '../services/teste.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public senha : any;
  public pessoa: any;

  constructor(public serviceService : TesteService) {
   

   }
   validarLogin(user: string, senha : string): void{
    const usuarioValido = this.serviceService.validarUsuario(user,senha);
    
    if(usuarioValido){
      console.log("usuario valido");
    }else{
      console.log("usuario invalido");
    }
   }

  ngOnInit() {

  }

}

