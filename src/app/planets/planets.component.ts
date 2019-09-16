import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';
import { Planet } from '../core/models/planet.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  // serverVariable = 'pera';
  selectedPlanet: Planet;

  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {
    this.getPlanets();
    this.getPlanetByPlanetId(1);
  }

  getPlanets() {
    this.planetsService.getPlanets().subscribe((x: Planet[]) => {
      this.planets = x;
      // console.log(this.planets);
    });
  }

  getPlanetByPlanetId(id: number) {
    // console.log('id: ', id);
    // console.log(typeof(id));

    this.planetsService.getPlanetById(id).subscribe((planet: Planet) => {
      this.selectedPlanet = planet;
    });
  }
}
