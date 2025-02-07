import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  private baseUrl = 'http://localhost:8000/api/sports/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getSports(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getSport(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }
}
