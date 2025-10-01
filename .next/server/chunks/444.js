"use strict";
exports.id = 444;
exports.ids = [444];
exports.modules = {

/***/ 3451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ol: () => (/* binding */ CardHeader),
/* harmony export */   Zb: () => (/* binding */ Card),
/* harmony export */   aY: () => (/* binding */ CardContent),
/* harmony export */   ll: () => (/* binding */ CardTitle)
/* harmony export */ });
/* unused harmony exports CardDescription, CardFooter */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4869);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 1849:
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


/***/ }),

/***/ 4869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5873);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_merge__WEBPACK_IMPORTED_MODULE_1__);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}


/***/ })

};
;