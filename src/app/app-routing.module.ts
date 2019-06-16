import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitiativeTrackerComponent } from './pages/initiative-tracker/initiative-tracker.component';

const routes: Routes = [
  {
    path: 'initTracker',
    component: InitiativeTrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
