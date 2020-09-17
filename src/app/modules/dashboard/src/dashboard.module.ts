// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third Modules
import { ButtonModule } from 'primeng/button';

// Module Routing Module
import { DashboardRoutingModule } from './dashboard.routing.module';

// Module Components
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule {  
}
