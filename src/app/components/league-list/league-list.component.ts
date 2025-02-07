import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-league-list',
    standalone: true,
    templateUrl: './league-list.component.html',
    styleUrls: ['./league-list.component.css'],
    imports: [CommonModule]
})
export class LeagueListComponent implements OnInit {
  leagues: any[] = [];

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getLeagues().subscribe(
      (data) => {
        this.leagues = data;
      },
      (error) => {
        console.error('Error fetching leagues:', error);
      }
    );
  }
}
