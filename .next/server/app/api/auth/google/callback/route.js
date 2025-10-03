"use strict";
(() => {
var exports = {};
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 5950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/auth/google/callback/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: external "querystring"
const external_querystring_namespaceObject = require("querystring");
var external_querystring_default = /*#__PURE__*/__webpack_require__.n(external_querystring_namespaceObject);
// EXTERNAL MODULE: ./lib/session.ts
var session = __webpack_require__(7467);
;// CONCATENATED MODULE: ./app/api/auth/google/callback/route.ts



async function GET(req) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    if (!code) return next_response/* default */.Z.redirect("/login");
    const tokenUrl = "https://oauth2.googleapis.com/token";
    const params = {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_NEXTAUTH_URL || ""}/api/auth/google/callback`,
        grant_type: "authorization_code"
    };
    const res = await fetch(tokenUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: external_querystring_default().stringify(params)
    });
    if (!res.ok) return next_response/* default */.Z.redirect("/login");
    const token = await res.json();
    // decode id_token JWT to extract user info
    const idToken = token.id_token;
    let payload = {};
    try {
        const base64 = idToken.split(".")[1];
        const decoded = Buffer.from(base64, "base64").toString("utf8");
        payload = JSON.parse(decoded);
    } catch (e) {
    // ignore
    }
    const sessionJwt = (0,session/* signSession */.B3)({
        sub: payload.sub,
        email: payload.email,
        name: payload.name,
        picture: payload.picture
    });
    const resNext = next_response/* default */.Z.redirect("/");
    // set cookie
    resNext.cookies.set({
        name: "quickeats_session",
        value: sessionJwt,
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7
    });
    return resNext;
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fgoogle%2Fcallback%2Froute&name=app%2Fapi%2Fauth%2Fgoogle%2Fcallback%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fgoogle%2Fcallback%2Froute.ts&appDir=C%3A%5CUsers%5Chasan%5CDownloads%5CQuickeats%5Capp&appPaths=%2Fapi%2Fauth%2Fgoogle%2Fcallback%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/auth/google/callback/route",
        pathname: "/api/auth/google/callback",
        filename: "route",
        bundlePath: "app/api/auth/google/callback/route"
    },
    resolvedPagePath: "C:\\Users\\hasan\\Downloads\\Quickeats\\app\\api\\auth\\google\\callback\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/auth/google/callback/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [916,86,778,467], () => (__webpack_exec__(5950)));
module.exports = __webpack_exports__;

})();