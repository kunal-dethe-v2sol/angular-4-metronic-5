import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from './../shared/service/shared.service';
import { SharedScriptLoaderService } from './../shared/service/shared-script-loader.service';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: './dashboard.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {

    //Variables
    public loggedInUserData;

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            SharedScriptLoaderService,
            Router,
            ActivatedRoute
        ];
    }


    //Constructor
    constructor(
        private _sharedService,
        private _sharedScriptLoaderService,
        private _router,
        private _activatedRoute) {

    }

    //Angular Hooks
    ngOnInit() {
        this.loggedInUserData = this._sharedService.getLoggedInUserData();
    }

    ngAfterViewInit()  {
        this._sharedScriptLoaderService.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
        'assets/app/js/dashboard.js');
    }

    //Custom Methods
}