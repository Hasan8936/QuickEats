"use strict";
(() => {
var exports = {};
exports.id = 469;
exports.ids = [469,888,660];
exports.modules = {

/***/ 5451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2FSurgeControl_preferredRegion_absolutePagePath_private_next_pages_2FSurgeControl_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
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

// NAMESPACE OBJECT: ./pages/SurgeControl.tsx
var SurgeControl_namespaceObject = {};
__webpack_require__.r(SurgeControl_namespaceObject);
__webpack_require__.d(SurgeControl_namespaceObject, {
  "default": () => (SurgeControl)
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
;// CONCATENATED MODULE: ./Entities/Order.json
/* harmony default export */ const Order = ({orders:[{id:'ORD001',customer_name:'Alice Smith',customer_phone:'+1234567890',status:'pending',delivery_zone:'Downtown',items:[{name:'Burger',quantity:2,price:12.99}],total_amount:25.98,surge_multiplier:1}]});
;// CONCATENATED MODULE: ./Entities/DeliveryPartner.json
/* harmony default export */ const DeliveryPartner = ({deliveryPartners:[{id:'DP001',name:'John Doe',phone:'+1234567890',vehicle_type:'bike',current_location:'Downtown',status:'available',active_orders:0,rating:4.5}]});
;// CONCATENATED MODULE: ./Entities/Location.json
/* harmony default export */ const Location = ({zones:[{id:'ZONE001',name:'Downtown',coordinates:{lat:40.7128,lng:-74.006}}]});
;// CONCATENATED MODULE: ./Entities/SurgePolicy.json
/* harmony default export */ const SurgePolicy = ({policies:[{id:'SP001',zone_name:'Downtown',demand_threshold_low:1.2,demand_threshold_high:2,supply_threshold_low:0.5,max_surge_multiplier:2,active:true},{id:'SP002',zone_name:'Suburbs',demand_threshold_low:1.1,demand_threshold_high:1.8,supply_threshold_low:0.6,max_surge_multiplier:1.8,active:true},{id:'SP003',zone_name:'Business District',demand_threshold_low:1.3,demand_threshold_high:2.2,supply_threshold_low:0.4,max_surge_multiplier:2.2,active:true}]});
;// CONCATENATED MODULE: ./lib/data.ts




// Type safe data exports
const orders = (/* unused pure expression or super */ null && (ordersData));
const partners = (/* unused pure expression or super */ null && (partnersData));
const locations = (/* unused pure expression or super */ null && (locationsData));
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

;// CONCATENATED MODULE: external "clsx"
const external_clsx_namespaceObject = require("clsx");
;// CONCATENATED MODULE: external "tailwind-merge"
const external_tailwind_merge_namespaceObject = require("tailwind-merge");
;// CONCATENATED MODULE: ./lib/utils.ts


function cn(...inputs) {
    return (0,external_tailwind_merge_namespaceObject.twMerge)((0,external_clsx_namespaceObject.clsx)(inputs));
}

;// CONCATENATED MODULE: ./components/ui/card.tsx



const Card = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        ref: ref,
        className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        ref: ref,
        className: cn("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx("h3", {
        ref: ref,
        className: cn("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx("p", {
        ref: ref,
        className: cn("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        ref: ref,
        className: cn("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        ref: ref,
        className: cn("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";


;// CONCATENATED MODULE: external "@radix-ui/react-slot"
const react_slot_namespaceObject = require("@radix-ui/react-slot");
;// CONCATENATED MODULE: external "class-variance-authority"
const external_class_variance_authority_namespaceObject = require("class-variance-authority");
;// CONCATENATED MODULE: ./components/ui/button.tsx





const buttonVariants = (0,external_class_variance_authority_namespaceObject.cva)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary"
        },
        size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-3 rounded-md",
            lg: "h-11 px-8 rounded-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ external_react_.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? react_slot_namespaceObject.Slot : "button";
    return /*#__PURE__*/ jsx_runtime.jsx(Comp, {
        className: cn(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


;// CONCATENATED MODULE: ./components/ui/input.tsx



const Input = /*#__PURE__*/ external_react_.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("input", {
        type: type,
        className: cn("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


;// CONCATENATED MODULE: external "@radix-ui/react-label"
const react_label_namespaceObject = require("@radix-ui/react-label");
;// CONCATENATED MODULE: ./components/ui/label.tsx




const Label = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx(react_label_namespaceObject.Root, {
        ref: ref,
        className: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
        ...props
    }));
Label.displayName = react_label_namespaceObject.Root.displayName;


;// CONCATENATED MODULE: ./components/ui/badge.tsx




const badgeVariants = (0,external_class_variance_authority_namespaceObject.cva)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: cn(badgeVariants({
            variant
        }), className),
        ...props
    });
}


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(9525);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shopping-bag.js
var shopping_bag = __webpack_require__(4349);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(1408);
;// CONCATENATED MODULE: ./components/surge/SurgePolicyCard.tsx










function SurgePolicyCard({ policy, realTimeData, onUpdate }) {
    const [isEditing, setIsEditing] = (0,external_react_.useState)(false);
    const [editData, setEditData] = (0,external_react_.useState)({
        demand_threshold_low: policy.demand_threshold_low,
        demand_threshold_high: policy.demand_threshold_high,
        supply_threshold_low: policy.supply_threshold_low,
        max_surge_multiplier: policy.max_surge_multiplier
    });
    const handleSave = async ()=>{
        await onUpdate(editData);
        setIsEditing(false);
    };
    const getSurgeColor = (surge)=>{
        if (surge >= 2.0) return "bg-red-500 text-white";
        if (surge >= 1.5) return "bg-orange-500 text-white";
        if (surge >= 1.2) return "bg-yellow-500 text-white";
        return "bg-green-500 text-white";
    };
    const getDemandColor = (level)=>{
        switch(level){
            case "high":
                return "bg-red-100 text-red-800";
            case "medium":
                return "bg-yellow-100 text-yellow-800";
            case "low":
                return "bg-green-100 text-green-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(Card, {
        className: "border hover:shadow-md transition-shadow",
        children: /*#__PURE__*/ jsx_runtime.jsx(CardContent, {
            className: "p-6",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "text-xl font-bold",
                                        children: policy.zone_name
                                    }),
                                    realTimeData && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Badge, {
                                                className: getDemandColor(realTimeData.demandLevel),
                                                children: [
                                                    realTimeData.demandLevel,
                                                    " demand"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Badge, {
                                                className: getSurgeColor(realTimeData.currentSurge),
                                                children: [
                                                    realTimeData.currentSurge,
                                                    "x surge"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>setIsEditing(!isEditing),
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(settings/* default */.Z, {
                                        className: "w-4 h-4 mr-2"
                                    }),
                                    isEditing ? "Cancel" : "Edit"
                                ]
                            })
                        ]
                    }),
                    realTimeData && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(shopping_bag/* default */.Z, {
                                        className: "w-4 h-4 text-orange-500"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Active Orders"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "font-bold",
                                                children: realTimeData.activeOrders
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(users/* default */.Z, {
                                        className: "w-4 h-4 text-green-500"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Available Partners"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "font-bold",
                                                children: realTimeData.availablePartners
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    isEditing ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-4 p-4 border rounded-lg bg-blue-50",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(Label, {
                                                htmlFor: `low-${policy.id}`,
                                                children: "Low Demand Threshold"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Input, {
                                                id: `low-${policy.id}`,
                                                type: "number",
                                                min: "0",
                                                value: editData.demand_threshold_low,
                                                onChange: (e)=>setEditData((prev)=>({
                                                            ...prev,
                                                            demand_threshold_low: parseInt(e.target.value)
                                                        }))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(Label, {
                                                htmlFor: `high-${policy.id}`,
                                                children: "High Demand Threshold"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Input, {
                                                id: `high-${policy.id}`,
                                                type: "number",
                                                min: "0",
                                                value: editData.demand_threshold_high,
                                                onChange: (e)=>setEditData((prev)=>({
                                                            ...prev,
                                                            demand_threshold_high: parseInt(e.target.value)
                                                        }))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(Label, {
                                                htmlFor: `supply-${policy.id}`,
                                                children: "Supply Threshold"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Input, {
                                                id: `supply-${policy.id}`,
                                                type: "number",
                                                min: "0",
                                                value: editData.supply_threshold_low,
                                                onChange: (e)=>setEditData((prev)=>({
                                                            ...prev,
                                                            supply_threshold_low: parseInt(e.target.value)
                                                        }))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx(Label, {
                                                htmlFor: `max-${policy.id}`,
                                                children: "Max Surge Multiplier"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Input, {
                                                id: `max-${policy.id}`,
                                                type: "number",
                                                min: "1",
                                                max: "5",
                                                step: "0.1",
                                                value: editData.max_surge_multiplier,
                                                onChange: (e)=>setEditData((prev)=>({
                                                            ...prev,
                                                            max_surge_multiplier: parseFloat(e.target.value)
                                                        }))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(Button, {
                                        onClick: handleSave,
                                        className: "bg-blue-500 hover:bg-blue-600",
                                        children: "Save Changes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(Button, {
                                        variant: "outline",
                                        onClick: ()=>setIsEditing(false),
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    }) : null
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-up.js
var trending_up = __webpack_require__(9858);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/alert-triangle.js
var alert_triangle = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/surge/PricingControls.tsx







function PricingControls({ policies, realTimeData, onPolicyUpdate }) {
    const getHighSurgeZones = ()=>{
        return Object.entries(realTimeData).filter(([zone, data])=>data.currentSurge >= 2.0);
    };
    const emergencyReset = async (policyId)=>{
        await onPolicyUpdate(policyId, {
            max_surge_multiplier: 1.5,
            demand_threshold_high: 20
        });
    };
    const highSurgeZones = getHighSurgeZones();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(CardHeader, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardTitle, {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(trending_up/* default */.Z, {
                            className: "w-5 h-5 text-purple-500"
                        }),
                        "Quick Controls"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CardContent, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        highSurgeZones.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "p-3 bg-red-50 border border-red-200 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(alert_triangle/* default */.Z, {
                                            className: "w-4 h-4 text-red-500"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "text-sm font-medium text-red-700",
                                            children: "High Surge Alert"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "space-y-2",
                                    children: highSurgeZones.map(([zone, data])=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-sm",
                                                    children: zone
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Badge, {
                                                    className: "bg-red-500 text-white",
                                                    children: [
                                                        data.currentSurge,
                                                        "x"
                                                    ]
                                                })
                                            ]
                                        }, zone))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    className: "font-medium text-sm",
                                    children: "Zone Status"
                                }),
                                Object.entries(realTimeData).map(([zone, data])=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex justify-between items-center p-2 bg-gray-50 rounded",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-sm",
                                                children: zone
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx(Badge, {
                                                        variant: "outline",
                                                        className: data.demandLevel === "high" ? "border-red-500 text-red-700" : data.demandLevel === "medium" ? "border-yellow-500 text-yellow-700" : "border-green-500 text-green-700",
                                                        children: data.demandLevel
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "text-sm font-medium",
                                                        children: [
                                                            data.currentSurge,
                                                            "x"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, zone))
                            ]
                        }),
                        highSurgeZones.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    className: "font-medium text-sm",
                                    children: "Emergency Controls"
                                }),
                                highSurgeZones.map(([zone, data])=>{
                                    const policy = policies.find((p)=>p.zone_name === zone);
                                    return policy ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "w-full text-red-600 border-red-200 hover:bg-red-50",
                                        onClick: ()=>emergencyReset(policy.id),
                                        children: [
                                            "Reset ",
                                            zone,
                                            " Surge"
                                        ]
                                    }, zone) : null;
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "p-3 bg-blue-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                    className: "font-medium text-sm mb-2",
                                    children: "Global Statistics"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-1 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Total Active Zones"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: Object.keys(realTimeData).length
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Average Surge"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        Object.values(realTimeData).length > 0 ? (Object.values(realTimeData).reduce((sum, data)=>sum + data.currentSurge, 0) / Object.values(realTimeData).length).toFixed(2) : "1.00",
                                                        "x"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "High Surge Zones"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: highSurgeZones.length
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: external "@radix-ui/react-select"
const react_select_namespaceObject = require("@radix-ui/react-select");
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(3742);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(8971);
;// CONCATENATED MODULE: ./components/ui/select.tsx






const Select = react_select_namespaceObject.Root;
const SelectGroup = react_select_namespaceObject.Group;
const SelectValue = react_select_namespaceObject.Value;
const SelectTrigger = /*#__PURE__*/ external_react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react_select_namespaceObject.Trigger, {
        ref: ref,
        className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime.jsx(chevron_down/* default */.Z, {
                className: "h-4 w-4 opacity-50"
            })
        ]
    }));
SelectTrigger.displayName = react_select_namespaceObject.Trigger.displayName;
const SelectContent = /*#__PURE__*/ external_react_.forwardRef(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx(react_select_namespaceObject.Portal, {
        children: /*#__PURE__*/ jsx_runtime.jsx(react_select_namespaceObject.Content, {
            ref: ref,
            className: cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: /*#__PURE__*/ jsx_runtime.jsx(react_select_namespaceObject.Viewport, {
                className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                children: children
            })
        })
    }));
SelectContent.displayName = react_select_namespaceObject.Content.displayName;
const SelectLabel = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx(react_select_namespaceObject.Label, {
        ref: ref,
        className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }));
SelectLabel.displayName = react_select_namespaceObject.Label.displayName;
const SelectItem = /*#__PURE__*/ external_react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react_select_namespaceObject.Item, {
        ref: ref,
        className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime.jsx(react_select_namespaceObject.ItemIndicator, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(check/* default */.Z, {
                        className: "h-4 w-4"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(react_select_namespaceObject.ItemText, {
                children: children
            })
        ]
    }));
SelectItem.displayName = react_select_namespaceObject.Item.displayName;
const SelectSeparator = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx(react_select_namespaceObject.Separator, {
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
SelectSeparator.displayName = react_select_namespaceObject.Separator.displayName;


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(9461);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-2.js
var loader_2 = __webpack_require__(3217);
;// CONCATENATED MODULE: ./components/surge/SimulateDemand.tsx









function SimulateDemand({ locations, onSimulate, isSimulating }) {
    const [selectedZone, setSelectedZone] = (0,external_react_.useState)("");
    const [orderCount, setOrderCount] = (0,external_react_.useState)(10);
    const handleSimulate = ()=>{
        if (selectedZone && orderCount > 0) {
            onSimulate(selectedZone, orderCount);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(CardHeader, {
                className: "bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardTitle, {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                            className: "w-5 h-5"
                        }),
                        "Demand Spike Simulator"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(CardContent, {
                className: "p-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(Label, {
                                    children: "Select Zone"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select, {
                                    value: selectedZone,
                                    onValueChange: setSelectedZone,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(SelectTrigger, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx(SelectValue, {
                                                placeholder: "Choose a zone"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(SelectContent, {
                                            children: locations.map((location)=>/*#__PURE__*/ jsx_runtime.jsx(SelectItem, {
                                                    value: location.name,
                                                    children: location.name
                                                }, location.id))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(Label, {
                                    htmlFor: "order-count",
                                    children: "Number of Orders"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(Input, {
                                    id: "order-count",
                                    type: "number",
                                    min: "1",
                                    max: "50",
                                    value: orderCount,
                                    onChange: (e)=>setOrderCount(parseInt(e.target.value))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(Button, {
                            onClick: handleSimulate,
                            disabled: !selectedZone || orderCount <= 0 || isSimulating,
                            className: "w-full bg-orange-500 hover:bg-orange-600",
                            children: isSimulating ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(loader_2/* default */.Z, {
                                        className: "w-4 h-4 mr-2 animate-spin"
                                    }),
                                    "Simulating..."
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                                        className: "w-4 h-4 mr-2"
                                    }),
                                    "Simulate Demand Spike"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-xs text-gray-500 space-y-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "• Creates dummy orders in selected zone"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "• Watch surge pricing respond in real-time"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: '• Orders will be marked as "confirmed"'
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/SurgeControl.tsx






function SurgeControl() {
    const policies = getAllSurgePolicies();
    const realTimeData = policies.map((policy)=>({
            zoneId: policy.id,
            demandLevel: [
                "low",
                "medium",
                "high"
            ][Math.floor(Math.random() * 3)],
            currentSurge: Number((1 + Math.random()).toFixed(1)),
            activeOrders: Math.floor(Math.random() * 20),
            availablePartners: Math.floor(Math.random() * 10)
        }));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Surge Control"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "space-y-6",
                        children: policies.map((policy, index)=>/*#__PURE__*/ jsx_runtime.jsx(SurgePolicyCard, {
                                policy: policy,
                                realTimeData: realTimeData[index],
                                onUpdate: async ()=>{}
                            }, policy.id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(PricingControls, {
                                policies: policies,
                                realTimeData: realTimeData.reduce((acc, data)=>({
                                        ...acc,
                                        [data.zoneId]: {
                                            demandLevel: data.demandLevel,
                                            currentSurge: data.currentSurge
                                        }
                                    }), {}),
                                onPolicyUpdate: async (policyId, update)=>{
                                    console.log("Policy update:", policyId, update);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(SimulateDemand, {
                                locations: [
                                    {
                                        id: "1",
                                        name: "Downtown",
                                        zone: "downtown",
                                        lat: 0,
                                        lng: 0
                                    },
                                    {
                                        id: "2",
                                        name: "Suburbs",
                                        zone: "suburbs",
                                        lat: 0,
                                        lng: 0
                                    }
                                ],
                                onSimulate: (zone, count)=>{
                                    console.log("Simulating demand:", zone, count);
                                },
                                isSimulating: false
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2FSurgeControl&preferredRegion=&absolutePagePath=private-next-pages%2FSurgeControl.tsx&absoluteAppPath=next%2Fdist%2Fpages%2F_app&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2FSurgeControl_preferredRegion_absolutePagePath_private_next_pages_2FSurgeControl_tsx_absoluteAppPath_next_2Fdist_2Fpages_2F_app_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "default"));
// Re-export methods.
const getStaticProps = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "getStaticProps");
const getStaticPaths = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(SurgeControl_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/SurgeControl",
        pathname: "/SurgeControl",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: (_app_default()),
        Document: (_document_default())
    },
    userland: SurgeControl_namespaceObject
});

//# sourceMappingURL=pages.js.map

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [259,624,855,412], () => (__webpack_exec__(5451)));
module.exports = __webpack_exports__;

})();