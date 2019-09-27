import { Component, Input, Output, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeesService } from './employees.service';
import { Employee } from '../core/models/employee.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  isLoading: boolean;
  employees: Employee[] = [];
  protected: boolean;
  name: string;

  constructor(private employeesService: EmployeesService, private router: Router) {}

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
