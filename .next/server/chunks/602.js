exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 48123:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 99942:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86916))

/***/ }),

/***/ 86916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBoundary: () => (/* binding */ ErrorBoundary),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ ErrorBoundary,default auto */ 

class ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, info) {
    // You can log error to an analytics service here
    // console.error('ErrorBoundary caught an error', error, info)
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "min-h-screen flex items-center justify-center bg-gray-50",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white p-8 rounded shadow-md text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-2xl font-semibold mb-2",
                            children: "Something went wrong"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "An unexpected error occurred. Please try refreshing the page."
                        })
                    ]
                })
            });
        }
        return this.props.children;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);


/***/ }),

/***/ 19082:
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
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(92411);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./components/ErrorBoundary.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\hasan\Downloads\Quickeats\components\ErrorBoundary.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ErrorBoundary"];


/* harmony default export */ const ErrorBoundary = ((/* unused pure expression or super */ null && (__default__)));
// EXTERNAL MODULE: ./node_modules/next-auth/next/index.js
var next = __webpack_require__(17185);
// EXTERNAL MODULE: ./lib/nextauth.ts
var nextauth = __webpack_require__(1743);
;// CONCATENATED MODULE: ./lib/auth.ts


async function getSession() {
    return await (0,next.getServerSession)(nextauth/* authOptions */.L);
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
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
    }
};
async function RootLayout({ children }) {
    const session = await getSession();
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "bg-gray-50",
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "min-h-screen",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "bg-white shadow-sm",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex justify-between h-16",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "QuickEats"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex space-x-8",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/orders",
                                                    className: "inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600",
                                                    children: "Orders"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/partners",
                                                    className: "inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600",
                                                    children: "Partners"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/surge-control",
                                                    className: "inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600",
                                                    children: "Surge Control"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/analytics",
                                                    className: "inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600",
                                                    children: "Analytics"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "container mx-auto py-10 px-4",
                            children: !session ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "min-h-screen flex items-center justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "max-w-md w-full p-6 bg-white rounded shadow text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-xl font-semibold mb-2",
                                            children: "Please sign in"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-4",
                                            children: "You must sign in to access QuickEats."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/login",
                                            className: "btn",
                                            children: "Sign in with Google"
                                        })
                                    ]
                                })
                            }) : children
                        })
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 1743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51989);

const authOptions = {
    providers: [
        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    session: {
        strategy: "jwt"
    }
};


/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;