import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor( private _http: HttpClient ) { 
    this.getBulbasaur();
    this.getPikachu();
    this.getPressure();
  };

  getBulbasaur(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/bulbasaur/');
    bulbasaur.subscribe(data => console.log("Got em!", data));
    console.log(bulbasaur);
  }

  getPikachu(){
    let pikachu = this._http.get('https://pokeapi.co/api/v2/pokemon/pikachu/');
    pikachu.subscribe(data => console.log("You caught Pikachu!", data));
    console.log(pikachu);
  }

  getPressure(){
    let pressure = this._http.get('https://pokeapi.co/api/v2/ability/pressure/');
    pressure.subscribe(data => console.log(`${data['pokemon'].length} pokemon have the ability Pressure`));
    
    }    
  }



