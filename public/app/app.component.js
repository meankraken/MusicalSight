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
var core_1 = require('@angular/core');
var image_service_1 = require('./image.service');
var router_1 = require('@angular/router');
var AppComponent = (function () {
    function AppComponent(imageService, router) {
        this.imageService = imageService;
        this.router = router;
        this.matchingUsers = []; //hold the matching users
        this.showSuggestions = false; //bool to determine if suggestions are shown
        this.showUploadForm = false; //flag for displaying 
    }
    AppComponent.prototype.getChild = function (childRef) {
        this.childView = childRef;
    };
    AppComponent.prototype.showForm = function () {
        $('#fullMask').css('display', 'block');
        this.showUploadForm = true;
    };
    AppComponent.prototype.hideForm = function () {
        $('#fullMask').css('display', 'none');
        this.showUploadForm = false;
    };
    AppComponent.prototype.addImage = function (data) {
        this.childView.addImage(data);
    };
    AppComponent.prototype.searchUser = function () {
        var _this = this;
        if (this.searchValue.length <= 0) {
            this.showSuggestions = false;
        }
        else {
            clearTimeout(this.timer);
            this.imageService.getUserList(this.searchValue).subscribe(function (users) {
                _this.matchingUsers = users.slice();
                _this.showSuggestions = true;
                _this.timer = setTimeout(function () {
                    _this.showSuggestions = false;
                }, 2500);
            });
        }
    };
    AppComponent.prototype.hideSuggest = function () {
        this.showSuggestions = false;
    };
    AppComponent.prototype.goToGallery = function (username) {
        if (username) {
            this.router.navigate(['/user', username]);
        }
        else if (!this.matchingUsers.includes(this.searchValue)) {
            alert("No user found. Please enter a valid username.");
        }
        else {
            this.router.navigate(['/user', this.searchValue]);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n\t<add-image *ngIf='showUploadForm' (hideForm)='hideForm()' (addImage)='addImage($event)'></add-image>\n\t<div class='toolBar'>\n\t\t<h1 class='headerText'>Browse</h1>\n\t\t<div id='searchText'><h1 class='headerText'>Search</h1></div>\n\t\t<div id='shareText'><h1 class='headerText'>Share</h1></div>\n\t\t<div id='shareBtn' (click)='showForm()'>+</div>\n\t\t<form (ngSubmit)='goToGallery()'>\n\t\t\t<input [(ngModel)]='searchValue' name='userString' type='text' id='gallerySearch' placeholder='Search for user gallery' (ngModelChange)='searchUser()' />\n\t\t</form>\n\t\t<div *ngIf='showSuggestions==true' class='userList'>\n\t\t\t<div *ngFor='let user of matchingUsers' (click)='goToGallery(user)' class='userBox'>{{user}}</div>\n\t\t</div>\n\t\t<nav id='links'>\n\t\t\t<a routerLink=\"/recent\" routerLinkActive=\"active\">RECENT</a>\n\t\t\t<a routerLink=\"/top\" routerLinkActive=\"active\">TOP</a>\n\t\t\t<a routerLink=\"/own\" routerLinkActive=\"active\">OWN</a>\n\t\t</nav>\n   \n\t</div>\n\t\n\t<router-outlet (activate)=\"getChild($event)\"></router-outlet>\n\t",
            styleUrls: ['public/stylesheets/app.css']
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map