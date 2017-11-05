import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SharedAuthService } from './shared-auth.service';

@Injectable()
export class SharedCanActivateAuthService implements CanActivate {

    //Variables


    //Constructor parameters
    static get parameters() {
        return [
            Router,
            SharedAuthService
        ];
    }

    //Constructor
    constructor(
        private _router,
        private _sharedAuthService) {


    }

    //Custom Methods
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        var path = '';

        if (route.url.length) {
            path = route.url[0].path;
        }
        //return this.checkPermission(path);

        console.log('path', path);
        var isLoggedIn = this._sharedAuthService.isLoggedIn();
        console.log('isLoggedIn', isLoggedIn);
        if (isLoggedIn) {
            console.log('logged in');
            // if (path == '' || path == 'login') {
            //     this._router.navigate(['dashboard']);
            //     return false;
            // }
            return true;
        }
        console.log('not logged in, redirecting to login');
        if(path != 'login') {
            console.log('path is not login');
            this._router.navigate(['/login']);
        }
        return false;
    }

    checkPermission(path) {
        console.log('path', path);
        var isLoggedIn = this._sharedAuthService.isLoggedIn();
        console.log('isLoggedIn', isLoggedIn);
        if (isLoggedIn) {
            console.log('logged in');
            // if (path == '' || path == 'login') {
            //     this._router.navigate(['dashboard']);
            //     return false;
            // }
            return true;
        }
        console.log('not logged in, redirecting to login');
        if(path != 'login') {
            console.log('path is not login');
            this._router.navigate(['/login']);
        }
        return false;


        /*var allow = false;
        var isLoggedIn = this._sharedAuthService.isLoggedIn();
        var role = isLoggedIn ? this._sharedAuthService.getLoggedInUserData().role : '';

        console.log("path", path);

        if (path == '') {
            if (isLoggedIn) {
                this._router.navigate(['dashboard']);
                //allow = true;
            } else {
                this._router.navigate(['login']);
                //allow = true;
            }
        } else if (path == 'login') {
            if (isLoggedIn) {
                this._router.navigate(['dashboard']);
                //allow = true;
            } else {
                allow = true;
            }
        } else {
            return true;
            /*if(role) {
                switch (role) {
                    case 'admin':
                        switch (path) {
                            case 'dashboard':
                            case 'company':
                            case 'role':
                            case 'permission':
                            case 'role-permission':
                            case 'organization':
                            case 'location':
                            case 'designation':
                            case 'keyword':
                            case 'industry':
                            case 'functional-area':
                            case 'job-role':
                            case 'ug':
                            case 'pg':
                            case 'profile-personal':
                            case 'profile-education':
                            case 'hr-users':
                                allow = true;
                                break;

                            default:
                                allow = false;
                        }
                        break;

                    case 'company':

                        break;

                    case 'hr':

                        break;

                    case 'interviewer':

                        break;

                    case 'candidate':

                        break;

                    default:
                        allow = false;
                }
            } else {
                this._router.navigate(['login']);
                //allow = true;
            }*/
        //}
        //return allow;
    }
}
