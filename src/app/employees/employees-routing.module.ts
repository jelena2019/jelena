import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { EmployeesComponent } from './employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts

  { path: '', component: EmployeesComponent, data: { title: extract('Employees') } },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent, data: { title: extract('Employee Details') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EmployeesRoutingModule {}
