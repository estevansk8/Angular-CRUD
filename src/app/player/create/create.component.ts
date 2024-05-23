import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private playerService: PlayerService, private router: Router){}
  formdata : Player = {
    id: 0,
    name: "",
    position: " ",
    club: ""
  }

  create(){
    this.playerService.create(this.formdata).subscribe({
      next:(data)=> {
        this.router.navigate(["player/home"])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
