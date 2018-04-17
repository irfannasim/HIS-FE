import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {RequestsService} from '../services/requests.service';
import {UserSharedService} from '../services/user.shared.service';

@Component({
    selector: 'login-component',
    templateUrl: '../templates/login.template.html'
})
export class LoginComponent {
    username: string;
    password: string;
    remember: boolean;
    error: string;

    constructor(private requestsService: RequestsService,
                private router: Router,
                private sharedService: UserSharedService) {
    };

    ngOnInit() {
    }

    login(form: NgForm) {
        this.requestsService.postRequestOauth2Token(
            '/oauth/token'
            , {
                'userName': this.username,
                'password': this.password,
                'grantType': 'password',
            })
            .subscribe(
                (response: Response) => {
                    if (response['token_type'] === 'bearer') {
                        window.localStorage.setItem(btoa('access_token'), btoa(response['access_token']));
                        window.localStorage.setItem(btoa('refresh_token'), btoa(response['refresh_token']));
                        window.localStorage.setItem(btoa('expire_in'), btoa(response['expires_in']));

                        this.requestsService.postRequest(
                            '/admin/auth/signIn'
                            , {
                                'userName': this.username,
                                'password': this.password,
                            })
                            .subscribe(
                                (response: Response) => {
                                    if (response['responseCode'] === 'ADM_AUTH_SUC_01') {
                                        this.sharedService.firstName = response['responseData'].firstName;
                                        this.sharedService.lastName = response['responseData'].lastName;

                                        this.router.navigate(['/dashboard']);
                                    } else {
                                        this.router.navigate(['/login']);
                                        window.localStorage.removeItem(atob('access_token'));
                                        window.localStorage.removeItem(atob('refresh_token'));
                                        window.localStorage.removeItem(atob('expire_in'));
                                        this.error = response['responseMessage'];
                                    }
                                },
                                (error: any) => {
                                    console.log(error.json());
                                    this.error = error.json()['responseMessage'];
                                });
                    } else {
                        this.error = response['responseMessage'];
                        window.localStorage.removeItem(atob('access_token'));
                        window.localStorage.removeItem(atob('refresh_token'));
                        window.localStorage.removeItem(atob('expire_in'));
                    }
                });

    }

    forgotPassword() {
        this.router.navigate(['/forgotPassword']);
    }
}
