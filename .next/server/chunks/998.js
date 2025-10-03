"use strict";
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 17998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zk: () => (/* binding */ getAllOrders),
  cF: () => (/* binding */ getAllPartners),
  xW: () => (/* binding */ getAllSurgePolicies)
});

// UNUSED EXPORTS: getAllLocations, getOrderById, getPartnerById, getSurgePolicyById, locations, orders, partners, surgePolicies

;// CONCATENATED MODULE: ./Entities/Order.json
/* harmony default export */ const Order = ({orders:[{id:'ORD001',customer_name:'Alice Smith',customer_phone:'+1234567890',status:'pending',delivery_zone:'Downtown',items:[{name:'Burger',quantity:2,price:12.99}],total_amount:25.98,surge_multiplier:1}]});
;// CONCATENATED MODULE: ./Entities/DeliveryPartner.json
/* harmony default export */ const DeliveryPartner = ({deliveryPartners:[{id:'DP001',name:'John Doe',phone:'+1234567890',vehicle_type:'bike',current_location:'Downtown',status:'available',active_orders:0,rating:4.5}]});
;// CONCATENATED MODULE: ./Entities/Location.json
/* harmony default export */ const Location = ({zones:[{id:'ZONE001',name:'Downtown',zone:'Central',coordinates:{lat:40.7128,lng:-74.006}}]});
;// CONCATENATED MODULE: ./Entities/SurgePolicy.json
/* harmony default export */ const SurgePolicy = ({policies:[{id:'SP001',zone_name:'Downtown',demand_threshold_low:1.2,demand_threshold_high:2,supply_threshold_low:0.5,max_surge_multiplier:2,active:true},{id:'SP002',zone_name:'Suburbs',demand_threshold_low:1.1,demand_threshold_high:1.8,supply_threshold_low:0.6,max_surge_multiplier:1.8,active:true},{id:'SP003',zone_name:'Business District',demand_threshold_low:1.3,demand_threshold_high:2.2,supply_threshold_low:0.4,max_surge_multiplier:2.2,active:true}]});
;// CONCATENATED MODULE: ./lib/data.ts




// Type safe data exports
const orders = Order;
const partners = DeliveryPartner;
// Normalize/validate JSON at import time so TypeScript sees the correct shape
const normalizedLocations = {
    zones: (Location?.zones || []).map((z)=>({
            id: String(z.id),
            name: String(z.name),
            // ensure 'zone' exists; fallback to a slug of the name or empty string
            zone: z.zone ?? (typeof z.name === "string" ? z.name.toLowerCase().replace(/\s+/g, "-") : ""),
            coordinates: {
                lat: Number(z.coordinates?.lat ?? 0),
                lng: Number(z.coordinates?.lng ?? 0)
            }
        }))
};
const locations = (/* unused pure expression or super */ null && (normalizedLocations));
const surgePolicies = SurgePolicy;
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