import { Component } from '@angular/core';
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class TrainerService {
  private registry = signal([
  {
  name: 'Roxanne',
  team: ['Geodude', 'Geodude', 'Nosepass'],
  badge: 'Stone Badge',
  specialty: 'Rock',
  town: 'Rustboro City'
  },
  
  {
  name: 'Brawly',
  team: ['Machop', 'Meditite', "Makuhita"],
  badge: 'Knuckle Badge',
  specialty: 'Fighting',
  town: 'Dewford Town'
  },

  {
  name: 'Wattson',
  team: ['Magnemite', 'Manetric', 'Voltorb', 'Magneton'],
  badge: 'Dynamo Badge',
  specialty: 'Electric',
  town: 'Mauville City'
  },

  {
  name: 'Flannery',
  team: ['Slugma', 'Numel', 'Camerupt', 'Torkoal'],
  badge: 'Heat Badge',
  specialty: 'Fire',
  town: 'Lavaridge'
  },

  {
  name: 'Norman',
  team: ['Spinda', 'Vigoroth', 'Slaking', 'Linoone'],
  badge: 'Balance Badge',
  specialty: 'Normal',
  town: 'Petalburg City'
  },

  {
  name: 'Winona',
  team: ['Swellow', 'Altaria', 'Pelipper', 'Skarmory'],
  badge: 'Feather Badge',
  specialty: 'Flying',
  town: 'Fortree City'
  },

  {
  name: 'Tate & Liza',
  team: ['Solrock', 'Lunatone', 'Xatu', 'Claydol'],
  badge: 'Mind Badge',
  specialty: 'Psychic',
  town: 'Mossdeep City'
  },

  {
  name: 'Wallace',
  team: ['Luvdisc', 'Wishcash', 'Sealio', 'Seaking'],
  badge: 'Rain Badge',
  specialty: 'Water',
  town: 'Sootopolis City'
  },


  ]);
  trainers = this.registry.asReadonly();
}
