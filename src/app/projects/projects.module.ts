import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectsComponent, ProjectDetailsComponent],
  exports: [],
  imports: [CommonModule, FormsModule, ProjectsRoutingModule],
  providers: [ProjectsService]
})
export class ProjectsModule {}
