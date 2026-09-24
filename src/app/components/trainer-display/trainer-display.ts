import { Component, inject } from '@angular/core';
import { TrainerService } from '../../trainerservice'
@Component({
selector: 'app-trainer-display',
standalone: true,
template: `
<div class="container">
  <h1>Hoenn Region</h1>

  @for (trainer of trainerService.trainers(); track trainer.name) {
    <div class="trainer-card">
      <h2>Gym leader: {{ trainer.name }}</h2>
      <p>
        <strong>Town:</strong> {{ trainer.town }} | 
        <strong>Type:</strong> {{ trainer.specialty }} | 
        <strong>Badge:</strong> {{ trainer.badge }}
      </p>
      
      <ul>
        <h4>Pokemon Team</h4>
        @for (pokemon of trainer.team; track $index) {
          <li>
            <strong>{{ pokemon }}</strong>
          </li>
        }
      </ul>
    </div>
  }
</div>
<style>
.container {
  background: #50C878;
  padding: 25px;
  border-radius: 15px;
}
.trainer-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
</style>
`
})
export class TrainerDisplay {
trainerService = inject(TrainerService);
}
