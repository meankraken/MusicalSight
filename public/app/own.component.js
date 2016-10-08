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
var OwnComponent = (function () {
    function OwnComponent(imageService) {
        this.imageService = imageService;
        this.ownImages = [];
    }
    OwnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getOwnImages().then(function (data) { return _this.ownImages = data.slice(); });
        this.imageService.getCurrentUser().then(function (username) { _this.currentUser = username.toString(); });
    };
    OwnComponent.prototype.addImage = function (toAdd) {
        if (this.ownImages.length < 20) {
            this.ownImages.unshift(toAdd);
        }
    };
    OwnComponent.prototype.isLogged = function () {
        if (this.currentUser == '!none') {
            return true;
        }
        else {
            return false;
        }
    };
    OwnComponent.prototype.deleteImage = function (toDelete) {
        var index = -1;
        for (var i = 0; i < this.ownImages.length; i++) {
            if (toDelete._id == this.ownImages[i]._id) {
                index = i;
            }
        }
        this.ownImages.splice(index, 1);
    };
    OwnComponent = __decorate([
        core_1.Component({
            selector: 'own-list',
            template: "\n\t\t<div id='theView'>\n\t\t\t<h2>Personal Gallery</h2>\n\t\t\t<h4 *ngIf=\"isLogged()\">Login to view your gallery!</h4>\n\t\t\t<div class=\"grid\">\n\t\t\t\t<image-view *ngFor=\"let image of ownImages; let i = index\" [theImage]=\"image\" [theIndex]=\"i\" [username]=\"currentUser\" (deleteImage)=\"deleteImage($event)\"></image-view>\n\t\t\t</div>\n\t\t</div>\n\t\n\t",
            styleUrls: ['public/stylesheets/list.css']
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService])
    ], OwnComponent);
    return OwnComponent;
}());
exports.OwnComponent = OwnComponent;
//# sourceMappingURL=own.component.js.map