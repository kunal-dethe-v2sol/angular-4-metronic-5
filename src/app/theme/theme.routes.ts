import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeComponent } from './theme.component';

import { SharedCanActivateAuthService } from '../components/shared/service/shared-can-activate-auth.service';

const routes: Routes = [
    {
        path: '',
        component: ThemeComponent,
        canActivate: [SharedCanActivateAuthService],
        children: [
            {
                path: 'dashboard',
                loadChildren: '../components/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'organization',
                loadChildren: '../components/masters/organization/organization.module#OrganizationModule'
            },
            {
                path: '404',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutes { }