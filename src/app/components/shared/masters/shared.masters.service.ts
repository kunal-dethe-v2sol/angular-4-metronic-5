import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../service/shared.service';

@Injectable()
export class SharedMastersService {

    //Variables
    endpoint = '';

    //Constructor parameters
    static get parameters() {
        return [
            SharedService
        ];
    }

    //Constructor
    constructor(
        private _sharedService) {


    }

    //Custom Methods
    all(endpoint = ''): Observable<any> {
        if(endpoint) {
            return this._sharedService.getHttpService().get(endpoint+'/all');
        }
    }
    list(page = 1, limit = 0): Observable<any> {
        var queryStringParams = {
            page: page
        }
        if(limit) {
            queryStringParams['limit'] = limit;
        }
        return this._sharedService.getHttpService().get(this.endpoint, queryStringParams);
    }
    detail(id): Observable<any> {
        var endpoint = this.endpoint + '/' + id;
        return this._sharedService.getHttpService().get(endpoint);
    }
    create(postData) {
        var endpoint = this.endpoint;
        return this._sharedService.getHttpService().post(endpoint, postData, {});
    }
    update(id, putData) {
        var endpoint = this.endpoint + '/' + id;
        return this._sharedService.getHttpService().put(endpoint, putData, {});
    }
    delete(id): Observable<any> {
        var endpoint = this.endpoint + '/' + id;
        return this._sharedService.getHttpService().delete(endpoint);
    }
}
