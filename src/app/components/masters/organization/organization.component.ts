import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationExtensions } from 'ng2-mdf-validation-messages';

import { SharedService } from './../../shared/service/shared.service';
import { SharedMastersService } from './../../shared/masters/shared.masters.service';
import { CONST } from './../../shared/shared.constants';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: './organization.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [SharedMastersService]
})
export class OrganizationComponent implements OnInit {

    //Variables
    organization: any = {};
    organizations = [];
    showBusy = true;
    page = 1;
    limit = CONST['paginationLimitShortListing'];
    total_count = 0;

    form: FormGroup;
    name: FormControl;
    status: FormControl;

    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            SharedMastersService,
            Router,
            ActivatedRoute,
            FormBuilder
        ];
    }

    //Constructor
    constructor(
        private _sharedService,
        private _sharedMastersService,
        private _router,
        private _activatedRoute,
        private _fb) {


    }

    //Angular Hooks
    ngOnInit() {
        this._sharedMastersService.endpoint = 'organizations';

        this.list();
        this.prepareForm();
    }

    //Custom Methods
    previousPage() {
        this.page--;
        this.list();
    }

    nextPage() {
        this.page++;
        this.list();
    }

    prepareForm(editMode = false) {
        this.name = this._fb.control(editMode ? this.organization.name : '', [
            ValidationExtensions.required()
        ]);
        this.status = this._fb.control(editMode ? (this.organization.status == 'active' ? true : false) : true, [
            ValidationExtensions.required()
        ]);

        this.form = this._fb.group({
            name: this.name,
            status: this.status
        });
    }

    resetForm() {
        this.form.reset();
        this.form.controls['status'].setValue(true);
        this.organization = {};
    }

    list() {
        this.showBusy = true;
        this.organizations = [];

        this._sharedMastersService
            .list(this.page, this.limit)
            .subscribe(
            response => {
                this.showBusy = false;
                this.organizations = response[0].models.rows;
                this.total_count = response[0].models.count;

                if(this.organizations.length == 0 && this.page > 1) {
                    this.page--;
                    this.list();
                }
            },
            error => {
                this._sharedService.getToastrService().pop('error', 'Error', error);
            });
    }

    copy(id) {
        this._sharedMastersService
            .detail(id)
            .subscribe(
            response => {
                this.organization = response[0].model;
                delete this.organization.id;
                this.prepareForm(true);
            },
            error => {
                this._sharedService.getToastrService().pop('error', 'Error', error);
            });
    }

    edit(id) {
        this._sharedMastersService
            .detail(id)
            .subscribe(
            response => {
                this.organization = response[0].model;
                this.prepareForm(true);
            },
            error => {
                this._sharedService.getToastrService().pop('error', 'Error', error);
            });
    }

    onSubmit(): void {
        var formValues = this.form.value;
        
        var data = {
            name: formValues.name,
            status: formValues.status ? 'active' : 'inactive'
        }

        if (this.organization.id) {
            this._sharedMastersService
                .update(this.organization.id, data)
                .subscribe(
                response => {
                    this.resetForm();
                    this.list();
                    this._sharedService.getToastrService().pop('success', 'Success', response[0]);
                },
                error => {
                    this.resetForm();
                    this._sharedService.getToastrService().pop('error', 'Error', error);
                });
        } else {
            this._sharedMastersService
                .create(data)
                .subscribe(
                response => {
                    this.resetForm();
                    this.list();
                    this._sharedService.getToastrService().pop('success', 'Success', response[0]);
                },
                error => {
                    this.resetForm();
                    this._sharedService.getToastrService().pop('error', 'Error', error);
                });
        }
    }

    delete(id) {
        if (confirm('Do you wish to delete this record?')) {
            this._sharedMastersService
                .delete(id)
                .subscribe(
                response => {
                    this.list();
                },
                error => {
                    this._sharedService.getToastrService().pop('error', 'Error', error);
                });
        }
    }
}