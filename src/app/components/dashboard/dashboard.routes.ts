import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from '../../theme/pages/default/default.component';
import { DashboardComponent } from './dashboard.component';

import { SharedCanActivateAuthService } from './../shared/service/shared-can-activate-auth.service';

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
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutes { }
