"use strict";
var router_1 = require('@angular/router');
var recent_component_1 = require('./recent.component');
var top_component_1 = require('./top.component');
var own_component_1 = require('./own.component');
var gallery_component_1 = require('./gallery.component');
var appRoutes = [
    {
        path: 'recent',
        component: recent_component_1.RecentComponent
    },
    {
        path: 'top',
        component: top_component_1.TopComponent
    },
    {
        path: 'own',
        component: own_component_1.OwnComponent
    },
    {
        path: '',
        redirectTo: '/recent',
        pathMatch: 'full'
    },
    {
        path: 'user/:name',
        component: gallery_component_1.GalleryComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map