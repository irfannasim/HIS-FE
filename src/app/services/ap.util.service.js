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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var APUtilService = (function () {
    function APUtilService(http, router) {
        this.http = http;
        this.router = router;
    }
    ;
    APUtilService.prototype.tokenExpired = function (response) {
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
    };
    APUtilService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router])
    ], APUtilService);
    return APUtilService;
}());
exports.APUtilService = APUtilService;
//# sourceMappingURL=ap.util.service.js.map