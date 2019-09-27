import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShellService } from '@app/shell/shell.service';

const routes: Routes = [
  ShellService.childRoutes([
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'employees', loadChildren: './employees/employees.module#EmployeesModule' },
    { path: 'products', loadChildren: './products/products.module#ProductsModule' },
    { path: 'planets', loadChildren: './planets/planets.module#PlanetsModule' }
    // { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
