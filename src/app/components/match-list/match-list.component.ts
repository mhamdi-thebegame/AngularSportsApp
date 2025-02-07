import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-match-list',
    standalone: true,
    templateUrl: './match-list.component.html',
    styleUrls: ['./match-list.component.css'],
    imports: [CommonModule]
})
export class MatchListComponent implements OnInit {
  matches: any[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe(
      (data) => {
        this.matches = data;
      },
      (error) => {
        console.error('Error fetching matches:', error);
      }
    );
  }
}
