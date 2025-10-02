(() => {
var exports = {};
exports.id = 840;
exports.ids = [840];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 3404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'partners',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4523)), "C:\\Users\\hasan\\Downloads\\Quickeats\\app\\partners\\page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1754)), "C:\\Users\\hasan\\Downloads\\Quickeats\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["C:\\Users\\hasan\\Downloads\\Quickeats\\app\\partners\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/partners/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/partners/page",
        pathname: "/partners",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 8303:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 279))

/***/ }),

/***/ 279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Partners)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(737);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(4368);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(646);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
var map_pin = __webpack_require__(7094);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/star.js
var star = __webpack_require__(7932);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/phone.js
var phone = __webpack_require__(4571);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bike.js
var bike = __webpack_require__(9243);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(6494);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 254 modules
var proxy = __webpack_require__(3728);
;// CONCATENATED MODULE: ./components/partners/PartnerCard.tsx











const STATUS_COLORS = {
    available: "bg-green-500 text-white",
    busy: "bg-orange-500 text-white",
    offline: "bg-gray-500 text-white"
};
const VEHICLE_ICONS = {
    bike: bike/* default */.Z,
    scooter: zap/* default */.Z,
    bicycle: bike/* default */.Z
};
function PartnerCard({ partner, onStatusUpdate, onSelect, isSelected }) {
    const VehicleIcon = VEHICLE_ICONS[partner.vehicle_type] || bike/* default */.Z;
    const getNextStatus = ()=>{
        switch(partner.status){
            case "offline":
                return "available";
            case "available":
                return "busy";
            case "busy":
                return "offline";
            default:
                return "available";
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
        whileHover: {
            scale: 1.02
        },
        className: `cursor-pointer ${isSelected ? "ring-2 ring-blue-500" : ""}`,
        onClick: ()=>onSelect(partner),
        children: /*#__PURE__*/ jsx_runtime_.jsx(card/* Card */.Zb, {
            className: "border hover:shadow-md transition-all",
            children: /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
                className: "p-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "font-semibold text-lg",
                                            children: partner.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center gap-2 text-sm text-gray-600 mt-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(phone/* default */.Z, {
                                                    className: "w-3 h-3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: partner.phone
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(badge/* Badge */.C, {
                                    className: STATUS_COLORS[partner.status],
                                    children: partner.status
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(map_pin/* default */.Z, {
                                            className: "w-4 h-4 text-gray-400"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: partner.current_location
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(VehicleIcon, {
                                            className: "w-4 h-4 text-gray-400"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "capitalize",
                                            children: partner.vehicle_type
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(star/* default */.Z, {
                                            className: "w-4 h-4 fill-yellow-400 text-yellow-400"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                partner.rating,
                                                " (",
                                                partner.active_orders,
                                                " active orders)"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        partner.active_orders > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-orange-50 p-2 rounded-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-sm text-orange-700",
                                children: [
                                    "Currently handling ",
                                    partner.active_orders,
                                    " order",
                                    partner.active_orders > 1 ? "s" : ""
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                            variant: "outline",
                            size: "sm",
                            className: "w-full",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onStatusUpdate(partner.id, getNextStatus());
                            },
                            children: [
                                "Set to ",
                                getNextStatus()
                            ]
                        })
                    ]
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shopping-bag.js
var shopping_bag = __webpack_require__(4478);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(5441);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(3680);
;// CONCATENATED MODULE: ./components/partners/OrderAssignment.tsx









function OrderAssignment({ orders, partners, selectedPartner, onAssignOrder }) {
    const availablePartners = partners.filter((p)=>p.status === "available");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                className: "shadow-lg border-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(card/* CardHeader */.Ol, {
                        className: "bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* CardTitle */.ll, {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(shopping_bag/* default */.Z, {
                                    className: "w-5 h-5"
                                }),
                                "Orders Ready for Pickup (",
                                orders.length,
                                ")"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
                        className: "p-6",
                        children: orders.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-gray-500 text-center py-4",
                            children: "No orders pending assignment"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-y-4",
                            children: orders.slice(0, 5).map((order)=>/*#__PURE__*/ jsx_runtime_.jsx(card/* Card */.Zb, {
                                    className: "border",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                    className: "font-semibold flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx(user/* default */.Z, {
                                                                            className: "w-4 h-4"
                                                                        }),
                                                                        order.customer_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: order.customer_phone
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(badge/* Badge */.C, {
                                                            className: "bg-blue-100 text-blue-800",
                                                            children: [
                                                                "₹",
                                                                order.total_amount
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-1 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center gap-2 text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(map_pin/* default */.Z, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    children: order.delivery_zone
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex items-center gap-2 text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(clock/* default */.Z, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    children: [
                                                                        order.estimated_delivery_time,
                                                                        " mins"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: [
                                                        order.items?.length || 0,
                                                        " items • Surge: ",
                                                        order.surge_multiplier,
                                                        "x"
                                                    ]
                                                }),
                                                selectedPartner && selectedPartner.status === "available" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                                                    size: "sm",
                                                    className: "w-full bg-green-500 hover:bg-green-600",
                                                    onClick: ()=>onAssignOrder(order, selectedPartner),
                                                    children: [
                                                        "Assign to ",
                                                        selectedPartner.name
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, order.id))
                        })
                    })
                ]
            }),
            selectedPartner && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                className: "shadow-lg border-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(card/* CardHeader */.Ol, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(card/* CardTitle */.ll, {
                            children: "Selected Partner"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "font-semibold",
                                            children: selectedPartner.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: selectedPartner.phone
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: "Location"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "font-medium",
                                                    children: selectedPartner.current_location
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: "Status"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(badge/* Badge */.C, {
                                                    className: selectedPartner.status === "available" ? "bg-green-500 text-white" : selectedPartner.status === "busy" ? "bg-orange-500 text-white" : "bg-gray-500 text-white",
                                                    children: selectedPartner.status
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: "Active Orders"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "font-medium",
                                                    children: selectedPartner.active_orders || 0
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: "Rating"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "font-medium",
                                                    children: [
                                                        selectedPartner.rating,
                                                        " ⭐"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                selectedPartner.status !== "available" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-orange-50 p-3 rounded-lg",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-sm text-orange-700",
                                        children: [
                                            "Partner is currently ",
                                            selectedPartner.status,
                                            ". Change status to available to assign orders."
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                className: "shadow-lg border-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(card/* CardHeader */.Ol, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(card/* CardTitle */.ll, {
                            className: "text-lg",
                            children: "Quick Stats"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Available Partners"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-medium",
                                            children: availablePartners.length
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Pending Orders"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-medium",
                                            children: orders.length
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Orders per Partner"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-medium",
                                            children: availablePartners.length > 0 ? (orders.length / availablePartners.length).toFixed(1) : 0
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/partners/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Partners() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-3xl font-bold",
                children: "Delivery Partners"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Active Partners"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(PartnerCard, {
                                        partner: {
                                            id: "1",
                                            name: "John Doe",
                                            status: "available",
                                            current_location: {
                                                lat: 40.7128,
                                                lng: -74.0060
                                            },
                                            rating: 4.8,
                                            total_deliveries: 150
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(PartnerCard, {
                                        partner: {
                                            id: "2",
                                            name: "Jane Smith",
                                            status: "on_delivery",
                                            current_location: {
                                                lat: 40.7580,
                                                lng: -73.9855
                                            },
                                            rating: 4.9,
                                            total_deliveries: 200
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Order Assignments"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(OrderAssignment, {
                                orders: [],
                                partners: [],
                                selectedPartner: null,
                                onAssignOrder: ()=>{}
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\hasan\Downloads\Quickeats\app\partners\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,744,528,813,457,516,737,646], () => (__webpack_exec__(3404)));
module.exports = __webpack_exports__;

})();