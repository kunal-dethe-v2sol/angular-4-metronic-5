import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../shared/service/shared.service';

@Injectable()
export class LandingService {

    //Variables
    _endpoint = 'login';

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
    login(data): Observable<any> {
        return this._sharedService.getHttpService().post(this._endpoint, data);
    }
}
