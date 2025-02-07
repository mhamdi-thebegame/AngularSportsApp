import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private baseUrl = environment.apiUrl + 'matches/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getMatches(leagueId?: number, teamId?: number): Observable<any[]> {
    let params = new HttpParams();
    if (leagueId) {
      params = params.set('league_id', leagueId.toString());
    } else if (teamId) {
      params = params.set('team_id', teamId.toString());
    }
    return this.http.get<any[]>(this.baseUrl, { params: params });
  }

  getMatch(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }
}
