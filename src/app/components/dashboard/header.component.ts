import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../../services/requests.service';
import {Router} from '@angular/router';

@Component({
    selector: 'header-component',
    templateUrl: '../../templates/dashboard/header.template.html',
})
export class HeaderComponent implements OnInit {
    id: number;
    firstName: string;
    lastName: string;
    profileImg: string;
    userDesignation: string;

    constructor(private requestsService: RequestsService,
                private router: Router) {
    }

    ngOnInit() {
      /*  if (window.localStorage.getItem('access_token')) {
            this.requestsService.getRequest(
                '/admin/loggedIn'
                , {})
                .subscribe(
                    (response: Response) => {
                        if (response['responseCode'] === 'ADM_SUC_08') {
                            this.userSharedService.firstName = response['responseData'].firstName;
                            this.userSharedService.lastName = response['responseData'].lastName;
                            this.userSharedService.profileImg = response['responseData'].profileImg;
                            this.userSharedService.userDesignation = response['responseData'].role;

                            this.firstName = this.userSharedService.firstName;
                            this.lastName = this.userSharedService.lastName;
                            this.profileImg = this.userSharedService.profileImg;
                            this.userDesignation = this.userSharedService.userDesignation;
                        }
                    },
                    (error: any) => {
                        this.apUtilServer.tokenExpired(error.json()['error']);
                        //console.log(error.json())
                    }
                );
        }*/
    }

    logout() {
    }

}
