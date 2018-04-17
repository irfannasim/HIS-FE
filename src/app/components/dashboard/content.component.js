"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var requests_service_1 = require("../../services/requests.service");
var router_1 = require("@angular/router");
var permissions_service_1 = require("../../services/permissions.service");
var ContentComponent = (function () {
    function ContentComponent(requestsService, router, permissionsService) {
        this.requestsService = requestsService;
        this.router = router;
        this.permissionsService = permissionsService;
    }
    ;
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.logout = function () {
        //alert('logout');
    };
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'content-component',
            templateUrl: '../../templates/dashboard/content.template.html',
            styleUrls: ['../../styles/dashboard/content.style.css']
        }),
        __metadata("design:paramtypes", [requests_service_1.RequestsService,
            router_1.Router,
            permissions_service_1.PermissionsService])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map