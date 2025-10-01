"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453,888,660];
exports.modules = {

/***/ 6590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FCustomerOrders_preferredRegion_absolutePagePath_private_next_pages_2FCustomerOrders_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/CustomerOrders.tsx
var CustomerOrders_namespaceObject = {};
__webpack_require__.r(CustomerOrders_namespaceObject);
__webpack_require__.d(CustomerOrders_namespaceObject, {
  "default": () => (CustomerOrders)
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
// EXTERNAL MODULE: ./Components/ui/button.tsx
var ui_button = __webpack_require__(8125);
// EXTERNAL MODULE: ./Components/ui/input.tsx
var input = __webpack_require__(6817);
// EXTERNAL MODULE: ./Components/ui/label.tsx
var label = __webpack_require__(474);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(4869);
;// CONCATENATED MODULE: ./Components/ui/textarea.tsx



const Textarea = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("textarea", {
        className: (0,utils.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";


;// CONCATENATED MODULE: external "@radix-ui/react-separator"
const react_separator_namespaceObject = require("@radix-ui/react-separator");
;// CONCATENATED MODULE: ./Components/ui/separator.tsx




const Separator = /*#__PURE__*/ external_react_.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx(react_separator_namespaceObject.Root, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,utils.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }));
Separator.displayName = react_separator_namespaceObject.Root.displayName;


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-2.js
var loader_2 = __webpack_require__(3217);
;// CONCATENATED MODULE: ./Components/orders/OrderForm.tsx








function OrderForm({ selectedLocation, cartItems, subtotal, surgeMultiplier, onPlaceOrder, isLoading }) {
    const [customerData, setCustomerData] = (0,external_react_.useState)({
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Separator, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        className: "font-semibold text-lg",
                        children: "Delivery Details"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(label/* Label */._, {
                                htmlFor: "name",
                                children: "Full Name"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(input/* Input */.I, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(label/* Label */._, {
                                htmlFor: "phone",
                                children: "Phone Number"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(input/* Input */.I, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(label/* Label */._, {
                                htmlFor: "address",
                                children: "Complete Address"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Textarea, {
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
            /*#__PURE__*/ jsx_runtime.jsx(Separator, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                        className: "font-semibold text-lg",
                        children: "Order Summary"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "Subtotal (",
                                            cartItems.length,
                                            " items)"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "₹",
                                            subtotal
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Base Delivery Fee"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "₹",
                                            baseFee
                                        ]
                                    })
                                ]
                            }),
                            surgeMultiplier !== 1.0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between text-orange-600",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "Surge Pricing (",
                                            surgeMultiplier,
                                            "x)"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "₹",
                                            finalDeliveryFee - baseFee
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between font-medium border-t pt-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Final Delivery Fee"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "₹",
                                            finalDeliveryFee
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Separator, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between text-lg font-bold",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                children: "Total Amount"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                children: [
                                    "₹",
                                    totalAmount
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ui_button/* Button */.z, {
                type: "submit",
                className: "w-full bg-orange-500 hover:bg-orange-600 text-lg py-3",
                disabled: isLoading || !customerData.customer_name || !customerData.customer_phone || !customerData.delivery_address,
                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(loader_2/* default */.Z, {
                            className: "w-4 h-4 mr-2 animate-spin"
                        }),
                        "Placing Order..."
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        "Place Order - ₹",
                        totalAmount
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./Components/ui/badge.tsx
var badge = __webpack_require__(6115);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-up.js
var trending_up = __webpack_require__(9858);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-down.js
var trending_down = __webpack_require__(4672);
;// CONCATENATED MODULE: ./Components/orders/SurgeIndicator.tsx





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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
                className: `${getSurgeColor()} ${textSize} flex items-center gap-1`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Icon, {
                        className: iconSize
                    }),
                    getSurgeText()
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: `font-bold ${textSize}`,
                children: [
                    multiplier,
                    "x"
                ]
            }),
            multiplier !== 1.0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
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

// EXTERNAL MODULE: ./Components/ui/card.tsx
var card = __webpack_require__(3451);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(1012);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/star.js
var star = __webpack_require__(9560);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./Components/orders/MenuItems.tsx








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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                className: "bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg",
                children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                    children: "Menu Items"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                className: "p-6",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "space-y-8",
                    children: MENU_ITEMS.map((category, categoryIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "text-xl font-bold text-gray-800 mb-4 border-b pb-2",
                                    children: category.category
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: category.items.map((item, itemIndex)=>/*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
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
                                            children: /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                                                className: "border hover:shadow-md transition-shadow",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                                    className: "p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex justify-between items-start mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                                                            className: "font-semibold flex items-center gap-2",
                                                                            children: [
                                                                                item.name,
                                                                                /*#__PURE__*/ jsx_runtime.jsx(badge/* Badge */.C, {
                                                                                    variant: item.veg ? "secondary" : "destructive",
                                                                                    className: "text-xs",
                                                                                    children: item.veg ? "VEG" : "NON-VEG"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "flex items-center gap-2 mt-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                    className: "flex items-center gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx(star/* default */.Z, {
                                                                                            className: "w-3 h-3 fill-yellow-400 text-yellow-400"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                            className: "text-sm text-gray-600",
                                                                                            children: item.rating
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    className: "text-gray-300",
                                                                                    children: "•"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    className: "text-sm text-gray-600",
                                                                                    children: item.time
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                    className: "text-right",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                        className: "font-bold text-lg text-gray-800",
                                                                        children: [
                                                                            "₹",
                                                                            item.price
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                            className: "w-full bg-orange-500 hover:bg-orange-600",
                                                            onClick: ()=>onAddToCart(item),
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx(plus/* default */.Z, {
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

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(5077);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
var map_pin = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var user = __webpack_require__(4933);
;// CONCATENATED MODULE: ./Components/orders/ActiveOrders.tsx







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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                className: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg",
                children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardTitle */.ll, {
                    children: "Recent Orders"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                className: "p-6",
                children: recentOrders.length === 0 ? /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "text-gray-500 text-center py-8",
                    children: "No orders yet"
                }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: recentOrders.map((order)=>/*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
                            className: "border border-gray-200",
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
                                                /*#__PURE__*/ jsx_runtime.jsx(badge/* Badge */.C, {
                                                    className: STATUS_COLORS[order.status],
                                                    children: order.status?.replace(/_/g, " ")
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
                                                            className: "truncate",
                                                            children: order.delivery_zone
                                                        })
                                                    ]
                                                }),
                                                order.estimated_delivery_time && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                                            className: "flex justify-between items-center pt-2 border-t",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "text-sm text-gray-600",
                                                    children: [
                                                        order.items?.length || 0,
                                                        " items"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "font-bold",
                                                    children: [
                                                        "₹",
                                                        order.total_amount
                                                    ]
                                                })
                                            ]
                                        }),
                                        order.surge_multiplier !== 1.0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
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

;// CONCATENATED MODULE: ./pages/CustomerOrders.tsx







function CustomerOrders() {
    const orders = (0,data/* getAllOrders */.zk)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Customer Orders"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(ActiveOrders, {
                                orders: orders
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(SurgeIndicator, {
                                multiplier: 1.2
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(OrderForm, {
                                selectedLocation: {
                                    base_delivery_fee: 30
                                },
                                cartItems: [],
                                subtotal: 0,
                                surgeMultiplier: 1.2,
                                onPlaceOrder: async ()=>{},
                                isLoading: false
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(MenuItems, {
                                onAddToCart: ()=>{}
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FCustomerOrders&preferredRegion=&absolutePagePath=private-next-pages%2FCustomerOrders.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FCustomerOrders_preferredRegion_absolutePagePath_private_next_pages_2FCustomerOrders_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(CustomerOrders_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/CustomerOrders",
        pathname: "/CustomerOrders",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: CustomerOrders_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 8367:
/***/ ((module) => {

module.exports = require("@radix-ui/react-label");

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
var __webpack_exports__ = __webpack_require__.X(0, [259,624,855,893,297,829,933,444,676,255], () => (__webpack_exec__(6590)));
module.exports = __webpack_exports__;

})();