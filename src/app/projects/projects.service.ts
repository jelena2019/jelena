import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '@app/core/models/project.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  apiUrl = 'projects';

  constructor(private http: HttpClient) {}
  getProjects(): Observable<Project[]> {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => {
        return res as Project[];
      })
      // catchError(console.log())
    );
  }

  getProjectById(id: any): Observable<Project> {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl + '/' + id).pipe(
      map((res: any) => {
        return res as Project;
      })
      // catchError(console.log())
    );
  }
}
