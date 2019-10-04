import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from '@app/core/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  selectedProject = new Project(null, null, null, null);

  mode = 'new';

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.getAllProjects()
      .subscribe((projects: Project[]) => this.projects = projects);
  }

  setSelectedProject(project: Project) {
    this.selectedProject = project;
    this.mode = 'update';
  }

  cancel() {
    this.selectedProject = new Project(null, null, null, null);
    this.mode = 'new';
  }

  save(selectedProject : Project) {
    this.projectsService.createProject(selectedProject)
      .subscribe((project: Project) => alert('SAVED'));
  }

  update(selectedProject : Project) {
    this.projectsService.updateProject(selectedProject)
      .subscribe((project: Project) => alert('UPDATED'));
  }

  delete(selectedProject : Project) {
    this.projectsService.deleteProject(selectedProject)
      .subscribe((project: Project) => alert('DELETED'));
  }
}
