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
var ImageView = (function () {
    function ImageView() {
    }
    ImageView.prototype.getClasses = function () {
        if (((this.theIndex) % 10) == 5) {
            return 'grid-item offset-left';
        }
        else {
            return 'grid-item';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', image_js_1.Image)
    ], ImageView.prototype, "theImage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ImageView.prototype, "theIndex", void 0);
    ImageView = __decorate([
        core_1.Component({
            selector: 'image-view',
            template: "\n\t\t<div class={{getClasses()}}>\n\t\t\t<img src={{theImage.url}} />\n\t\t\t<h5>{{theImage.title}}</h5>\n\t\t\t<div class='infoBox'>\n\t\t\t\t<span class='uploader'>Uploader - {{theImage.uploader}} </span>\n\t\t\t\t<span class='likes'>Likes - {{theImage.likes}} </span>\n\t\t\t</div>\n\t\t\t<div class='likeBox'>\n\t\t\t\t<i class=\"fa fa-heart\"></i>\n\t\t\t</div>\n\t\t</div>\n\t\n\t",
            styleUrls: ['public/stylesheets/image-view.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ImageView);
    return ImageView;
}());
exports.ImageView = ImageView;
//# sourceMappingURL=image.component.js.map