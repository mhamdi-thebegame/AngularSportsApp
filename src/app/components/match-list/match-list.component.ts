import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { CommonModule, DatePipe } from '@angular/common';
import { MatchesService } from '../../services/matches.service';

@Component({
    selector: 'app-match-list',
    standalone: true,
    templateUrl: './match-list.component.html',
    styleUrls: ['./match-list.component.css'],
    imports: [CommonModule],
    providers: [DatePipe]
})
export class MatchListComponent implements OnInit {
  matches: any[] = [];

  

  constructor(
    private matchesService: MatchesService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    // Fetch match data when the component loads
    this.matchesService.getAllMatches().subscribe({
      next: (res) => {
        // Here, 'res' contains your array of matches from the API
        this.matches = res;
        // You could sort them or filter them if you want, e.g.:
        // this.matches.sort((a,b) => // custom logic);
      },
      error: (err) => {
        console.error('Error fetching matches:', err);
      },
    });
  }

  /**
   * Helper to format the match date, e.g. "5th Nov 2024"
   * using Angular's DatePipe.
   */
  formatDate(dateStr: string): string {
    // Adapt the format to what you prefer (e.g., 'd MMM y')
    return this.datePipe.transform(dateStr, 'd MMM y') || '';
  }

  /**
   * Below are placeholder methods to retrieve the team names & logos.
   * In a real scenario, your API might already provide fields like
   * 'team1_name', 'team2_name', 'team1_logo', 'team2_logo'.
   */
  getTeam1Name(match: any): string {
    // Example logic using match.id:
    if (match.id === 1) return 'Liverpool';
    if (match.id === 2) return 'Arsenal';
    if (match.id === 3) return 'Man City';
    if (match.id === 4) return 'Barcelona';
    return 'Real Madrid';
  }

  getTeam2Name(match: any): string {
    // Same idea as above, different IDs => different teams
    if (match.id === 1) return 'Man City';
    if (match.id === 2) return 'Tottenham';
    if (match.id === 3) return 'Arsenal';
    if (match.id === 4) return 'Real Madrid';
    return 'Bayern';
  }

  getTeam1Logo(match: any): string {
    // Use actual images in your assets folder or from a URL
    if (match.id === 1) return 'assets/DefaultFootballTeam.jpg';
    if (match.id === 2) return 'assets/DefaultFootballTeam.jpg';
    if (match.id === 3) return 'assets/DefaultFootballTeam.jpg';
    if (match.id === 4) return 'assets/DefaultFootballTeam.jpg';
    return 'assets/DefaultFootballTeam.jpg';
  }

  getTeam2Logo(match: any): string {
    if (match.id === 1) return 'assets/DefaultFootballTeam.jpg';
    if (match.id === 2) return 'assets/DefaultFootballTeam.jpg';
    if (match.id === 3) return 'assets/DefaultFootballTeam.jpg';
    if (match.id === 4) return 'assets/DefaultFootballTeam.jpg';
    return 'assets/DefaultFootballTeam.jpg';
  }

}
