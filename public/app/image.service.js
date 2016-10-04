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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ImageService.prototype.getCurrentUser = function () {
        return this.http.get('/getUsername').toPromise().then(function (res) { return res.json().username; }).catch(this.handleError);
    };
    ImageService.prototype.getRecentImages = function () {
        return this.http.get('/getRecent').toPromise().then(function (res) { return res.json().imageArr; }).catch(this.handleError);
    };
    ImageService.prototype.createImage = function (title, url) {
        return this.http.post('/addImage', JSON.stringify({ title: title, url: url }), { headers: this.headers }).toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
    };
    ImageService.prototype.likeImage = function (theImage) {
        return this.http.post('/likeImage', JSON.stringify(theImage), { headers: this.headers }).toPromise().then(function (res) { return res.json(); });
    };
    ImageService.prototype.unlikeImage = function (theImage) {
        return this.http.post('/unlikeImage', JSON.stringify(theImage), { headers: this.headers }).toPromise().then(function (res) { return res.json(); });
    };
    ImageService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    ImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map