import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedService } from './service/shared.service';
import { SharedScriptLoaderService } from './service/shared-script-loader.service';
import { SharedAuthService } from './service/shared-auth.service';
import { SharedHttpService } from './service/shared-http.service';
import { SharedStorageService } from './service/shared-storage.service';
import { SharedToastrService } from './service/shared-toastr.service';
import { SharedCustomValidationService } from './service/shared-custom-validation.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        SharedAuthService,
        SharedHttpService,
        SharedService,
        SharedScriptLoaderService,
        SharedStorageService,
        SharedToastrService,
        SharedCustomValidationService
    ]
})
export class SharedModule { }
