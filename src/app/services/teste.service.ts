import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuarios } from '../login/Usuarios';




@Injectable({
  providedIn: 'root'
})
export class TesteService {



  private pessoa : Array<any> = ["jhonatan", "goku", "vegeta"];

  private senhas : Array< any>  = ["125", "bulma", "piculo"];
  
     userEsenhas : Usuarios[] = [
    {
      user: "jhonatan",
      senha: "1234",
      
      
      
    },
    {
      user: "goku",
      senha: "555"
    }
  ]





   validarUsuario(user: string, senha: string): boolean {

    for(const usuario of this.userEsenhas){
      if(usuario.user === user && usuario.senha === senha){
        console.log("verdadeiro")
        return true;
      }
    }
    console.log("falso")
    return false;
  }



  public valid2(senha: any, pessoa: any){
  if(this.userEsenhas.findIndex(senha) == this.userEsenhas.findIndex(pessoa)){
    console.log(this.userEsenhas.indexOf(senha));
    console.log(this.userEsenhas.indexOf(pessoa))
  }else{
    console.log("alguma coisa ainda esta errado");
  }
  }



public valid(senha: any, pessoa: any){
  if(this.senhas.includes(senha) && this.pessoa.includes(pessoa)){
   console.log(senha)
   console.log(pessoa)
    // return this.goToLogin();
  }else{
     this.presentToast();
     console.log(this.senhas.values)
   console.log(pessoa)
  }

}

  constructor(private httpClient: HttpClient,  private router: Router, private toastController: ToastController, ) { 


  }

  public getCars() {
    return this.httpClient.get('https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json');
  }
  /*
  public postCars(obj:Usuarios) : any{
   return this.httpClient.post<any>('https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json',{
      obj
   }).pipe(map(x=>console.log(x))).subscribe({
  
   })
  }
*/
  public setValor(valor : any){
    return valor;
  }

  public setNome(valor : any){
    return valor.include();
  }


  
  goToLogin(){
    this.router.navigate(['home']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'E-mail ou senha, invalidos!',
      duration: 2000,
      position: 'top',
    });

    await toast.present();
  }
}



