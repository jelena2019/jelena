import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from '../core/models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  isLoading: boolean;
  employees: Employee[] = [];
  protected: boolean;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getEmployees();
    console.log('protected: ', this.protected);
  }

  changeState() {
    this.protected = !this.protected;
    console.log('protected: ', this.protected);
  }

  getEmployees() {
    this.employeesService.getEmployees().subscribe((x: Employee[]) => {
      this.employees = x;
      console.log(this.employees);
      this.isLoading = false;
    });
  }
}
