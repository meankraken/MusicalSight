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
var router_1 = require('@angular/router');
var image_service_1 = require('./image.service');
var GalleryComponent = (function () {
    function GalleryComponent(route, imageService) {
        this.route = route;
        this.imageService = imageService;
        this.userImages = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) {
            _this.searchedUser = param['name'];
            _this.imageService.getCurrentUser().then(function (username) { _this.currentUser = username.toString(); });
            _this.imageService.getUserImages(_this.searchedUser).then(function (data) {
                _this.userImages = data.slice();
            });
        });
    };
    GalleryComponent.prototype.deleteImage = function (toDelete) {
        var index = -1;
        for (var i = 0; i < this.userImages.length; i++) {
            if (toDelete._id == this.userImages[i]._id) {
                index = i;
            }
        }
        this.userImages.splice(index, 1);
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'gallery',
            template: "\n\t\t<div id='theView'>\n\t\t\t<h2>{{searchedUser}}'s Gallery</h2>\n\t\t\t<div class=\"grid\">\n\t\t\t\t<image-view *ngFor=\"let image of userImages; let i = index\" [theImage]=\"image\" [theIndex]=\"i\" [username]=\"currentUser\" (deleteImage)=\"deleteImage($event)\"></image-view>\n\t\t\t</div>\n\t\t</div>\n\t",
            styleUrls: ['public/stylesheets/list.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, image_service_1.ImageService])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map