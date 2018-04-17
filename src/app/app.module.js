"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
// App Components
var app_component_1 = require("./components/app.component");
var main_component_1 = require("./components/dashboard/main.component");
var login_component_1 = require("./components/login.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
// Dashboard Components
var header_component_1 = require("./components/dashboard/header.component");
var navigation_component_1 = require("./components/dashboard/navigation.component");
var footer_component_1 = require("./components/dashboard/footer.component");
var content_component_1 = require("./components/dashboard/content.component");
// Errors
var not_found_404_component_1 = require("./components/errors/not-found-404.component");
// Routes
var app_routes_1 = require("./app.routes");
// Services
var requests_service_1 = require("./services/requests.service");
var ap_util_service_1 = require("./services/ap.util.service");
var permissions_service_1 = require("./services/permissions.service");
var app_config_1 = require("./configuration/app.config");
var animations_1 = require("@angular/platform-browser/animations");
var ng2_toastr_1 = require("ng2-toastr");
var CustomOption_1 = require("./configuration/CustomOption");
var doctor_dashboard_component_1 = require("./components/dashboard/doctor/doctor-dashboard.component");
var http_1 = require("@angular/common/http");
var user_shared_service_1 = require("./services/user.shared.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.ngOnInit = function () {
    };
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                // Services
                requests_service_1.RequestsService,
                ap_util_service_1.APUtilService,
                app_config_1.AppConfig,
                permissions_service_1.PermissionsService,
                ng2_toastr_1.ToastsManager,
                { provide: ng2_toastr_1.ToastOptions, useClass: CustomOption_1.CustomOption },
                user_shared_service_1.UserSharedService
            ],
            imports: [
                // Modules
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routes_1.routes,
                animations_1.BrowserAnimationsModule,
                ng2_toastr_1.ToastModule.forRoot(),
                http_1.HttpClientModule
            ],
            declarations: [
                // App Components
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                doctor_dashboard_component_1.DoctorDashboardComponent,
                // Dashboard Components
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                footer_component_1.FooterComponent,
                content_component_1.ContentComponent,
                not_found_404_component_1.NotFound404Component,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map