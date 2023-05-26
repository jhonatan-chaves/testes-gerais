import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private httpClient: HttpClient) { }

  public getCars() : any{
   return this.httpClient.get('https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json');
  }

  public setValor(valor : any){
    return valor;
  }

  public setNome(valor : any){
    return valor.include();
  }
}
