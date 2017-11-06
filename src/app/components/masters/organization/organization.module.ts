import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2MDFValidationMessagesModule } from 'ng2-mdf-validation-messages';

import { LayoutModule } from '../../../theme/layouts/layout.module';
import { DefaultComponent } from '../../../theme/pages/default/default.component';
import { OrganizationComponent } from './organization.component';

import { CONST } from './../../shared/shared.constants';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: '',
                component: OrganizationComponent
            }
        ]
    }
];
@NgModule({
    declarations: [
        OrganizationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2MDFValidationMessagesModule.globalConfig(CONST['ng2MDFValidationMessagesConfig'])
    ],
    exports: [
        RouterModule
    ]
})
export class OrganizationModule { }
