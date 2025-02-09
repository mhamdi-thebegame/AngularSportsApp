import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../Shared/loading/loading.component";

@Component({
    selector: 'app-player-list',
    standalone: true,
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css'],
    imports: [CommonModule, LoadingComponent]
})
export class PlayerListComponent implements OnInit {
  players: any[] = [];
  isloading = true;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(
      (data) => {
        this.players = data;
        console.log(data);
        this.isloading = false;
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }
}
