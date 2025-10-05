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

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2455))

/***/ }),

/***/ 2455:
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
;// CONCATENATED MODULE: ./components/orders/ActiveOrders.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function ActiveOrders({ orders }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: !orders || orders.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: "text-sm text-gray-500",
            children: "No active orders."
        }) : /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: "space-y-3",
            children: orders.map((o)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "p-4 border rounded-lg bg-white shadow-sm",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-sm text-gray-500",
                                            children: o.id
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "font-semibold",
                                            children: o.customer
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-sm text-gray-500",
                                            children: o.address
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "font-medium",
                                            children: [
                                                "$",
                                                o.total?.toFixed(2)
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: o.status
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-2 text-sm text-gray-600",
                            children: [
                                "Items: ",
                                o.items?.map((it)=>`${it.name} x${it.qty}`).join(", ")
                            ]
                        })
                    ]
                }, o.id))
        })
    });
}

;// CONCATENATED MODULE: ./components/orders/MenuItems.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const FAMOUS_FOODS = [
    {
        id: "f1",
        name: "Biryani",
        price: 12.99
    },
    {
        id: "f2",
        name: "Butter Chicken",
        price: 14.5
    },
    {
        id: "f3",
        name: "Masala Dosa",
        price: 4.0
    },
    {
        id: "f4",
        name: "Samosa (3 pcs)",
        price: 3.0
    },
    {
        id: "f5",
        name: "Margherita Pizza",
        price: 11.0
    },
    {
        id: "f6",
        name: "Idli Sambar",
        price: 3.5
    },
    {
        id: "f7",
        name: "Peking Duck",
        price: 25.0
    },
    {
        id: "f8",
        name: "Sushi Platter",
        price: 30.0
    }
];
function MenuItems({ onAddToCart }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "space-y-3",
        children: FAMOUS_FOODS.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-medium",
                                children: item.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-sm text-gray-500",
                                children: [
                                    "$",
                                    item.price.toFixed(2)
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-sm",
                        onClick: ()=>onAddToCart(item),
                        children: "Add"
                    })
                ]
            }, item.id))
    });
}

;// CONCATENATED MODULE: ./components/orders/OrderForm.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function OrderForm(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: (e)=>{
            e.preventDefault();
            props.onSubmit && props.onSubmit({});
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm text-gray-500",
                children: "Order form placeholder."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "submit",
                className: "mt-2 btn",
                children: "Submit"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/orders/SurgeIndicator.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function SurgeIndicator({ multiplier }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            className: "text-sm",
            children: [
                "Current surge: x",
                multiplier
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/orders/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Orders() {
    const sampleOrders = [
        {
            id: "ORD001",
            customer: "Aman Sharma",
            address: "Bandra, Mumbai",
            items: [
                {
                    name: "Biryani",
                    qty: 1
                }
            ],
            total: 12.99,
            status: "preparing"
        },
        {
            id: "ORD002",
            customer: "Priya Patel",
            address: "Connaught Place, Delhi",
            items: [
                {
                    name: "Butter Chicken",
                    qty: 1
                }
            ],
            total: 14.5,
            status: "out-for-delivery"
        },
        {
            id: "ORD003",
            customer: "Rohit Singh",
            address: "Koramangala, Bengaluru",
            items: [
                {
                    name: "Masala Dosa",
                    qty: 2
                }
            ],
            total: 8.0,
            status: "accepted"
        },
        {
            id: "ORD004",
            customer: "Sana Khan",
            address: "Old Delhi, Delhi",
            items: [
                {
                    name: "Samosa",
                    qty: 3
                }
            ],
            total: 4.5,
            status: "delivered"
        },
        {
            id: "ORD005",
            customer: "Arjun Rao",
            address: "Colaba, Mumbai",
            items: [
                {
                    name: "Margherita Pizza",
                    qty: 1
                }
            ],
            total: 11.0,
            status: "preparing"
        },
        {
            id: "ORD006",
            customer: "Meera Iyer",
            address: "Chennai",
            items: [
                {
                    name: "Idli Sambar",
                    qty: 2
                }
            ],
            total: 6.0,
            status: "preparing"
        },
        {
            id: "ORD007",
            customer: "Liu Wei",
            address: "Beijing",
            items: [
                {
                    name: "Peking Duck",
                    qty: 1
                }
            ],
            total: 25.0,
            status: "delivered"
        },
        {
            id: "ORD008",
            customer: "Hiro Tanaka",
            address: "Tokyo",
            items: [
                {
                    name: "Sushi Platter",
                    qty: 1
                }
            ],
            total: 30.0,
            status: "accepted"
        }
    ];
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
                                orders: sampleOrders
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
var __webpack_exports__ = __webpack_require__.X(0, [478,1,584,574,737], () => (__webpack_exec__(383)));
module.exports = __webpack_exports__;

})();