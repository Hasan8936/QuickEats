(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
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

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

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

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 9794:
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
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2838)), "C:\\Users\\hasan\\Downloads\\Quickeats\\app\\page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2320)), "C:\\Users\\hasan\\Downloads\\Quickeats\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["C:\\Users\\hasan\\Downloads\\Quickeats\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
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

/***/ 9170:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5305))

/***/ }),

/***/ 8123:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 5305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ErrorBoundary: () => (/* binding */ ErrorBoundary)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs + 1 modules
var dist = __webpack_require__(6637);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(1971);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(566);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(9610);
;// CONCATENATED MODULE: ./lib/utils.ts


function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx/* clsx */.W)(inputs));
}

;// CONCATENATED MODULE: ./Components/ui/button.tsx





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


;// CONCATENATED MODULE: ./Components/ErrorBoundary.tsx
/* __next_internal_client_entry_do_not_use__ ErrorBoundary auto */ 


class ErrorBoundary extends (react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Error caught by boundary:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-50",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl font-bold text-red-600 mb-4",
                            children: "Oops! Something went wrong"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: this.state.error?.message || "An unexpected error occurred"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                            onClick: ()=>{
                                this.setState({
                                    hasError: false
                                });
                                window.location.reload();
                            },
                            children: "Try again"
                        })
                    ]
                })
            });
        }
        return this.props.children;
    }
}


/***/ }),

/***/ 2320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(2411);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./Components/ErrorBoundary.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hasan\Downloads\Quickeats\Components\ErrorBoundary.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ErrorBoundary"];

;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: {
        default: "QuickEats",
        template: "%s | QuickEats"
    },
    description: "Fast and reliable food delivery platform",
    keywords: [
        "food delivery",
        "quick delivery",
        "restaurants",
        "food ordering"
    ],
    authors: [
        {
            name: "QuickEats Team"
        }
    ],
    creator: "QuickEats",
    publisher: "QuickEats",
    robots: {
        index: true,
        follow: true
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://quickeats.com",
        siteName: "QuickEats",
        title: "QuickEats - Fast and Reliable Food Delivery",
        description: "Fast and reliable food delivery platform",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "QuickEats"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "QuickEats",
        description: "Fast and reliable food delivery platform",
        images: [
            "/og-image.png"
        ]
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ 2838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Home() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: "Welcome to QuickEats"
        })
    });
}


/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,973], () => (__webpack_exec__(9794)));
module.exports = __webpack_exports__;

})();