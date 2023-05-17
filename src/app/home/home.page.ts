import { Component } from '@angular/core';
import { TesteService } from '../services/teste.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  public cars : any;
  public valor : any;

  constructor(public testeService: TesteService) {}



  ngOnInit(){

    
    this.testeService.getCars().subscribe(
      (data : any) => this.cars = data,
      (error : any) => console.log(error)
    )
  }

}
