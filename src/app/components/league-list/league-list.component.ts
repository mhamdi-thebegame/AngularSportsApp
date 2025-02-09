import { Component, OnInit } from '@angular/core';
import { TeamsLeaguesService } from '../../services/teams-leagues.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../Shared/loading/loading.component";
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
    selector: 'app-league-list',
    standalone: true,
    templateUrl: './league-list.component.html',
    styleUrls: ['./league-list.component.css'],
    imports: [CommonModule, LoadingComponent]
})

export class LeagueListComponent implements OnInit {
navigateToTeam(id: any) {
  this.route.navigate(['/team', id]);
}
  data: any[] = [];
  isloading = true;
  constructor(private teamsLeaguesService: TeamsLeaguesService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // عند تحميل الكمبوننت، نجلب البيانات من الخدمة
    this.teamsLeaguesService.getTeamsLeagues().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res.sort((a, b) => a.rank - b.rank);
        this.isloading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}
