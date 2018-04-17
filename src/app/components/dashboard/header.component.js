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
var HeaderComponent = (function () {
    function HeaderComponent(requestsService, router) {
        this.requestsService = requestsService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
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
    };
    HeaderComponent.prototype.logout = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-component',
            templateUrl: '../../templates/dashboard/header.template.html',
        }),
        __metadata("design:paramtypes", [requests_service_1.RequestsService,
            router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map