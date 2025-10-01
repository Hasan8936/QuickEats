"use strict";
(() => {
var exports = {};
exports.id = 469;
exports.ids = [469,888,660];
exports.modules = {

/***/ 7983:
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
// EXTERNAL MODULE: ./lib/data.ts + 4 modules
var data = __webpack_require__(1849);
// EXTERNAL MODULE: ./Components/ui/card.tsx
var card = __webpack_require__(3451);
// EXTERNAL MODULE: ./Components/ui/button.tsx
var ui_button = __webpack_require__(8125);
// EXTERNAL MODULE: ./Components/ui/input.tsx
var input = __webpack_require__(6817);
// EXTERNAL MODULE: ./Components/ui/label.tsx
var label = __webpack_require__(474);
// EXTERNAL MODULE: ./Components/ui/badge.tsx
var badge = __webpack_require__(6115);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(9525);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shopping-bag.js
var shopping_bag = __webpack_require__(4349);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(1408);
;// CONCATENATED MODULE: ./Components/surge/SurgePolicyCard.tsx










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
    return /*#__PURE__*/ jsx_runtime.jsx(card/* Card */.Zb, {
        className: "border hover:shadow-md transition-shadow",
        children: /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
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
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
                                                className: getDemandColor(realTimeData.demandLevel),
                                                children: [
                                                    realTimeData.demandLevel,
                                                    " demand"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
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
                                            /*#__PURE__*/ jsx_runtime.jsx(label/* Label */._, {
                                                htmlFor: `low-${policy.id}`,
                                                children: "Low Demand Threshold"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(input/* Input */.I, {
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
                                            /*#__PURE__*/ jsx_runtime.jsx(label/* Label */._, {
                                                htmlFor: `high-${policy.id}`,
                                                children: "High Demand Threshold"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(input/* Input */.I, {
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
                                            /*#__PURE__*/ jsx_runtime.jsx(label/* Label */._, {
                                                htmlFor: `supply-${policy.id}`,
                                                children: "Supply Threshold"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(input/* Input */.I, {
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
                                            /*#__PURE__*/ jsx_runtime.jsx(label/* Label */._, {
                                                htmlFor: `max-${policy.id}`,
                                                children: "Max Surge Multiplier"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(input/* Input */.I, {
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
                                    /*#__PURE__*/ jsx_runtime.jsx(ui_button/* Button */.z, {
                                        onClick: handleSave,
                                        className: "bg-blue-500 hover:bg-blue-600",
                                        children: "Save Changes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(ui_button/* Button */.z, {
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
;// CONCATENATED MODULE: ./Components/surge/PricingControls.tsx







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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(trending_up/* default */.Z, {
                            className: "w-5 h-5 text-purple-500"
                        }),
                        "Quick Controls"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
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
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
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
                                                    /*#__PURE__*/ jsx_runtime.jsx(badge/* Badge */.C, {
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
                                    const policy = policies.find((p)=>p.name === zone);
                                    return policy ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
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
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(4869);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(3742);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(8971);
;// CONCATENATED MODULE: ./Components/ui/select.tsx






const Select = react_select_namespaceObject.Root;
const SelectGroup = react_select_namespaceObject.Group;
const SelectValue = react_select_namespaceObject.Value;
const SelectTrigger = /*#__PURE__*/ external_react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react_select_namespaceObject.Trigger, {
        ref: ref,
        className: (0,utils.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
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
            className: (0,utils.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: /*#__PURE__*/ jsx_runtime.jsx(react_select_namespaceObject.Viewport, {
                className: (0,utils.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                children: children
            })
        })
    }));
SelectContent.displayName = react_select_namespaceObject.Content.displayName;
const SelectLabel = /*#__PURE__*/ external_react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime.jsx(react_select_namespaceObject.Label, {
        ref: ref,
        className: (0,utils.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }));
SelectLabel.displayName = react_select_namespaceObject.Label.displayName;
const SelectItem = /*#__PURE__*/ external_react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react_select_namespaceObject.Item, {
        ref: ref,
        className: (0,utils.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
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
        className: (0,utils.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
SelectSeparator.displayName = react_select_namespaceObject.Separator.displayName;


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(9461);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-2.js
var loader_2 = __webpack_require__(3217);
;// CONCATENATED MODULE: ./Components/surge/SimulateDemand.tsx









function SimulateDemand({ locations, onSimulate, isSimulating }) {
    const [selectedZone, setSelectedZone] = (0,external_react_.useState)("");
    const [orderCount, setOrderCount] = (0,external_react_.useState)(10);
    const handleSimulate = ()=>{
        if (selectedZone && orderCount > 0) {
            onSimulate(selectedZone, orderCount);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(card/* CardHeader */.Ol, {
                className: "bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(zap/* default */.Z, {
                            className: "w-5 h-5"
                        }),
                        "Demand Spike Simulator"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(card/* CardContent */.aY, {
                className: "p-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(label/* Label */._, {
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
                                /*#__PURE__*/ jsx_runtime.jsx(label/* Label */._, {
                                    htmlFor: "order-count",
                                    children: "Number of Orders"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(input/* Input */.I, {
                                    id: "order-count",
                                    type: "number",
                                    min: "1",
                                    max: "50",
                                    value: orderCount,
                                    onChange: (e)=>setOrderCount(parseInt(e.target.value))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(ui_button/* Button */.z, {
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
    const policies = (0,data/* getAllSurgePolicies */.xW)();
    // Simulated real-time data for each zone
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
                                onUpdate: async ()=>{
                                // Handle policy update
                                }
                            }, policy.id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(PricingControls, {}),
                            /*#__PURE__*/ jsx_runtime.jsx(SimulateDemand, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [259,624,855,893,297,916,444,676,255], () => (__webpack_exec__(7983)));
module.exports = __webpack_exports__;

})();