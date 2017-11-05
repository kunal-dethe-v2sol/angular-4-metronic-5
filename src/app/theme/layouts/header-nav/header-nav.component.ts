import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from '../../../components/shared/service/shared.service';
import { SharedHelper } from '../../../components/shared/shared.helper';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            Router,
            ActivatedRoute
        ];
    }

    //Constructor
    constructor(
        private _sharedService,
        private _router,
        private _activatedRoute) {

        
    }

    //Angular Hooks
    ngOnInit() {

    }

    ngAfterViewInit() {
        mLayout.initHeader();
    }

    //Custom Methods
    onLogout() {
        this._sharedService.getAuthService().logout();
        this._sharedService.loginEventEmitter.emit(false);
        this._router.navigate(['login']);
    }
}