import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellService } from '@app/shell/shell.service';
import { extract } from '@app/core';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  // ShellService.childRoutes([
  //   // Module is lazy loaded, see app-routing.module.ts

  //   { path: '', component: ProjectsComponent, data: { title: extract('Projects') } }
  // ])

  ShellService.childRoutes([{ path: 'projects', component: ProjectsComponent, data: { title: extract('Projects') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectsRoutingModule {}
