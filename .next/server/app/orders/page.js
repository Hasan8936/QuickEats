(() => {
var exports = {};
exports.id = 569;
exports.ids = [569];
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

/***/ 383:
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
        'orders',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9550)), "C:\\Users\\hasan\\Downloads\\Quickeats\\app\\orders\\page.tsx"],
          
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
const pages = ["C:\\Users\\hasan\\Downloads\\Quickeats\\app\\orders\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/orders/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/orders/page",
        pathname: "/orders",
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

/***/ 7907:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5788))

/***/ }),

/***/ 5788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Orders)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(737);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(646);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(5441);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
var map_pin = __webpack_require__(7094);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(3680);
;// CONCATENATED MODULE: ./components/orders/ActiveOrders.tsx







const STATUS_COLORS = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-blue-100 text-blue-800",
    preparing: "bg-purple-100 text-purple-800",
    out_for_delivery: "bg-orange-100 text-orange-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800"
};
function ActiveOrders({ orders }) {
    const recentOrders = orders.slice(0, 6);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(card/* CardHeader */.Ol, {
                className: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx(card/* CardTitle */.ll, {
                    children: "Recent Orders"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
                className: "p-6",
                children: recentOrders.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-gray-500 text-center py-8",
                    children: "No orders yet"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: recentOrders.map((order)=>/*#__PURE__*/ jsx_runtime_.jsx(card/* Card */.Zb, {
                            className: "border border-gray-200",
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
                                                /*#__PURE__*/ jsx_runtime_.jsx(badge/* Badge */.C, {
                                                    className: STATUS_COLORS[order.status],
                                                    children: order.status?.replace(/_/g, " ")
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
                                                            className: "truncate",
                                                            children: order.delivery_zone
                                                        })
                                                    ]
                                                }),
                                                order.estimated_delivery_time && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                            className: "flex justify-between items-center pt-2 border-t",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        order.items?.length || 0,
                                                        " items"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "font-bold",
                                                    children: [
                                                        "₹",
                                                        order.total_amount
                                                    ]
                                                })
                                            ]
                                        }),
                                        order.surge_multiplier !== 1.0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(badge/* Badge */.C, {
                                            variant: "outline",
                                            className: "text-xs",
                                            children: [
                                                order.surge_multiplier,
                                                "x Surge Applied"
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, order.id))
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(4368);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(2385);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/star.js
var star = __webpack_require__(7932);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 254 modules
var proxy = __webpack_require__(3728);
;// CONCATENATED MODULE: ./components/orders/MenuItems.tsx








const MENU_ITEMS = [
    {
        category: "North Indian",
        items: [
            {
                name: "Butter Chicken",
                price: 280,
                rating: 4.5,
                time: "25-30 min",
                veg: false
            },
            {
                name: "Dal Makhani",
                price: 220,
                rating: 4.3,
                time: "20-25 min",
                veg: true
            },
            {
                name: "Paneer Butter Masala",
                price: 240,
                rating: 4.4,
                time: "20-25 min",
                veg: true
            },
            {
                name: "Biryani Chicken",
                price: 320,
                rating: 4.6,
                time: "30-35 min",
                veg: false
            }
        ]
    },
    {
        category: "South Indian",
        items: [
            {
                name: "Masala Dosa",
                price: 140,
                rating: 4.2,
                time: "15-20 min",
                veg: true
            },
            {
                name: "Idli Sambar (4 pcs)",
                price: 100,
                rating: 4.1,
                time: "10-15 min",
                veg: true
            },
            {
                name: "Rava Uttapam",
                price: 120,
                rating: 4.0,
                time: "15-20 min",
                veg: true
            }
        ]
    },
    {
        category: "Chinese",
        items: [
            {
                name: "Hakka Noodles",
                price: 180,
                rating: 4.3,
                time: "20-25 min",
                veg: true
            },
            {
                name: "Chicken Manchurian",
                price: 260,
                rating: 4.4,
                time: "25-30 min",
                veg: false
            },
            {
                name: "Fried Rice",
                price: 160,
                rating: 4.1,
                time: "20-25 min",
                veg: true
            }
        ]
    }
];
function MenuItems({ onAddToCart }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(card/* CardHeader */.Ol, {
                className: "bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx(card/* CardTitle */.ll, {
                    children: "Menu Items"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
                className: "p-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "space-y-8",
                    children: MENU_ITEMS.map((category, categoryIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-xl font-bold text-gray-800 mb-4 border-b pb-2",
                                    children: category.category
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: category.items.map((item, itemIndex)=>/*#__PURE__*/ jsx_runtime_.jsx(proxy/* motion */.E.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: categoryIndex * 0.1 + itemIndex * 0.05
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(card/* Card */.Zb, {
                                                className: "border hover:shadow-md transition-shadow",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* CardContent */.aY, {
                                                    className: "p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "flex justify-between items-start mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                            className: "font-semibold flex items-center gap-2",
                                                                            children: [
                                                                                item.name,
                                                                                /*#__PURE__*/ jsx_runtime_.jsx(badge/* Badge */.C, {
                                                                                    variant: item.veg ? "secondary" : "destructive",
                                                                                    className: "text-xs",
                                                                                    children: item.veg ? "VEG" : "NON-VEG"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "flex items-center gap-2 mt-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                    className: "flex items-center gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx(star/* default */.Z, {
                                                                                            className: "w-3 h-3 fill-yellow-400 text-yellow-400"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                            className: "text-sm text-gray-600",
                                                                                            children: item.rating
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "text-gray-300",
                                                                                    children: "•"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "text-sm text-gray-600",
                                                                                    children: item.time
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text-right",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: "font-bold text-lg text-gray-800",
                                                                        children: [
                                                                            "₹",
                                                                            item.price
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
                                                            className: "w-full bg-orange-500 hover:bg-orange-600",
                                                            onClick: ()=>onAddToCart(item),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(plus/* default */.Z, {
                                                                    className: "w-4 h-4 mr-2"
                                                                }),
                                                                "Add to Cart"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.name))
                                })
                            ]
                        }, category.category))
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(5538);
// EXTERNAL MODULE: ./components/ui/label.tsx
var label = __webpack_require__(1396);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(2857);
;// CONCATENATED MODULE: ./components/ui/textarea.tsx



const Textarea = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
        className: (0,utils.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-separator/dist/index.mjs
var dist = __webpack_require__(2299);
;// CONCATENATED MODULE: ./components/ui/separator.tsx




const Separator = /*#__PURE__*/ react_.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Root */.f, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,utils.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }));
Separator.displayName = dist/* Root */.f.displayName;


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-2.js
var loader_2 = __webpack_require__(87);
;// CONCATENATED MODULE: ./components/orders/OrderForm.tsx








function OrderForm({ selectedLocation, cartItems, subtotal, surgeMultiplier, onPlaceOrder, isLoading }) {
    const [customerData, setCustomerData] = (0,react_.useState)({
        customer_name: "",
        customer_phone: "",
        delivery_address: ""
    });
    const baseFee = selectedLocation?.base_delivery_fee || 30;
    const finalDeliveryFee = Math.round(baseFee * surgeMultiplier);
    const totalAmount = subtotal + finalDeliveryFee;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (customerData.customer_name && customerData.customer_phone && customerData.delivery_address) {
            onPlaceOrder(customerData);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Separator, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "font-semibold text-lg",
                        children: "Delivery Details"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(label/* Label */._, {
                                htmlFor: "name",
                                children: "Full Name"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                id: "name",
                                placeholder: "Enter your full name",
                                value: customerData.customer_name,
                                onChange: (e)=>setCustomerData((prev)=>({
                                            ...prev,
                                            customer_name: e.target.value
                                        })),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(label/* Label */._, {
                                htmlFor: "phone",
                                children: "Phone Number"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(input/* Input */.I, {
                                id: "phone",
                                placeholder: "Enter your phone number",
                                value: customerData.customer_phone,
                                onChange: (e)=>setCustomerData((prev)=>({
                                            ...prev,
                                            customer_phone: e.target.value
                                        })),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(label/* Label */._, {
                                htmlFor: "address",
                                children: "Complete Address"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Textarea, {
                                id: "address",
                                placeholder: "Enter complete delivery address",
                                value: customerData.delivery_address,
                                onChange: (e)=>setCustomerData((prev)=>({
                                            ...prev,
                                            delivery_address: e.target.value
                                        })),
                                required: true
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Separator, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "font-semibold text-lg",
                        children: "Order Summary"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Subtotal (",
                                            cartItems.length,
                                            " items)"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "₹",
                                            subtotal
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Base Delivery Fee"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "₹",
                                            baseFee
                                        ]
                                    })
                                ]
                            }),
                            surgeMultiplier !== 1.0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between text-orange-600",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Surge Pricing (",
                                            surgeMultiplier,
                                            "x)"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "₹",
                                            finalDeliveryFee - baseFee
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-between font-medium border-t pt-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Final Delivery Fee"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "₹",
                                            finalDeliveryFee
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Separator, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between text-lg font-bold",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Total Amount"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "₹",
                                    totalAmount
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                type: "submit",
                className: "w-full bg-orange-500 hover:bg-orange-600 text-lg py-3",
                disabled: isLoading || !customerData.customer_name || !customerData.customer_phone || !customerData.delivery_address,
                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(loader_2/* default */.Z, {
                            className: "w-4 h-4 mr-2 animate-spin"
                        }),
                        "Placing Order..."
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Place Order - ₹",
                        totalAmount
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-up.js
var trending_up = __webpack_require__(7);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-down.js
var trending_down = __webpack_require__(1817);
;// CONCATENATED MODULE: ./components/orders/SurgeIndicator.tsx





function SurgeIndicator({ multiplier, size = "md" }) {
    const getSurgeColor = ()=>{
        if (multiplier >= 2.0) return "bg-red-500 text-white";
        if (multiplier >= 1.5) return "bg-orange-500 text-white";
        if (multiplier >= 1.2) return "bg-yellow-500 text-white";
        if (multiplier < 1.0) return "bg-green-500 text-white";
        return "bg-gray-500 text-white";
    };
    const getSurgeText = ()=>{
        if (multiplier >= 2.0) return "High Surge";
        if (multiplier >= 1.5) return "Medium Surge";
        if (multiplier >= 1.2) return "Low Surge";
        if (multiplier < 1.0) return "Discount";
        return "Normal";
    };
    const Icon = multiplier >= 1.0 ? trending_up/* default */.Z : trending_down/* default */.Z;
    const iconSize = size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3 h-3" : "w-4 h-4";
    const textSize = size === "lg" ? "text-base" : size === "sm" ? "text-xs" : "text-sm";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(badge/* Badge */.C, {
                className: `${getSurgeColor()} ${textSize} flex items-center gap-1`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        className: iconSize
                    }),
                    getSurgeText()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: `font-bold ${textSize}`,
                children: [
                    multiplier,
                    "x"
                ]
            }),
            multiplier !== 1.0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: `text-gray-500 ${textSize}`,
                children: [
                    "(",
                    multiplier > 1.0 ? "+" : "",
                    Math.round((multiplier - 1.0) * 100),
                    "%)"
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/orders/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Orders() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-3xl font-bold",
                children: "Order Management"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Active Orders"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ActiveOrders, {
                                orders: []
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-semibold mb-4",
                                children: "New Order"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(OrderForm, {
                                selectedLocation: {
                                    id: "default",
                                    name: "Downtown",
                                    zone: "Central",
                                    lat: 40.7128,
                                    lng: -74.0060
                                },
                                cartItems: [],
                                subtotal: 0,
                                surgeMultiplier: 1,
                                onLocationSelect: ()=>{},
                                onSubmit: ()=>{}
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Menu Items"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuItems, {
                                onAddToCart: ()=>{}
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Surge Status"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SurgeIndicator, {
                                multiplier: 1
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\hasan\Downloads\Quickeats\app\orders\page.tsx`)

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
var __webpack_exports__ = __webpack_require__.X(0, [478,744,528,813,371,372,516,737,646,963], () => (__webpack_exec__(383)));
module.exports = __webpack_exports__;

})();