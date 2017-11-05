import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { SharedHelper } from '../../../../components/shared/shared.helper';
import { SharedScriptLoaderService } from '../../../../components/shared/service/shared-script-loader.service';



@Component({
selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
templateUrl: "./index.component.html",
encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {


constructor(private _script: SharedScriptLoaderService)  {

}
ngOnInit()  {

}
ngAfterViewInit()  {
this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
'assets/app/js/dashboard.js');

}

}