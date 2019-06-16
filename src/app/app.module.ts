import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitiativeItemComponent } from './initiative/initiative-item/initiative-item.component';
import { InitiativeListComponent } from './initiative/initiative-list/initiative-list.component';
import { SharedMaterialModule } from './shared/shared-material/shared-material.module';
import { InitiativeTrackerComponent } from './pages/initiative-tracker/initiative-tracker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InitiativeItemComponent,
    InitiativeListComponent,
    InitiativeTrackerComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedMaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
