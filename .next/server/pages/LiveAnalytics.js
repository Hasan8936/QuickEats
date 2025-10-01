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
// EXTERNAL MODULE: ./entities/all.ts + 4 modules
var entities_all = __webpack_require__(3007);
// EXTERNAL MODULE: ./Components/ui/card.tsx
var card = __webpack_require__(3451);
// EXTERNAL MODULE: ./Components/ui/badge.tsx
var badge = __webpack_require__(6115);
;// CONCATENATED MODULE: external "recharts"
const external_recharts_namespaceObject = require("recharts");
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-up.js
var trending_up = __webpack_require__(9858);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
var map_pin = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(5077);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/dollar-sign.js
var dollar_sign = __webpack_require__(6942);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/activity.js
var activity = __webpack_require__(9062);
;// CONCATENATED MODULE: ./pages/LiveAnalytics.tsx











function LiveAnalytics() {
    const [analyticsData, setAnalyticsData] = (0,external_react_.useState)({
        zoneStats: [],
        hourlyOrders: [],
        surgeHistory: [],
        revenueData: []
    });
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        loadAnalytics();
        const interval = setInterval(loadAnalytics, 10000);
        return ()=>clearInterval(interval);
    }, []);
    const loadAnalytics = async ()=>{
        try {
            const [orders, partners, locations, policies] = await Promise.all([
                entities_all.Order.list("-created_date", 200),
                entities_all.DeliveryPartner.list(),
                entities_all.Location.list(),
                entities_all.SurgePolicy.list()
            ]);
            // Zone Statistics
            const zoneStats = locations.map((location)=>{
                const zoneOrders = orders.filter((order)=>order.delivery_zone === location.zone_name);
                const activeOrders = zoneOrders.filter((order)=>[
                        "pending",
                        "confirmed",
                        "preparing",
                        "out_for_delivery"
                    ].includes(order.status)).length;
                const availablePartners = partners.filter((partner)=>partner.current_location === location.zone_name && partner.status === "available").length;
                const revenue = zoneOrders.reduce((sum, order)=>sum + (order.total_amount || 0), 0);
                const avgDeliveryFee = zoneOrders.length > 0 ? zoneOrders.reduce((sum, order)=>sum + (order.final_delivery_fee || 0), 0) / zoneOrders.length : 0;
                return {
                    zone: location.zone_name,
                    totalOrders: zoneOrders.length,
                    activeOrders,
                    availablePartners,
                    revenue,
                    currentSurge: location.current_surge_multiplier || 1.0,
                    avgDeliveryFee: Math.round(avgDeliveryFee)
                };
            });
            // Hourly Orders (last 24 hours simulation)
            const hourlyOrders = Array.from({
                length: 24
            }, (_, i)=>({
                    hour: `${23 - i}:00`,
                    orders: Math.floor(Math.random() * 20) + 5,
                    avgSurge: (Math.random() * 1.5 + 0.8).toFixed(1)
                })).reverse();
            // Revenue data
            const revenueData = zoneStats.map((zone)=>({
                    zone: zone.zone,
                    revenue: zone.revenue,
                    deliveryRevenue: zone.totalOrders * zone.avgDeliveryFee
                }));
            setAnalyticsData({
                zoneStats,
                hourlyOrders,
                revenueData
            });
        } catch (error) {
            console.error("Error loading analytics:", error);
        } finally{
            setIsLoading(false);
        }
    };
    const totalRevenue = analyticsData.zoneStats.reduce((sum, zone)=>sum + zone.revenue, 0);
    const totalOrders = analyticsData.zoneStats.reduce((sum, zone)=>sum + zone.totalOrders, 0);
    const avgSurge = analyticsData.zoneStats.length > 0 ? analyticsData.zoneStats.reduce((sum, zone)=>sum + zone.currentSurge, 0) / analyticsData.zoneStats.length : 1.0;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen bg-gradient-to-br from-indigo-50 to-gray-50",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                className: "text-4xl md:text-5xl font-bold mb-4",
                                children: [
                                    "Live ",
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "text-indigo-200",
                                        children: "Analytics"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-xl text-indigo-100 mb-8",
                                children: "Real-time insights into surge pricing performance and operational metrics"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid md:grid-cols-3 gap-6 max-w-2xl mx-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                                        className: "bg-white/10 backdrop-blur-sm border-white/20 text-white",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                            className: "p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(dollar_sign/* default */.Z, {
                                                            className: "w-5 h-5 text-green-300"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "font-semibold",
                                                            children: "Total Revenue"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    className: "text-2xl font-bold",
                                                    children: [
                                                        "₹",
                                                        totalRevenue.toLocaleString()
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                                        className: "bg-white/10 backdrop-blur-sm border-white/20 text-white",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                            className: "p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(activity/* default */.Z, {
                                                            className: "w-5 h-5 text-purple-300"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "font-semibold",
                                                            children: "Total Orders"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-2xl font-bold",
                                                    children: totalOrders
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                                        className: "bg-white/10 backdrop-blur-sm border-white/20 text-white",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                            className: "p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(trending_up/* default */.Z, {
                                                            className: "w-5 h-5 text-yellow-300"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "font-semibold",
                                                            children: "Avg Surge"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    className: "text-2xl font-bold",
                                                    children: [
                                                        avgSurge.toFixed(1),
                                                        "x"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                        className: "shadow-lg border-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                className: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(map_pin/* default */.Z, {
                                            className: "w-5 h-5"
                                        }),
                                        "Zone Performance Dashboard"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                className: "p-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid lg:grid-cols-2 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                    className: "text-lg font-semibold",
                                                    children: "Current Zone Status"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "space-y-3",
                                                    children: analyticsData.zoneStats.map((zone)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                                                            className: "p-4 border-l-4 border-indigo-500",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex justify-between items-start mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                                            className: "font-semibold",
                                                                            children: zone.zone
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
                                                                            className: zone.currentSurge >= 2.0 ? "bg-red-500 text-white" : zone.currentSurge >= 1.5 ? "bg-orange-500 text-white" : zone.currentSurge >= 1.2 ? "bg-yellow-500 text-white" : "bg-green-500 text-white",
                                                                            children: [
                                                                                zone.currentSurge,
                                                                                "x"
                                                                            ]
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
                                                                                    children: "Total Orders"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                    className: "font-bold",
                                                                                    children: zone.totalOrders
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
                                                                                    className: "font-bold",
                                                                                    children: zone.activeOrders
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                    className: "text-gray-500",
                                                                                    children: "Available Partners"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                    className: "font-bold",
                                                                                    children: zone.availablePartners
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                    className: "text-gray-500",
                                                                                    children: "Revenue"
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                                    className: "font-bold",
                                                                                    children: [
                                                                                        "₹",
                                                                                        zone.revenue.toLocaleString()
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }, zone.zone))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "space-y-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                        className: "text-lg font-semibold mb-4",
                                                        children: "Orders by Zone"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                                                        width: "100%",
                                                        height: 300,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_recharts_namespaceObject.BarChart, {
                                                            data: analyticsData.zoneStats,
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.CartesianGrid, {
                                                                    strokeDasharray: "3 3"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.XAxis, {
                                                                    dataKey: "zone"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.YAxis, {}),
                                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Tooltip, {}),
                                                                /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Bar, {
                                                                    dataKey: "totalOrders",
                                                                    fill: "#6366f1"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                                className: "shadow-lg border-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(clock/* default */.Z, {
                                                    className: "w-5 h-5 text-blue-500"
                                                }),
                                                "24-Hour Order Trend"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                                            width: "100%",
                                            height: 300,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_recharts_namespaceObject.LineChart, {
                                                data: analyticsData.hourlyOrders,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.CartesianGrid, {
                                                        strokeDasharray: "3 3"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.XAxis, {
                                                        dataKey: "hour"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.YAxis, {}),
                                                    /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Tooltip, {}),
                                                    /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Line, {
                                                        type: "monotone",
                                                        dataKey: "orders",
                                                        stroke: "#3b82f6",
                                                        strokeWidth: 2
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                                className: "shadow-lg border-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(dollar_sign/* default */.Z, {
                                                    className: "w-5 h-5 text-green-500"
                                                }),
                                                "Revenue Distribution"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.ResponsiveContainer, {
                                                width: "100%",
                                                height: 300,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_recharts_namespaceObject.BarChart, {
                                                    data: analyticsData.revenueData,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.CartesianGrid, {
                                                            strokeDasharray: "3 3"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.XAxis, {
                                                            dataKey: "zone"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.YAxis, {}),
                                                        /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Tooltip, {}),
                                                        /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Bar, {
                                                            dataKey: "revenue",
                                                            fill: "#10b981"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx(external_recharts_namespaceObject.Bar, {
                                                            dataKey: "deliveryRevenue",
                                                            fill: "#f59e0b"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex justify-center gap-4 mt-4 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-3 h-3 bg-green-500 rounded"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "Food Revenue"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "w-3 h-3 bg-yellow-500 rounded"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "Delivery Revenue"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid md:grid-cols-4 gap-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                                className: "p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-blue-100",
                                                    children: "Total Orders"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-2xl font-bold",
                                                    children: totalOrders
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(activity/* default */.Z, {
                                            className: "w-8 h-8 text-blue-200"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                                className: "p-6 bg-gradient-to-r from-green-500 to-green-600 text-white",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-green-100",
                                                    children: "Revenue"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    className: "text-2xl font-bold",
                                                    children: [
                                                        "₹",
                                                        totalRevenue.toLocaleString()
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(dollar_sign/* default */.Z, {
                                            className: "w-8 h-8 text-green-200"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                                className: "p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-purple-100",
                                                    children: "Avg Surge"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    className: "text-2xl font-bold",
                                                    children: [
                                                        avgSurge.toFixed(1),
                                                        "x"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(trending_up/* default */.Z, {
                                            className: "w-8 h-8 text-purple-200"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                                className: "p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-orange-100",
                                                    children: "Active Zones"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    className: "text-2xl font-bold",
                                                    children: analyticsData.zoneStats.length
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(map_pin/* default */.Z, {
                                            className: "w-8 h-8 text-orange-200"
                                        })
                                    ]
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

/***/ 1169:
/***/ ((module) => {

module.exports = require("class-variance-authority");

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
var __webpack_exports__ = __webpack_require__.X(0, [259,624,855,325,695,706], () => (__webpack_exec__(2266)));
module.exports = __webpack_exports__;

})();