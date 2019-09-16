import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '@app/core/models/employee.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  apiUrl = 'employees';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => {
        return res as Employee[];
      })
      // catchError(console.log())
    );
  }
}
