import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  private baseUrl = environment.apiUrl + '/leagues/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getLeague(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }
}
