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

        console.log('in landing component');
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
        if (data.email && data.password) {
            if (data.email == 'kunal.dethe@v2solutions.com' && data.password == 'admin@123') {
                var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRjYTZiOGMxLTliYTQtNGMwNy1hN2M4LTNiNjNmNTU4MGI0NSIsInN1YiI6ImRjYTZiOGMxLTliYTQtNGMwNy1hN2M4LTNiNjNmNTU4MGI0NSIsImV4cCI6MTUwNTgyMTUzMywidXNlciI6eyJ1dWlkIjoiZGNhNmI4YzEtOWJhNC00YzA3LWE3YzgtM2I2M2Y1NTgwYjQ1IiwicmVnaXN0cmF0aW9uX3R5cGUiOiJhZG1pbi1pbnZpdGUiLCJzb2NpYWxfdHlwZSI6ImxpbmtjeG8iLCJmaXJzdG5hbWUiOiJLdW5hbCIsImxhc3RuYW1lIjoiRGV0aGUiLCJtb2JpbGVfbm8iOiI3ODk0NjUxMzIwIiwiYWx0X21vYmlsZSI6bnVsbCwibWFyaXRhbF9zdGF0dXMiOm51bGwsImdlbmRlciI6bnVsbCwiZG9iIjpudWxsLCJjb3VudHJ5X2lkIjpudWxsLCJzdGF0ZV9pZCI6bnVsbCwiY2l0eV9pZCI6bnVsbCwiemlwY29kZSI6bnVsbCwicHJvZmlsZV9pbWFnZSI6bnVsbCwiaGVhZGxpbmUiOm51bGwsInRva2VucyI6bnVsbCwiZmxhZ19tb2JpbGUiOiJ1bi12ZXJpZmllZCIsImZsYWdfYWx0X21vYmlsZSI6InVuLXZlcmlmaWVkIiwicm9sZV9pZCI6IjRkY2ZlN2Q0LWMxNjgtNGQyNS1iZWU1LTE3NWY2ZDM4MDU5ZSIsInJvbGUiOiJhZG1pbiIsInRvdGFsX2V4cCI6bnVsbCwia2V5X3NraWxscyI6bnVsbCwic3VtbWFyeSI6bnVsbCwicmVzdW1lMSI6bnVsbCwicmVzdW1lMiI6bnVsbCwicmVzdW1lX3R5cGUxIjpudWxsLCJyZXN1bWVfdHlwZTIiOm51bGwsInByb2ZpbGVfc25hcHNob3QiOm51bGwsInN0YXR1cyI6ImFjdGl2ZSIsImZ1bGxfbmFtZSI6Ikt1bmFsIERldGhlIn19.luG5BApYv2W047vL4g7Nb-mlqVmbnJIXbsLvNqjNkgg';
                this._sharedService.getAuthService().login({ token: token });
                this._sharedService.loginEventEmitter.emit(true);
                this._router.navigate(['dashboard']);
            } else {
                this._sharedService.getToastrService().pop('error', 'Error', 'Invalid Email or Password!');
            }
        }

        /*this.loading = true;

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
            });*/
    }
}
