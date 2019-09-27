import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsComponent],
  exports: [],
  imports: [CommonModule, ProjectsRoutingModule],
  providers: [ProjectsService]
})
export class ProjectsModule {}
