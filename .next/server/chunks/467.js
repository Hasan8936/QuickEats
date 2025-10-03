"use strict";
exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 7467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B3: () => (/* binding */ signSession),
/* harmony export */   t0: () => (/* binding */ getSessionServer)
/* harmony export */ });
/* unused harmony export verifySession */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9877);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_1__);


const COOKIE_NAME = "quickeats_session";
const SECRET = process.env.COOKIE_SECRET || process.env.NEXTAUTH_SECRET || "";
function signSession(payload, expiresIn = "7d") {
    if (!SECRET) throw new Error("COOKIE_SECRET environment variable is not set");
    // jsonwebtoken types have incompatibilities; cast to any for now
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, SECRET, {
        expiresIn
    });
}
function verifySession(token) {
    try {
        if (!SECRET) return null;
        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, SECRET);
        return decoded;
    } catch (e) {
        return null;
    }
}
function getSessionServer() {
    try {
        const c = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();
        const token = c.get(COOKIE_NAME)?.value;
        if (!token) return null;
        return verifySession(token);
    } catch (e) {
        return null;
    }
}


/***/ })

};
;