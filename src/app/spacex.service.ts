import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  // Fetch all launches
  getLaunches(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch launches by a specific year
  getLaunchesByYear(year: string): Observable<any[]> {
    const url = `${this.apiUrl}?launch_year=${year}`;
    return this.http.get<any[]>(url);
  }
  getLaunchDetails(flightNumber: string): Observable<any> {
    const url = `${this.apiUrl}/${flightNumber}`;
    return this.http.get<any>(url);
  }
}
