(() => {
var exports = {};
exports.id = 6;
exports.ids = [6];
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

/***/ 1749:
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
        'surge-control',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3176)), "C:\\Users\\hasan\\Downloads\\Quickeats\\app\\surge-control\\page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "C:\\Users\\hasan\\Downloads\\Quickeats\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["C:\\Users\\hasan\\Downloads\\Quickeats\\app\\surge-control\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/surge-control/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/surge-control/page",
        pathname: "/surge-control",
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

/***/ 2459:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5781))

/***/ }),

/***/ 5781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SurgeControl)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(737);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var dist = __webpack_require__(1085);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(1971);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(2857);
;// CONCATENATED MODULE: ./components/ui/button.tsx





const buttonVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background", {
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
const Button = /*#__PURE__*/ react_.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ jsx_runtime_.jsx(Comp, {
        className: (0,utils.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


;// CONCATENATED MODULE: ./components/ui/badge.tsx




const badgeVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-up.js
var trending_up = __webpack_require__(7);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/alert-triangle.js
var alert_triangle = __webpack_require__(4409);
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(card/* CardHeader */.Ol, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* CardTitle */.ll, {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(trending_up/* default */.Z, {
                            className: "w-5 h-5 text-purple-500"
                        }),
                        "Quick Controls"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        highSurgeZones.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "p-3 bg-red-50 border border-red-200 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(alert_triangle/* default */.Z, {
                                            className: "w-4 h-4 text-red-500"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-sm font-medium text-red-700",
                                            children: "High Surge Alert"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "space-y-2",
                                    children: highSurgeZones.map(([zone, data])=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-sm",
                                                    children: zone
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Badge, {
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "font-medium text-sm",
                                    children: "Zone Status"
                                }),
                                Object.entries(realTimeData).map(([zone, data])=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex justify-between items-center p-2 bg-gray-50 rounded",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-sm",
                                                children: zone
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                                        variant: "outline",
                                                        className: data.demandLevel === "high" ? "border-red-500 text-red-700" : data.demandLevel === "medium" ? "border-yellow-500 text-yellow-700" : "border-green-500 text-green-700",
                                                        children: data.demandLevel
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
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
                        highSurgeZones.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "font-medium text-sm",
                                    children: "Emergency Controls"
                                }),
                                highSurgeZones.map(([zone, data])=>{
                                    const policy = policies.find((p)=>p.zone_name === zone);
                                    return policy ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "p-3 bg-blue-50 rounded-lg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: "font-medium text-sm mb-2",
                                    children: "Global Statistics"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "space-y-1 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Total Active Zones"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: Object.keys(realTimeData).length
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Average Surge"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    children: [
                                                        Object.values(realTimeData).length > 0 ? (Object.values(realTimeData).reduce((sum, data)=>sum + data.currentSurge, 0) / Object.values(realTimeData).length).toFixed(2) : "1.00",
                                                        "x"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "High Surge Zones"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
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

;// CONCATENATED MODULE: ./components/ui/input.tsx



const Input = /*#__PURE__*/ react_.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: type,
        className: (0,utils.cn)("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-label/dist/index.mjs
var react_label_dist = __webpack_require__(3618);
;// CONCATENATED MODULE: ./components/ui/label.tsx




const Label = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_label_dist/* Root */.f, {
        ref: ref,
        className: (0,utils.cn)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
        ...props
    }));
Label.displayName = react_label_dist/* Root */.f.displayName;


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-select/dist/index.mjs + 24 modules
var react_select_dist = __webpack_require__(7946);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.js
var check = __webpack_require__(1264);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(9458);
;// CONCATENATED MODULE: ./components/ui/select.tsx






const Select = react_select_dist/* Root */.fC;
const SelectGroup = react_select_dist/* Group */.ZA;
const SelectValue = react_select_dist/* Value */.B4;
const SelectTrigger = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_select_dist/* Trigger */.xz, {
        ref: ref,
        className: (0,utils.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(chevron_down/* default */.Z, {
                className: "h-4 w-4 opacity-50"
            })
        ]
    }));
SelectTrigger.displayName = react_select_dist/* Trigger */.xz.displayName;
const SelectContent = /*#__PURE__*/ react_.forwardRef(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Portal */.h_, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Content */.VY, {
            ref: ref,
            className: (0,utils.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Viewport */.l_, {
                className: (0,utils.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                children: children
            })
        })
    }));
SelectContent.displayName = react_select_dist/* Content */.VY.displayName;
const SelectLabel = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Label */.__, {
        ref: ref,
        className: (0,utils.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }));
SelectLabel.displayName = react_select_dist/* Label */.__.displayName;
const SelectItem = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_select_dist/* Item */.ck, {
        ref: ref,
        className: (0,utils.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* ItemIndicator */.wU, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(check/* default */.Z, {
                        className: "h-4 w-4"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* ItemText */.eT, {
                children: children
            })
        ]
    }));
