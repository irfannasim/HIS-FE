import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Injectable()
export class APUtilService {
    constructor(private http: Http,
                private router: Router) {
    };

    tokenExpired(response: string) {
        if (response === 'invalid_token') {
            window.localStorage.removeItem('access_token');
            window.localStorage.removeItem(btoa('permissions'));
            if (window.localStorage.getItem('state') && window.localStorage.getItem('client_id') &&
                window.localStorage.getItem('response_type') && window.localStorage.getItem('redirect_uri')) {
                window.localStorage.removeItem('state');
                window.localStorage.removeItem('client_id');
                window.localStorage.removeItem('response_type');
                window.localStorage.removeItem('redirect_uri');
            }
            this.router.navigate(['/login']);
        }
    }

}
