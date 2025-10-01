"use strict";
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 5366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zk: () => (/* binding */ getAllOrders),
  cF: () => (/* binding */ getAllPartners),
  xW: () => (/* binding */ getAllSurgePolicies)
});

// UNUSED EXPORTS: getAllLocations, getOrderById, getPartnerById, getSurgePolicyById, locations, orders, partners, surgePolicies

;// CONCATENATED MODULE: ./entities/Order.json
const Order_namespaceObject = JSON.parse('{"orders":[{"id":"ORD001","customer_name":"Alice Smith","customer_phone":"+1234567890","status":"pending","delivery_zone":"Downtown","items":[{"name":"Burger","quantity":2,"price":12.99}],"total_amount":25.98,"surge_multiplier":1}]}');
;// CONCATENATED MODULE: ./entities/DeliveryPartner.json
const DeliveryPartner_namespaceObject = JSON.parse('{"deliveryPartners":[{"id":"DP001","name":"John Doe","phone":"+1234567890","vehicle_type":"bike","current_location":"Downtown","status":"available","active_orders":0,"rating":4.5}]}');
;// CONCATENATED MODULE: ./entities/Location.json
const Location_namespaceObject = {};
;// CONCATENATED MODULE: ./entities/SurgePolicy.json
const SurgePolicy_namespaceObject = JSON.parse('{"policies":[{"id":"SP001","name":"Standard Surge","conditions":{"demand_threshold":1.5,"time_window":30},"multiplier_range":{"min":1,"max":2},"active":true}]}');
;// CONCATENATED MODULE: ./lib/data.ts




// Type safe data exports
const orders = Order_namespaceObject;
const partners = DeliveryPartner_namespaceObject;
const locations = (/* unused pure expression or super */ null && (locationsData));
const surgePolicies = SurgePolicy_namespaceObject;
// Helper functions
function getAllOrders() {
    return orders.orders;
}
function getOrderById(id) {
    return orders.orders.find((order)=>order.id === id);
}
function getAllPartners() {
    return partners.deliveryPartners;
}
function getPartnerById(id) {
    return partners.deliveryPartners.find((partner)=>partner.id === id);
}
function getAllLocations() {
    return locations.zones;
}
function getAllSurgePolicies() {
    return surgePolicies.policies;
}
function getSurgePolicyById(id) {
    return surgePolicies.policies.find((policy)=>policy.id === id);
}


/***/ })

};
;