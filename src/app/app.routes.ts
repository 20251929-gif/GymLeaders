import { Routes } from '@angular/router';
import { KantogymComponent } from './components/kantogym/kantogym';
import { JohtogymComponent } from './components/johtogym/johtogym';
import { Home } from './home/home';


export const routes: Routes = [
  { path: 'kantogym', component: KantogymComponent },
  { path: 'johtogym', component: JohtogymComponent },
  { path: 'home', component: Home }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]
