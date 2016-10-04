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
var RecentComponent = (function () {
    function RecentComponent(imageService) {
        this.imageService = imageService;
        this.recentImages = []; //array for holding recent images 
        this.componentType = "RecentComponent"; //for identifying this child component 
    }
    RecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getRecentImages().then(function (arr) { _this.recentImages = arr.slice(); });
        this.imageService.getCurrentUser().then(function (username) { _this.currentUser = username.toString(); });
    };
    RecentComponent.prototype.addImage = function (toAdd) {
        this.recentImages.unshift(toAdd);
    };
    RecentComponent.prototype.ngAfterViewChecked = function () {
        /*
        $('.grid').masonry({
          // options
          itemSelector: '.grid-item',
          columnWidth: 50,
          //percentPosition: true,
          gutter:10
        });
        */
    };
    RecentComponent = __decorate([
        core_1.Component({
            selector: 'recent-list',
            template: "\n\t\t<div id='recentView'>\n\t\t\t<h2>Recent List</h2>\n\t\t\t<div class=\"grid\">\n\t\t\t\t<image-view *ngFor=\"let image of recentImages; let i = index\" [theImage]=\"image\" [theIndex]=\"i\" [username]=\"currentUser\"></image-view>\n\t\t\t</div>\n\t\t</div>\n\t",
            styleUrls: ['public/stylesheets/recent-list.css']
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService])
    ], RecentComponent);
    return RecentComponent;
}());
exports.RecentComponent = RecentComponent;
//# sourceMappingURL=recent.component.js.map