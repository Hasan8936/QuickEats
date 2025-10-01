"use strict";
(() => {
var exports = {};
exports.id = 49;
exports.ids = [49,888,660];
exports.modules = {

/***/ 4193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FDeliveryPartners_preferredRegion_absolutePagePath_private_next_pages_2FDeliveryPartners_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/DeliveryPartners.tsx
var DeliveryPartners_namespaceObject = {};
__webpack_require__.r(DeliveryPartners_namespaceObject);
__webpack_require__.d(DeliveryPartners_namespaceObject, {
  "default": () => (DeliveryPartners)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(9259);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_app.js
var _app = __webpack_require__(2624);
var _app_default = /*#__PURE__*/__webpack_require__.n(_app);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./lib/data.ts + 4 modules
var data = __webpack_require__(1849);
// EXTERNAL MODULE: ./Components/ui/card.tsx
var card = __webpack_require__(3451);
// EXTERNAL MODULE: ./Components/ui/button.tsx
var ui_button = __webpack_require__(8125);
// EXTERNAL MODULE: ./Components/ui/badge.tsx
var badge = __webpack_require__(6115);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
var map_pin = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/star.js
var star = __webpack_require__(9560);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/phone.js
var phone = __webpack_require__(9769);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bike.js
var bike = __webpack_require__(7013);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(9461);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./Components/partners/PartnerCard.tsx











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
    return /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
        whileHover: {
            scale: 1.02
        },
        className: `cursor-pointer ${isSelected ? "ring-2 ring-blue-500" : ""}`,
        onClick: ()=>onSelect(partner),
        children: /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
            className: "border hover:shadow-md transition-all",
            children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                className: "p-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "font-semibold text-lg",
                                            children: partner.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2 text-sm text-gray-600 mt-1",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(phone/* default */.Z, {
                                                    className: "w-3 h-3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: partner.phone
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(badge/* Badge */.C, {
                                    className: STATUS_COLORS[partner.status],
                                    children: partner.status
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(map_pin/* default */.Z, {
                                            className: "w-4 h-4 text-gray-400"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: partner.current_location
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(VehicleIcon, {
                                            className: "w-4 h-4 text-gray-400"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "capitalize",
                                            children: partner.vehicle_type
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(star/* default */.Z, {
                                            className: "w-4 h-4 fill-yellow-400 text-yellow-400"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
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
                        partner.active_orders > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "bg-orange-50 p-2 rounded-lg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "text-sm text-orange-700",
                                children: [
                                    "Currently handling ",
                                    partner.active_orders,
                                    " order",
                                    partner.active_orders > 1 ? "s" : ""
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
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
var shopping_bag = __webpack_require__(4349);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(5077);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(4933);
;// CONCATENATED MODULE: ./Components/partners/OrderAssignment.tsx









function OrderAssignment({ orders, partners, selectedPartner, onAssignOrder }) {
    const availablePartners = partners.filter((p)=>p.status === "available");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                className: "shadow-lg border-0",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                        className: "bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(shopping_bag/* default */.Z, {
                                    className: "w-5 h-5"
                                }),
                                "Orders Ready for Pickup (",
                                orders.length,
                                ")"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                        className: "p-6",
                        children: orders.length === 0 ? /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-gray-500 text-center py-4",
                            children: "No orders pending assignment"
                        }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "space-y-4",
                            children: orders.slice(0, 5).map((order)=>/*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                                    className: "border",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                        className: "p-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                                                    className: "font-semibold flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx(user/* default */.Z, {
                                                                            className: "w-4 h-4"
                                                                        }),
                                                                        order.customer_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                    className: "text-sm text-gray-600",
                                                                    children: order.customer_phone
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
                                                            className: "bg-blue-100 text-blue-800",
                                                            children: [
                                                                "₹",
                                                                order.total_amount
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-1 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2 text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(map_pin/* default */.Z, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: order.delivery_zone
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2 text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                                                    className: "w-3 h-3"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                    children: [
                                                                        order.estimated_delivery_time,
                                                                        " mins"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "text-xs text-gray-500",
                                                    children: [
                                                        order.items?.length || 0,
                                                        " items • Surge: ",
                                                        order.surge_multiplier,
                                                        "x"
                                                    ]
                                                }),
                                                selectedPartner && selectedPartner.status === "available" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
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
            selectedPartner && /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                className: "shadow-lg border-0",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                            children: "Selected Partner"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            className: "font-semibold",
                                            children: selectedPartner.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: selectedPartner.phone
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: "Location"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "font-medium",
                                                    children: selectedPartner.current_location
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: "Status"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(badge/* Badge */.C, {
                                                    className: selectedPartner.status === "available" ? "bg-green-500 text-white" : selectedPartner.status === "busy" ? "bg-orange-500 text-white" : "bg-gray-500 text-white",
                                                    children: selectedPartner.status
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: "Active Orders"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "font-medium",
                                                    children: selectedPartner.active_orders || 0
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-gray-500",
                                                    children: "Rating"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
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
                                selectedPartner.status !== "available" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-orange-50 p-3 rounded-lg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
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
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                className: "shadow-lg border-0",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                            className: "text-lg",
                            children: "Quick Stats"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "Available Partners"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "font-medium",
                                            children: availablePartners.length
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "Pending Orders"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "font-medium",
                                            children: orders.length
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "Orders per Partner"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
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

;// CONCATENATED MODULE: ./pages/DeliveryPartners.tsx






function DeliveryPartners() {
    const partners = (0,data/* getAllPartners */.cF)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Delivery Partners"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "space-y-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                                        children: "Active Partners"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "grid gap-4",
                                        children: partners.map((partner)=>/*#__PURE__*/ jsx_runtime.jsx(PartnerCard, {
                                                partner: partner,
                                                onStatusUpdate: ()=>{},
                                                onSelect: ()=>{},
                                                isSelected: false
                                            }, partner.id))
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(OrderAssignment, {
                        partners: partners,
                        orders: [],
                        selectedPartner: null,
                        onAssignOrder: ()=>{}
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FDeliveryPartners&preferredRegion=&absolutePagePath=private-next-pages%2FDeliveryPartners.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FDeliveryPartners_preferredRegion_absolutePagePath_private_next_pages_2FDeliveryPartners_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(DeliveryPartners_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/DeliveryPartners",
        pathname: "/DeliveryPartners",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: DeliveryPartners_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 2324:
/***/ ((module) => {

module.exports = require("@radix-ui/react-slot");

/***/ }),

/***/ 1169:
/***/ ((module) => {

module.exports = require("class-variance-authority");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5873:
/***/ ((module) => {

module.exports = require("tailwind-merge");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [259,624,855,893,297,829,397,444,676], () => (__webpack_exec__(4193)));
module.exports = __webpack_exports__;

})();