import { Routes } from '@angular/router';
import { KantogymComponent } from './components/kantogym/kantogym';
import { JohtogymComponent } from './components/johtogym/johtogym';
import { Home } from './home/home';
import { TrainerDisplay } from './components/hoenngym/trainer-display/trainer-display';


export const routes: Routes = [
  { path: 'trainer-display', component: TrainerDisplay }, 
  { path: 'kantogym', component: KantogymComponent },
  { path: 'johtogym', component: JohtogymComponent },
  { path: 'home', component: Home }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
