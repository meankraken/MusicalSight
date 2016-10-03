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
var AppComponent = (function () {
    function AppComponent() {
        this.showUploadForm = false; //flag for displaying 
    }
    AppComponent.prototype.showForm = function () {
        $('#fullMask').css('display', 'block');
        this.showUploadForm = true;
    };
    AppComponent.prototype.hideForm = function () {
        $('#fullMask').css('display', 'none');
        this.showUploadForm = false;
    };
    AppComponent.prototype.addImage = function (data) {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n\t<add-image *ngIf='showUploadForm' (hideForm)='hideForm()' (addImage)='addImage($event)'></add-image>\n\t<div class='toolBar'>\n\t\t<h1 class='headerText'>Browse</h1>\n\t\t<div id='searchText'><h1 class='headerText'>Search</h1></div>\n\t\t<div id='shareText'><h1 class='headerText'>Share</h1></div>\n\t\t<div id='shareBtn' (click)='showForm()'>+</div>\n\t\t<input type='text' id='gallerySearch' placeholder='Search for user gallery'/>\n\t\t<nav id='links'>\n\t\t\t<a routerLink=\"/recent\" routerLinkActive=\"active\">RECENT</a>\n\t\t\t<a href='/'>TOP</a>\n\t\t\t<a href='/'>TEST</a>\n\t\t</nav>\n   \n\t</div>\n\t\n\t<router-outlet></router-outlet>\n\t",
            styleUrls: ['public/stylesheets/app.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map