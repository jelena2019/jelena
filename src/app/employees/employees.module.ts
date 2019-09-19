import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from './employees.component';
import { EmployeesService } from './employees.service';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeeDetailsComponent],
  imports: [CommonModule, EmployeesRoutingModule],
  providers: [EmployeesService]
})
export class EmployeesModule {}
