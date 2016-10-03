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
var AddImageComponent = (function () {
    function AddImageComponent(imageService) {
        this.imageService = imageService;
        this.hideForm = new core_1.EventEmitter();
        this.addImage = new core_1.EventEmitter();
    }
    AddImageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.imageTitle.length > 75) {
            alert("Title cannot exceed 75 characters.");
        }
        else {
            this.imageService.createImage(this.imageTitle, this.imageUrl).then(function (data) {
                if (data.title == 'Not logged in!') {
                    alert('You must be logged in.');
                }
                else {
                    _this.addImage.emit(data);
                    _this.hideForm.next();
                }
            });
        }
    };
    AddImageComponent.prototype.cancelForm = function () {
        this.hideForm.next();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddImageComponent.prototype, "hideForm", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddImageComponent.prototype, "addImage", void 0);
    AddImageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-image',
            template: "\n\t\t<div class='popUp'>\n\t\t\t<form (ngSubmit)=\"onSubmit()\">\n\t\t\t\t<h3>Add an image to your gallery:</h3>\n\t\t\t\t<hr/>\n\t\t\t\t<label>Title </label>\n\t\t\t\t<input [(ngModel)]='imageTitle' id='titleInput' type='text' name='title'/>\n\t\t\t\t<br/>\n\t\t\t\t<label>Image URL </label>\n\t\t\t\t<input [(ngModel)]='imageUrl' id='urlInput' type='text' name='url'/>\n\t\t\t\t<hr/>\n\t\t\t\t<button class='btn btn-primary' type='submit'>Submit</button>\n\t\t\t\t<button class='btn btn-default' type='button' (click)='cancelForm()'>Cancel</button>\n\t\t\t</form>\n\t\t</div>\n\t",
            styleUrls: ['../stylesheets/addForm.css']
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService])
    ], AddImageComponent);
    return AddImageComponent;
}());
exports.AddImageComponent = AddImageComponent;
//# sourceMappingURL=add-image.component.js.map