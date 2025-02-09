import { Component, OnInit } from '@angular/core';
import { TeamsLeaguesService } from '../../services/teams-leagues.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-league-list',
    standalone: true,
    templateUrl: './league-list.component.html',
    styleUrls: ['./league-list.component.css'],
    imports: [CommonModule]
})

export class LeagueListComponent implements OnInit {
  data: any[] = [];

  constructor(private teamsLeaguesService: TeamsLeaguesService) {}

  ngOnInit(): void {
    // عند تحميل الكمبوننت، نجلب البيانات من الخدمة
    this.teamsLeaguesService.getTeamsLeagues().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res.sort((a, b) => a.rank - b.rank);
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
    });
  }
}
