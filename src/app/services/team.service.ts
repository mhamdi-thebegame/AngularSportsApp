import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl = 'http://localhost:8000/api/teams/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getTeams(leagueId?: number): Observable<any[]> {
    let params = new HttpParams();
    if (leagueId) {
      params = params.set('league_id', leagueId.toString());
    }
    return this.http.get<any[]>(this.baseUrl, { params: params });
  }

  getTeam(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }
}
