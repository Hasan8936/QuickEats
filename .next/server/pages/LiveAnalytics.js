"use strict";
(() => {
var exports = {};
exports.id = 2;
exports.ids = [2,888,660];
exports.modules = {

/***/ 2266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FLiveAnalytics_preferredRegion_absolutePagePath_private_next_pages_2FLiveAnalytics_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/LiveAnalytics.tsx
var LiveAnalytics_namespaceObject = {};
__webpack_require__.r(LiveAnalytics_namespaceObject);
__webpack_require__.d(LiveAnalytics_namespaceObject, {
  "default": () => (LiveAnalytics)
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
;// CONCATENATED MODULE: external "recharts"
const external_recharts_namespaceObject = require("recharts");
;// CONCATENATED MODULE: ./pages/LiveAnalytics.tsx





function LiveAnalytics() {
    const orders = (0,data/* getAllOrders */.zk)();
    const partners = (0,data/* getAllPartners */.cF)();
    // Calculate analytics data
    const analyticsData = {
        totalOrders: orders.length,
        activePartners: partners.filter((p)=>p.status === "available").length,
        avgDeliveryTime: orders.reduce((acc, order)=>acc + (order.estimated_delivery_time || 0), 0) / orders.length || 0,
        surgeZones: orders.filter((order)=>(order.surge_multiplier || 1) > 1).length
    };
    // Prepare chart data
    const ordersByHour = Array.from({
        length: 24
    }, (_, hour)=>({
            hour: `${hour}:00`,
            orders: Math.floor(Math.random() * 20),
            partners: Math.floor(Math.random() * 10)
        }));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Live Analytics"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                                    children: "Total Orders"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-4xl font-bold",
                                    children: analyticsData.totalOrders
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                                    children: "Active Partners"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-4xl font-bold",
                                    children: analyticsData.activePartners
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                                    children: "Avg Delivery Time"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    className: "text-4xl font-bold",
                                    children: [
                                        analyticsData.avgDeliveryTime.toFixed(0),
                                        " min"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                                    children: "Surge Zones"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-4xl font-bold",
                                    children: analyticsData.surgeZones
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                                    children: "Orders by Hour"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    style: {
                                        width: "100%",
                                        height: 300
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                                        width: "100%",
                                        height: 300,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_recharts_namespaceObject.LineChart, {
                                            data: ordersByHour,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.CartesianGrid, {
                                                    strokeDasharray: "3 3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.XAxis, {
                                                    dataKey: "hour"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.YAxis, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Tooltip, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Legend, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Line, {
                                                    type: "monotone",
                                                    dataKey: "orders",
                                                    stroke: "#8884d8"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                                    children: "Partner Availability"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    style: {
                                        width: "100%",
                                        height: 300
                                    },
                                    children: /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                                        width: "100%",
                                        height: 300,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_recharts_namespaceObject.BarChart, {
                                            data: ordersByHour,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.CartesianGrid, {
                                                    strokeDasharray: "3 3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.XAxis, {
                                                    dataKey: "hour"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.YAxis, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Tooltip, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Legend, {}),
                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Bar, {
                                                    dataKey: "partners",
                                                    fill: "#82ca9d"
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FLiveAnalytics&preferredRegion=&absolutePagePath=private-next-pages%2FLiveAnalytics.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FLiveAnalytics_preferredRegion_absolutePagePath_private_next_pages_2FLiveAnalytics_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(LiveAnalytics_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/LiveAnalytics",
        pathname: "/LiveAnalytics",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: LiveAnalytics_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

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
var __webpack_exports__ = __webpack_require__.X(0, [259,624,855,893,444], () => (__webpack_exec__(2266)));
module.exports = __webpack_exports__;

})();