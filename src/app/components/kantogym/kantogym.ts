import { Component } from '@angular/core';
import { LeaderInfo, GymLeader } from '../leader-info/leader-info';

@Component({
  selector: 'app-kantogym',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './kantogym.html',
  styleUrl: './kantogym.css'
})
export class KantogymComponent {

gymLeaders: GymLeader[] = [
  {
    name: 'Brock',
    badge: 'Boulder Badge',
    location: 'Pewter City',
    pokemon: ['Geodude', 'Onix'],
    motto: "I'm Brock! I'm an expert of Rock-type Pokémon my defense is Rock Hard."
  },
  {
    name: 'Misty',
    badge: 'Cascade Badge',
    location: 'Cerulean City',
    pokemon: ['Staryu', 'Starmie'],
    motto: "I'm Misty! I'm a user of Water-type Pokémon!"
  },
  {
    name: 'Lt. Surge',
    badge: 'Thunder Badge',
    location: 'Vermilion City',
    pokemon: ['Voltorb', 'Pikachu', 'Raichu'],
    motto: "The name's Lt. Surge! When it comes to Electric-type Pokémon, I'm number one!"
  },
  {
    name: 'Erika',
    badge: 'Rainbow Badge',
    location: 'Celadon City',
    pokemon: ['Victreebel', 'Tangela', 'Vileplume'],
    motto: "My name is Erika. I am the Leader of Celadon Gym. I teach the art of flower arranging. My Pokémon are of the grass-type."
  },
  {
    name: 'Koga',
    badge: 'Soul Badge',
    location: 'Fuchsia City',
    pokemon: ['Koffing', 'Muk', 'Weezing'],
    motto: "Ha ha ha! I am Koga! Ninja of Fuchsia Gym. I wield sleep, confuse, and more spells!"
  },
  {
    name: 'Sabrina',
    badge: 'Marsh Badge',
    location: 'Saffron City',
    pokemon: ['Mr. Mime', 'Kadabra', 'Alakazam'],
    motto: "...So you've come! I had a vision of your arrival... I dislike battling, but if you wish to... Then I will show you my power!"
  },
  {
    name: 'Blaine',
    badge: 'Volcano Badge',
    location: 'Cinnabar Island',
    pokemon: ['Growlithe', 'Ponyta', 'Rapidash', 'Arcanine'],
    motto: "Hah! I'm Blaine! I am the Leader of Cinnabar Gym! My fiery Pokémon will incinerate all challengers!"
  },
  {
    name: 'Giovanni',
    badge: 'Earth Badge',
    location: 'Viridian City',
    pokemon: ['Rhyhorn', 'Dugtrio', 'Nidoking', 'Rhydon'],
    motto: "For your insolence, you will feel a world of pain!"
  }
];
}
