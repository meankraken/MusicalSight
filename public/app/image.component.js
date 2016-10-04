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
var image_js_1 = require('./image.js');
var image_service_1 = require('./image.service');
var ImageView = (function () {
    function ImageView(imageService) {
        this.imageService = imageService;
    }
    ImageView.prototype.getClasses = function () {
        if (((this.theIndex) % 10) == 5) {
            return 'grid-item offset-left';
        }
        else {
            return 'grid-item';
        }
    };
    ImageView.prototype.likeBtnClasses = function () {
        if (this.theImage.uploader == this.username || this.username == "!none") {
            return 'hide';
        }
        else if (this.theImage.likes.includes(this.username)) {
            return 'likeBox liked';
        }
        else {
            return 'likeBox';
        }
    };
    ImageView.prototype.likeImage = function () {
        if (this.theImage.likes.includes(this.username)) {
            this.imageService.unlikeImage(this.theImage);
            var index = this.theImage.likes.indexOf(this.username);
            this.theImage.likes.splice(index, 1);
        }
        else {
            this.imageService.likeImage(this.theImage);
            this.theImage.likes.push(this.username);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', image_js_1.Image)
    ], ImageView.prototype, "theImage", void 0);
    __decorate([
        //this image
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ImageView.prototype, "theIndex", void 0);
    __decorate([
        //index of the image in recent list
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageView.prototype, "username", void 0);
    ImageView = __decorate([
        core_1.Component({
            selector: 'image-view',
            template: "\n\t\t<div class={{getClasses()}}>\n\t\t\t<img src={{theImage.url}} />\n\t\t\t<h5>{{theImage.title}}</h5>\n\t\t\t<div class='infoBox'>\n\t\t\t\t<span class='uploader'>Uploader - {{theImage.uploader}} </span>\n\t\t\t\t<span class='likes'>Likes - {{theImage.likes.length}} </span>\n\t\t\t</div>\n\t\t\t<div class={{likeBtnClasses()}} (click)=\"likeImage()\" >\n\t\t\t\t<i class=\"fa fa-heart\"></i>\n\t\t\t</div>\n\t\t</div>\n\t\n\t",
            styleUrls: ['public/stylesheets/image-view.css']
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService])
    ], ImageView);
    return ImageView;
}());
exports.ImageView = ImageView;
//# sourceMappingURL=image.component.js.map