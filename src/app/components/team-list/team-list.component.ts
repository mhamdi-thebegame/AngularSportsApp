import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team-list',
    standalone: true,
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.css'],
    imports: [CommonModule]
})
export class TeamListComponent implements OnInit {
  teams: any[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(
      (data) => {
        this.teams = data;
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }
}
