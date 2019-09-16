import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesService } from './employees.service';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule, EmployeesRoutingModule],
  providers: [EmployeesService]
})
export class EmployeesModule {}
