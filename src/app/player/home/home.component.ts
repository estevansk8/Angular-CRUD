import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  allplayers : Player[] = []
  constructor(private playerService: PlayerService){}

  ngOnInit(): void {
    this.playerService.getAll().subscribe((data) =>{
      this.allplayers = data;
    })
  }
}
