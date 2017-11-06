import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationExtensions } from 'ng2-mdf-validation-messages';

import { SharedService } from './../shared/service/shared.service';
import { SharedScriptLoaderService } from './../shared/service/shared-script-loader.service';
import { SharedHelper } from './../shared/shared.helper';

import { LandingService } from './landing.service';
import { LandingHelperService } from './landing.helper';

@Component({
    selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
    templateUrl: './landing.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

    //Variables
    loading = false;
    loginForm: FormGroup;
    email: FormControl;
    password: FormControl;

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            LandingService,
            SharedScriptLoaderService,
            Router,
            ActivatedRoute,
            FormBuilder
        ];
    }

    //Constructor
    constructor(
        private _sharedService,
        private _landingService,
        private _sharedScriptLoaderService,
        private _router,
        private _activatedRoute,
        private _fb) {

        
    }

    //Angular Hooks
    ngOnInit() {
        this.createSignInForm();

        this._sharedScriptLoaderService.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(() => {
                SharedHelper.setLoading(false);
                LandingHelperService.init();
            });
    }

    //Custom Methods
    createSignInForm() {
        this.email = this._fb.control('kunal.dethe@v2solutions.com', [
            ValidationExtensions.required(),
            ValidationExtensions.email()
        ]);
        this.password = this._fb.control('admin@123', [
            ValidationExtensions.required(),
            ValidationExtensions.maxLength(10)
        ]);

        this.loginForm = this._fb.group({
            email: this.email,
            password: this.password,
        });
    }

    onSignIn(data): void {
        this.loading = true;

        this._landingService
            .login(data)
            .subscribe(
            response => {
                this.loading = false;
                this._sharedService.getAuthService().login({ token: response[0] });
                this._sharedService.loginEventEmitter.emit(true);
                this._router.navigate(['dashboard']);
            },
            error => {
                this.loading = false;
                this._sharedService.getToastrService().pop('error', 'Error', 'Invalid Email or Password!');
            });
    }
}
