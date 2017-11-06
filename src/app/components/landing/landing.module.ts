import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2MDFValidationMessagesModule } from 'ng2-mdf-validation-messages';

import { LandingComponent } from './landing.component';
import { LandingService } from './landing.service';

import { CONST } from './../shared/shared.constants';

@NgModule({
    declarations: [
        LandingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,    //Required for LoginComponent and RegisterComponent
        ReactiveFormsModule,    //Required for LoginComponent and RegisterComponent
        Ng2MDFValidationMessagesModule.globalConfig(CONST['ng2MDFValidationMessagesConfig'])
    ],
    providers: [
        LandingService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class LandingModule { }
