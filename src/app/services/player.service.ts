import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl = 'http://localhost:8000/api/players/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getPlayers(teamId?: number, leagueId?: number): Observable<any[]> {
    let params = new HttpParams();
    if (teamId) {
      params = params.set('team_id', teamId.toString());
    } else if (leagueId) {
      params = params.set('league_id', leagueId.toString());
    }
    return this.http.get<any[]>(this.baseUrl, { params: params });
  }

  getPlayer(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }
}
