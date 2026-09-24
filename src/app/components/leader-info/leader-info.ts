import { Component, Input, output } from '@angular/core';

export interface GymLeader {
  name: string;
  badge: string;
  location: string;
  pokemon: string[];
  motto: string;
}

@Component({
  selector: 'app-gymcard',
  standalone: true,
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'

})
export class LeaderInfo {
  @Input() leader!: GymLeader;
  motto = output<string>(); 
  Motto() {
    this.motto.emit(this.leader.motto);
  }
    visible = false;
    
  toggleMotto() {
    this.visible = !this.visible;
  }
}
