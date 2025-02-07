import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-player-list',
    standalone: true,
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css'],
    imports: [CommonModule]
})
export class PlayerListComponent implements OnInit {
  players: any[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(
      (data) => {
        this.players = data;
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }
}
