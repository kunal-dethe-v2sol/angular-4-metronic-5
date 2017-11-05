import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { SharedHelper } from '../shared.helper';


@Directive({
    selector: "[appunwraptag]",
})
export class SharedUnwrapTagDirective implements AfterViewInit {


    constructor(private el: ElementRef) {

    }
    ngAfterViewInit() {
        let nativeElement: HTMLElement = this.el.nativeElement;
        SharedHelper.unwrapTag(nativeElement);
    }

}