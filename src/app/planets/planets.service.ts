import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Planet } from '@app/core/models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  apiUrl = 'planets';

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planet[]> {
    // console.log(this.apiUrl);
    return this.http.get(this.apiUrl).pipe(
      map((res: Planet[]) => {
        return res as Planet[];
      })
    );
  }

  getPlanetById(id: number): Observable<Planet> {
    // console.log(this.apiUrl);
    return this.http.get(this.apiUrl + '/' + id).pipe(
      map((res: Planet) => {
        return res as Planet;
      })
    );
  }
}
