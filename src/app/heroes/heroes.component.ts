import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

//  heroes = HEROES;
heroes: Hero[];
selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
    this.printSomething('In constructor');
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(incomingHeroes => this.heroes = incomingHeroes);
    this.printSomething('getHeroes');
  }

  printSomething(logValue: string) {
    console.log(logValue);
  }


}
