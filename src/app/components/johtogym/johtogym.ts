import { Component } from '@angular/core';
import { LeaderInfo, GymLeader } from '../leader-info/leader-info';

@Component({
  selector: 'app-johtogym',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './johtogym.html',
  styleUrl: './johtogym.css'
})
export class JohtogymComponent {

gymLeaders: GymLeader[] = [
  {
    name: 'Falkner',
    badge: 'Zephyr Badge',
    location: 'Violet City',
    pokemon: ['Pidgey', 'Pidgeotto'],
    motto: "Believes in the elegant, soaring potential of Flying-type birds carrying on his father's legacy at the Violet City Gym."
  },
  {
    name: 'Bugsy',
    badge: 'Hive Badge',
    location: 'Azalea Town',
    pokemon: ['Metapod', 'Kakuna', 'Scyther'],
    motto: "Proves that size doesn't matter through the deep, tactical study of Bug-type evolution and attributes."

  },
  {
    name: 'Whitney',
    badge: 'Plain Badge',
    location: 'Goldenrod City',
    pokemon: ['Clefairy', 'Miltank'],
    motto: "Relies on overwhelming momentum and the deceptively tough Normal-type defense of her notorious Miltank."
  },
  {
    name: 'Morty',
    badge: 'Fog Badge',
    location: 'Ecruteak City',
    pokemon: ['Gastly', 'Haunter', 'Gengar'],
    motto: "Explores the spiritual connection between ghosts, folklore, and the legend of the Ecruteak City Rainbow Tower."
  },
  {
    name: 'Chuck',
    badge: 'Storm Badge',
    location: 'Cianwood City',
    pokemon: ['Primeape', 'Poliwrath'],
    motto: "Focuses on pure grit, physical conditioning, and the crashing waves of Cianwood strength."
  },
  {
    name: 'Jasmine',
    badge: 'Mineral Badge',
    location: 'Olivine City',
    pokemon: ['Magnemite', 'Magnemite', 'Steelix'],
    motto: "Embodies a quiet, unbreakable defense through the gentle toughness of Steel-types."
  },
  {
    name: 'Pryce',
    badge: 'Glacier Badge',
    location: 'Mahogany Town',
    pokemon: ['Seel', 'Dewgong', 'Piloswine'],
    motto: "Teaches that true strength is tempered by time, endurance, and surviving harsh winters just like ice."
  },
  {
    name: 'Clair',
    badge: 'Rising Badge',
    location: 'Blackthorn City',
    pokemon: ['Dragonair', 'Dragonair', 'Kingdra'],
    motto: "Demands absolute respect for the elite, untamed power of dragon-type lineage in Blackthorn City"
  }
];
}
