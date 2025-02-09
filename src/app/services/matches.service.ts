import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService   {

  private baseUrl = environment.apiUrl + '/matches/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllMatches(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
