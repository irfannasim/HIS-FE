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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var requests_service_1 = require("../../../services/requests.service");
var notification_service_1 = require("../../../services/notification.service");
var User_1 = require("../../../model/User");
var amazing_time_picker_1 = require("amazing-time-picker");
var app_constants_1 = require("../../../utils/app.constants");
var UpdatedoctorComponent = (function () {
    function UpdatedoctorComponent(route, router, requestService, fb, notificationService, amazingTimePickerService) {
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.fb = fb;
        this.notificationService = notificationService;
        this.amazingTimePickerService = amazingTimePickerService;
        this.selectedDepartment = [];
        this.selectedServices = [];
        this.selectedWorkingDays = [];
        this.selectedVisitBranches = [];
        this.selectedDoctors = [];
        this.departmentList = [];
        this.selectedUser = 'doctor';
        this.userSelected = 'doctor';
        this.defaultBranch = 'primaryBranch';
        this.matches = [];
        this.branchesList = [];
        this.servicesList = [];
        this.primaryDoctor = [];
        this.workingDays = [
            { id: 1, name: 'Monday' },
            { id: 2, name: 'Tuesday' },
            { id: 3, name: 'Wednesday' },
            { id: 4, name: 'Thurseday' },
            { id: 5, name: 'Friday' },
            { id: 6, name: 'Satureday' },
            { id: 7, name: 'Sunday' },
        ];
        this.date = new forms_1.FormControl(new Date());
        this.allBranches();
        this.allServices();
        this.allDepartments();
        this.allDoctors();
    }
    UpdatedoctorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createUserForm();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
        });
        this.patchData();
    };
    UpdatedoctorComponent.prototype.allBranches = function () {
        var _this = this;
        this.requestService.getRequest(app_constants_1.AppConstants.FETCH_ALL_BRANCHES_URL + 'all')
            .subscribe(function (response) {
            if (response['responseCode'] === 'BR_SUC_01') {
                _this.branchesList = response['responseData'];
                if (_this.branchesList.length > 1) {
                    _this.removeBranch();
                }
            }
        }, function (error) {
            _this.error = error.error.error;
        });
    };
    UpdatedoctorComponent.prototype.allDoctors = function () {
        var _this = this;
        this.requestService.getRequest(app_constants_1.AppConstants.USER_BY_ROLE + '?name=' + this.userSelected)
            .subscribe(function (response) {
            if (response['responseStatus'] === 'SUCCESS') {
                _this.primaryDoctor = response['responseData'];
            }
        }, function (error) {
            _this.error = error.error.error;
        });
    };
    UpdatedoctorComponent.prototype.removeBranch = function () {
        var _this = this;
        this.branchesList.forEach(function (item, index) {
            if (item === _this.defaultBranch)
                _this.branchesList.splice(index, 1);
        });
    };
    UpdatedoctorComponent.prototype.allDepartments = function () {
        var _this = this;
        this.requestService.getRequest(app_constants_1.AppConstants.FETCH_ALL_CLINICAL_DEPARTMENTS_URI)
            .subscribe(function (response) {
            if (response['responseCode'] === 'CLI_DPT_SUC_01') {
                _this.departmentList = response['responseData'];
            }
        }, function (error) {
            _this.error = error.error.error;
        });
    };
    UpdatedoctorComponent.prototype.allServices = function () {
        var _this = this;
        this.requestService.getRequest(app_constants_1.AppConstants.FETCH_ALL_MEDICAL_SERVICES_URL)
            .subscribe(function (response) {
            console.log('i am branch call');
            if (response['responseCode'] === 'MED_SER_SUC_01') {
                _this.servicesList = response['responseData'];
                console.log(_this.servicesList);
            }
        }, function (error) {
            _this.error = error.error.error;
        });
    };
    UpdatedoctorComponent.prototype.createUserForm = function () {
        this.userForm = this.fb.group({
            'firstName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            'lastName': [null],
            'userName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.pattern('^[a-z0-9_-]{4,15}$')])],
            'password': [null],
            'confirmPassword': [null],
            'homePhone': [null, forms_1.Validators.required],
            'cellPhone': [null],
            'primaryBranch': [null, forms_1.Validators.required],
            'interval': [null, forms_1.Validators.required],
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])],
            'restrictBranch': [null],
            'allowDiscount': [null],
            'otherDashboard': '',
            'sendBillingReport': '',
            'useReceptDashboard': '',
            'shift2': '',
            'vacation': '',
            'otherDoctorDashBoard': '',
            'accountExpiry': [null],
            'active': '',
            'dateFrom': [null],
            'dateTo': [null],
            'departmentControl': [null],
            'servicesControl': [null],
            'shift1': [null, forms_1.Validators.required],
            'secondShiftFromTimeControl': [null],
            workingDaysContorl: new forms_1.FormGroup({
                //  new FormControl(''),
                sunday: new forms_1.FormControl(''),
                monday: new forms_1.FormControl(''),
                tuesday: new forms_1.FormControl(''),
                thurseday: new forms_1.FormControl(''),
                friday: new forms_1.FormControl(''),
                satureday: new forms_1.FormControl(''),
                wednesday: new forms_1.FormControl(''),
            })
        });
    };
    Object.defineProperty(UpdatedoctorComponent.prototype, "workingDaysContorl", {
        get: function () {
            return this.userForm.get('workingDaysContorl');
        },
        enumerable: true,
        configurable: true
    });
    UpdatedoctorComponent.prototype.patchData = function () {
        var _this = this;
        if (this.id) {
            this.requestService.findById(app_constants_1.AppConstants.FETCH_USER_BY_ID + this.id).subscribe(function (user) {
                //  this.id = user.id;
                _this.userForm.patchValue({
                    firstName: user.profile.firstName,
                    lastName: user.profile.lastName,
                    email: user.email,
                    homePhone: user.profile.homePhone,
                    cellPhone: user.profile.cellPhone,
                    sendBillingReport: user.profile.sendBillingReport,
                    userName: user.userName,
                    active: user.profile.active,
                    accountExpiry: user.profile.accountExpiry,
                    otherDashboard: user.profile.otherDashboard,
                    useReceptDashboard: user.profile.useReceptDashBoard,
                    otherDoctorDashBoard: user.profile.otherDoctorDashBoard,
                    primaryBranch: user.branch.name,
                    interval: user.profile.checkUpInterval,
                    shift1: user.dutyShift.dutyTimmingShift1,
                    shift2: user.dutyShift.dutyTimmingShift2,
                    secondShiftFromTimeControl: user.dutyShift.secondShiftFromTime,
                    vacation: user.vacation.status,
                    dateFrom: user.profile.accountExpiry,
                    dateTo: user.vacation.endDate,
                });
                _this.userForm.controls['workingDaysContorl'].patchValue({
                    sunday: _this.checkAvailabilty('sunday', user.profile.workingDays),
                    monday: _this.checkAvailabilty('monday', user.profile.workingDays),
                    tuesday: _this.checkAvailabilty('tuesday', user.profile.workingDays),
                    thurseday: _this.checkAvailabilty('thurseday', user.profile.workingDays),
                    friday: _this.checkAvailabilty('friday', user.profile.workingDays),
                    satureday: _this.checkAvailabilty('satureday', user.profile.workingDays),
                    wednesday: _this.checkAvailabilty('wednesday', user.profile.workingDays)
                });
                _this.secondShiftFromTime = user.dutyShift.startTimeShift2,
                    _this.secondShiftToTime = user.dutyShift.endTimeShift2,
                    _this.firstShiftFromTime = user.dutyShift.startTimeShift1,
                    _this.firstShiftToTime = user.dutyShift.endTimeShift1;
            }, function (error) {
                //console.log(error.json());
                _this.error = error.error.error_description;
            });
        }
    };
    UpdatedoctorComponent.prototype.checkAvailabilty = function (value, array) {
        return array.indexOf(value) > -1;
    };
    UpdatedoctorComponent.prototype.setPreset = function () {
        this.workingDaysContorl.patchValue(['LA', 'MTV']);
    };
    UpdatedoctorComponent.prototype.addUser = function (data) {
        console.log('i am invalid');
        var days = this.userForm.get('workingDaysContorl');
        var daysOfDoctor = [];
        daysOfDoctor.push({ key: 'sunday', value: days.get('sunday').value });
        daysOfDoctor.push({ key: 'monday', value: days.get('monday').value });
        daysOfDoctor.push({ key: 'tuesday', value: days.get('tuesday').value });
        daysOfDoctor.push({ key: 'thurseday', value: days.get('thurseday').value });
        daysOfDoctor.push({ key: 'friday', value: days.get('friday').value });
        daysOfDoctor.push({ key: 'satureday', value: days.get('satureday').value });
        if (this.userForm.valid) {
            var result = daysOfDoctor.filter(function (obj) {
                return obj.value == true;
            });
            console.log('res :' + result);
            for (var key in result) {
                this.selectedWorkingDays.push(result[key].key);
            }
            var doctor = new User_1.User({
                firstName: data.firstName,
                lastName: data.lastName,
                userName: data.userName,
                password: data.password,
                homePhone: data.homePhone,
                cellPhone: data.cellPhone,
                sendBillingReport: data.sendBillingReport,
                useReceptDashboard: data.useReceptDashboard,
                otherDashboard: data.otherDashboard,
                otherDoctorDashBoard: data.otherDoctorDashBoard,
                accountExpiry: data.accountExpiry,
                primaryBranch: data.primaryBranch,
                email: data.email,
                active: data.active,
                selectedDoctors: this.selectedDoctors,
                selectedDepartment: this.selectedDepartment,
                selectedServices: this.selectedServices,
                interval: data.interval,
                selectedVisitBranches: this.selectedVisitBranches,
                shift1: data.shift1,
                shift2: data.shift2,
                secondShiftToTime: this.secondShiftToTime,
                secondShiftFromTime: this.secondShiftFromTime,
                firstShiftToTime: this.firstShiftToTime,
                firstShiftFromTime: this.firstShiftFromTime,
                vacation: data.vacation,
                dateTo: data.dateTo,
                dateFrom: data.dateFrom,
                selectedWorkingDays: this.selectedWorkingDays,
                userType: this.selectedUser
            });
            this.makeService(doctor);
            console.log('sel days' + this.selectedWorkingDays);
            this.workingDays.length = 0;
        }
        else {
            console.log('i am else');
            this.validateAllFormFields(this.userForm);
        }
    };
    UpdatedoctorComponent.prototype.makeService = function (user) {
        var _this = this;
        this.requestService.putRequest('/user/edit/' + this.id, user).subscribe(function (response) {
            if (response['responseStatus'] === 'SUCCESS') {
                _this.responseUser = response['responseData'];
                _this.notificationService.success('User has been updated Successfully');
                _this.router.navigate(['/dashboard/setting/staff']);
            }
        }, function (error) {
            //console.log(error.json());
            _this.error = error.error.error_description;
            _this.notificationService.error('ERROR', 'User is not Updated');
        });
    };
    UpdatedoctorComponent.prototype.isFieldValid = function (field) {
        return !this.userForm.get(field).valid && this.userForm.get(field).touched;
    };
    UpdatedoctorComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    UpdatedoctorComponent.prototype.getBranch = function (value) {
        if (value) {
            this.userForm.controls['primaryBranch'].setValue(value);
        }
    };
    UpdatedoctorComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            //console.log(field);
            var control = formGroup.get(field);
            if (control instanceof forms_1.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    UpdatedoctorComponent.prototype.secondShiftFrom = function () {
        var _this = this;
        var amazingTimePicker = this.amazingTimePickerService.open();
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.secondShiftFromTime = time;
        });
    };
    UpdatedoctorComponent.prototype.firstShiftFrom = function () {
        var _this = this;
        var amazingTimePicker = this.amazingTimePickerService.open({
            time: this.firstShiftFromTime,
            theme: 'dark',
            arrowStyle: {
                background: 'red',
                color: 'white'
            }
        });
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.firstShiftFromTime = time;
        });
    };
    UpdatedoctorComponent.prototype.firstShiftTo = function () {
        var _this = this;
        var amazingTimePicker = this.amazingTimePickerService.open({
            time: this.firstShiftToTime,
            theme: 'dark',
            arrowStyle: {
                background: 'red',
                color: 'white'
            }
        });
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.firstShiftToTime = time;
        });
    };
    UpdatedoctorComponent.prototype.secondShiftTo = function () {
        var _this = this;
        var amazingTimePicker = this.amazingTimePickerService.open();
        amazingTimePicker.afterClose().subscribe(function (time) {
            _this.secondShiftToTime = time;
        });
    };
    UpdatedoctorComponent.prototype.checkupIntervalMethod = function (value) {
        if (value) {
            this.userForm.controls['interval'].setValue(value);
        }
    };
    UpdatedoctorComponent.prototype.selectDepartment = function (event, item) {
        console.log(event.checked);
        if (event.target.checked) {
            this.selectedDepartment.push(item.id);
        }
        else {
            var updateItem = this.selectedDepartment.find(this.findIndexToUpdate, item.id);
            var index = this.selectedDepartment.indexOf(updateItem);
            this.selectedDepartment.splice(index, 1);
        }
        console.log(this.selectedDepartment);
    };
    UpdatedoctorComponent.prototype.selectWorkingDays = function (event, item) {
        console.log(event.checked);
        if (event.target.checked) {
            this.selectedWorkingDays.push(item.name);
        }
        else {
            var updateItem = this.selectedWorkingDays.find(this.findIndexToUpdate, item.name);
            var index = this.selectedWorkingDays.indexOf(updateItem);
            this.selectedWorkingDays.splice(index, 1);
        }
        console.log(this.selectedWorkingDays);
    };
    UpdatedoctorComponent.prototype.selectRestrictBranch = function (event, item) {
        console.log(item);
        if (event.target.checked) {
            this.selectedVisitBranches.push(item.id);
        }
        else {
            var updateItem = this.selectedVisitBranches.find(this.findIndexToUpdate, item.id);
            var index = this.selectedVisitBranches.indexOf(updateItem);
            this.selectedVisitBranches.splice(index, 1);
        }
        console.log(this.selectedVisitBranches);
    };
    UpdatedoctorComponent.prototype.findIndexToUpdate = function (type) {
        return type.name === this;
    };
    UpdatedoctorComponent.prototype.selectServices = function (event, item) {
        if (event.target.checked) {
            this.selectedServices.push(item.id);
        }
        else {
            var updateItem = this.selectedServices.find(this.findIndexToUpdate, item.id);
            var index = this.selectedServices.indexOf(updateItem);
            this.selectedServices.splice(index, 1);
        }
        console.log(this.selectedServices);
    };
    UpdatedoctorComponent.prototype.getSelectedDashboard = function (value) {
        if (value) {
            this.userForm.controls['otherDashboard'].setValue(value);
        }
    };
    UpdatedoctorComponent.prototype.getSelectedBranch = function (value) {
        console.log(value);
        if (value === undefined) {
            console.log('i am esss');
            this.userForm.controls['primaryBranch'].setValue('primaryBranch');
        }
        else {
            console.log('i am too' + value);
            this.userForm.controls['primaryBranch'].setValue(value);
        }
    };
    UpdatedoctorComponent.prototype.selectVisitBranches = function (event, item) {
        console.log(item);
        if (event.target.checked) {
            this.selectedVisitBranches.push(item.id);
        }
        else {
            var updateItem = this.selectedVisitBranches.find(this.findIndexToUpdate, item.id);
            var index = this.selectedVisitBranches.indexOf(updateItem);
            this.selectedVisitBranches.splice(index, 1);
        }
        console.log(this.selectedVisitBranches);
    };
    UpdatedoctorComponent.prototype.cancel = function () {
        this.router.navigate(['/dashboard/setting/staff']);
    };
    UpdatedoctorComponent = __decorate([
        core_1.Component({
            selector: 'adddoctor-component',
            templateUrl: '../../../templates/dashboard/setting/updatedoctor.template.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, requests_service_1.RequestsService,
            forms_1.FormBuilder, notification_service_1.NotificationService,
            amazing_time_picker_1.AmazingTimePickerService])
    ], UpdatedoctorComponent);
    return UpdatedoctorComponent;
}());
exports.UpdatedoctorComponent = UpdatedoctorComponent;
//# sourceMappingURL=updatedoctor.component.js.map