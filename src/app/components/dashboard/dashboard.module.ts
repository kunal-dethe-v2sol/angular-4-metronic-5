import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '../../theme/layouts/layout.module';
import { DefaultComponent } from '../../theme/pages/default/default.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            }
        ]
    }
];
@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class DashboardModule { }
