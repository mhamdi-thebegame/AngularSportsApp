import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../Shared/loading/loading.component";

@Component({
    selector: 'app-team-list',
    standalone: true,
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.css'],
    imports: [CommonModule, LoadingComponent]
})
export class TeamListComponent implements OnInit {

  teams: any[] = [];
  isloading = true;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe({
      next: (res) => {
        this.teams = res;
        console.log(res);
        this.isloading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    }
      
    );
  }
}
