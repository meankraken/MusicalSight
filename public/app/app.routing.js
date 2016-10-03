"use strict";
var router_1 = require('@angular/router');
var recent_component_1 = require('./recent.component');
var appRoutes = [
    {
        path: 'recent',
        component: recent_component_1.RecentComponent
    },
    {
        path: '',
        redirectTo: '/recent',
        pathMatch: 'full'
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map