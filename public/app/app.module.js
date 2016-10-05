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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var recent_component_1 = require('./recent.component'); //recent list 
var top_component_1 = require('./top.component'); //top list
var own_component_1 = require('./own.component'); //own list 
var add_image_component_1 = require('./add-image.component'); //form for uploading images
var image_component_1 = require('./image.component'); //individual image box 
var image_service_1 = require('./image.service'); //service for handling http requests
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        //service for handling http requests
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.Routing],
            declarations: [app_component_1.AppComponent, recent_component_1.RecentComponent, top_component_1.TopComponent, own_component_1.OwnComponent, add_image_component_1.AddImageComponent, image_component_1.ImageView],
            bootstrap: [app_component_1.AppComponent],
            providers: [image_service_1.ImageService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map