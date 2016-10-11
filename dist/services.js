"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// Import all services
var leaflet_service_1 = require('./services/leaflet.service');
// Export all services
__export(require('./services/leaflet.service'));
// Export convenience property
exports.PROVIDERS = [
    leaflet_service_1.LeafletService
];
//# sourceMappingURL=services.js.map