import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { PlanetsService } from './planets.service';
import { PlanetsRoutingModule } from './planets-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlanetsComponent],
  imports: [CommonModule, FormsModule, PlanetsRoutingModule]
})
export class PlanetsModule {}
