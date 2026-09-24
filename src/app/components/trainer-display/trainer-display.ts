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
        @for (pokemon of trainer.team; track $index) {
          <li>
            <strong>{{ pokemon }}</strong>
          </li>
        }
      </ul>
    </div>
  }
</div>
`
})
export class TrainerDisplay {
trainerService = inject(TrainerService);
}
