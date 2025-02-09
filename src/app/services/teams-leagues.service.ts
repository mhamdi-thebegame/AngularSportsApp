import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsLeaguesService  {

  private baseUrl = environment.apiUrl + '/teams-leagues/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getTeamsLeagues(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
