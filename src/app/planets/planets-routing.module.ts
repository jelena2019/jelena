import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellService } from '@app/shell/shell.service';
import { extract } from '@app/core';
import { PlanetsComponent } from './planets.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  // { path: '', component: PlanetsComponent, data: { title: extract('Planets') } }
  // { path: 'planets', loadChildren: './planets/planets.module#PlanetsModule' }
  ShellService.childRoutes([{ path: 'planets', component: PlanetsComponent, data: { title: extract('Planets') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PlanetsRoutingModule {}
