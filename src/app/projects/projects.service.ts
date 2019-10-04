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

  getAllProjects(): Observable<Project[]> {
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

  createProject(project: Project): Observable<Project> {
    return this.http.post(this.apiUrl, project).pipe(
      map((res: any) => {
        return res as Project;
      })
      // catchError(console.log())
    );
  }

  updateProject(project: Project): Observable<Project> {
    console.log(this.apiUrl + '/' + project.id);
    return this.http.put(this.apiUrl, project).pipe(
      map((res: any) => {
        return res as Project;
      })
      // catchError(console.log())
    );
  }

  deleteProject(project: Project): Observable<Project> {
    console.log('delete: ', this.apiUrl + '/' + project.id);
    return this.http.delete(this.apiUrl + '/' + project.id).pipe(
      map((res: any) => {
        return res as Project;
      })
      // catchError(console.log())
    );
  }
}
