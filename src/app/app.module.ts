// Modules
import {NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// App Components
import {AppComponent} from './components/app.component';
import {MainComponent} from './components/dashboard/main.component';
import {LoginComponent} from './components/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
// Dashboard Components
import {HeaderComponent} from './components/dashboard/header.component';
import {NavigationComponent} from './components/dashboard/navigation.component';
import {FooterComponent} from './components/dashboard/footer.component';
import {ContentComponent} from './components/dashboard/content.component';
// Errors
import {NotFound404Component} from './components/errors/not-found-404.component';
// Routes
import {routes} from './app.routes';
// Services
import {RequestsService} from './services/requests.service';
import {APUtilService} from './services/ap.util.service';
import {PermissionsService} from './services/permissions.service';

import {AppConfig} from './configuration/app.config';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule, ToastOptions, ToastsManager} from 'ng2-toastr';
import {CustomOption} from './configuration/CustomOption';
import {DoctorDashboardComponent} from './components/dashboard/doctor/doctor-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {UserSharedService} from './services/user.shared.service';

@NgModule({
    providers: [
        // Services
        RequestsService,
        APUtilService,
        AppConfig,
        PermissionsService,
        ToastsManager,
        {provide: ToastOptions, useClass: CustomOption},
        UserSharedService
    ],
    imports: [
        // Modules
        BrowserModule,
        FormsModule,
        routes,
        BrowserAnimationsModule,
        ToastModule.forRoot(),
        HttpClientModule
    ],
    declarations: [
        // App Components
        AppComponent,
        MainComponent,
        LoginComponent,
        DashboardComponent,
        DoctorDashboardComponent,

        // Dashboard Components
        HeaderComponent,
        NavigationComponent,
        FooterComponent,
        ContentComponent,
        NotFound404Component,
    ],
    bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
    ngOnInit() {
    }
}