SelectItem.displayName = react_select_dist/* Item */.ck.displayName;
const SelectSeparator = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_select_dist/* Separator */.Z0, {
        ref: ref,
        className: (0,utils.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
SelectSeparator.displayName = react_select_dist/* Separator */.Z0.displayName;


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(6494);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-2.js
var loader_2 = __webpack_require__(87);
;// CONCATENATED MODULE: ./components/surge/SimulateDemand.tsx









function SimulateDemand({ locations, onSimulate, isSimulating }) {
    const [selectedZone, setSelectedZone] = (0,react_.useState)("");
    const [orderCount, setOrderCount] = (0,react_.useState)(10);
    const handleSimulate = ()=>{
        if (selectedZone && orderCount > 0) {
            onSimulate(selectedZone, orderCount);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
        className: "shadow-lg border-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(card/* CardHeader */.Ol, {
                className: "bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* CardTitle */.ll, {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(zap/* default */.Z, {
                            className: "w-5 h-5"
                        }),
                        "Demand Spike Simulator"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
                className: "p-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                    children: "Select Zone"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Select, {
                                    value: selectedZone,
                                    onValueChange: setSelectedZone,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(SelectTrigger, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(SelectValue, {
                                                placeholder: "Choose a zone"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(SelectContent, {
                                            children: locations.map((location)=>/*#__PURE__*/ jsx_runtime_.jsx(SelectItem, {
                                                    value: location.name,
                                                    children: location.name
                                                }, location.id))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                    htmlFor: "order-count",
                                    children: "Number of Orders"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                    id: "order-count",
                                    type: "number",
                                    min: "1",
                                    max: "50",
                                    value: orderCount,
                                    onChange: (e)=>setOrderCount(parseInt(e.target.value))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                            onClick: handleSimulate,
                            disabled: !selectedZone || orderCount <= 0 || isSimulating,
                            className: "w-full bg-orange-500 hover:bg-orange-600",
                            children: isSimulating ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(loader_2/* default */.Z, {
                                        className: "w-4 h-4 mr-2 animate-spin"
                                    }),
                                    "Simulating..."
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(zap/* default */.Z, {
                                        className: "w-4 h-4 mr-2"
                                    }),
                                    "Simulate Demand Spike"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-xs text-gray-500 space-y-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "• Creates dummy orders in selected zone"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "• Watch surge pricing respond in real-time"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
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

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(1672);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shopping-bag.js
var shopping_bag = __webpack_require__(4478);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/settings.js
var settings = __webpack_require__(5987);
;// CONCATENATED MODULE: ./components/surge/SurgePolicyCard.tsx










function SurgePolicyCard({ policy, realTimeData, onUpdate }) {
    const [isEditing, setIsEditing] = (0,react_.useState)(false);
    const [editData, setEditData] = (0,react_.useState)({
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
    return /*#__PURE__*/ jsx_runtime_.jsx(card/* Card */.Zb, {
        className: "border hover:shadow-md transition-shadow",
        children: /*#__PURE__*/ jsx_runtime_.jsx(card/* CardContent */.aY, {
            className: "p-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-xl font-bold",
                                        children: policy.zone_name
                                    }),
                                    realTimeData && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center gap-2 mt-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Badge, {
                                                className: getDemandColor(realTimeData.demandLevel),
                                                children: [
                                                    realTimeData.demandLevel,
                                                    " demand"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Badge, {
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>setIsEditing(!isEditing),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(settings/* default */.Z, {
                                        className: "w-4 h-4 mr-2"
                                    }),
                                    isEditing ? "Cancel" : "Edit"
                                ]
                            })
                        ]
                    }),
                    realTimeData && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(shopping_bag/* default */.Z, {
                                        className: "w-4 h-4 text-orange-500"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Active Orders"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-bold",
                                                children: realTimeData.activeOrders
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(users/* default */.Z, {
                                        className: "w-4 h-4 text-green-500"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Available Partners"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-bold",
                                                children: realTimeData.availablePartners
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    isEditing ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-y-4 p-4 border rounded-lg bg-blue-50",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                htmlFor: `low-${policy.id}`,
                                                children: "Low Demand Threshold"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
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
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                htmlFor: `high-${policy.id}`,
                                                children: "High Demand Threshold"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
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
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                htmlFor: `supply-${policy.id}`,
                                                children: "Supply Threshold"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
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
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Label, {
                                                htmlFor: `max-${policy.id}`,
                                                children: "Max Surge Multiplier"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
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
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        onClick: handleSave,
                                        className: "bg-blue-500 hover:bg-blue-600",
                                        children: "Save Changes"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
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

;// CONCATENATED MODULE: ./app/surge-control/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function SurgeControl() {
    const policies = [
        {
            id: "SP001",
            zone_name: "Downtown",
            demand_threshold_low: 1.2,
            demand_threshold_high: 2.0,
            supply_threshold_low: 0.5,
            max_surge_multiplier: 2.0,
            active: true
        }
    ];
    const realTimeData = {
        "SP001": {
            demandLevel: "medium",
            currentSurge: 1.2,
            activeOrders: 15,
            availablePartners: 8
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-3xl font-bold",
                children: "Surge Pricing Control"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Current Policies"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "space-y-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(SurgePolicyCard, {
                                    policy: policies[0],
                                    realTimeData: realTimeData["SP001"],
                                    onUpdate: async (data)=>{
                                        console.log("Updating policy:", data);
                                        return Promise.resolve();
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Price Controls"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(PricingControls, {
                                policies: policies,
                                realTimeData: realTimeData,
                                onPolicyUpdate: async (policyId, update)=>{
                                    console.log("Updating policy:", policyId, update);
                                    return Promise.resolve();
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(card/* Card */.Zb, {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Demand Simulation"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SimulateDemand, {
                                locations: [
                                    {
                                        id: "ZONE001",
                                        name: "Downtown",
                                        zone: "Central",
                                        coordinates: {
                                            lat: 40.7128,
                                            lng: -74.0060
                                        }
                                    }
                                ],
                                onSimulate: async (locations, duration)=>{
                                    console.log("Simulating demand:", locations, duration);
                                    return Promise.resolve();
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


/***/ }),

/***/ 3176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\hasan\Downloads\Quickeats\app\surge-control\page.tsx`)

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
var __webpack_exports__ = __webpack_require__.X(0, [478,1,584,586,229,737], () => (__webpack_exec__(1749)));
module.exports = __webpack_exports__;

})();