import {Component, OnInit} from '@angular/core';
import {RequestsService} from '../../services/requests.service';
import {Router} from '@angular/router';
import {PermissionsService} from '../../services/permissions.service';

@Component({
    selector: 'content-component',
    templateUrl: '../../templates/dashboard/content.template.html',
    styleUrls: ['../../styles/dashboard/content.style.css']
})
export class ContentComponent implements OnInit {
    constructor(private requestsService: RequestsService,
                private router: Router,
                private permissionsService: PermissionsService) {
    };

    ngOnInit() {

    }

    logout() {
        //alert('logout');
    }

}
