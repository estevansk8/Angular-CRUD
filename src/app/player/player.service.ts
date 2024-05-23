import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor( private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Player[]>('http://localhost:3000/players');
  }
  
}
