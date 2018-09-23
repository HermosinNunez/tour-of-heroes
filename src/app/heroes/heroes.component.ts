import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroArray: Hero[] = [
      { name: 'Molten Legs', id: 1, description: 'He just try to help!' },
      { name: 'Long boi', id: 2, description: 'He very long, yo!' }
    ];
    auxName: string;
    auxDescription: string;

  constructor() { }

  ngOnInit() {

  }

  addHero() {
    if (this.auxName && this.auxDescription) {
      let auxId: number = this.heroArray.length + 1;
      let auxHero: Hero = {
        name: this.auxName,
        id: auxId,
        description: this.auxDescription
      };
      this.heroArray.push(auxHero);
      this.auxName = null;
      this.auxDescription = null;
    }
  }
}
