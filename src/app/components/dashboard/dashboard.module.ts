import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '../../theme/layouts/layout.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routes';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutes,
        LayoutModule
    ],
    providers: []
})
export class DashboardModule { }
