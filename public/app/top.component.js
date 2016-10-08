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
var TopComponent = (function () {
    function TopComponent(imageService) {
        this.imageService = imageService;
        this.topImages = [];
    }
    TopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getTopImages().then(function (data) { return _this.topImages = data.slice(); });
        this.imageService.getCurrentUser().then(function (username) { _this.currentUser = username.toString(); });
    };
    TopComponent.prototype.addImage = function (toAdd) {
        if (this.topImages.length < 20) {
            this.topImages.push(toAdd);
        }
    };
    TopComponent.prototype.deleteImage = function (toDelete) {
        var index = -1;
        for (var i = 0; i < this.topImages.length; i++) {
            if (toDelete._id == this.topImages[i]._id) {
                index = i;
            }
        }
        this.topImages.splice(index, 1);
    };
    TopComponent = __decorate([
        core_1.Component({
            selector: 'top-list',
            template: "\n\t\t<div id='theView'>\n\t\t\t<h2>Top Favorites</h2>\n\t\t\t<div class=\"grid\">\n\t\t\t\t<image-view *ngFor=\"let image of topImages; let i = index\" [theImage]=\"image\" [theIndex]=\"i\" [username]=\"currentUser\" (deleteImage)=\"deleteImage($event)\"></image-view>\n\t\t\t</div>\n\t\t</div>\n\t\n\t",
            styleUrls: ['public/stylesheets/list.css']
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService])
    ], TopComponent);
    return TopComponent;
}());
exports.TopComponent = TopComponent;
//# sourceMappingURL=top.component.js.map