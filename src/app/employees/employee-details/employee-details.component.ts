import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '@app/core/models/employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee = new Employee(null, null, null, null);
  id: any;

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get('id');

      this.getEmployeeById(this.id);
    });
  }

  getEmployeeById(id: any) {
    this.employeesService.getEmployeeById(id).subscribe((x: Employee) => {
      this.employee = x;
      console.log(this.employee);
    });
  }
}
