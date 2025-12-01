module.exports = [
"[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].AppRouterContext; //# sourceMappingURL=app-router-context.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].HooksClientContext; //# sourceMappingURL=hooks-client-context.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSegmentValue", {
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/redirect-status-code.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    var _actionAsyncStorage_getStore;
    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying) {
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super("Invariant: " + (message.endsWith('.') ? message : message + '.') + " This is a bug in Next.js.", options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackSynchronousPlatformIOAccessInDev: null,
    trackSynchronousRequestDataAccessInDev: null,
    useDynamicRouteParams: null,
    warnOnSyncDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    warnOnSyncDynamicError: function() {
        return warnOnSyncDynamicError;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/lib/framework/boundary-constants.js [app-ssr] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/lib/scheduler.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function warnOnSyncDynamicError(dynamicTracking) {
    if (dynamicTracking.syncDynamicErrorWithStack) {
        // the server did something sync dynamic, likely
        // leading to an early termination of the prerender.
        console.error(dynamicTracking.syncDynamicErrorWithStack);
    }
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        if (serverDynamic.syncDynamicErrorWithStack) {
            // There is no shell and the server did something sync dynamic likely
            // leading to an early termination of the prerender before the shell
            // could be completed. We terminate the build/validating render.
            logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-ssr] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/is-next-router-error.js [app-ssr] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-ssr] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _redirect = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/redirect.js [app-ssr] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/redirect-error.js [app-ssr] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/not-found.js [app-ssr] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/forbidden.js [app-ssr] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/unauthorized.js [app-ssr] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/unstable-rethrow.js [app-ssr] (ecmascript)");
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['contexts'].ServerInsertedHtml; //# sourceMappingURL=server-inserted-html.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UnrecognizedActionError: null,
    unstable_isUnrecognizedActionError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UnrecognizedActionError: function() {
        return UnrecognizedActionError;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    }
});
class UnrecognizedActionError extends Error {
    constructor(...args){
        super(...args);
        this.name = 'UnrecognizedActionError';
    }
}
function unstable_isUnrecognizedActionError(error) {
    return !!(error && typeof error === 'object' && error instanceof UnrecognizedActionError);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unrecognized-action-error.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "bailoutToClientRendering", {
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
function bailoutToClientRendering(reason) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore == null ? void 0 : workStore.forceStatic) return;
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-runtime':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _react = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/app-router-context.js [app-ssr] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/hooks-client-context.js [app-ssr] (ecmascript)");
const _getsegmentvalue = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-ssr] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/shared/lib/segment.js [app-ssr] (ecmascript)");
const _navigationreactserver = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-ssr] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/contexts/server-inserted-html.js [app-ssr] (ecmascript)");
const _unrecognizedactionerror = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/unrecognized-action-error.js [app-ssr] (ecmascript)");
const useDynamicRouteParams = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)").useDynamicRouteParams : "TURBOPACK unreachable";
function useSearchParams() {
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-ssr] (ecmascript)");
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering('useSearchParams()');
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useParams()');
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
}
/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
    }
    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
    // and returning an internal value like `__DEFAULT__` would be confusing.
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/blito-frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/blito-frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/blito-frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/blito-frontend/node_modules/lodash.debounce/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g;
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;
}),
"[project]/blito-frontend/node_modules/classnames/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    'use strict';
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = '';
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) {
                classes = appendClass(classes, parseValue(arg));
            }
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === 'string' || typeof arg === 'number') {
            return arg;
        }
        if (typeof arg !== 'object') {
            return '';
        }
        if (Array.isArray(arg)) {
            return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            return arg.toString();
        }
        var classes = '';
        for(var key in arg){
            if (hasOwn.call(arg, key) && arg[key]) {
                classes = appendClass(classes, key);
            }
        }
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) {
            return value;
        }
        if (value) {
            return value + ' ' + newClass;
        }
        return value + newClass;
    }
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'classnames', consistent with npm package name
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return classNames;
        }());
    } else {
        window.classNames = classNames;
    }
})();
}),
"[project]/blito-frontend/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */ /* eslint-disable require-jsdoc, valid-jsdoc */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var MapShim = function() {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */ function getIndex(arr, key) {
        var result = -1;
        arr.some(function(entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return function() {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */ get: function() {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */ class_1.prototype.get = function(key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */ class_1.prototype.set = function(key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([
                    key,
                    value
                ]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.delete = function(key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */ class_1.prototype.has = function(key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */ class_1.prototype.clear = function() {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */ class_1.prototype.forEach = function(callback, ctx) {
            if (ctx === void 0) {
                ctx = null;
            }
            for(var _i = 0, _a = this.__entries__; _i < _a.length; _i++){
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }();
}();
/**
 * Detects whether window and document objects are available in current environment.
 */ var isBrowser = "undefined" !== 'undefined' && typeof document !== 'undefined' && window.document === document;
// Returns global object of a current environment.
var global$1 = function() {
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && /*TURBOPACK member replacement*/ __turbopack_context__.g.Math === Math) {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // eslint-disable-next-line no-new-func
    return Function('return this')();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */ var requestAnimationFrame$1 = function() {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function(callback) {
        return setTimeout(function() {
            return callback(Date.now());
        }, 1000 / 60);
    };
}();
// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */ function throttle(callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */ function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */ function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */ function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}
// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = [
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
    'size',
    'weight'
];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */ var ResizeObserverController = function() {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */ function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */ this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */ this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */ this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */ this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */ ResizeObserverController.prototype.addObserver = function(observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */ ResizeObserverController.prototype.removeObserver = function(observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */ ResizeObserverController.prototype.refresh = function() {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */ ResizeObserverController.prototype.updateObservers_ = function() {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function(observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function(observer) {
            return observer.broadcastActive();
        });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.connect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        //TURBOPACK unreachable
        ;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */ ResizeObserverController.prototype.disconnect_ = function() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        //TURBOPACK unreachable
        ;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */ ResizeObserverController.prototype.onTransitionEnd_ = function(_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function(key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */ ResizeObserverController.getInstance = function() {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */ ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */ var defineConfigurable = function(target, props) {
    for(var _i = 0, _a = Object.keys(props); _i < _a.length; _i++){
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */ var getWindowOf = function(target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
};
// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */ function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */ function getBordersSize(styles) {
    var positions = [];
    for(var _i = 1; _i < arguments.length; _i++){
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function(size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */ function getPaddings(styles) {
    var positions = [
        'top',
        'right',
        'bottom',
        'left'
    ];
    var paddings = {};
    for(var _i = 0, positions_1 = positions; _i < positions_1.length; _i++){
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */ function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */ function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ var isSVGGraphicsElement = function() {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function(target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function(target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
    };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */ function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */ function getContentRect(target) {
    if ("TURBOPACK compile-time truthy", 1) {
        return emptyRect;
    }
    //TURBOPACK unreachable
    ;
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */ function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */ function createRectInit(x, y, width, height) {
    return {
        x: x,
        y: y,
        width: width,
        height: height
    };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */ var ResizeObservation = function() {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */ function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */ this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */ this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */ this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */ ResizeObservation.prototype.isActive = function() {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */ ResizeObservation.prototype.broadcastRect = function() {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}();
var ResizeObserverEntry = function() {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */ function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, {
            target: target,
            contentRect: contentRect
        });
    }
    return ResizeObserverEntry;
}();
var ResizeObserverSPI = function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */ function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */ this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */ this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */ ResizeObserverSPI.prototype.observe = function(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */ ResizeObserverSPI.prototype.unobserve = function(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.disconnect = function() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.gatherActive = function() {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function(observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.broadcastActive = function() {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function(observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */ ResizeObserverSPI.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */ ResizeObserverSPI.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}();
// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */ var ResizeObserver = function() {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */ function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}();
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function(method) {
    ResizeObserver.prototype[method] = function() {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});
var index = function() {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
}();
const __TURBOPACK__default__export__ = index;
}),
"[project]/blito-frontend/node_modules/string-convert/camel2hyphen.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var camel2hyphen = function(str) {
    return str.replace(/[A-Z]/g, function(match) {
        return '-' + match.toLowerCase();
    }).toLowerCase();
};
module.exports = camel2hyphen;
}),
"[project]/blito-frontend/node_modules/json2mq/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var camel2hyphen = __turbopack_context__.r("[project]/blito-frontend/node_modules/string-convert/camel2hyphen.js [app-ssr] (ecmascript)");
var isDimension = function(feature) {
    var re = /[height|width]$/;
    return re.test(feature);
};
var obj2mq = function(obj) {
    var mq = '';
    var features = Object.keys(obj);
    features.forEach(function(feature, index) {
        var value = obj[feature];
        feature = camel2hyphen(feature);
        // Add px to dimension features
        if (isDimension(feature) && typeof value === 'number') {
            value = value + 'px';
        }
        if (value === true) {
            mq += feature;
        } else if (value === false) {
            mq += 'not ' + feature;
        } else {
            mq += '(' + feature + ': ' + value + ')';
        }
        if (index < features.length - 1) {
            mq += ' and ';
        }
    });
    return mq;
};
var json2mq = function(query) {
    var mq = '';
    if (typeof query === 'string') {
        return query;
    }
    // Handling array of media queries
    if (query instanceof Array) {
        query.forEach(function(q, index) {
            mq += obj2mq(q);
            if (index < query.length - 1) {
                mq += ', ';
            }
        });
        return mq;
    }
    // Handling single media query
    return obj2mq(query);
};
module.exports = json2mq;
}),
"[project]/blito-frontend/node_modules/jalaali-js/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
  Expose functions.
*/ module.exports = {
    toJalaali: toJalaali,
    toGregorian: toGregorian,
    isValidJalaaliDate: isValidJalaaliDate,
    isLeapJalaaliYear: isLeapJalaaliYear,
    jalaaliMonthLength: jalaaliMonthLength,
    jalCal: jalCal,
    j2d: j2d,
    d2j: d2j,
    g2d: g2d,
    d2g: d2g,
    jalaaliToDateObject: jalaaliToDateObject,
    jalaaliWeek: jalaaliWeek
};
/*
  Jalaali years starting the 33-year rule.
*/ var breaks = [
    -61,
    9,
    38,
    199,
    426,
    686,
    756,
    818,
    1111,
    1181,
    1210,
    1635,
    2060,
    2097,
    2192,
    2262,
    2324,
    2394,
    2456,
    3178
];
/*
  Converts a Gregorian date to Jalaali.
*/ function toJalaali(gy, gm, gd) {
    if (Object.prototype.toString.call(gy) === '[object Date]') {
        gd = gy.getDate();
        gm = gy.getMonth() + 1;
        gy = gy.getFullYear();
    }
    return d2j(g2d(gy, gm, gd));
}
/*
  Converts a Jalaali date to Gregorian.
*/ function toGregorian(jy, jm, jd) {
    return d2g(j2d(jy, jm, jd));
}
/*
  Checks whether a Jalaali date is valid or not.
*/ function isValidJalaaliDate(jy, jm, jd) {
    return jy >= -61 && jy <= 3177 && jm >= 1 && jm <= 12 && jd >= 1 && jd <= jalaaliMonthLength(jy, jm);
}
/*
  Is this a leap year or not?
*/ function isLeapJalaaliYear(jy) {
    return jalCalLeap(jy) === 0;
}
/*
  Number of days in a given month in a Jalaali year.
*/ function jalaaliMonthLength(jy, jm) {
    if (jm <= 6) return 31;
    if (jm <= 11) return 30;
    if (isLeapJalaaliYear(jy)) return 30;
    return 29;
}
/*
    This function determines if the Jalaali (Persian) year is
    leap (366-day long) or is the common year (365 days)

    @param jy Jalaali calendar year (-61 to 3177)
    @returns number of years since the last leap year (0 to 4)
 */ function jalCalLeap(jy) {
    var bl = breaks.length, jp = breaks[0], jm, jump, leap, n, i;
    if (jy < jp || jy >= breaks[bl - 1]) throw new Error('Invalid Jalaali year ' + jy);
    for(i = 1; i < bl; i += 1){
        jm = breaks[i];
        jump = jm - jp;
        if (jy < jm) break;
        jp = jm;
    }
    n = jy - jp;
    if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
        leap = 4;
    }
    return leap;
}
/*
  This function determines if the Jalaali (Persian) year is
  leap (366-day long) or is the common year (365 days), and
  finds the day in March (Gregorian calendar) of the first
  day of the Jalaali year (jy).

  @param jy Jalaali calendar year (-61 to 3177)
  @param withoutLeap when don't need leap (true or false) default is false
  @return
    leap: number of years since the last leap year (0 to 4)
    gy: Gregorian year of the beginning of Jalaali year
    march: the March day of Farvardin the 1st (1st day of jy)
  @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
  @see: http://www.fourmilab.ch/documents/calendar/
*/ function jalCal(jy, withoutLeap) {
    var bl = breaks.length, gy = jy + 621, leapJ = -14, jp = breaks[0], jm, jump, leap, leapG, march, n, i;
    if (jy < jp || jy >= breaks[bl - 1]) throw new Error('Invalid Jalaali year ' + jy);
    // Find the limiting years for the Jalaali year jy.
    for(i = 1; i < bl; i += 1){
        jm = breaks[i];
        jump = jm - jp;
        if (jy < jm) break;
        leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
        jp = jm;
    }
    n = jy - jp;
    // Find the number of leap years from AD 621 to the beginning
    // of the current Jalaali year in the Persian calendar.
    leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
    if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;
    // And the same in the Gregorian calendar (until the year gy).
    leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
    // Determine the Gregorian date of Farvardin the 1st.
    march = 20 + leapJ - leapG;
    // return with gy and march when we don't need leap
    if (withoutLeap) return {
        gy: gy,
        march: march
    };
    // Find how many years have passed since the last leap year.
    if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
        leap = 4;
    }
    return {
        leap: leap,
        gy: gy,
        march: march
    };
}
/*
  Converts a date of the Jalaali calendar to the Julian Day number.

  @param jy Jalaali year (1 to 3100)
  @param jm Jalaali month (1 to 12)
  @param jd Jalaali day (1 to 29/31)
  @return Julian Day number
*/ function j2d(jy, jm, jd) {
    var r = jalCal(jy, true);
    return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}
/*
  Converts the Julian Day number to a date in the Jalaali calendar.

  @param jdn Julian Day number
  @return
    jy: Jalaali year (1 to 3100)
    jm: Jalaali month (1 to 12)
    jd: Jalaali day (1 to 29/31)
*/ function d2j(jdn) {
    var gy = d2g(jdn).gy // Calculate Gregorian year (gy).
    , jy = gy - 621, r = jalCal(jy, false), jdn1f = g2d(gy, 3, r.march), jd, jm, k;
    // Find number of days that passed since 1 Farvardin.
    k = jdn - jdn1f;
    if (k >= 0) {
        if (k <= 185) {
            // The first 6 months.
            jm = 1 + div(k, 31);
            jd = mod(k, 31) + 1;
            return {
                jy: jy,
                jm: jm,
                jd: jd
            };
        } else {
            // The remaining months.
            k -= 186;
        }
    } else {
        // Previous Jalaali year.
        jy -= 1;
        k += 179;
        if (r.leap === 1) k += 1;
    }
    jm = 7 + div(k, 30);
    jd = mod(k, 30) + 1;
    return {
        jy: jy,
        jm: jm,
        jd: jd
    };
}
/*
  Calculates the Julian Day number from Gregorian or Julian
  calendar dates. This integer number corresponds to the noon of
  the date (i.e. 12 hours of Universal Time).
  The procedure was tested to be good since 1 March, -100100 (of both
  calendars) up to a few million years into the future.

  @param gy Calendar year (years BC numbered 0, -1, -2, ...)
  @param gm Calendar month (1 to 12)
  @param gd Calendar day of the month (1 to 28/29/30/31)
  @return Julian Day number
*/ function g2d(gy, gm, gd) {
    var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
    d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
}
/*
  Calculates Gregorian and Julian calendar dates from the Julian Day number
  (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
  calendars) to some millions years ahead of the present.

  @param jdn Julian Day number
  @return
    gy: Calendar year (years BC numbered 0, -1, -2, ...)
    gm: Calendar month (1 to 12)
    gd: Calendar day of the month M (1 to 28/29/30/31)
*/ function d2g(jdn) {
    var j, i, gd, gm, gy;
    j = 4 * jdn + 139361631;
    j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
    i = div(mod(j, 1461), 4) * 5 + 308;
    gd = div(mod(i, 153), 5) + 1;
    gm = mod(div(i, 153), 12) + 1;
    gy = div(j, 1461) - 100100 + div(8 - gm, 6);
    return {
        gy: gy,
        gm: gm,
        gd: gd
    };
}
/**
 * Return Saturday and Friday day of current week(week start in Saturday)
 * @param {number} jy jalaali year
 * @param {number} jm jalaali month
 * @param {number} jd jalaali day
 * @returns Saturday and Friday of current week
 */ function jalaaliWeek(jy, jm, jd) {
    var dayOfWeek = jalaaliToDateObject(jy, jm, jd).getDay();
    var startDayDifference = dayOfWeek == 6 ? 0 : -(dayOfWeek + 1);
    var endDayDifference = 6 + startDayDifference;
    return {
        saturday: d2j(j2d(jy, jm, jd + startDayDifference)),
        friday: d2j(j2d(jy, jm, jd + endDayDifference))
    };
}
/**
 * Convert Jalaali calendar dates to javascript Date object
 * @param {number} jy jalaali year
 * @param {number} jm jalaali month
 * @param {number} jd jalaali day
 * @param {number} [h] hours
 * @param {number} [m] minutes
 * @param {number} [s] seconds
 * @param {number} [ms] milliseconds
 * @returns Date object of the jalaali calendar dates
 */ function jalaaliToDateObject(jy, jm, jd, h, m, s, ms) {
    var gregorianCalenderDate = toGregorian(jy, jm, jd);
    return new Date(gregorianCalenderDate.gy, gregorianCalenderDate.gm - 1, gregorianCalenderDate.gd, h || 0, m || 0, s || 0, ms || 0);
}
/*
  Utility helper functions.
*/ function div(a, b) {
    return ~~(a / b);
}
function mod(a, b) {
    return a - ~~(a / b) * b;
}
}),
"[project]/blito-frontend/node_modules/moment-jalaali/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = jMoment;
var moment = __turbopack_context__.r("[project]/blito-frontend/node_modules/moment/moment.js [app-ssr] (ecmascript)"), jalaali = __turbopack_context__.r("[project]/blito-frontend/node_modules/jalaali-js/index.js [app-ssr] (ecmascript)");
/************************************
    Constants
************************************/ var formattingTokens = /(\[[^\[]*\])|(\\)?j(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?|)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS?|LL?L?L?|l{1,4})/g, parseTokenOneOrTwoDigits = /\d\d?/, parseTokenOneToThreeDigits = /\d{1,3}/, parseTokenThreeDigits = /\d{3}/, parseTokenFourDigits = /\d{1,4}/, parseTokenSixDigits = /[+\-]?\d{1,6}/, parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, parseTokenT = /T/i, parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, symbolMap = {
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹',
    '0': '۰'
}, numberMap = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0'
}, unitAliases = {
    jm: 'jmonth',
    jmonths: 'jmonth',
    jy: 'jyear',
    jyears: 'jyear'
}, formatFunctions = {}, ordinalizeTokens = 'DDD w M D'.split(' '), paddedTokens = 'M D w'.split(' '), formatTokenFunctions = {
    jM: function() {
        return this.jMonth() + 1;
    },
    jMMM: function(format) {
        return this.localeData().jMonthsShort(this, format);
    },
    jMMMM: function(format) {
        return this.localeData().jMonths(this, format);
    },
    jD: function() {
        return this.jDate();
    },
    jDDD: function() {
        return this.jDayOfYear();
    },
    jw: function() {
        return this.jWeek();
    },
    jYY: function() {
        return leftZeroFill(this.jYear() % 100, 2);
    },
    jYYYY: function() {
        return leftZeroFill(this.jYear(), 4);
    },
    jYYYYY: function() {
        return leftZeroFill(this.jYear(), 5);
    },
    jgg: function() {
        return leftZeroFill(this.jWeekYear() % 100, 2);
    },
    jgggg: function() {
        return this.jWeekYear();
    },
    jggggg: function() {
        return leftZeroFill(this.jWeekYear(), 5);
    }
};
function padToken(func, count) {
    return function(a) {
        return leftZeroFill(func.call(this, a), count);
    };
}
function ordinalizeToken(func, period) {
    return function(a) {
        return this.localeData().ordinal(func.call(this, a), period);
    };
}
(function() {
    var i;
    while(ordinalizeTokens.length){
        i = ordinalizeTokens.pop();
        formatTokenFunctions['j' + i + 'o'] = ordinalizeToken(formatTokenFunctions['j' + i], i);
    }
    while(paddedTokens.length){
        i = paddedTokens.pop();
        formatTokenFunctions['j' + i + i] = padToken(formatTokenFunctions['j' + i], 2);
    }
    formatTokenFunctions.jDDDD = padToken(formatTokenFunctions.jDDD, 3);
})();
/************************************
    Helpers
************************************/ function extend(a, b) {
    var key;
    for(key in b)if (b.hasOwnProperty(key)) a[key] = b[key];
    return a;
}
function leftZeroFill(number, targetLength) {
    var output = number + '';
    while(output.length < targetLength)output = '0' + output;
    return output;
}
function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
}
// function compareArrays(array1, array2) {
//   var len = Math.min(array1.length, array2.length)
//     , lengthDiff = Math.abs(array1.length - array2.length)
//     , diffs = 0
//     , i
//   for (i = 0; i < len; i += 1)
//     if (~~array1[i] !== ~~array2[i])
//       diffs += 1
//   return diffs + lengthDiff
// }
function normalizeUnits(units) {
    if (units) {
        var lowered = units.toLowerCase();
        units = unitAliases[lowered] || lowered;
    }
    return units;
}
function setDate(m, year, month, date) {
    var d = m._d;
    if (isNaN(year)) {
        m._isValid = false;
    }
    if (m._isUTC) {
        /*eslint-disable new-cap*/ m._d = new Date(Date.UTC(year, month, date, d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()));
    /*eslint-enable new-cap*/ } else {
        m._d = new Date(year, month, date, d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
    }
}
function objectCreate(parent) {
    function F() {}
    F.prototype = parent;
    return new F();
}
function getPrototypeOf(object) {
    if (Object.getPrototypeOf) return Object.getPrototypeOf(object);
    else if (''.__proto__) return object.__proto__;
    else return object.constructor.prototype;
}
/************************************
    Languages
************************************/ extend(getPrototypeOf(moment.localeData()), {
    _jMonths: [
        'Farvardin',
        'Ordibehesht',
        'Khordaad',
        'Tir',
        'Amordaad',
        'Shahrivar',
        'Mehr',
        'Aabaan',
        'Aazar',
        'Dey',
        'Bahman',
        'Esfand'
    ],
    jMonths: function(m) {
        return this._jMonths[m.jMonth()];
    },
    _jMonthsShort: [
        'Far',
        'Ord',
        'Kho',
        'Tir',
        'Amo',
        'Sha',
        'Meh',
        'Aab',
        'Aaz',
        'Dey',
        'Bah',
        'Esf'
    ],
    jMonthsShort: function(m) {
        return this._jMonthsShort[m.jMonth()];
    },
    jMonthsParse: function(monthName) {
        var i, mom, regex;
        if (!this._jMonthsParse) this._jMonthsParse = [];
        for(i = 0; i < 12; i += 1){
            // Make the regex if we don't have it already.
            if (!this._jMonthsParse[i]) {
                mom = jMoment([
                    2000,
                    (2 + i) % 12,
                    25
                ]);
                regex = '^' + this.jMonths(mom, '') + '|^' + this.jMonthsShort(mom, '');
                this._jMonthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // Test the regex.
            if (this._jMonthsParse[i].test(monthName)) return i;
        }
    }
});
/************************************
    Formatting
************************************/ function makeFormatFunction(format) {
    var array = format.match(formattingTokens), length = array.length, i;
    for(i = 0; i < length; i += 1)if (formatTokenFunctions[array[i]]) array[i] = formatTokenFunctions[array[i]];
    return function(mom) {
        var output = '';
        for(i = 0; i < length; i += 1)output += array[i] instanceof Function ? '[' + array[i].call(mom, format) + ']' : array[i];
        return output;
    };
}
/************************************
    Parsing
************************************/ function getParseRegexForToken(token, config) {
    switch(token){
        case 'jDDDD':
            return parseTokenThreeDigits;
        case 'jYYYY':
            return parseTokenFourDigits;
        case 'jYYYYY':
            return parseTokenSixDigits;
        case 'jDDD':
            return parseTokenOneToThreeDigits;
        case 'jMMM':
        case 'jMMMM':
            return parseTokenWord;
        case 'jMM':
        case 'jDD':
        case 'jYY':
        case 'jM':
        case 'jD':
            return parseTokenOneOrTwoDigits;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
            return parseTokenFourDigits;
        case 'YYYYY':
            return parseTokenSixDigits;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return moment.localeData(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
            return parseTokenOneOrTwoDigits;
        default:
            return new RegExp(token.replace('\\', ''));
    }
}
function addTimeToArrayFromToken(token, input, config) {
    var a, datePartArray = config._a;
    switch(token){
        case 'jM':
        case 'jMM':
            datePartArray[1] = input == null ? 0 : ~~input - 1;
            break;
        case 'jMMM':
        case 'jMMMM':
            a = moment.localeData(config._l).jMonthsParse(input);
            if (a != null) datePartArray[1] = a;
            else config._isValid = false;
            break;
        case 'jD':
        case 'jDD':
        case 'jDDD':
        case 'jDDDD':
            if (input != null) datePartArray[2] = ~~input;
            break;
        case 'jYY':
            datePartArray[0] = ~~input + (~~input > 47 ? 1300 : 1400);
            break;
        case 'jYYYY':
        case 'jYYYYY':
            datePartArray[0] = ~~input;
    }
    if (input == null) config._isValid = false;
}
function dateFromArray(config) {
    var g, j, jy = config._a[0], jm = config._a[1], jd = config._a[2];
    if (jy == null && jm == null && jd == null) return [
        0,
        0,
        1
    ];
    jy = jy != null ? jy : 0;
    jm = jm != null ? jm : 0;
    jd = jd != null ? jd : 1;
    if (jd < 1 || jd > jMoment.jDaysInMonth(jy, jm) || jm < 0 || jm > 11) config._isValid = false;
    g = toGregorian(jy, jm, jd);
    j = toJalaali(g.gy, g.gm, g.gd);
    if (isNaN(g.gy)) config._isValid = false;
    config._jDiff = 0;
    if (~~j.jy !== jy) config._jDiff += 1;
    if (~~j.jm !== jm) config._jDiff += 1;
    if (~~j.jd !== jd) config._jDiff += 1;
    return [
        g.gy,
        g.gm,
        g.gd
    ];
}
function makeDateFromStringAndFormat(config) {
    var tokens = config._f.match(formattingTokens), string = config._i + '', len = tokens.length, i, token, parsedInput;
    config._a = [];
    for(i = 0; i < len; i += 1){
        token = tokens[i];
        parsedInput = (getParseRegexForToken(token, config).exec(string) || [])[0];
        if (parsedInput) string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        if (formatTokenFunctions[token]) addTimeToArrayFromToken(token, parsedInput, config);
    }
    if (string) config._il = string;
    return dateFromArray(config);
}
function makeDateFromStringAndArray(config, utc) {
    var len = config._f.length, i, format, tempMoment, bestMoment, currentScore, scoreToBeat;
    if (len === 0) {
        return makeMoment(new Date(NaN));
    }
    for(i = 0; i < len; i += 1){
        format = config._f[i];
        currentScore = 0;
        tempMoment = makeMoment(config._i, format, config._l, config._strict, utc);
        if (!tempMoment.isValid()) continue;
        // currentScore = compareArrays(tempMoment._a, tempMoment.toArray())
        currentScore += tempMoment._jDiff;
        if (tempMoment._il) currentScore += tempMoment._il.length;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempMoment;
        }
    }
    return bestMoment;
}
function removeParsedTokens(config) {
    var string = config._i + '', input = '', format = '', array = config._f.match(formattingTokens), len = array.length, i, match, parsed;
    for(i = 0; i < len; i += 1){
        match = array[i];
        parsed = (getParseRegexForToken(match, config).exec(string) || [])[0];
        if (parsed) string = string.slice(string.indexOf(parsed) + parsed.length);
        if (!(formatTokenFunctions[match] instanceof Function)) {
            format += match;
            if (parsed) input += parsed;
        }
    }
    config._i = input;
    config._f = format;
}
/************************************
    Week of Year
************************************/ function jWeekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
    var end = firstDayOfWeekOfYear - firstDayOfWeek, daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(), adjustedMoment;
    if (daysToDayOfWeek > end) {
        daysToDayOfWeek -= 7;
    }
    if (daysToDayOfWeek < end - 7) {
        daysToDayOfWeek += 7;
    }
    adjustedMoment = jMoment(mom).add(daysToDayOfWeek, 'd');
    return {
        week: Math.ceil(adjustedMoment.jDayOfYear() / 7),
        year: adjustedMoment.jYear()
    };
}
/************************************
    Top Level Functions
************************************/ var maxTimestamp = 57724432199999;
function makeMoment(input, format, lang, strict, utc) {
    if (typeof lang === 'boolean') {
        strict = lang;
        lang = undefined;
    }
    if (format && typeof format === 'string') format = fixFormat(format, moment);
    var config = {
        _i: input,
        _f: format,
        _l: lang,
        _strict: strict,
        _isUTC: utc
    }, date, m, jm, origInput = input, origFormat = format;
    if (format) {
        if (isArray(format)) {
            return makeDateFromStringAndArray(config, utc);
        } else {
            date = makeDateFromStringAndFormat(config);
            removeParsedTokens(config);
            format = 'YYYY-MM-DD-' + config._f;
            input = leftZeroFill(date[0], 4) + '-' + leftZeroFill(date[1] + 1, 2) + '-' + leftZeroFill(date[2], 2) + '-' + config._i;
        }
    }
    if (utc) m = moment.utc(input, format, lang, strict);
    else m = moment(input, format, lang, strict);
    if (config._isValid === false) m._isValid = false;
    m._jDiff = config._jDiff || 0;
    jm = objectCreate(jMoment.fn);
    extend(jm, m);
    if (strict && format && jm.isValid()) {
        jm._isValid = jm.format(origFormat) === origInput;
    }
    if (m._d.getTime() > maxTimestamp) {
        jm._isValid = false;
    }
    return jm;
}
function jMoment(input, format, lang, strict) {
    return makeMoment(input, format, lang, strict, false);
}
extend(jMoment, moment);
jMoment.fn = objectCreate(moment.fn);
jMoment.utc = function(input, format, lang, strict) {
    return makeMoment(input, format, lang, strict, true);
};
jMoment.unix = function(input) {
    return makeMoment(input * 1000);
};
/************************************
    jMoment Prototype
************************************/ function fixFormat(format, _moment) {
    var i = 5;
    var replace = function(input) {
        return _moment.localeData().longDateFormat(input) || input;
    };
    while(i > 0 && localFormattingTokens.test(format)){
        i -= 1;
        format = format.replace(localFormattingTokens, replace);
    }
    return format;
}
jMoment.fn.format = function(format) {
    if (format) {
        format = fixFormat(format, this);
        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }
        format = formatFunctions[format](this);
    }
    return moment.fn.format.call(this, format);
};
jMoment.fn.jYear = function(input) {
    var lastDay, j, g;
    if (typeof input === 'number') {
        j = toJalaali(this.year(), this.month(), this.date());
        lastDay = Math.min(j.jd, jMoment.jDaysInMonth(input, j.jm));
        g = toGregorian(input, j.jm, lastDay);
        setDate(this, g.gy, g.gm, g.gd);
        moment.updateOffset(this);
        return this;
    } else {
        return toJalaali(this.year(), this.month(), this.date()).jy;
    }
};
jMoment.fn.jMonth = function(input) {
    var lastDay, j, g;
    if (input != null) {
        if (typeof input === 'string') {
            input = this.localeData().jMonthsParse(input);
            if (typeof input !== 'number') return this;
        }
        j = toJalaali(this.year(), this.month(), this.date());
        lastDay = Math.min(j.jd, jMoment.jDaysInMonth(j.jy, input));
        this.jYear(j.jy + div(input, 12));
        input = mod(input, 12);
        if (input < 0) {
            input += 12;
            this.jYear(this.jYear() - 1);
        }
        g = toGregorian(this.jYear(), input, lastDay);
        setDate(this, g.gy, g.gm, g.gd);
        moment.updateOffset(this);
        return this;
    } else {
        return toJalaali(this.year(), this.month(), this.date()).jm;
    }
};
jMoment.fn.jDate = function(input) {
    var j, g;
    if (typeof input === 'number') {
        j = toJalaali(this.year(), this.month(), this.date());
        g = toGregorian(j.jy, j.jm, input);
        setDate(this, g.gy, g.gm, g.gd);
        moment.updateOffset(this);
        return this;
    } else {
        return toJalaali(this.year(), this.month(), this.date()).jd;
    }
};
jMoment.fn.jDayOfYear = function(input) {
    var dayOfYear = Math.round((jMoment(this).startOf('day') - jMoment(this).startOf('jYear')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
};
jMoment.fn.jWeek = function(input) {
    var week = jWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
};
jMoment.fn.jWeekYear = function(input) {
    var year = jWeekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
    return input == null ? year : this.add(input - year, 'y');
};
jMoment.fn.add = function(val, units) {
    var temp;
    if (units !== null && !isNaN(+units)) {
        temp = val;
        val = units;
        units = temp;
    }
    units = normalizeUnits(units);
    if (units === 'jyear') {
        this.jYear(this.jYear() + val);
    } else if (units === 'jmonth') {
        this.jMonth(this.jMonth() + val);
    } else {
        moment.fn.add.call(this, val, units);
        if (isNaN(this.jYear())) {
            this._isValid = false;
        }
    }
    return this;
};
jMoment.fn.subtract = function(val, units) {
    var temp;
    if (units !== null && !isNaN(+units)) {
        temp = val;
        val = units;
        units = temp;
    }
    units = normalizeUnits(units);
    if (units === 'jyear') {
        this.jYear(this.jYear() - val);
    } else if (units === 'jmonth') {
        this.jMonth(this.jMonth() - val);
    } else {
        moment.fn.subtract.call(this, val, units);
    }
    return this;
};
jMoment.fn.startOf = function(units) {
    units = normalizeUnits(units);
    if (units === 'jyear' || units === 'jmonth') {
        if (units === 'jyear') {
            this.jMonth(0);
        }
        this.jDate(1);
        this.hours(0);
        this.minutes(0);
        this.seconds(0);
        this.milliseconds(0);
        return this;
    } else {
        return moment.fn.startOf.call(this, units);
    }
};
jMoment.fn.endOf = function(units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'milisecond') {
        return this;
    }
    return this.startOf(units).add(1, units === 'isoweek' ? 'week' : units).subtract(1, 'ms');
};
jMoment.fn.isSame = function(other, units) {
    units = normalizeUnits(units);
    if (units === 'jyear' || units === 'jmonth') {
        return moment.fn.isSame.call(this.startOf(units), other.startOf(units));
    }
    return moment.fn.isSame.call(this, other, units);
};
jMoment.fn.clone = function() {
    return jMoment(this);
};
jMoment.fn.jYears = jMoment.fn.jYear;
jMoment.fn.jMonths = jMoment.fn.jMonth;
jMoment.fn.jDates = jMoment.fn.jDate;
jMoment.fn.jWeeks = jMoment.fn.jWeek;
/************************************
    jMoment Statics
************************************/ jMoment.jDaysInMonth = function(year, month) {
    year += div(month, 12);
    month = mod(month, 12);
    if (month < 0) {
        month += 12;
        year -= 1;
    }
    if (month < 6) {
        return 31;
    } else if (month < 11) {
        return 30;
    } else if (jMoment.jIsLeapYear(year)) {
        return 30;
    } else {
        return 29;
    }
};
jMoment.jIsLeapYear = jalaali.isLeapJalaaliYear;
jMoment.loadPersian = function(args) {
    var usePersianDigits = args !== undefined && args.hasOwnProperty('usePersianDigits') ? args.usePersianDigits : false;
    var dialect = args !== undefined && args.hasOwnProperty('dialect') ? args.dialect : 'persian';
    moment.locale('fa');
    moment.updateLocale('fa', {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: {
            'persian': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه'.split('_'),
            'persian-modern': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        }[dialect],
        weekdaysShort: {
            'persian': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_آدینه_شنبه'.split('_'),
            'persian-modern': 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_')
        }[dialect],
        weekdaysMin: {
            'persian': 'ی_د_س_چ_پ_آ_ش'.split('_'),
            'persian-modern': 'ی_د_س_چ_پ_ج_ش'.split('_')
        }[dialect],
        longDateFormat: {
            LT: 'HH:mm',
            L: 'jYYYY/jMM/jDD',
            LL: 'jD jMMMM jYYYY',
            LLL: 'jD jMMMM jYYYY LT',
            LLLL: 'dddd، jD jMMMM jYYYY LT'
        },
        calendar: {
            sameDay: '[امروز ساعت] LT',
            nextDay: '[فردا ساعت] LT',
            nextWeek: 'dddd [ساعت] LT',
            lastDay: '[دیروز ساعت] LT',
            lastWeek: 'dddd [ی پیش ساعت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'در %s',
            past: '%s پیش',
            s: 'چند ثانیه',
            m: '1 دقیقه',
            mm: '%d دقیقه',
            h: '1 ساعت',
            hh: '%d ساعت',
            d: '1 روز',
            dd: '%d روز',
            M: '1 ماه',
            MM: '%d ماه',
            y: '1 سال',
            yy: '%d سال'
        },
        preparse: function(string) {
            if (usePersianDigits) {
                return string.replace(/[۰-۹]/g, function(match) {
                    return numberMap[match];
                }).replace(/،/g, ',');
            }
            return string;
        },
        postformat: function(string) {
            if (usePersianDigits) {
                return string.replace(/\d/g, function(match) {
                    return symbolMap[match];
                }).replace(/,/g, '،');
            }
            return string;
        },
        ordinal: '%dم',
        week: {
            dow: 6 // Saturday is the first day of the week.
            ,
            doy: 12 // The week that contains Jan 1st is the first week of the year.
        },
        meridiem: function(hour) {
            return hour < 12 ? 'ق.ظ' : 'ب.ظ';
        },
        jMonths: {
            'persian': 'فروردین_اردیبهشت_خرداد_تیر_امرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_'),
            'persian-modern': 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_')
        }[dialect],
        jMonthsShort: {
            'persian': 'فرو_ارد_خرد_تیر_امر_شهر_مهر_آبا_آذر_دی_بهم_اسف'.split('_'),
            'persian-modern': 'فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف'.split('_')
        }[dialect]
    });
};
jMoment.jConvert = {
    toJalaali: toJalaali,
    toGregorian: toGregorian
};
/************************************
    Jalaali Conversion
************************************/ function toJalaali(gy, gm, gd) {
    try {
        var j = jalaali.toJalaali(gy, gm + 1, gd);
        j.jm -= 1;
        return j;
    } catch (e) {
        return {
            jy: NaN,
            jm: NaN,
            jd: NaN
        };
    }
}
function toGregorian(jy, jm, jd) {
    try {
        var g = jalaali.toGregorian(jy, jm + 1, jd);
        g.gm -= 1;
        return g;
    } catch (e) {
        return {
            gy: NaN,
            gm: NaN,
            gd: NaN
        };
    }
}
/*
  Utility helper functions.
*/ function div(a, b) {
    return ~~(a / b);
}
function mod(a, b) {
    return a - ~~(a / b) * b;
}
}),
"[project]/blito-frontend/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/blito-frontend/node_modules/react-is/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}),
"[project]/blito-frontend/node_modules/object-assign/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
}),
"[project]/blito-frontend/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/blito-frontend/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/blito-frontend/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/blito-frontend/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/blito-frontend/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/blito-frontend/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactIs = __turbopack_context__.r("[project]/blito-frontend/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var assign = __turbopack_context__.r("[project]/blito-frontend/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/blito-frontend/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/blito-frontend/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/blito-frontend/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/blito-frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/blito-frontend/node_modules/react-is/index.js [app-ssr] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/blito-frontend/node_modules/tether/dist/js/tether.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! tether 1.4.7 */ (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(factory());
    } else if ("TURBOPACK compile-time truthy", 1) {
        module.exports = factory();
    } else //TURBOPACK unreachable
    ;
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    'use strict';
    var _createClass = function() {
        function defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    var TetherBase = undefined;
    if (typeof TetherBase === 'undefined') {
        TetherBase = {
            modules: []
        };
    }
    var zeroElement = null;
    // Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
    // if the element lies within a nested document (<frame> or <iframe>-like).
    function getActualBoundingClientRect(node) {
        var boundingRect = node.getBoundingClientRect();
        // The original object returned by getBoundingClientRect is immutable, so we clone it
        // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
        var rect = {};
        for(var k in boundingRect){
            rect[k] = boundingRect[k];
        }
        try {
            if (node.ownerDocument !== document) {
                var _frameElement = node.ownerDocument.defaultView.frameElement;
                if (_frameElement) {
                    var frameRect = getActualBoundingClientRect(_frameElement);
                    rect.top += frameRect.top;
                    rect.bottom += frameRect.top;
                    rect.left += frameRect.left;
                    rect.right += frameRect.left;
                }
            }
        } catch (err) {
        // Ignore "Access is denied" in IE11/Edge
        }
        return rect;
    }
    function getScrollParents(el) {
        // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
        // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        var computedStyle = getComputedStyle(el) || {};
        var position = computedStyle.position;
        var parents = [];
        if (position === 'fixed') {
            return [
                el
            ];
        }
        var parent = el;
        while((parent = parent.parentNode) && parent && parent.nodeType === 1){
            var style = undefined;
            try {
                style = getComputedStyle(parent);
            } catch (err) {}
            if (typeof style === 'undefined' || style === null) {
                parents.push(parent);
                return parents;
            }
            var _style = style;
            var overflow = _style.overflow;
            var overflowX = _style.overflowX;
            var overflowY = _style.overflowY;
            if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
                if (position !== 'absolute' || [
                    'relative',
                    'absolute',
                    'fixed'
                ].indexOf(style.position) >= 0) {
                    parents.push(parent);
                }
            }
        }
        parents.push(el.ownerDocument.body);
        // If the node is within a frame, account for the parent window scroll
        if (el.ownerDocument !== document) {
            parents.push(el.ownerDocument.defaultView);
        }
        return parents;
    }
    var uniqueId = function() {
        var id = 0;
        return function() {
            return ++id;
        };
    }();
    var zeroPosCache = {};
    var getOrigin = function getOrigin() {
        // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
        // jitter as the user scrolls that messes with our ability to detect if two positions
        // are equivilant or not.  We place an element at the top left of the page that will
        // get the same jitter, so we can cancel the two out.
        var node = zeroElement;
        if (!node || !document.body.contains(node)) {
            node = document.createElement('div');
            node.setAttribute('data-tether-id', uniqueId());
            extend(node.style, {
                top: 0,
                left: 0,
                position: 'absolute'
            });
            document.body.appendChild(node);
            zeroElement = node;
        }
        var id = node.getAttribute('data-tether-id');
        if (typeof zeroPosCache[id] === 'undefined') {
            zeroPosCache[id] = getActualBoundingClientRect(node);
            // Clear the cache when this position call is done
            defer(function() {
                delete zeroPosCache[id];
            });
        }
        return zeroPosCache[id];
    };
    function removeUtilElements() {
        if (zeroElement) {
            document.body.removeChild(zeroElement);
        }
        zeroElement = null;
    }
    ;
    function getBounds(el) {
        var doc = undefined;
        if (el === document) {
            doc = document;
            el = document.documentElement;
        } else {
            doc = el.ownerDocument;
        }
        var docEl = doc.documentElement;
        var box = getActualBoundingClientRect(el);
        var origin = getOrigin();
        box.top -= origin.top;
        box.left -= origin.left;
        if (typeof box.width === 'undefined') {
            box.width = document.body.scrollWidth - box.left - box.right;
        }
        if (typeof box.height === 'undefined') {
            box.height = document.body.scrollHeight - box.top - box.bottom;
        }
        box.top = box.top - docEl.clientTop;
        box.left = box.left - docEl.clientLeft;
        box.right = doc.body.clientWidth - box.width - box.left;
        box.bottom = doc.body.clientHeight - box.height - box.top;
        return box;
    }
    function getOffsetParent(el) {
        return el.offsetParent || document.documentElement;
    }
    var _scrollBarSize = null;
    function getScrollBarSize() {
        if (_scrollBarSize) {
            return _scrollBarSize;
        }
        var inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';
        var outer = document.createElement('div');
        extend(outer.style, {
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            visibility: 'hidden',
            width: '200px',
            height: '150px',
            overflow: 'hidden'
        });
        outer.appendChild(inner);
        document.body.appendChild(outer);
        var widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var widthScroll = inner.offsetWidth;
        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }
        document.body.removeChild(outer);
        var width = widthContained - widthScroll;
        _scrollBarSize = {
            width: width,
            height: width
        };
        return _scrollBarSize;
    }
    function extend() {
        var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var args = [];
        Array.prototype.push.apply(args, arguments);
        args.slice(1).forEach(function(obj) {
            if (obj) {
                for(var key in obj){
                    if (({}).hasOwnProperty.call(obj, key)) {
                        out[key] = obj[key];
                    }
                }
            }
        });
        return out;
    }
    function removeClass(el, name) {
        if (typeof el.classList !== 'undefined') {
            name.split(' ').forEach(function(cls) {
                if (cls.trim()) {
                    el.classList.remove(cls);
                }
            });
        } else {
            var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
            var className = getClassName(el).replace(regex, ' ');
            setClassName(el, className);
        }
    }
    function addClass(el, name) {
        if (typeof el.classList !== 'undefined') {
            name.split(' ').forEach(function(cls) {
                if (cls.trim()) {
                    el.classList.add(cls);
                }
            });
        } else {
            removeClass(el, name);
            var cls = getClassName(el) + (' ' + name);
            setClassName(el, cls);
        }
    }
    function hasClass(el, name) {
        if (typeof el.classList !== 'undefined') {
            return el.classList.contains(name);
        }
        var className = getClassName(el);
        return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
    }
    function getClassName(el) {
        // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
        // completely separately SVGAnimatedString base classes
        if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
            return el.className.baseVal;
        }
        return el.className;
    }
    function setClassName(el, className) {
        el.setAttribute('class', className);
    }
    function updateClasses(el, add, all) {
        // Of the set of 'all' classes, we need the 'add' classes, and only the
        // 'add' classes to be set.
        all.forEach(function(cls) {
            if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
                removeClass(el, cls);
            }
        });
        add.forEach(function(cls) {
            if (!hasClass(el, cls)) {
                addClass(el, cls);
            }
        });
    }
    var deferred = [];
    var defer = function defer(fn) {
        deferred.push(fn);
    };
    var flush = function flush() {
        var fn = undefined;
        while(fn = deferred.pop()){
            fn();
        }
    };
    var Evented = function() {
        function Evented() {
            _classCallCheck(this, Evented);
        }
        _createClass(Evented, [
            {
                key: 'on',
                value: function on(event, handler, ctx) {
                    var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
                    if (typeof this.bindings === 'undefined') {
                        this.bindings = {};
                    }
                    if (typeof this.bindings[event] === 'undefined') {
                        this.bindings[event] = [];
                    }
                    this.bindings[event].push({
                        handler: handler,
                        ctx: ctx,
                        once: once
                    });
                }
            },
            {
                key: 'once',
                value: function once(event, handler, ctx) {
                    this.on(event, handler, ctx, true);
                }
            },
            {
                key: 'off',
                value: function off(event, handler) {
                    if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
                        return;
                    }
                    if (typeof handler === 'undefined') {
                        delete this.bindings[event];
                    } else {
                        var i = 0;
                        while(i < this.bindings[event].length){
                            if (this.bindings[event][i].handler === handler) {
                                this.bindings[event].splice(i, 1);
                            } else {
                                ++i;
                            }
                        }
                    }
                }
            },
            {
                key: 'trigger',
                value: function trigger(event) {
                    if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
                        var i = 0;
                        for(var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                            args[_key - 1] = arguments[_key];
                        }
                        while(i < this.bindings[event].length){
                            var _bindings$event$i = this.bindings[event][i];
                            var handler = _bindings$event$i.handler;
                            var ctx = _bindings$event$i.ctx;
                            var once = _bindings$event$i.once;
                            var context = ctx;
                            if (typeof context === 'undefined') {
                                context = this;
                            }
                            handler.apply(context, args);
                            if (once) {
                                this.bindings[event].splice(i, 1);
                            } else {
                                ++i;
                            }
                        }
                    }
                }
            }
        ]);
        return Evented;
    }();
    TetherBase.Utils = {
        getActualBoundingClientRect: getActualBoundingClientRect,
        getScrollParents: getScrollParents,
        getBounds: getBounds,
        getOffsetParent: getOffsetParent,
        extend: extend,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        updateClasses: updateClasses,
        defer: defer,
        flush: flush,
        uniqueId: uniqueId,
        Evented: Evented,
        getScrollBarSize: getScrollBarSize,
        removeUtilElements: removeUtilElements
    };
    /* globals TetherBase, performance */ 'use strict';
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i['return']) _i['return']();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
        };
    }();
    var _createClass = function() {
        function defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _get = function get(_x6, _x7, _x8) {
        var _again = true;
        _function: while(_again){
            var object = _x6, property = _x7, receiver = _x8;
            _again = false;
            if (object === null) object = Function.prototype;
            var desc = Object.getOwnPropertyDescriptor(object, property);
            if (desc === undefined) {
                var parent = Object.getPrototypeOf(object);
                if (parent === null) {
                    return undefined;
                } else {
                    _x6 = parent;
                    _x7 = property;
                    _x8 = receiver;
                    _again = true;
                    desc = parent = undefined;
                    continue _function;
                }
            } else if ('value' in desc) {
                return desc.value;
            } else {
                var getter = desc.get;
                if (getter === undefined) {
                    return undefined;
                }
                return getter.call(receiver);
            }
        }
    };
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }
    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    if (typeof TetherBase === 'undefined') {
        throw new Error('You must include the utils.js file before tether.js');
    }
    var _TetherBase$Utils = TetherBase.Utils;
    var getScrollParents = _TetherBase$Utils.getScrollParents;
    var getBounds = _TetherBase$Utils.getBounds;
    var getOffsetParent = _TetherBase$Utils.getOffsetParent;
    var extend = _TetherBase$Utils.extend;
    var addClass = _TetherBase$Utils.addClass;
    var removeClass = _TetherBase$Utils.removeClass;
    var updateClasses = _TetherBase$Utils.updateClasses;
    var defer = _TetherBase$Utils.defer;
    var flush = _TetherBase$Utils.flush;
    var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
    var removeUtilElements = _TetherBase$Utils.removeUtilElements;
    function within(a, b) {
        var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
        return a + diff >= b && b >= a - diff;
    }
    var transformKey = function() {
        if (typeof document === 'undefined') {
            return '';
        }
        var el = document.createElement('div');
        var transforms = [
            'transform',
            'WebkitTransform',
            'OTransform',
            'MozTransform',
            'msTransform'
        ];
        for(var i = 0; i < transforms.length; ++i){
            var key = transforms[i];
            if (el.style[key] !== undefined) {
                return key;
            }
        }
    }();
    var tethers = [];
    var position = function position() {
        tethers.forEach(function(tether) {
            tether.position(false);
        });
        flush();
    };
    function now() {
        if (typeof performance === 'object' && typeof performance.now === 'function') {
            return performance.now();
        }
        return +new Date();
    }
    (function() {
        var lastCall = null;
        var lastDuration = null;
        var pendingTimeout = null;
        var tick = function tick() {
            if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
                // We voluntarily throttle ourselves if we can't manage 60fps
                lastDuration = Math.min(lastDuration - 16, 250);
                // Just in case this is the last event, remember to position just once more
                pendingTimeout = setTimeout(tick, 250);
                return;
            }
            if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
                // Some browsers call events a little too frequently, refuse to run more than is reasonable
                return;
            }
            if (pendingTimeout != null) {
                clearTimeout(pendingTimeout);
                pendingTimeout = null;
            }
            lastCall = now();
            position();
            lastDuration = now() - lastCall;
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    })();
    var MIRROR_LR = {
        center: 'center',
        left: 'right',
        right: 'left'
    };
    var MIRROR_TB = {
        middle: 'middle',
        top: 'bottom',
        bottom: 'top'
    };
    var OFFSET_MAP = {
        top: 0,
        left: 0,
        middle: '50%',
        center: '50%',
        bottom: '100%',
        right: '100%'
    };
    var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
        var left = attachment.left;
        var top = attachment.top;
        if (left === 'auto') {
            left = MIRROR_LR[relativeToAttachment.left];
        }
        if (top === 'auto') {
            top = MIRROR_TB[relativeToAttachment.top];
        }
        return {
            left: left,
            top: top
        };
    };
    var attachmentToOffset = function attachmentToOffset(attachment) {
        var left = attachment.left;
        var top = attachment.top;
        if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
            left = OFFSET_MAP[attachment.left];
        }
        if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
            top = OFFSET_MAP[attachment.top];
        }
        return {
            left: left,
            top: top
        };
    };
    function addOffset() {
        var out = {
            top: 0,
            left: 0
        };
        for(var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++){
            offsets[_key] = arguments[_key];
        }
        offsets.forEach(function(_ref) {
            var top = _ref.top;
            var left = _ref.left;
            if (typeof top === 'string') {
                top = parseFloat(top, 10);
            }
            if (typeof left === 'string') {
                left = parseFloat(left, 10);
            }
            out.top += top;
            out.left += left;
        });
        return out;
    }
    function offsetToPx(offset, size) {
        if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
            offset.left = parseFloat(offset.left, 10) / 100 * size.width;
        }
        if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
            offset.top = parseFloat(offset.top, 10) / 100 * size.height;
        }
        return offset;
    }
    var parseOffset = function parseOffset(value) {
        var _value$split = value.split(' ');
        var _value$split2 = _slicedToArray(_value$split, 2);
        var top = _value$split2[0];
        var left = _value$split2[1];
        return {
            top: top,
            left: left
        };
    };
    var parseAttachment = parseOffset;
    var TetherClass = function(_Evented) {
        _inherits(TetherClass, _Evented);
        function TetherClass(options) {
            var _this = this;
            _classCallCheck(this, TetherClass);
            _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
            this.position = this.position.bind(this);
            tethers.push(this);
            this.history = [];
            this.setOptions(options, false);
            TetherBase.modules.forEach(function(module1) {
                if (typeof module1.initialize !== 'undefined') {
                    module1.initialize.call(_this);
                }
            });
            this.position();
        }
        _createClass(TetherClass, [
            {
                key: 'getClass',
                value: function getClass() {
                    var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
                    var classes = this.options.classes;
                    if (typeof classes !== 'undefined' && classes[key]) {
                        return this.options.classes[key];
                    } else if (this.options.classPrefix) {
                        return this.options.classPrefix + '-' + key;
                    } else {
                        return key;
                    }
                }
            },
            {
                key: 'setOptions',
                value: function setOptions(options) {
                    var _this2 = this;
                    var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
                    var defaults = {
                        offset: '0 0',
                        targetOffset: '0 0',
                        targetAttachment: 'auto auto',
                        classPrefix: 'tether'
                    };
                    this.options = extend(defaults, options);
                    var _options = this.options;
                    var element = _options.element;
                    var target = _options.target;
                    var targetModifier = _options.targetModifier;
                    this.element = element;
                    this.target = target;
                    this.targetModifier = targetModifier;
                    if (this.target === 'viewport') {
                        this.target = document.body;
                        this.targetModifier = 'visible';
                    } else if (this.target === 'scroll-handle') {
                        this.target = document.body;
                        this.targetModifier = 'scroll-handle';
                    }
                    [
                        'element',
                        'target'
                    ].forEach(function(key) {
                        if (typeof _this2[key] === 'undefined') {
                            throw new Error('Tether Error: Both element and target must be defined');
                        }
                        if (typeof _this2[key].jquery !== 'undefined') {
                            _this2[key] = _this2[key][0];
                        } else if (typeof _this2[key] === 'string') {
                            _this2[key] = document.querySelector(_this2[key]);
                        }
                    });
                    addClass(this.element, this.getClass('element'));
                    if (!(this.options.addTargetClasses === false)) {
                        addClass(this.target, this.getClass('target'));
                    }
                    if (!this.options.attachment) {
                        throw new Error('Tether Error: You must provide an attachment');
                    }
                    this.targetAttachment = parseAttachment(this.options.targetAttachment);
                    this.attachment = parseAttachment(this.options.attachment);
                    this.offset = parseOffset(this.options.offset);
                    this.targetOffset = parseOffset(this.options.targetOffset);
                    if (typeof this.scrollParents !== 'undefined') {
                        this.disable();
                    }
                    if (this.targetModifier === 'scroll-handle') {
                        this.scrollParents = [
                            this.target
                        ];
                    } else {
                        this.scrollParents = getScrollParents(this.target);
                    }
                    if (!(this.options.enabled === false)) {
                        this.enable(pos);
                    }
                }
            },
            {
                key: 'getTargetBounds',
                value: function getTargetBounds() {
                    if (typeof this.targetModifier !== 'undefined') {
                        if (this.targetModifier === 'visible') {
                            if (this.target === document.body) {
                                return {
                                    top: pageYOffset,
                                    left: pageXOffset,
                                    height: innerHeight,
                                    width: innerWidth
                                };
                            } else {
                                var bounds = getBounds(this.target);
                                var out = {
                                    height: bounds.height,
                                    width: bounds.width,
                                    top: bounds.top,
                                    left: bounds.left
                                };
                                out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
                                out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
                                out.height = Math.min(innerHeight, out.height);
                                out.height -= 2;
                                out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
                                out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
                                out.width = Math.min(innerWidth, out.width);
                                out.width -= 2;
                                if (out.top < pageYOffset) {
                                    out.top = pageYOffset;
                                }
                                if (out.left < pageXOffset) {
                                    out.left = pageXOffset;
                                }
                                return out;
                            }
                        } else if (this.targetModifier === 'scroll-handle') {
                            var bounds = undefined;
                            var target = this.target;
                            if (target === document.body) {
                                target = document.documentElement;
                                bounds = {
                                    left: pageXOffset,
                                    top: pageYOffset,
                                    height: innerHeight,
                                    width: innerWidth
                                };
                            } else {
                                bounds = getBounds(target);
                            }
                            var style = getComputedStyle(target);
                            var hasBottomScroll = target.scrollWidth > target.clientWidth || [
                                style.overflow,
                                style.overflowX
                            ].indexOf('scroll') >= 0 || this.target !== document.body;
                            var scrollBottom = 0;
                            if (hasBottomScroll) {
                                scrollBottom = 15;
                            }
                            var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
                            var out = {
                                width: 15,
                                height: height * 0.975 * (height / target.scrollHeight),
                                left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
                            };
                            var fitAdj = 0;
                            if (height < 408 && this.target === document.body) {
                                fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
                            }
                            if (this.target !== document.body) {
                                out.height = Math.max(out.height, 24);
                            }
                            var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
                            out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
                            if (this.target === document.body) {
                                out.height = Math.max(out.height, 24);
                            }
                            return out;
                        }
                    } else {
                        return getBounds(this.target);
                    }
                }
            },
            {
                key: 'clearCache',
                value: function clearCache() {
                    this._cache = {};
                }
            },
            {
                key: 'cache',
                value: function cache(k, getter) {
                    // More than one module will often need the same DOM info, so
                    // we keep a cache which is cleared on each position call
                    if (typeof this._cache === 'undefined') {
                        this._cache = {};
                    }
                    if (typeof this._cache[k] === 'undefined') {
                        this._cache[k] = getter.call(this);
                    }
                    return this._cache[k];
                }
            },
            {
                key: 'enable',
                value: function enable() {
                    var _this3 = this;
                    var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                    if (!(this.options.addTargetClasses === false)) {
                        addClass(this.target, this.getClass('enabled'));
                    }
                    addClass(this.element, this.getClass('enabled'));
                    this.enabled = true;
                    this.scrollParents.forEach(function(parent) {
                        if (parent !== _this3.target.ownerDocument) {
                            parent.addEventListener('scroll', _this3.position);
                        }
                    });
                    if (pos) {
                        this.position();
                    }
                }
            },
            {
                key: 'disable',
                value: function disable() {
                    var _this4 = this;
                    removeClass(this.target, this.getClass('enabled'));
                    removeClass(this.element, this.getClass('enabled'));
                    this.enabled = false;
                    if (typeof this.scrollParents !== 'undefined') {
                        this.scrollParents.forEach(function(parent) {
                            parent.removeEventListener('scroll', _this4.position);
                        });
                    }
                }
            },
            {
                key: 'destroy',
                value: function destroy() {
                    var _this5 = this;
                    this.disable();
                    tethers.forEach(function(tether, i) {
                        if (tether === _this5) {
                            tethers.splice(i, 1);
                        }
                    });
                    // Remove any elements we were using for convenience from the DOM
                    if (tethers.length === 0) {
                        removeUtilElements();
                    }
                }
            },
            {
                key: 'updateAttachClasses',
                value: function updateAttachClasses(elementAttach, targetAttach) {
                    var _this6 = this;
                    elementAttach = elementAttach || this.attachment;
                    targetAttach = targetAttach || this.targetAttachment;
                    var sides = [
                        'left',
                        'top',
                        'bottom',
                        'right',
                        'middle',
                        'center'
                    ];
                    if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
                        // updateAttachClasses can be called more than once in a position call, so
                        // we need to clean up after ourselves such that when the last defer gets
                        // ran it doesn't add any extra classes from previous calls.
                        this._addAttachClasses.splice(0, this._addAttachClasses.length);
                    }
                    if (typeof this._addAttachClasses === 'undefined') {
                        this._addAttachClasses = [];
                    }
                    var add = this._addAttachClasses;
                    if (elementAttach.top) {
                        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
                    }
                    if (elementAttach.left) {
                        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
                    }
                    if (targetAttach.top) {
                        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
                    }
                    if (targetAttach.left) {
                        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
                    }
                    var all = [];
                    sides.forEach(function(side) {
                        all.push(_this6.getClass('element-attached') + '-' + side);
                        all.push(_this6.getClass('target-attached') + '-' + side);
                    });
                    defer(function() {
                        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
                            return;
                        }
                        updateClasses(_this6.element, _this6._addAttachClasses, all);
                        if (!(_this6.options.addTargetClasses === false)) {
                            updateClasses(_this6.target, _this6._addAttachClasses, all);
                        }
                        delete _this6._addAttachClasses;
                    });
                }
            },
            {
                key: 'position',
                value: function position() {
                    var _this7 = this;
                    var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                    // flushChanges commits the changes immediately, leave true unless you are positioning multiple
                    // tethers (in which case call Tether.Utils.flush yourself when you're done)
                    if (!this.enabled) {
                        return;
                    }
                    this.clearCache();
                    // Turn 'auto' attachments into the appropriate corner or edge
                    var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
                    this.updateAttachClasses(this.attachment, targetAttachment);
                    var elementPos = this.cache('element-bounds', function() {
                        return getBounds(_this7.element);
                    });
                    var width = elementPos.width;
                    var height = elementPos.height;
                    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
                        var _lastSize = this.lastSize;
                        // We cache the height and width to make it possible to position elements that are
                        // getting hidden.
                        width = _lastSize.width;
                        height = _lastSize.height;
                    } else {
                        this.lastSize = {
                            width: width,
                            height: height
                        };
                    }
                    var targetPos = this.cache('target-bounds', function() {
                        return _this7.getTargetBounds();
                    });
                    var targetSize = targetPos;
                    // Get an actual px offset from the attachment
                    var offset = offsetToPx(attachmentToOffset(this.attachment), {
                        width: width,
                        height: height
                    });
                    var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
                    var manualOffset = offsetToPx(this.offset, {
                        width: width,
                        height: height
                    });
                    var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
                    // Add the manually provided offset
                    offset = addOffset(offset, manualOffset);
                    targetOffset = addOffset(targetOffset, manualTargetOffset);
                    // It's now our goal to make (element position + offset) == (target position + target offset)
                    var left = targetPos.left + targetOffset.left - offset.left;
                    var top = targetPos.top + targetOffset.top - offset.top;
                    for(var i = 0; i < TetherBase.modules.length; ++i){
                        var _module2 = TetherBase.modules[i];
                        var ret = _module2.position.call(this, {
                            left: left,
                            top: top,
                            targetAttachment: targetAttachment,
                            targetPos: targetPos,
                            elementPos: elementPos,
                            offset: offset,
                            targetOffset: targetOffset,
                            manualOffset: manualOffset,
                            manualTargetOffset: manualTargetOffset,
                            scrollbarSize: scrollbarSize,
                            attachment: this.attachment
                        });
                        if (ret === false) {
                            return false;
                        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
                            continue;
                        } else {
                            top = ret.top;
                            left = ret.left;
                        }
                    }
                    // We describe the position three different ways to give the optimizer
                    // a chance to decide the best possible way to position the element
                    // with the fewest repaints.
                    var next = {
                        // It's position relative to the page (absolute positioning when
                        // the element is a child of the body)
                        page: {
                            top: top,
                            left: left
                        },
                        // It's position relative to the viewport (fixed positioning)
                        viewport: {
                            top: top - pageYOffset,
                            bottom: pageYOffset - top - height + innerHeight,
                            left: left - pageXOffset,
                            right: pageXOffset - left - width + innerWidth
                        }
                    };
                    var doc = this.target.ownerDocument;
                    var win = doc.defaultView;
                    var scrollbarSize = undefined;
                    if (win.innerHeight > doc.documentElement.clientHeight) {
                        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
                        next.viewport.bottom -= scrollbarSize.height;
                    }
                    if (win.innerWidth > doc.documentElement.clientWidth) {
                        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
                        next.viewport.right -= scrollbarSize.width;
                    }
                    if ([
                        '',
                        'static'
                    ].indexOf(doc.body.style.position) === -1 || [
                        '',
                        'static'
                    ].indexOf(doc.body.parentElement.style.position) === -1) {
                        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
                        next.page.bottom = doc.body.scrollHeight - top - height;
                        next.page.right = doc.body.scrollWidth - left - width;
                    }
                    if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
                        (function() {
                            var offsetParent = _this7.cache('target-offsetparent', function() {
                                return getOffsetParent(_this7.target);
                            });
                            var offsetPosition = _this7.cache('target-offsetparent-bounds', function() {
                                return getBounds(offsetParent);
                            });
                            var offsetParentStyle = getComputedStyle(offsetParent);
                            var offsetParentSize = offsetPosition;
                            var offsetBorder = {};
                            [
                                'Top',
                                'Left',
                                'Bottom',
                                'Right'
                            ].forEach(function(side) {
                                offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
                            });
                            offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
                            offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
                            if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
                                if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                                    // We're within the visible part of the target's scroll parent
                                    var scrollTop = offsetParent.scrollTop;
                                    var scrollLeft = offsetParent.scrollLeft;
                                    // It's position relative to the target's offset parent (absolute positioning when
                                    // the element is moved to be a child of the target's offset parent).
                                    next.offset = {
                                        top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                                        left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                                    };
                                }
                            }
                        })();
                    }
                    // We could also travel up the DOM and try each containing context, rather than only
                    // looking at the body, but we're gonna get diminishing returns.
                    this.move(next);
                    this.history.unshift(next);
                    if (this.history.length > 3) {
                        this.history.pop();
                    }
                    if (flushChanges) {
                        flush();
                    }
                    return true;
                }
            },
            {
                key: 'move',
                value: function move(pos) {
                    var _this8 = this;
                    if (!(typeof this.element.parentNode !== 'undefined')) {
                        return;
                    }
                    var same = {};
                    for(var type in pos){
                        same[type] = {};
                        for(var key in pos[type]){
                            var found = false;
                            for(var i = 0; i < this.history.length; ++i){
                                var point = this.history[i];
                                if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                same[type][key] = true;
                            }
                        }
                    }
                    var css = {
                        top: '',
                        left: '',
                        right: '',
                        bottom: ''
                    };
                    var transcribe = function transcribe(_same, _pos) {
                        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
                        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
                        if (gpu !== false) {
                            var yPos = undefined, xPos = undefined;
                            if (_same.top) {
                                css.top = 0;
                                yPos = _pos.top;
                            } else {
                                css.bottom = 0;
                                yPos = -_pos.bottom;
                            }
                            if (_same.left) {
                                css.left = 0;
                                xPos = _pos.left;
                            } else {
                                css.right = 0;
                                xPos = -_pos.right;
                            }
                            if (typeof window.devicePixelRatio === 'number' && devicePixelRatio % 1 === 0) {
                                xPos = Math.round(xPos * devicePixelRatio) / devicePixelRatio;
                                yPos = Math.round(yPos * devicePixelRatio) / devicePixelRatio;
                            }
                            css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
                            if (transformKey !== 'msTransform') {
                                // The Z transform will keep this in the GPU (faster, and prevents artifacts),
                                // but IE9 doesn't support 3d transforms and will choke.
                                css[transformKey] += " translateZ(0)";
                            }
                        } else {
                            if (_same.top) {
                                css.top = _pos.top + 'px';
                            } else {
                                css.bottom = _pos.bottom + 'px';
                            }
                            if (_same.left) {
                                css.left = _pos.left + 'px';
                            } else {
                                css.right = _pos.right + 'px';
                            }
                        }
                    };
                    var moved = false;
                    if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
                        css.position = 'absolute';
                        transcribe(same.page, pos.page);
                    } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
                        css.position = 'fixed';
                        transcribe(same.viewport, pos.viewport);
                    } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
                        (function() {
                            css.position = 'absolute';
                            var offsetParent = _this8.cache('target-offsetparent', function() {
                                return getOffsetParent(_this8.target);
                            });
                            if (getOffsetParent(_this8.element) !== offsetParent) {
                                defer(function() {
                                    _this8.element.parentNode.removeChild(_this8.element);
                                    offsetParent.appendChild(_this8.element);
                                });
                            }
                            transcribe(same.offset, pos.offset);
                            moved = true;
                        })();
                    } else {
                        css.position = 'absolute';
                        transcribe({
                            top: true,
                            left: true
                        }, pos.page);
                    }
                    if (!moved) {
                        if (this.options.bodyElement) {
                            if (this.element.parentNode !== this.options.bodyElement) {
                                this.options.bodyElement.appendChild(this.element);
                            }
                        } else {
                            var isFullscreenElement = function isFullscreenElement(e) {
                                var d = e.ownerDocument;
                                var fe = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
                                return fe === e;
                            };
                            var offsetParentIsBody = true;
                            var currentNode = this.element.parentNode;
                            while(currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY' && !isFullscreenElement(currentNode)){
                                if (getComputedStyle(currentNode).position !== 'static') {
                                    offsetParentIsBody = false;
                                    break;
                                }
                                currentNode = currentNode.parentNode;
                            }
                            if (!offsetParentIsBody) {
                                this.element.parentNode.removeChild(this.element);
                                this.element.ownerDocument.body.appendChild(this.element);
                            }
                        }
                    }
                    // Any css change will trigger a repaint, so let's avoid one if nothing changed
                    var writeCSS = {};
                    var write = false;
                    for(var key in css){
                        var val = css[key];
                        var elVal = this.element.style[key];
                        if (elVal !== val) {
                            write = true;
                            writeCSS[key] = val;
                        }
                    }
                    if (write) {
                        defer(function() {
                            extend(_this8.element.style, writeCSS);
                            _this8.trigger('repositioned');
                        });
                    }
                }
            }
        ]);
        return TetherClass;
    }(Evented);
    TetherClass.modules = [];
    TetherBase.position = position;
    var Tether = extend(TetherClass, TetherBase);
    /* globals TetherBase */ 'use strict';
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i['return']) _i['return']();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
        };
    }();
    var _TetherBase$Utils = TetherBase.Utils;
    var getBounds = _TetherBase$Utils.getBounds;
    var extend = _TetherBase$Utils.extend;
    var updateClasses = _TetherBase$Utils.updateClasses;
    var defer = _TetherBase$Utils.defer;
    var BOUNDS_FORMAT = [
        'left',
        'top',
        'right',
        'bottom'
    ];
    function getBoundingRect(tether, to) {
        if (to === 'scrollParent') {
            to = tether.scrollParents[0];
        } else if (to === 'window') {
            to = [
                pageXOffset,
                pageYOffset,
                innerWidth + pageXOffset,
                innerHeight + pageYOffset
            ];
        }
        if (to === document) {
            to = to.documentElement;
        }
        if (typeof to.nodeType !== 'undefined') {
            (function() {
                var node = to;
                var size = getBounds(to);
                var pos = size;
                var style = getComputedStyle(to);
                to = [
                    pos.left,
                    pos.top,
                    size.width + pos.left,
                    size.height + pos.top
                ];
                // Account any parent Frames scroll offset
                if (node.ownerDocument !== document) {
                    var win = node.ownerDocument.defaultView;
                    to[0] += win.pageXOffset;
                    to[1] += win.pageYOffset;
                    to[2] += win.pageXOffset;
                    to[3] += win.pageYOffset;
                }
                BOUNDS_FORMAT.forEach(function(side, i) {
                    side = side[0].toUpperCase() + side.substr(1);
                    if (side === 'Top' || side === 'Left') {
                        to[i] += parseFloat(style['border' + side + 'Width']);
                    } else {
                        to[i] -= parseFloat(style['border' + side + 'Width']);
                    }
                });
            })();
        }
        return to;
    }
    TetherBase.modules.push({
        position: function position(_ref) {
            var _this = this;
            var top = _ref.top;
            var left = _ref.left;
            var targetAttachment = _ref.targetAttachment;
            if (!this.options.constraints) {
                return true;
            }
            var _cache = this.cache('element-bounds', function() {
                return getBounds(_this.element);
            });
            var height = _cache.height;
            var width = _cache.width;
            if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
                var _lastSize = this.lastSize;
                // Handle the item getting hidden as a result of our positioning without glitching
                // the classes in and out
                width = _lastSize.width;
                height = _lastSize.height;
            }
            var targetSize = this.cache('target-bounds', function() {
                return _this.getTargetBounds();
            });
            var targetHeight = targetSize.height;
            var targetWidth = targetSize.width;
            var allClasses = [
                this.getClass('pinned'),
                this.getClass('out-of-bounds')
            ];
            this.options.constraints.forEach(function(constraint) {
                var outOfBoundsClass = constraint.outOfBoundsClass;
                var pinnedClass = constraint.pinnedClass;
                if (outOfBoundsClass) {
                    allClasses.push(outOfBoundsClass);
                }
                if (pinnedClass) {
                    allClasses.push(pinnedClass);
                }
            });
            allClasses.forEach(function(cls) {
                [
                    'left',
                    'top',
                    'right',
                    'bottom'
                ].forEach(function(side) {
                    allClasses.push(cls + '-' + side);
                });
            });
            var addClasses = [];
            var tAttachment = extend({}, targetAttachment);
            var eAttachment = extend({}, this.attachment);
            this.options.constraints.forEach(function(constraint) {
                var to = constraint.to;
                var attachment = constraint.attachment;
                var pin = constraint.pin;
                if (typeof attachment === 'undefined') {
                    attachment = '';
                }
                var changeAttachX = undefined, changeAttachY = undefined;
                if (attachment.indexOf(' ') >= 0) {
                    var _attachment$split = attachment.split(' ');
                    var _attachment$split2 = _slicedToArray(_attachment$split, 2);
                    changeAttachY = _attachment$split2[0];
                    changeAttachX = _attachment$split2[1];
                } else {
                    changeAttachX = changeAttachY = attachment;
                }
                var bounds = getBoundingRect(_this, to);
                if (changeAttachY === 'target' || changeAttachY === 'both') {
                    if (top < bounds[1] && tAttachment.top === 'top') {
                        top += targetHeight;
                        tAttachment.top = 'bottom';
                    }
                    if (top + height > bounds[3] && tAttachment.top === 'bottom') {
                        top -= targetHeight;
                        tAttachment.top = 'top';
                    }
                }
                if (changeAttachY === 'together') {
                    if (tAttachment.top === 'top') {
                        if (eAttachment.top === 'bottom' && top < bounds[1]) {
                            top += targetHeight;
                            tAttachment.top = 'bottom';
                            top += height;
                            eAttachment.top = 'top';
                        } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
                            top -= height - targetHeight;
                            tAttachment.top = 'bottom';
                            eAttachment.top = 'bottom';
                        }
                    }
                    if (tAttachment.top === 'bottom') {
                        if (eAttachment.top === 'top' && top + height > bounds[3]) {
                            top -= targetHeight;
                            tAttachment.top = 'top';
                            top -= height;
                            eAttachment.top = 'bottom';
                        } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
                            top += height - targetHeight;
                            tAttachment.top = 'top';
                            eAttachment.top = 'top';
                        }
                    }
                    if (tAttachment.top === 'middle') {
                        if (top + height > bounds[3] && eAttachment.top === 'top') {
                            top -= height;
                            eAttachment.top = 'bottom';
                        } else if (top < bounds[1] && eAttachment.top === 'bottom') {
                            top += height;
                            eAttachment.top = 'top';
                        }
                    }
                }
                if (changeAttachX === 'target' || changeAttachX === 'both') {
                    if (left < bounds[0] && tAttachment.left === 'left') {
                        left += targetWidth;
                        tAttachment.left = 'right';
                    }
                    if (left + width > bounds[2] && tAttachment.left === 'right') {
                        left -= targetWidth;
                        tAttachment.left = 'left';
                    }
                }
                if (changeAttachX === 'together') {
                    if (left < bounds[0] && tAttachment.left === 'left') {
                        if (eAttachment.left === 'right') {
                            left += targetWidth;
                            tAttachment.left = 'right';
                            left += width;
                            eAttachment.left = 'left';
                        } else if (eAttachment.left === 'left') {
                            left += targetWidth;
                            tAttachment.left = 'right';
                            left -= width;
                            eAttachment.left = 'right';
                        }
                    } else if (left + width > bounds[2] && tAttachment.left === 'right') {
                        if (eAttachment.left === 'left') {
                            left -= targetWidth;
                            tAttachment.left = 'left';
                            left -= width;
                            eAttachment.left = 'right';
                        } else if (eAttachment.left === 'right') {
                            left -= targetWidth;
                            tAttachment.left = 'left';
                            left += width;
                            eAttachment.left = 'left';
                        }
                    } else if (tAttachment.left === 'center') {
                        if (left + width > bounds[2] && eAttachment.left === 'left') {
                            left -= width;
                            eAttachment.left = 'right';
                        } else if (left < bounds[0] && eAttachment.left === 'right') {
                            left += width;
                            eAttachment.left = 'left';
                        }
                    }
                }
                if (changeAttachY === 'element' || changeAttachY === 'both') {
                    if (top < bounds[1] && eAttachment.top === 'bottom') {
                        top += height;
                        eAttachment.top = 'top';
                    }
                    if (top + height > bounds[3] && eAttachment.top === 'top') {
                        top -= height;
                        eAttachment.top = 'bottom';
                    }
                }
                if (changeAttachX === 'element' || changeAttachX === 'both') {
                    if (left < bounds[0]) {
                        if (eAttachment.left === 'right') {
                            left += width;
                            eAttachment.left = 'left';
                        } else if (eAttachment.left === 'center') {
                            left += width / 2;
                            eAttachment.left = 'left';
                        }
                    }
                    if (left + width > bounds[2]) {
                        if (eAttachment.left === 'left') {
                            left -= width;
                            eAttachment.left = 'right';
                        } else if (eAttachment.left === 'center') {
                            left -= width / 2;
                            eAttachment.left = 'right';
                        }
                    }
                }
                if (typeof pin === 'string') {
                    pin = pin.split(',').map(function(p) {
                        return p.trim();
                    });
                } else if (pin === true) {
                    pin = [
                        'top',
                        'left',
                        'right',
                        'bottom'
                    ];
                }
                pin = pin || [];
                var pinned = [];
                var oob = [];
                if (top < bounds[1]) {
                    if (pin.indexOf('top') >= 0) {
                        top = bounds[1];
                        pinned.push('top');
                    } else {
                        oob.push('top');
                    }
                }
                if (top + height > bounds[3]) {
                    if (pin.indexOf('bottom') >= 0) {
                        top = bounds[3] - height;
                        pinned.push('bottom');
                    } else {
                        oob.push('bottom');
                    }
                }
                if (left < bounds[0]) {
                    if (pin.indexOf('left') >= 0) {
                        left = bounds[0];
                        pinned.push('left');
                    } else {
                        oob.push('left');
                    }
                }
                if (left + width > bounds[2]) {
                    if (pin.indexOf('right') >= 0) {
                        left = bounds[2] - width;
                        pinned.push('right');
                    } else {
                        oob.push('right');
                    }
                }
                if (pinned.length) {
                    (function() {
                        var pinnedClass = undefined;
                        if (typeof _this.options.pinnedClass !== 'undefined') {
                            pinnedClass = _this.options.pinnedClass;
                        } else {
                            pinnedClass = _this.getClass('pinned');
                        }
                        addClasses.push(pinnedClass);
                        pinned.forEach(function(side) {
                            addClasses.push(pinnedClass + '-' + side);
                        });
                    })();
                }
                if (oob.length) {
                    (function() {
                        var oobClass = undefined;
                        if (typeof _this.options.outOfBoundsClass !== 'undefined') {
                            oobClass = _this.options.outOfBoundsClass;
                        } else {
                            oobClass = _this.getClass('out-of-bounds');
                        }
                        addClasses.push(oobClass);
                        oob.forEach(function(side) {
                            addClasses.push(oobClass + '-' + side);
                        });
                    })();
                }
                if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
                    eAttachment.left = tAttachment.left = false;
                }
                if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
                    eAttachment.top = tAttachment.top = false;
                }
                if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
                    _this.updateAttachClasses(eAttachment, tAttachment);
                    _this.trigger('update', {
                        attachment: eAttachment,
                        targetAttachment: tAttachment
                    });
                }
            });
            defer(function() {
                if (!(_this.options.addTargetClasses === false)) {
                    updateClasses(_this.target, addClasses, allClasses);
                }
                updateClasses(_this.element, addClasses, allClasses);
            });
            return {
                top: top,
                left: left
            };
        }
    });
    /* globals TetherBase */ 'use strict';
    var _TetherBase$Utils = TetherBase.Utils;
    var getBounds = _TetherBase$Utils.getBounds;
    var updateClasses = _TetherBase$Utils.updateClasses;
    var defer = _TetherBase$Utils.defer;
    TetherBase.modules.push({
        position: function position(_ref) {
            var _this = this;
            var top = _ref.top;
            var left = _ref.left;
            var _cache = this.cache('element-bounds', function() {
                return getBounds(_this.element);
            });
            var height = _cache.height;
            var width = _cache.width;
            var targetPos = this.getTargetBounds();
            var bottom = top + height;
            var right = left + width;
            var abutted = [];
            if (top <= targetPos.bottom && bottom >= targetPos.top) {
                [
                    'left',
                    'right'
                ].forEach(function(side) {
                    var targetPosSide = targetPos[side];
                    if (targetPosSide === left || targetPosSide === right) {
                        abutted.push(side);
                    }
                });
            }
            if (left <= targetPos.right && right >= targetPos.left) {
                [
                    'top',
                    'bottom'
                ].forEach(function(side) {
                    var targetPosSide = targetPos[side];
                    if (targetPosSide === top || targetPosSide === bottom) {
                        abutted.push(side);
                    }
                });
            }
            var allClasses = [];
            var addClasses = [];
            var sides = [
                'left',
                'top',
                'right',
                'bottom'
            ];
            allClasses.push(this.getClass('abutted'));
            sides.forEach(function(side) {
                allClasses.push(_this.getClass('abutted') + '-' + side);
            });
            if (abutted.length) {
                addClasses.push(this.getClass('abutted'));
            }
            abutted.forEach(function(side) {
                addClasses.push(_this.getClass('abutted') + '-' + side);
            });
            defer(function() {
                if (!(_this.options.addTargetClasses === false)) {
                    updateClasses(_this.target, addClasses, allClasses);
                }
                updateClasses(_this.element, addClasses, allClasses);
            });
            return true;
        }
    });
    /* globals TetherBase */ 'use strict';
    var _slicedToArray = function() {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i['return']) _i['return']();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        return function(arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
        };
    }();
    TetherBase.modules.push({
        position: function position(_ref) {
            var top = _ref.top;
            var left = _ref.left;
            if (!this.options.shift) {
                return;
            }
            var shift = this.options.shift;
            if (typeof this.options.shift === 'function') {
                shift = this.options.shift.call(this, {
                    top: top,
                    left: left
                });
            }
            var shiftTop = undefined, shiftLeft = undefined;
            if (typeof shift === 'string') {
                shift = shift.split(' ');
                shift[1] = shift[1] || shift[0];
                var _shift = shift;
                var _shift2 = _slicedToArray(_shift, 2);
                shiftTop = _shift2[0];
                shiftLeft = _shift2[1];
                shiftTop = parseFloat(shiftTop, 10);
                shiftLeft = parseFloat(shiftLeft, 10);
            } else {
                shiftTop = shift.top;
                shiftLeft = shift.left;
            }
            top += shiftTop;
            left += shiftLeft;
            return {
                top: top,
                left: left
            };
        }
    });
    return Tether;
});
}),
"[project]/blito-frontend/node_modules/react-tether/lib/TetherComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(__turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var _propTypes = _interopRequireDefault(__turbopack_context__.r("[project]/blito-frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)"));
var _reactDom = _interopRequireDefault(__turbopack_context__.r("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)"));
var _tether = _interopRequireDefault(__turbopack_context__.r("[project]/blito-frontend/node_modules/tether/dist/js/tether.js [app-ssr] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
if (!_tether.default) {
    console.error('It looks like Tether has not been included. Please load this dependency first https://github.com/HubSpot/tether');
}
var renderElementToPropTypes = [
    _propTypes.default.string,
    _propTypes.default.shape({
        appendChild: _propTypes.default.func.isRequired
    })
];
var childrenPropType = function childrenPropType(_ref, propName, componentName) {
    var children = _ref.children;
    var childCount = _react.Children.count(children);
    if (childCount > 0) {
        return new Error("".concat(componentName, " no longer uses children to render components. Please use renderTarget and renderElement instead."));
    }
};
var attachmentPositions = [
    'auto auto',
    'top left',
    'top center',
    'top right',
    'middle left',
    'middle center',
    'middle right',
    'bottom left',
    'bottom center',
    'bottom right'
];
var TetherComponent = /*#__PURE__*/ function(_Component) {
    _inherits(TetherComponent, _Component);
    function TetherComponent() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, TetherComponent);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TetherComponent)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_targetNode", _react.default.createRef());
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_elementNode", _react.default.createRef());
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_elementParentNode", null);
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_tetherInstance", null);
        return _this;
    }
    _createClass(TetherComponent, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._createContainer(); // The container is created after mounting
                // so we need to force an update to
                // enable tether
                // Cannot move _createContainer into the constructor
                // because of is a side effect: https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
                this.forceUpdate();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                // If the container related props have changed, then update the container
                if (prevProps.renderElementTag !== this.props.renderElementTag || prevProps.renderElementTo !== this.props.renderElementTo) {
                    this._createContainer();
                } // Verify if className props have changed
                if (this._elementParentNode && prevProps.className !== this.props.className) {
                    var _this$_elementParentN, _this$_elementParentN2;
                    // Add a bunch of checks against weird classNames
                    var prevClasses = (prevProps.className || '').split(' ').filter(function(value) {
                        return value.length > 0;
                    });
                    var currClasses = (this.props.className || '').split(' ').filter(function(value) {
                        return value.length > 0;
                    });
                    (_this$_elementParentN = this._elementParentNode.classList).remove.apply(_this$_elementParentN, _toConsumableArray(prevClasses));
                    (_this$_elementParentN2 = this._elementParentNode.classList).add.apply(_this$_elementParentN2, _toConsumableArray(currClasses));
                }
                this._update();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this._destroy();
            }
        },
        {
            key: "getTetherInstance",
            value: function getTetherInstance() {
                return this._tetherInstance;
            }
        },
        {
            key: "disable",
            value: function disable() {
                this._tetherInstance.disable();
            }
        },
        {
            key: "enable",
            value: function enable() {
                this._tetherInstance.enable();
            }
        },
        {
            key: "on",
            value: function on(event, handler, ctx) {
                this._tetherInstance.on(event, handler, ctx);
            }
        },
        {
            key: "once",
            value: function once(event, handler, ctx) {
                this._tetherInstance.once(event, handler, ctx);
            }
        },
        {
            key: "off",
            value: function off(event, handler) {
                this._tetherInstance.off(event, handler);
            }
        },
        {
            key: "position",
            value: function position() {
                this._tetherInstance.position();
            }
        },
        {
            key: "_runRenders",
            value: function _runRenders() {
                // To obtain the components, we run the render functions and pass in the ref
                // Later, when the component is mounted, the ref functions will be called
                // and trigger a tether update
                var targetComponent = typeof this.props.renderTarget === 'function' ? this.props.renderTarget(this._targetNode) : null;
                var elementComponent = typeof this.props.renderElement === 'function' ? this.props.renderElement(this._elementNode) : null; // Check if what has been returned is a valid react element
                if (!(0, _react.isValidElement)(targetComponent)) {
                    targetComponent = null;
                }
                if (!(0, _react.isValidElement)(elementComponent)) {
                    elementComponent = null;
                }
                return {
                    targetComponent: targetComponent,
                    elementComponent: elementComponent
                };
            }
        },
        {
            key: "_createTetherInstance",
            value: function _createTetherInstance(tetherOptions) {
                if (this._tetherInstance) {
                    this._destroy();
                }
                this._tetherInstance = new _tether.default(tetherOptions);
                this._registerEventListeners();
            }
        },
        {
            key: "_destroyTetherInstance",
            value: function _destroyTetherInstance() {
                if (this._tetherInstance) {
                    this._tetherInstance.destroy();
                    this._tetherInstance = null;
                }
            }
        },
        {
            key: "_registerEventListeners",
            value: function _registerEventListeners() {
                var _this2 = this;
                this.on('update', function() {
                    for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
                        args[_key2] = arguments[_key2];
                    }
                    return _this2.props.onUpdate && _this2.props.onUpdate.apply(_this2, args);
                });
                this.on('repositioned', function() {
                    for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
                        args[_key3] = arguments[_key3];
                    }
                    return _this2.props.onRepositioned && _this2.props.onRepositioned.apply(_this2, args);
                });
            }
        },
        {
            key: "_destroy",
            value: function _destroy() {
                this._destroyTetherInstance();
                this._removeContainer();
            }
        },
        {
            key: "_createContainer",
            value: function _createContainer() {
                // Create element node container if it hasn't been yet
                this._removeContainer();
                var _this$props = this.props, renderElementTag = _this$props.renderElementTag, className = _this$props.className; // Create a node that we can stick our content Component in
                this._elementParentNode = document.createElement(renderElementTag);
                this._elementParentNode.className = className || '';
            }
        },
        {
            key: "_addContainerToDOM",
            value: function _addContainerToDOM() {
                // Append node to the render node
                if (this._elementParentNode.parentNode !== this._renderNode) {
                    this._renderNode.appendChild(this._elementParentNode);
                }
            }
        },
        {
            key: "_removeContainer",
            value: function _removeContainer() {
                if (this._elementParentNode && this._elementParentNode.parentNode) {
                    this._elementParentNode.parentNode.removeChild(this._elementParentNode);
                }
            }
        },
        {
            key: "_update",
            value: function _update() {
                // If no element component provided, bail out
                var shouldDestroy = !this._elementNode.current || !this._targetNode.current;
                if (shouldDestroy) {
                    // Destroy Tether element if it has been created
                    this._destroy();
                    return;
                }
                this._updateTether();
            }
        },
        {
            key: "_updateTether",
            value: function _updateTether() {
                var _this$props2 = this.props, children = _this$props2.children, renderElementTag = _this$props2.renderElementTag, renderElementTo = _this$props2.renderElementTo, id = _this$props2.id, className = _this$props2.className, style = _this$props2.style, renderTarget = _this$props2.renderTarget, renderElement = _this$props2.renderElement, options = _objectWithoutProperties(_this$props2, [
                    "children",
                    "renderElementTag",
                    "renderElementTo",
                    "id",
                    "className",
                    "style",
                    "renderTarget",
                    "renderElement"
                ]);
                var tetherOptions = _objectSpread({
                    target: this._targetNode.current,
                    element: this._elementParentNode
                }, options);
                var idStr = id || '';
                if (this._elementParentNode.id !== idStr) {
                    this._elementParentNode.id = idStr;
                }
                if (style) {
                    var elementStyle = this._elementParentNode.style;
                    Object.keys(style).forEach(function(key) {
                        if (elementStyle[key] !== style[key]) {
                            elementStyle[key] = style[key];
                        }
                    });
                }
                this._addContainerToDOM();
                if (this._tetherInstance) {
                    this._tetherInstance.setOptions(tetherOptions);
                } else {
                    this._createTetherInstance(tetherOptions);
                }
                this._tetherInstance.position();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$_runRenders = this._runRenders(), targetComponent = _this$_runRenders.targetComponent, elementComponent = _this$_runRenders.elementComponent;
                if (!targetComponent) {
                    return null;
                }
                return _react.default.createElement(_react.default.Fragment, null, targetComponent, elementComponent && this._elementParentNode && _reactDom.default.createPortal(elementComponent, this._elementParentNode));
            }
        },
        {
            key: "_renderNode",
            get: function get() {
                var renderElementTo = this.props.renderElementTo;
                if (typeof renderElementTo === 'string') {
                    return document.querySelector(renderElementTo);
                }
                return renderElementTo || document.body;
            }
        }
    ]);
    return TetherComponent;
}(_react.Component);
_defineProperty(TetherComponent, "propTypes", {
    renderElementTag: _propTypes.default.string,
    renderElementTo: _propTypes.default.oneOfType(renderElementToPropTypes),
    attachment: _propTypes.default.oneOf(attachmentPositions).isRequired,
    targetAttachment: _propTypes.default.oneOf(attachmentPositions),
    offset: _propTypes.default.string,
    targetOffset: _propTypes.default.string,
    targetModifier: _propTypes.default.string,
    enabled: _propTypes.default.bool,
    classes: _propTypes.default.object,
    classPrefix: _propTypes.default.string,
    optimizations: _propTypes.default.object,
    constraints: _propTypes.default.array,
    id: _propTypes.default.string,
    className: _propTypes.default.string,
    style: _propTypes.default.object,
    onUpdate: _propTypes.default.func,
    onRepositioned: _propTypes.default.func,
    renderTarget: _propTypes.default.func,
    renderElement: _propTypes.default.func,
    children: childrenPropType
});
_defineProperty(TetherComponent, "defaultProps", {
    renderElementTag: 'div',
    renderElementTo: null
});
var _default = TetherComponent;
exports.default = _default;
}),
"[project]/blito-frontend/node_modules/react-tether/lib/react-tether.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
        return _TetherComponent.default;
    }
});
var _TetherComponent = _interopRequireDefault(__turbopack_context__.r("[project]/blito-frontend/node_modules/react-tether/lib/TetherComponent.js [app-ssr] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
}),
"[project]/blito-frontend/node_modules/react-onclickoutside/dist/react-onclickoutside.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IGNORE_CLASS_NAME",
    ()=>IGNORE_CLASS_NAME,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
} /**
 * Check whether some DOM node is our Component's node.
 */ 
function isNodeFound(current, componentNode, ignoreClass) {
    if (current === componentNode) {
        return true;
    } // SVG <use/> elements do not technically reside in the rendered DOM, so
    // they do not have classList directly, but they offer a link to their
    // corresponding element, which can have classList. This extra check is for
    // that case.
    // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
    // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
    if (current.correspondingElement) {
        return current.correspondingElement.classList.contains(ignoreClass);
    }
    return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */ function findHighest(current, componentNode, ignoreClass) {
    if (current === componentNode) {
        return true;
    } // If source=local then this event came from 'somewhere'
    // inside and should be ignored. We could handle this with
    // a layered approach, too, but that requires going back to
    // thinking in terms of Dom node nesting, running counter
    // to React's 'you shouldn't care about the DOM' philosophy.
    // Also cover shadowRoot node by checking current.host
    while(current.parentNode || current.host){
        // Only check normal node without shadowRoot
        if (current.parentNode && isNodeFound(current, componentNode, ignoreClass)) {
            return true;
        }
        current = current.parentNode || current.host;
    }
    return current;
}
/**
 * Check if the browser scrollbar was clicked
 */ function clickedScrollbar(evt) {
    return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
} // ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    var passive;
    var options;
    var noop;
};
function autoInc(seed) {
    if (seed === void 0) {
        seed = 0;
    }
    return function() {
        return ++seed;
    };
}
var uid = autoInc();
var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = [
    'touchstart',
    'touchmove'
];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */ function getEventHandlerOptions(instance, eventName) {
    var handlerOptions = {};
    var isTouchEvent = touchEvents.indexOf(eventName) !== -1;
    if (isTouchEvent && passiveEventSupport) {
        handlerOptions.passive = !instance.props.preventDefault;
    }
    return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */ function onClickOutsideHOC(WrappedComponent, config) {
    var _class, _temp;
    var componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    return _temp = _class = /*#__PURE__*/ function(_Component) {
        _inheritsLoose(onClickOutside, _Component);
        function onClickOutside(props) {
            var _this;
            _this = _Component.call(this, props) || this;
            _this.__outsideClickHandler = function(event) {
                if (typeof _this.__clickOutsideHandlerProp === 'function') {
                    _this.__clickOutsideHandlerProp(event);
                    return;
                }
                var instance = _this.getInstance();
                if (typeof instance.props.handleClickOutside === 'function') {
                    instance.props.handleClickOutside(event);
                    return;
                }
                if (typeof instance.handleClickOutside === 'function') {
                    instance.handleClickOutside(event);
                    return;
                }
                throw new Error("WrappedComponent: " + componentName + " lacks a handleClickOutside(event) function for processing outside click events.");
            };
            _this.__getComponentNode = function() {
                var instance = _this.getInstance();
                if (config && typeof config.setClickOutsideRef === 'function') {
                    return config.setClickOutsideRef()(instance);
                }
                if (typeof instance.setClickOutsideRef === 'function') {
                    return instance.setClickOutsideRef();
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findDOMNode"])(instance);
            };
            _this.enableOnClickOutside = function() {
                if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
                    return;
                }
                if (typeof passiveEventSupport === 'undefined') {
                    passiveEventSupport = testPassiveEventSupport();
                }
                enabledInstances[_this._uid] = true;
                var events = _this.props.eventTypes;
                if (!events.forEach) {
                    events = [
                        events
                    ];
                }
                handlersMap[_this._uid] = function(event) {
                    if (_this.componentNode === null) return;
                    if (_this.initTimeStamp > event.timeStamp) return;
                    if (_this.props.preventDefault) {
                        event.preventDefault();
                    }
                    if (_this.props.stopPropagation) {
                        event.stopPropagation();
                    }
                    if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
                    var current = event.composed && event.composedPath && event.composedPath().shift() || event.target;
                    if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
                        return;
                    }
                    _this.__outsideClickHandler(event);
                };
                events.forEach(function(eventName) {
                    document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_assertThisInitialized(_this), eventName));
                });
            };
            _this.disableOnClickOutside = function() {
                delete enabledInstances[_this._uid];
                var fn = handlersMap[_this._uid];
                if (fn && typeof document !== 'undefined') {
                    var events = _this.props.eventTypes;
                    if (!events.forEach) {
                        events = [
                            events
                        ];
                    }
                    events.forEach(function(eventName) {
                        return document.removeEventListener(eventName, fn, getEventHandlerOptions(_assertThisInitialized(_this), eventName));
                    });
                    delete handlersMap[_this._uid];
                }
            };
            _this.getRef = function(ref) {
                return _this.instanceRef = ref;
            };
            _this._uid = uid();
            _this.initTimeStamp = performance.now();
            return _this;
        }
        /**
     * Access the WrappedComponent's instance.
     */ var _proto = onClickOutside.prototype;
        _proto.getInstance = function getInstance() {
            if (WrappedComponent.prototype && !WrappedComponent.prototype.isReactComponent) {
                return this;
            }
            var ref = this.instanceRef;
            return ref.getInstance ? ref.getInstance() : ref;
        };
        /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */ _proto.componentDidMount = function componentDidMount() {
            // If we are in an environment without a DOM such
            // as shallow rendering or snapshots then we exit
            // early to prevent any unhandled errors being thrown.
            if (typeof document === 'undefined' || !document.createElement) {
                return;
            }
            var instance = this.getInstance();
            if (config && typeof config.handleClickOutside === 'function') {
                this.__clickOutsideHandlerProp = config.handleClickOutside(instance);
                if (typeof this.__clickOutsideHandlerProp !== 'function') {
                    throw new Error("WrappedComponent: " + componentName + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
                }
            }
            this.componentNode = this.__getComponentNode(); // return early so we dont initiate onClickOutside
            if (this.props.disableOnClickOutside) return;
            this.enableOnClickOutside();
        };
        _proto.componentDidUpdate = function componentDidUpdate() {
            this.componentNode = this.__getComponentNode();
        };
        _proto.componentWillUnmount = function componentWillUnmount() {
            this.disableOnClickOutside();
        };
        /**
     * Pass-through render
     */ _proto.render = function render() {
            // eslint-disable-next-line no-unused-vars
            var _this$props = this.props;
            _this$props.excludeScrollbar;
            var props = _objectWithoutPropertiesLoose(_this$props, [
                "excludeScrollbar"
            ]);
            if (WrappedComponent.prototype && WrappedComponent.prototype.isReactComponent) {
                props.ref = this.getRef;
            } else {
                props.wrappedRef = this.getRef;
            }
            props.disableOnClickOutside = this.disableOnClickOutside;
            props.enableOnClickOutside = this.enableOnClickOutside;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(WrappedComponent, props);
        };
        return onClickOutside;
    }(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]), _class.displayName = "OnClickOutside(" + componentName + ")", _class.defaultProps = {
        eventTypes: [
            'mousedown',
            'touchstart'
        ],
        excludeScrollbar: config && config.excludeScrollbar || false,
        outsideClickIgnoreClass: IGNORE_CLASS_NAME,
        preventDefault: false,
        stopPropagation: false
    }, _class.getClass = function() {
        return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
    }, _temp;
}
const __TURBOPACK__default__export__ = onClickOutsideHOC;
;
}),
"[project]/blito-frontend/node_modules/lodash.range/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var funcTag = '[object Function]', genTag = '[object GeneratorFunction]', symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeCeil = Math.ceil, nativeMax = Math.max;
/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */ function baseRange(start, end, step, fromRight) {
    var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
    while(length--){
        result[fromRight ? length : ++index] = start;
        start += step;
    }
    return result;
}
/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */ function createRange(fromRight) {
    return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
            end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
            end = start;
            start = 0;
        } else {
            end = toFinite(end);
        }
        step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
        return baseRange(start, end, step, fromRight);
    };
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
        return false;
    }
    var type = typeof index;
    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
        return eq(object[index], value);
    }
    return false;
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */ var range = createRange();
module.exports = range;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_global.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_core.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var core = module.exports = {
    version: '2.6.12'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_a-function.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function(it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_ctx.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// optional / simple context binding
var aFunction = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_a-function.js [app-ssr] (ecmascript)");
module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch(length){
        case 1:
            return function(a) {
                return fn.call(that, a);
            };
        case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };
        case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
    }
    return function() {
        return fn.apply(that, arguments);
    };
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_is-object.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_an-object.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var isObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_is-object.js [app-ssr] (ecmascript)");
module.exports = function(it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_fails.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function(exec) {
    try {
        return !!exec();
    } catch (e) {
        return true;
    }
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_descriptors.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_fails.js [app-ssr] (ecmascript)")(function() {
    return Object.defineProperty({}, 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_dom-create.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var isObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_is-object.js [app-ssr] (ecmascript)");
var document = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_global.js [app-ssr] (ecmascript)").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return is ? document.createElement(it) : {};
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_ie8-dom-define.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = !__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_descriptors.js [app-ssr] (ecmascript)") && !__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_fails.js [app-ssr] (ecmascript)")(function() {
    return Object.defineProperty(__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_dom-create.js [app-ssr] (ecmascript)")('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a != 7;
});
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_to-primitive.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_is-object.js [app-ssr] (ecmascript)");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-dp.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var anObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_an-object.js [app-ssr] (ecmascript)");
var IE8_DOM_DEFINE = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_ie8-dom-define.js [app-ssr] (ecmascript)");
var toPrimitive = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-primitive.js [app-ssr] (ecmascript)");
var dP = Object.defineProperty;
exports.f = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_descriptors.js [app-ssr] (ecmascript)") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
    } catch (e) {}
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_property-desc.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_hide.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var dP = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-dp.js [app-ssr] (ecmascript)");
var createDesc = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_property-desc.js [app-ssr] (ecmascript)");
module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_descriptors.js [app-ssr] (ecmascript)") ? function(object, key, value) {
    return dP.f(object, key, createDesc(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_has.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_export.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var global = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_global.js [app-ssr] (ecmascript)");
var core = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_core.js [app-ssr] (ecmascript)");
var ctx = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_ctx.js [app-ssr] (ecmascript)");
var hide = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_hide.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_has.js [app-ssr] (ecmascript)");
var PROTOTYPE = 'prototype';
var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for(key in source){
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        if (own && has(exports, key)) continue;
        // export native or passed
        out = own ? target[key] : source[key];
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
            var F = function(a, b, c) {
                if (this instanceof C) {
                    switch(arguments.length){
                        case 0:
                            return new C();
                        case 1:
                            return new C(a);
                        case 2:
                            return new C(a, b);
                    }
                    return new C(a, b, c);
                }
                return C.apply(this, arguments);
            };
            F[PROTOTYPE] = C[PROTOTYPE];
            return F;
        // make static versions for prototype methods
        }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
        if (IS_PROTO) {
            (exports.virtual || (exports.virtual = {}))[key] = out;
            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
            if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
        }
    }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_cof.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toString = {}.toString;
module.exports = function(it) {
    return toString.call(it).slice(8, -1);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_iobject.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_cof.js [app-ssr] (ecmascript)");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_defined.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_to-iobject.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_iobject.js [app-ssr] (ecmascript)");
var defined = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_defined.js [app-ssr] (ecmascript)");
module.exports = function(it) {
    return IObject(defined(it));
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_to-integer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_to-length.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 7.1.15 ToLength
var toInteger = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-integer.js [app-ssr] (ecmascript)");
var min = Math.min;
module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_to-absolute-index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toInteger = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-integer.js [app-ssr] (ecmascript)");
var max = Math.max;
var min = Math.min;
module.exports = function(index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_array-includes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-iobject.js [app-ssr] (ecmascript)");
var toLength = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-length.js [app-ssr] (ecmascript)");
var toAbsoluteIndex = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-absolute-index.js [app-ssr] (ecmascript)");
module.exports = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++)if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_library.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = true;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_shared.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var core = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_core.js [app-ssr] (ecmascript)");
var global = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_global.js [app-ssr] (ecmascript)");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
    version: core.version,
    mode: __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_library.js [app-ssr] (ecmascript)") ? 'pure' : 'global',
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_uid.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var id = 0;
var px = Math.random();
module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_shared-key.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var shared = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_shared.js [app-ssr] (ecmascript)")('keys');
var uid = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_uid.js [app-ssr] (ecmascript)");
module.exports = function(key) {
    return shared[key] || (shared[key] = uid(key));
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-keys-internal.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var has = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_has.js [app-ssr] (ecmascript)");
var toIObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-iobject.js [app-ssr] (ecmascript)");
var arrayIndexOf = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_array-includes.js [app-ssr] (ecmascript)")(false);
var IE_PROTO = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_shared-key.js [app-ssr] (ecmascript)")('IE_PROTO');
module.exports = function(object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)if (key != IE_PROTO) has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_enum-bug-keys.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-keys.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-keys-internal.js [app-ssr] (ecmascript)");
var enumBugKeys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_enum-bug-keys.js [app-ssr] (ecmascript)");
module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-gops.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.f = Object.getOwnPropertySymbols;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-pie.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.f = ({}).propertyIsEnumerable;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_to-object.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 7.1.13 ToObject(argument)
var defined = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_defined.js [app-ssr] (ecmascript)");
module.exports = function(it) {
    return Object(defined(it));
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-assign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_descriptors.js [app-ssr] (ecmascript)");
var getKeys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-keys.js [app-ssr] (ecmascript)");
var gOPS = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-gops.js [app-ssr] (ecmascript)");
var pIE = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-pie.js [app-ssr] (ecmascript)");
var toObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-object.js [app-ssr] (ecmascript)");
var IObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_iobject.js [app-ssr] (ecmascript)");
var $assign = Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_fails.js [app-ssr] (ecmascript)")(function() {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
        B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
    var T = toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = gOPS.f;
    var isEnum = pIE.f;
    while(aLen > index){
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while(length > j){
            key = keys[j++];
            if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
        }
    }
    return T;
} : $assign;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.assign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_export.js [app-ssr] (ecmascript)");
$export($export.S + $export.F, 'Object', {
    assign: __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-assign.js [app-ssr] (ecmascript)")
});
}),
"[project]/blito-frontend/node_modules/core-js/library/fn/object/assign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.assign.js [app-ssr] (ecmascript)");
module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_core.js [app-ssr] (ecmascript)").Object.assign;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_string-at.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var toInteger = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-integer.js [app-ssr] (ecmascript)");
var defined = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_defined.js [app-ssr] (ecmascript)");
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING) {
    return function(that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_redefine.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_hide.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_iterators.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-dps.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var dP = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-dp.js [app-ssr] (ecmascript)");
var anObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_an-object.js [app-ssr] (ecmascript)");
var getKeys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-keys.js [app-ssr] (ecmascript)");
module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_descriptors.js [app-ssr] (ecmascript)") ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while(length > i)dP.f(O, P = keys[i++], Properties[P]);
    return O;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_html.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var document = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_global.js [app-ssr] (ecmascript)").document;
module.exports = document && document.documentElement;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-create.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_an-object.js [app-ssr] (ecmascript)");
var dPs = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-dps.js [app-ssr] (ecmascript)");
var enumBugKeys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_enum-bug-keys.js [app-ssr] (ecmascript)");
var IE_PROTO = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_shared-key.js [app-ssr] (ecmascript)")('IE_PROTO');
var Empty = function() {};
var PROTOTYPE = 'prototype';
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_dom-create.js [app-ssr] (ecmascript)")('iframe');
    var i = enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_html.js [app-ssr] (ecmascript)").appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
};
module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_wks.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var store = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_shared.js [app-ssr] (ecmascript)")('wks');
var uid = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_uid.js [app-ssr] (ecmascript)");
var Symbol = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_global.js [app-ssr] (ecmascript)").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';
var $exports = module.exports = function(name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};
$exports.store = store;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_set-to-string-tag.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var def = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-dp.js [app-ssr] (ecmascript)").f;
var has = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_has.js [app-ssr] (ecmascript)");
var TAG = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks.js [app-ssr] (ecmascript)")('toStringTag');
module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
        configurable: true,
        value: tag
    });
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_iter-create.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var create = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-create.js [app-ssr] (ecmascript)");
var descriptor = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_property-desc.js [app-ssr] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_set-to-string-tag.js [app-ssr] (ecmascript)");
var IteratorPrototype = {};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_hide.js [app-ssr] (ecmascript)")(IteratorPrototype, __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks.js [app-ssr] (ecmascript)")('iterator'), function() {
    return this;
});
module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, {
        next: descriptor(1, next)
    });
    setToStringTag(Constructor, NAME + ' Iterator');
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-gpo.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_has.js [app-ssr] (ecmascript)");
var toObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-object.js [app-ssr] (ecmascript)");
var IE_PROTO = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_shared-key.js [app-ssr] (ecmascript)")('IE_PROTO');
var ObjectProto = Object.prototype;
module.exports = Object.getPrototypeOf || function(O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectProto : null;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_iter-define.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var LIBRARY = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_library.js [app-ssr] (ecmascript)");
var $export = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_export.js [app-ssr] (ecmascript)");
var redefine = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_redefine.js [app-ssr] (ecmascript)");
var hide = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_hide.js [app-ssr] (ecmascript)");
var Iterators = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_iterators.js [app-ssr] (ecmascript)");
var $iterCreate = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_iter-create.js [app-ssr] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_set-to-string-tag.js [app-ssr] (ecmascript)");
var getPrototypeOf = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-gpo.js [app-ssr] (ecmascript)");
var ITERATOR = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks.js [app-ssr] (ecmascript)")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
var returnThis = function() {
    return this;
};
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch(kind){
            case KEYS:
                return function keys() {
                    return new Constructor(this, kind);
                };
            case VALUES:
                return function values() {
                    return new Constructor(this, kind);
                };
        }
        return function entries() {
            return new Constructor(this, kind);
        };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
        }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
            return $native.call(this);
        };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
        methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
        };
        if (FORCED) for(key in methods){
            if (!(key in proto)) redefine(proto, key, methods[key]);
        }
        else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es6.string.iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $at = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_string-at.js [app-ssr] (ecmascript)")(true);
// 21.1.3.27 String.prototype[@@iterator]()
__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_iter-define.js [app-ssr] (ecmascript)")(String, 'String', function(iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function() {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
        value: undefined,
        done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
        value: point,
        done: false
    };
});
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_add-to-unscopables.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function() {};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_iter-step.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = function(done, value) {
    return {
        value: value,
        done: !!done
    };
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es6.array.iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var addToUnscopables = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_add-to-unscopables.js [app-ssr] (ecmascript)");
var step = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_iter-step.js [app-ssr] (ecmascript)");
var Iterators = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_iterators.js [app-ssr] (ecmascript)");
var toIObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-iobject.js [app-ssr] (ecmascript)");
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_iter-define.js [app-ssr] (ecmascript)")(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function() {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
        this._t = undefined;
        return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [
        index,
        O[index]
    ]);
}, 'values');
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/web.dom.iterable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es6.array.iterator.js [app-ssr] (ecmascript)");
var global = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_global.js [app-ssr] (ecmascript)");
var hide = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_hide.js [app-ssr] (ecmascript)");
var Iterators = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_iterators.js [app-ssr] (ecmascript)");
var TO_STRING_TAG = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks.js [app-ssr] (ecmascript)")('toStringTag');
var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
for(var i = 0; i < DOMIterables.length; i++){
    var NAME = DOMIterables[i];
    var Collection = global[NAME];
    var proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = Iterators.Array;
}
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_wks-ext.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

exports.f = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/core-js/library/fn/symbol/iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es6.string.iterator.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/web.dom.iterable.js [app-ssr] (ecmascript)");
module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks-ext.js [app-ssr] (ecmascript)").f('iterator');
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_meta.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var META = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_uid.js [app-ssr] (ecmascript)")('meta');
var isObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_is-object.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_has.js [app-ssr] (ecmascript)");
var setDesc = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-dp.js [app-ssr] (ecmascript)").f;
var id = 0;
var isExtensible = Object.isExtensible || function() {
    return true;
};
var FREEZE = !__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_fails.js [app-ssr] (ecmascript)")(function() {
    return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it) {
    setDesc(it, META, {
        value: {
            i: 'O' + ++id,
            w: {} // weak collections IDs
        }
    });
};
var fastKey = function(it, create) {
    // return primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMeta(it);
    // return object ID
    }
    return it[META].i;
};
var getWeak = function(it, create) {
    if (!has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMeta(it);
    // return hash weak collections IDs
    }
    return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
};
var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_wks-define.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var global = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_global.js [app-ssr] (ecmascript)");
var core = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_core.js [app-ssr] (ecmascript)");
var LIBRARY = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_library.js [app-ssr] (ecmascript)");
var wksExt = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks-ext.js [app-ssr] (ecmascript)");
var defineProperty = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-dp.js [app-ssr] (ecmascript)").f;
module.exports = function(name) {
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
        value: wksExt.f(name)
    });
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_enum-keys.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// all enumerable object keys, includes symbols
var getKeys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-keys.js [app-ssr] (ecmascript)");
var gOPS = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-gops.js [app-ssr] (ecmascript)");
var pIE = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-pie.js [app-ssr] (ecmascript)");
module.exports = function(it) {
    var result = getKeys(it);
    var getSymbols = gOPS.f;
    if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key;
        while(symbols.length > i)if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
    return result;
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_is-array.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 7.2.2 IsArray(argument)
var cof = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_cof.js [app-ssr] (ecmascript)");
module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-gopn.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-keys-internal.js [app-ssr] (ecmascript)");
var hiddenKeys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_enum-bug-keys.js [app-ssr] (ecmascript)").concat('length', 'prototype');
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-gopn-ext.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-iobject.js [app-ssr] (ecmascript)");
var gOPN = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-gopn.js [app-ssr] (ecmascript)").f;
var toString = {}.toString;
var windowNames = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [];
var getWindowNames = function(it) {
    try {
        return gOPN(it);
    } catch (e) {
        return windowNames.slice();
    }
};
module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_object-gopd.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var pIE = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-pie.js [app-ssr] (ecmascript)");
var createDesc = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_property-desc.js [app-ssr] (ecmascript)");
var toIObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-iobject.js [app-ssr] (ecmascript)");
var toPrimitive = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-primitive.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_has.js [app-ssr] (ecmascript)");
var IE8_DOM_DEFINE = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_ie8-dom-define.js [app-ssr] (ecmascript)");
var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_descriptors.js [app-ssr] (ecmascript)") ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
    } catch (e) {}
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es6.symbol.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// ECMAScript 6 symbols shim
var global = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_global.js [app-ssr] (ecmascript)");
var has = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_has.js [app-ssr] (ecmascript)");
var DESCRIPTORS = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_descriptors.js [app-ssr] (ecmascript)");
var $export = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_export.js [app-ssr] (ecmascript)");
var redefine = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_redefine.js [app-ssr] (ecmascript)");
var META = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_meta.js [app-ssr] (ecmascript)").KEY;
var $fails = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_fails.js [app-ssr] (ecmascript)");
var shared = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_shared.js [app-ssr] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_set-to-string-tag.js [app-ssr] (ecmascript)");
var uid = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_uid.js [app-ssr] (ecmascript)");
var wks = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks.js [app-ssr] (ecmascript)");
var wksExt = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks-ext.js [app-ssr] (ecmascript)");
var wksDefine = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks-define.js [app-ssr] (ecmascript)");
var enumKeys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_enum-keys.js [app-ssr] (ecmascript)");
var isArray = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_is-array.js [app-ssr] (ecmascript)");
var anObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_an-object.js [app-ssr] (ecmascript)");
var isObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_is-object.js [app-ssr] (ecmascript)");
var toObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-object.js [app-ssr] (ecmascript)");
var toIObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-iobject.js [app-ssr] (ecmascript)");
var toPrimitive = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_to-primitive.js [app-ssr] (ecmascript)");
var createDesc = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_property-desc.js [app-ssr] (ecmascript)");
var _create = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-create.js [app-ssr] (ecmascript)");
var gOPNExt = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-gopn-ext.js [app-ssr] (ecmascript)");
var $GOPD = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-gopd.js [app-ssr] (ecmascript)");
var $GOPS = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-gops.js [app-ssr] (ecmascript)");
var $DP = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-dp.js [app-ssr] (ecmascript)");
var $keys = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-keys.js [app-ssr] (ecmascript)");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function() {
    return _create(dP({}, 'a', {
        get: function() {
            return dP(this, 'a', {
                value: 7
            }).a;
        }
    })).a != 7;
}) ? function(it, key, D) {
    var protoDesc = gOPD(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP(it, key, D);
    if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;
var wrap = function(tag) {
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
};
var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    return it instanceof $Symbol;
};
var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
        if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
        } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, {
                enumerable: createDesc(0, false)
            });
        }
        return setSymbolDesc(it, key, D);
    }
    return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while(l > i)$defineProperty(it, key = keys[i++], P[key]);
    return it;
};
var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
    var D = gOPD(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN(toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while(names.length > i){
        if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    }
    return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while(names.length > i){
        if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    }
    return result;
};
// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
    $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
        var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function(value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
        };
        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
            configurable: true,
            set: $set
        });
        return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
        return this._k;
    });
    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f = $defineProperty;
    __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-gopn.js [app-ssr] (ecmascript)").f = gOPNExt.f = $getOwnPropertyNames;
    __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-pie.js [app-ssr] (ecmascript)").f = $propertyIsEnumerable;
    $GOPS.f = $getOwnPropertySymbols;
    if (DESCRIPTORS && !__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_library.js [app-ssr] (ecmascript)")) {
        redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }
    wksExt.f = function(name) {
        return wrap(wks(name));
    };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, {
    Symbol: $Symbol
});
for(var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
for(var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;)wksDefine(wellKnownSymbols[k++]);
$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function(key) {
        return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
        for(var key in SymbolRegistry)if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function() {
        setter = true;
    },
    useSimple: function() {
        setter = false;
    }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
});
// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function() {
    $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return $GOPS.f(toObject(it));
    }
});
// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([
        S
    ]) != '[null]' || _stringify({
        a: S
    }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
    stringify: function stringify(it) {
        var args = [
            it
        ];
        var i = 1;
        var replacer, $replacer;
        while(arguments.length > i)args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
        if (!isArray(replacer)) replacer = function(key, value) {
            if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
    }
});
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_hide.js [app-ssr] (ecmascript)")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.to-string.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es7.symbol.async-iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks-define.js [app-ssr] (ecmascript)")('asyncIterator');
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es7.symbol.observable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_wks-define.js [app-ssr] (ecmascript)")('observable');
}),
"[project]/blito-frontend/node_modules/core-js/library/fn/symbol/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es6.symbol.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.to-string.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es7.symbol.async-iterator.js [app-ssr] (ecmascript)");
__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es7.symbol.observable.js [app-ssr] (ecmascript)");
module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_core.js [app-ssr] (ecmascript)").Symbol;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/_set-proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */ var isObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_is-object.js [app-ssr] (ecmascript)");
var anObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_an-object.js [app-ssr] (ecmascript)");
var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
        try {
            set = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_ctx.js [app-ssr] (ecmascript)")(Function.call, __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-gopd.js [app-ssr] (ecmascript)").f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
        } catch (e) {
            buggy = true;
        }
        return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
        };
    }({}, false) : undefined),
    check: check
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.set-prototype-of.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_export.js [app-ssr] (ecmascript)");
$export($export.S, 'Object', {
    setPrototypeOf: __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_set-proto.js [app-ssr] (ecmascript)").set
});
}),
"[project]/blito-frontend/node_modules/core-js/library/fn/object/set-prototype-of.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.set-prototype-of.js [app-ssr] (ecmascript)");
module.exports = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_core.js [app-ssr] (ecmascript)").Object.setPrototypeOf;
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.create.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $export = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_export.js [app-ssr] (ecmascript)");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {
    create: __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-create.js [app-ssr] (ecmascript)")
});
}),
"[project]/blito-frontend/node_modules/core-js/library/fn/object/create.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.create.js [app-ssr] (ecmascript)");
var $Object = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_core.js [app-ssr] (ecmascript)").Object;
module.exports = function create(P, D) {
    return $Object.create(P, D);
};
}),
"[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.define-property.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var $export = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_export.js [app-ssr] (ecmascript)");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_descriptors.js [app-ssr] (ecmascript)"), 'Object', {
    defineProperty: __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_object-dp.js [app-ssr] (ecmascript)").f
});
}),
"[project]/blito-frontend/node_modules/core-js/library/fn/object/define-property.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/es6.object.define-property.js [app-ssr] (ecmascript)");
var $Object = __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/modules/_core.js [app-ssr] (ecmascript)").Object;
module.exports = function defineProperty(it, key, desc) {
    return $Object.defineProperty(it, key, desc);
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/core-js/object/assign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "default": __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/fn/object/assign.js [app-ssr] (ecmascript)"),
    __esModule: true
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/helpers/extends.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
var _assign = __turbopack_context__.r("[project]/blito-frontend/node_modules/babel-runtime/core-js/object/assign.js [app-ssr] (ecmascript)");
var _assign2 = _interopRequireDefault(_assign);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _assign2.default || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/helpers/classCallCheck.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/core-js/symbol/iterator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "default": __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/fn/symbol/iterator.js [app-ssr] (ecmascript)"),
    __esModule: true
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/core-js/symbol.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "default": __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/fn/symbol/index.js [app-ssr] (ecmascript)"),
    __esModule: true
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/helpers/typeof.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
var _iterator = __turbopack_context__.r("[project]/blito-frontend/node_modules/babel-runtime/core-js/symbol/iterator.js [app-ssr] (ecmascript)");
var _iterator2 = _interopRequireDefault(_iterator);
var _symbol = __turbopack_context__.r("[project]/blito-frontend/node_modules/babel-runtime/core-js/symbol.js [app-ssr] (ecmascript)");
var _symbol2 = _interopRequireDefault(_symbol);
var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
};
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function(obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/helpers/possibleConstructorReturn.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
var _typeof2 = __turbopack_context__.r("[project]/blito-frontend/node_modules/babel-runtime/helpers/typeof.js [app-ssr] (ecmascript)");
var _typeof3 = _interopRequireDefault(_typeof2);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = function(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/core-js/object/set-prototype-of.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "default": __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/fn/object/set-prototype-of.js [app-ssr] (ecmascript)"),
    __esModule: true
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/core-js/object/create.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "default": __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/fn/object/create.js [app-ssr] (ecmascript)"),
    __esModule: true
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/helpers/inherits.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
var _setPrototypeOf = __turbopack_context__.r("[project]/blito-frontend/node_modules/babel-runtime/core-js/object/set-prototype-of.js [app-ssr] (ecmascript)");
var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
var _create = __turbopack_context__.r("[project]/blito-frontend/node_modules/babel-runtime/core-js/object/create.js [app-ssr] (ecmascript)");
var _create2 = _interopRequireDefault(_create);
var _typeof2 = __turbopack_context__.r("[project]/blito-frontend/node_modules/babel-runtime/helpers/typeof.js [app-ssr] (ecmascript)");
var _typeof3 = _interopRequireDefault(_typeof2);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }
    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/core-js/object/define-property.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "default": __turbopack_context__.r("[project]/blito-frontend/node_modules/core-js/library/fn/object/define-property.js [app-ssr] (ecmascript)"),
    __esModule: true
};
}),
"[project]/blito-frontend/node_modules/babel-runtime/helpers/createClass.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
var _defineProperty = __turbopack_context__.r("[project]/blito-frontend/node_modules/babel-runtime/core-js/object/define-property.js [app-ssr] (ecmascript)");
var _defineProperty2 = _interopRequireDefault(_defineProperty);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            (0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
}),
"[project]/blito-frontend/node_modules/babel-runtime/helpers/objectWithoutProperties.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = function(obj, keys) {
    var target = {};
    for(var i in obj){
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
    }
    return target;
};
}),
"[project]/blito-frontend/node_modules/rc-util/es/Dom/contains.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>contains
]);
function contains(root, n) {
    var node = n;
    while(node){
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
}),
"[project]/blito-frontend/node_modules/rc-util/es/Dom/addEventListener.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>addEventListenerWrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$add$2d$dom$2d$event$2d$listener$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/add-dom-event-listener/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
function addEventListenerWrap(target, eventType, cb, option) {
    /* eslint camelcase: 2 */ var callback = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].unstable_batchedUpdates ? function run(e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].unstable_batchedUpdates(cb, e);
    } : cb;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$add$2d$dom$2d$event$2d$listener$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(target, eventType, callback, option);
}
}),
"[project]/blito-frontend/node_modules/rc-util/es/unsafeLifecyclesPolyfill.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var unsafeLifecyclesPolyfill = function unsafeLifecyclesPolyfill(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
    } // only handle componentWillReceiveProps
    if (typeof prototype.componentWillReceiveProps !== 'function') {
        return Component;
    } // In React 16.9, React.Profiler was introduced together with UNSAFE_componentWillReceiveProps
    // https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#performance-measurements-with-reactprofiler
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Profiler) {
        return Component;
    } // Here polyfill get started
    prototype.UNSAFE_componentWillReceiveProps = prototype.componentWillReceiveProps;
    delete prototype.componentWillReceiveProps;
    return Component;
};
const __TURBOPACK__default__export__ = unsafeLifecyclesPolyfill;
}),
"[project]/blito-frontend/node_modules/rc-util/es/ContainerRender.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContainerRender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
;
;
;
var ContainerRender = /*#__PURE__*/ function(_React$Component) {
    _inherits(ContainerRender, _React$Component);
    var _super = _createSuper(ContainerRender);
    function ContainerRender() {
        var _this;
        _classCallCheck(this, ContainerRender);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [
            this
        ].concat(args));
        _this.removeContainer = function() {
            if (_this.container) {
                __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].unmountComponentAtNode(_this.container);
                _this.container.parentNode.removeChild(_this.container);
                _this.container = null;
            }
        };
        _this.renderComponent = function(props, ready) {
            var _this$props = _this.props, visible = _this$props.visible, getComponent = _this$props.getComponent, forceRender = _this$props.forceRender, getContainer = _this$props.getContainer, parent = _this$props.parent;
            if (visible || parent._component || forceRender) {
                if (!_this.container) {
                    _this.container = getContainer();
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
                    if (ready) {
                        ready.call(this);
                    }
                });
            }
        };
        return _this;
    }
    _createClass(ContainerRender, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.autoMount) {
                    this.renderComponent();
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.props.autoMount) {
                    this.renderComponent();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.props.autoDestroy) {
                    this.removeContainer();
                }
            }
        },
        {
            key: "render",
            value: function render() {
                return this.props.children({
                    renderComponent: this.renderComponent,
                    removeContainer: this.removeContainer
                });
            }
        }
    ]);
    return ContainerRender;
}(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
ContainerRender.propTypes = {
    autoMount: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    autoDestroy: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    visible: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    forceRender: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    parent: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    getComponent: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    getContainer: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    children: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired
};
ContainerRender.defaultProps = {
    autoMount: true,
    autoDestroy: true,
    forceRender: false
};
;
}),
"[project]/blito-frontend/node_modules/rc-util/es/Portal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
;
;
;
var Portal = /*#__PURE__*/ function(_React$Component) {
    _inherits(Portal, _React$Component);
    var _super = _createSuper(Portal);
    function Portal() {
        _classCallCheck(this, Portal);
        return _super.apply(this, arguments);
    }
    _createClass(Portal, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.createContainer();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var didUpdate = this.props.didUpdate;
                if (didUpdate) {
                    didUpdate(prevProps);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.removeContainer();
            }
        },
        {
            key: "createContainer",
            value: function createContainer() {
                this._container = this.props.getContainer();
                this.forceUpdate();
            }
        },
        {
            key: "removeContainer",
            value: function removeContainer() {
                if (this._container) {
                    this._container.parentNode.removeChild(this._container);
                }
            }
        },
        {
            key: "render",
            value: function render() {
                if (this._container) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createPortal(this.props.children, this._container);
                }
                return null;
            }
        }
    ]);
    return Portal;
}(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
Portal.propTypes = {
    getContainer: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func.isRequired,
    children: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node.isRequired,
    didUpdate: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
};
;
}),
"[project]/blito-frontend/node_modules/add-dom-event-listener/lib/EventBaseObject.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
function returnFalse() {
    return false;
}
function returnTrue() {
    return true;
}
function EventBaseObject() {
    this.timeStamp = Date.now();
    this.target = undefined;
    this.currentTarget = undefined;
}
EventBaseObject.prototype = {
    isEventObject: 1,
    constructor: EventBaseObject,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function preventDefault() {
        this.isDefaultPrevented = returnTrue;
    },
    stopPropagation: function stopPropagation() {
        this.isPropagationStopped = returnTrue;
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
        this.isImmediatePropagationStopped = returnTrue;
        // fixed 1.2
        // call stopPropagation implicitly
        this.stopPropagation();
    },
    halt: function halt(immediate) {
        if (immediate) {
            this.stopImmediatePropagation();
        } else {
            this.stopPropagation();
        }
        this.preventDefault();
    }
};
exports["default"] = EventBaseObject;
module.exports = exports["default"];
}),
"[project]/blito-frontend/node_modules/add-dom-event-listener/lib/EventObject.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */ Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _EventBaseObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/add-dom-event-listener/lib/EventBaseObject.js [app-ssr] (ecmascript)");
var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
var _objectAssign = __turbopack_context__.r("[project]/blito-frontend/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var _objectAssign2 = _interopRequireDefault(_objectAssign);
var TRUE = true;
var FALSE = false;
var commonProps = [
    'altKey',
    'bubbles',
    'cancelable',
    'ctrlKey',
    'currentTarget',
    'eventPhase',
    'metaKey',
    'shiftKey',
    'target',
    'timeStamp',
    'view',
    'type'
];
function isNullOrUndefined(w) {
    return w === null || w === undefined;
}
var eventNormalizers = [
    {
        reg: /^key/,
        props: [
            'char',
            'charCode',
            'key',
            'keyCode',
            'which'
        ],
        fix: function fix(event, nativeEvent) {
            if (isNullOrUndefined(event.which)) {
                event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
            }
            // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
            if (event.metaKey === undefined) {
                event.metaKey = event.ctrlKey;
            }
        }
    },
    {
        reg: /^touch/,
        props: [
            'touches',
            'changedTouches',
            'targetTouches'
        ]
    },
    {
        reg: /^hashchange$/,
        props: [
            'newURL',
            'oldURL'
        ]
    },
    {
        reg: /^gesturechange$/i,
        props: [
            'rotation',
            'scale'
        ]
    },
    {
        reg: /^(mousewheel|DOMMouseScroll)$/,
        props: [],
        fix: function fix(event, nativeEvent) {
            var deltaX = undefined;
            var deltaY = undefined;
            var delta = undefined;
            var wheelDelta = nativeEvent.wheelDelta;
            var axis = nativeEvent.axis;
            var wheelDeltaY = nativeEvent.wheelDeltaY;
            var wheelDeltaX = nativeEvent.wheelDeltaX;
            var detail = nativeEvent.detail;
            // ie/webkit
            if (wheelDelta) {
                delta = wheelDelta / 120;
            }
            // gecko
            if (detail) {
                // press control e.detail == 1 else e.detail == 3
                delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
            }
            // Gecko
            if (axis !== undefined) {
                if (axis === event.HORIZONTAL_AXIS) {
                    deltaY = 0;
                    deltaX = 0 - delta;
                } else if (axis === event.VERTICAL_AXIS) {
                    deltaX = 0;
                    deltaY = delta;
                }
            }
            // Webkit
            if (wheelDeltaY !== undefined) {
                deltaY = wheelDeltaY / 120;
            }
            if (wheelDeltaX !== undefined) {
                deltaX = -1 * wheelDeltaX / 120;
            }
            // 默认 deltaY (ie)
            if (!deltaX && !deltaY) {
                deltaY = delta;
            }
            if (deltaX !== undefined) {
                /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */ event.deltaX = deltaX;
            }
            if (deltaY !== undefined) {
                /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */ event.deltaY = deltaY;
            }
            if (delta !== undefined) {
                /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */ event.delta = delta;
            }
        }
    },
    {
        reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
        props: [
            'buttons',
            'clientX',
            'clientY',
            'button',
            'offsetX',
            'relatedTarget',
            'which',
            'fromElement',
            'toElement',
            'offsetY',
            'pageX',
            'pageY',
            'screenX',
            'screenY'
        ],
        fix: function fix(event, nativeEvent) {
            var eventDoc = undefined;
            var doc = undefined;
            var body = undefined;
            var target = event.target;
            var button = nativeEvent.button;
            // Calculate pageX/Y if missing and clientX/Y available
            if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
                eventDoc = target.ownerDocument || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;
                event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            }
            // which for click: 1 === left; 2 === middle; 3 === right
            // do not use button
            if (!event.which && button !== undefined) {
                if (button & 1) {
                    event.which = 1;
                } else if (button & 2) {
                    event.which = 3;
                } else if (button & 4) {
                    event.which = 2;
                } else {
                    event.which = 0;
                }
            }
            // add relatedTarget, if necessary
            if (!event.relatedTarget && event.fromElement) {
                event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
            }
            return event;
        }
    }
];
function retTrue() {
    return TRUE;
}
function retFalse() {
    return FALSE;
}
function DomEventObject(nativeEvent) {
    var type = nativeEvent.type;
    var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
    _EventBaseObject2['default'].call(this);
    this.nativeEvent = nativeEvent;
    // in case dom event has been mark as default prevented by lower dom node
    var isDefaultPrevented = retFalse;
    if ('defaultPrevented' in nativeEvent) {
        isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
    } else if ('getPreventDefault' in nativeEvent) {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
        isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
    } else if ('returnValue' in nativeEvent) {
        isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
    }
    this.isDefaultPrevented = isDefaultPrevented;
    var fixFns = [];
    var fixFn = undefined;
    var l = undefined;
    var prop = undefined;
    var props = commonProps.concat();
    eventNormalizers.forEach(function(normalizer) {
        if (type.match(normalizer.reg)) {
            props = props.concat(normalizer.props);
            if (normalizer.fix) {
                fixFns.push(normalizer.fix);
            }
        }
    });
    l = props.length;
    // clone properties of the original event object
    while(l){
        prop = props[--l];
        this[prop] = nativeEvent[prop];
    }
    // fix target property, if necessary
    if (!this.target && isNative) {
        this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
    }
    // check if target is a text node (safari)
    if (this.target && this.target.nodeType === 3) {
        this.target = this.target.parentNode;
    }
    l = fixFns.length;
    while(l){
        fixFn = fixFns[--l];
        fixFn(this, nativeEvent);
    }
    this.timeStamp = nativeEvent.timeStamp || Date.now();
}
var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
    constructor: DomEventObject,
    preventDefault: function preventDefault() {
        var e = this.nativeEvent;
        // if preventDefault exists run it on the original event
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            // otherwise set the returnValue property of the original event to FALSE (IE)
            e.returnValue = FALSE;
        }
        EventBaseObjectProto.preventDefault.call(this);
    },
    stopPropagation: function stopPropagation() {
        var e = this.nativeEvent;
        // if stopPropagation exists run it on the original event
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            // otherwise set the cancelBubble property of the original event to TRUE (IE)
            e.cancelBubble = TRUE;
        }
        EventBaseObjectProto.stopPropagation.call(this);
    }
});
exports['default'] = DomEventObject;
module.exports = exports['default'];
}),
"[project]/blito-frontend/node_modules/add-dom-event-listener/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = addEventListener;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _EventObject = __turbopack_context__.r("[project]/blito-frontend/node_modules/add-dom-event-listener/lib/EventObject.js [app-ssr] (ecmascript)");
var _EventObject2 = _interopRequireDefault(_EventObject);
function addEventListener(target, eventType, callback, option) {
    function wrapCallback(e) {
        var ne = new _EventObject2['default'](e);
        callback.call(target, ne);
    }
    if (target.addEventListener) {
        var _ret = function() {
            var useCapture = false;
            if (typeof option === 'object') {
                useCapture = option.capture || false;
            } else if (typeof option === 'boolean') {
                useCapture = option;
            }
            target.addEventListener(eventType, wrapCallback, option || false);
            return {
                v: {
                    remove: function remove() {
                        target.removeEventListener(eventType, wrapCallback, useCapture);
                    }
                }
            };
        }();
        if (typeof _ret === 'object') return _ret.v;
    } else if (target.attachEvent) {
        target.attachEvent('on' + eventType, wrapCallback);
        return {
            remove: function remove() {
                target.detachEvent('on' + eventType, wrapCallback);
            }
        };
    }
}
module.exports = exports['default'];
}),
"[project]/blito-frontend/node_modules/dom-align/dist-web/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alignElement",
    ()=>alignElement,
    "alignPoint",
    ()=>alignPoint,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var vendorPrefix;
var jsCssMap = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    // IE did it wrong again ...
    ms: '-ms-',
    O: '-o-'
};
function getVendorPrefix() {
    if (vendorPrefix !== undefined) {
        return vendorPrefix;
    }
    vendorPrefix = '';
    var style = document.createElement('p').style;
    var testProp = 'Transform';
    for(var key in jsCssMap){
        if (key + testProp in style) {
            vendorPrefix = key;
        }
    }
    return vendorPrefix;
}
function getTransitionName() {
    return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}
function getTransformName() {
    return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
    var name = getTransitionName();
    if (name) {
        node.style[name] = value;
        if (name !== 'transitionProperty') {
            node.style.transitionProperty = value;
        }
    }
}
function setTransform(node, value) {
    var name = getTransformName();
    if (name) {
        node.style[name] = value;
        if (name !== 'transform') {
            node.style.transform = value;
        }
    }
}
function getTransitionProperty(node) {
    return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
    var style = window.getComputedStyle(node, null);
    var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
    if (transform && transform !== 'none') {
        var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
        return {
            x: parseFloat(matrix[12] || matrix[4], 0),
            y: parseFloat(matrix[13] || matrix[5], 0)
        };
    }
    return {
        x: 0,
        y: 0
    };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
    var style = window.getComputedStyle(node, null);
    var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
    if (transform && transform !== 'none') {
        var arr;
        var match2d = transform.match(matrix2d);
        if (match2d) {
            match2d = match2d[1];
            arr = match2d.split(',').map(function(item) {
                return parseFloat(item, 10);
            });
            arr[4] = xy.x;
            arr[5] = xy.y;
            setTransform(node, "matrix(".concat(arr.join(','), ")"));
        } else {
            var match3d = transform.match(matrix3d)[1];
            arr = match3d.split(',').map(function(item) {
                return parseFloat(item, 10);
            });
            arr[12] = xy.x;
            arr[13] = xy.y;
            setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
        }
    } else {
        setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
    }
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX;
// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
    var originalStyle = elem.style.display;
    elem.style.display = 'none';
    elem.offsetHeight; // eslint-disable-line
    elem.style.display = originalStyle;
}
function css(el, name, v) {
    var value = v;
    if (_typeof(name) === 'object') {
        for(var i in name){
            if (name.hasOwnProperty(i)) {
                css(el, i, name[i]);
            }
        }
        return undefined;
    }
    if (typeof value !== 'undefined') {
        if (typeof value === 'number') {
            value = "".concat(value, "px");
        }
        el.style[name] = value;
        return undefined;
    }
    return getComputedStyleX(el, name);
}
function getClientPosition(elem) {
    var box;
    var x;
    var y;
    var doc = elem.ownerDocument;
    var body = doc.body;
    var docElem = doc && doc.documentElement;
    // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
    box = elem.getBoundingClientRect();
    // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
    // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
    // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
    x = Math.floor(box.left);
    y = Math.floor(box.top);
    // In IE, most of the time, 2 extra pixels are added to the top and left
    // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
    // IE6 standards mode, this border can be overridden by setting the
    // document element's border to zero -- thus, we cannot rely on the
    // offset always being 2 pixels.
    // In quirks mode, the offset can be determined by querying the body's
    // clientLeft/clientTop, but in standards mode, it is found by querying
    // the document element's clientLeft/clientTop.  Since we already called
    // getClientBoundingRect we have already forced a reflow, so it is not
    // too expensive just to query them all.
    // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
    // 窗口边框标准是设 documentElement ,quirks 时设置 body
    // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
    // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
    // 标准 ie 下 docElem.clientTop 就是 border-top
    // ie7 html 即窗口边框改变不了。永远为 2
    // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
    x -= docElem.clientLeft || body.clientLeft || 0;
    y -= docElem.clientTop || body.clientTop || 0;
    return {
        left: x,
        top: y
    };
}
function getScroll(w, top) {
    var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
    var method = "scroll".concat(top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        // ie6,7,8 standard mode
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            // quirks mode
            ret = d.body[method];
        }
    }
    return ret;
}
function getScrollLeft(w) {
    return getScroll(w);
}
function getScrollTop(w) {
    return getScroll(w, true);
}
function getOffset(el) {
    var pos = getClientPosition(el);
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScrollLeft(w);
    pos.top += getScrollTop(w);
    return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */ function isWindow(obj) {
    // must use == for ie8
    /* eslint eqeqeq:0 */ return obj !== null && obj !== undefined && obj == obj.window;
}
function getDocument(node) {
    if (isWindow(node)) {
        return node.document;
    }
    if (node.nodeType === 9) {
        return node;
    }
    return node.ownerDocument;
}
function _getComputedStyle(elem, name, cs) {
    var computedStyle = cs;
    var val = '';
    var d = getDocument(elem);
    computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
    // https://github.com/kissyteam/kissy/issues/61
    if (computedStyle) {
        val = computedStyle.getPropertyValue(name) || computedStyle[name];
    }
    return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';
function _getComputedStyleIE(elem, name) {
    // currentStyle maybe null
    // http://msdn.microsoft.com/en-us/library/ms535231.aspx
    var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
    // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
    // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
    // 在 ie 下不对，需要直接用 offset 方式
    // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels
    // exclude left right for relativity
    if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
        // Remember the original values
        var style = elem.style;
        var left = style[LEFT];
        var rsLeft = elem[RUNTIME_STYLE][LEFT];
        // prevent flashing of content
        elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
        // Put in the new values to get a computed value out
        style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
        ret = style.pixelLeft + PX;
        // Revert the changed values
        style[LEFT] = left;
        elem[RUNTIME_STYLE][LEFT] = rsLeft;
    }
    return ret === '' ? 'auto' : ret;
}
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function getOffsetDirection(dir, option) {
    if (dir === 'left') {
        return option.useCssRight ? 'right' : dir;
    }
    return option.useCssBottom ? 'bottom' : dir;
}
function oppositeOffsetDirection(dir) {
    if (dir === 'left') {
        return 'right';
    } else if (dir === 'right') {
        return 'left';
    } else if (dir === 'top') {
        return 'bottom';
    } else if (dir === 'bottom') {
        return 'top';
    }
}
// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
    // set position first, in-case top/left are set even on static elem
    if (css(elem, 'position') === 'static') {
        elem.style.position = 'relative';
    }
    var presetH = -999;
    var presetV = -999;
    var horizontalProperty = getOffsetDirection('left', option);
    var verticalProperty = getOffsetDirection('top', option);
    var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
    var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
    if (horizontalProperty !== 'left') {
        presetH = 999;
    }
    if (verticalProperty !== 'top') {
        presetV = 999;
    }
    var originalTransition = '';
    var originalOffset = getOffset(elem);
    if ('left' in offset || 'top' in offset) {
        originalTransition = getTransitionProperty(elem) || '';
        setTransitionProperty(elem, 'none');
    }
    if ('left' in offset) {
        elem.style[oppositeHorizontalProperty] = '';
        elem.style[horizontalProperty] = "".concat(presetH, "px");
    }
    if ('top' in offset) {
        elem.style[oppositeVerticalProperty] = '';
        elem.style[verticalProperty] = "".concat(presetV, "px");
    }
    // force relayout
    forceRelayout(elem);
    var old = getOffset(elem);
    var originalStyle = {};
    for(var key in offset){
        if (offset.hasOwnProperty(key)) {
            var dir = getOffsetDirection(key, option);
            var preset = key === 'left' ? presetH : presetV;
            var off = originalOffset[key] - old[key];
            if (dir === key) {
                originalStyle[dir] = preset + off;
            } else {
                originalStyle[dir] = preset - off;
            }
        }
    }
    css(elem, originalStyle);
    // force relayout
    forceRelayout(elem);
    if ('left' in offset || 'top' in offset) {
        setTransitionProperty(elem, originalTransition);
    }
    var ret = {};
    for(var _key in offset){
        if (offset.hasOwnProperty(_key)) {
            var _dir = getOffsetDirection(_key, option);
            var _off = offset[_key] - originalOffset[_key];
            if (_key === _dir) {
                ret[_dir] = originalStyle[_dir] + _off;
            } else {
                ret[_dir] = originalStyle[_dir] - _off;
            }
        }
    }
    css(elem, ret);
}
function setTransform$1(elem, offset) {
    var originalOffset = getOffset(elem);
    var originalXY = getTransformXY(elem);
    var resultXY = {
        x: originalXY.x,
        y: originalXY.y
    };
    if ('left' in offset) {
        resultXY.x = originalXY.x + offset.left - originalOffset.left;
    }
    if ('top' in offset) {
        resultXY.y = originalXY.y + offset.top - originalOffset.top;
    }
    setTransformXY(elem, resultXY);
}
function setOffset(elem, offset, option) {
    if (option.ignoreShake) {
        var oriOffset = getOffset(elem);
        var oLeft = oriOffset.left.toFixed(0);
        var oTop = oriOffset.top.toFixed(0);
        var tLeft = offset.left.toFixed(0);
        var tTop = offset.top.toFixed(0);
        if (oLeft === tLeft && oTop === tTop) {
            return;
        }
    }
    if (option.useCssRight || option.useCssBottom) {
        setLeftTop(elem, offset, option);
    } else if (option.useCssTransform && getTransformName() in document.body.style) {
        setTransform$1(elem, offset);
    } else {
        setLeftTop(elem, offset, option);
    }
}
function each(arr, fn) {
    for(var i = 0; i < arr.length; i++){
        fn(arr[i]);
    }
}
function isBorderBoxFn(elem) {
    return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}
var BOX_MODELS = [
    'margin',
    'border',
    'padding'
];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
    var old = {};
    var style = elem.style;
    var name;
    // Remember the old values, and insert the new ones
    for(name in options){
        if (options.hasOwnProperty(name)) {
            old[name] = style[name];
            style[name] = options[name];
        }
    }
    callback.call(elem);
    // Revert the old values
    for(name in options){
        if (options.hasOwnProperty(name)) {
            style[name] = old[name];
        }
    }
}
function getPBMWidth(elem, props, which) {
    var value = 0;
    var prop;
    var j;
    var i;
    for(j = 0; j < props.length; j++){
        prop = props[j];
        if (prop) {
            for(i = 0; i < which.length; i++){
                var cssProp = void 0;
                if (prop === 'border') {
                    cssProp = "".concat(prop).concat(which[i], "Width");
                } else {
                    cssProp = prop + which[i];
                }
                value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
            }
        }
    }
    return value;
}
var domUtils = {
    getParent: function getParent(element) {
        var parent = element;
        do {
            if (parent.nodeType === 11 && parent.host) {
                parent = parent.host;
            } else {
                parent = parent.parentNode;
            }
        }while (parent && parent.nodeType !== 1 && parent.nodeType !== 9)
        return parent;
    }
};
each([
    'Width',
    'Height'
], function(name) {
    domUtils["doc".concat(name)] = function(refWin) {
        var d = refWin.document;
        return Math.max(// firefox chrome documentElement.scrollHeight< body.scrollHeight
        // ie standard mode : documentElement.scrollHeight> body.scrollHeight
        d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
        d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
    };
    domUtils["viewport".concat(name)] = function(win) {
        // pc browser includes scrollbar in window.innerWidth
        var prop = "client".concat(name);
        var doc = win.document;
        var body = doc.body;
        var documentElement = doc.documentElement;
        var documentElementProp = documentElement[prop];
        // 标准模式取 documentElement
        // backcompat 取 body
        return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
    };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */ function getWH(elem, name, ex) {
    var extra = ex;
    if (isWindow(elem)) {
        return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
    } else if (elem.nodeType === 9) {
        return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
    }
    var which = name === 'width' ? [
        'Left',
        'Right'
    ] : [
        'Top',
        'Bottom'
    ];
    var borderBoxValue = name === 'width' ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
    var isBorderBox = isBorderBoxFn(elem);
    var cssBoxValue = 0;
    if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
        borderBoxValue = undefined;
        // Fall back to computed then un computed css if necessary
        cssBoxValue = getComputedStyleX(elem, name);
        if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
            cssBoxValue = elem.style[name] || 0;
        }
        // Normalize '', auto, and prepare for extra
        cssBoxValue = Math.floor(parseFloat(cssBoxValue)) || 0;
    }
    if (extra === undefined) {
        extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
    }
    var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
    var val = borderBoxValue || cssBoxValue;
    if (extra === CONTENT_INDEX) {
        if (borderBoxValueOrIsBorderBox) {
            return val - getPBMWidth(elem, [
                'border',
                'padding'
            ], which);
        }
        return cssBoxValue;
    } else if (borderBoxValueOrIsBorderBox) {
        if (extra === BORDER_INDEX) {
            return val;
        }
        return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, [
            'border'
        ], which) : getPBMWidth(elem, [
            'margin'
        ], which));
    }
    return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
};
// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
    for(var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++){
        args[_key2] = arguments[_key2];
    }
    var val;
    var elem = args[0];
    // in case elem is window
    // elem.offsetWidth === undefined
    if (elem.offsetWidth !== 0) {
        val = getWH.apply(undefined, args);
    } else {
        swap(elem, cssShow, function() {
            val = getWH.apply(undefined, args);
        });
    }
    return val;
}
each([
    'width',
    'height'
], function(name) {
    var first = name.charAt(0).toUpperCase() + name.slice(1);
    domUtils["outer".concat(first)] = function(el, includeMargin) {
        return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
    };
    var which = name === 'width' ? [
        'Left',
        'Right'
    ] : [
        'Top',
        'Bottom'
    ];
    domUtils[name] = function(elem, v) {
        var val = v;
        if (val !== undefined) {
            if (elem) {
                var isBorderBox = isBorderBoxFn(elem);
                if (isBorderBox) {
                    val += getPBMWidth(elem, [
                        'padding',
                        'border'
                    ], which);
                }
                return css(elem, name, val);
            }
            return undefined;
        }
        return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
    };
});
function mix(to, from) {
    for(var i in from){
        if (from.hasOwnProperty(i)) {
            to[i] = from[i];
        }
    }
    return to;
}
var utils = {
    getWindow: function getWindow(node) {
        if (node && node.document && node.setTimeout) {
            return node;
        }
        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
    },
    getDocument: getDocument,
    offset: function offset(el, value, option) {
        if (typeof value !== 'undefined') {
            setOffset(el, value, option || {});
        } else {
            return getOffset(el);
        }
    },
    isWindow: isWindow,
    each: each,
    css: css,
    clone: function clone(obj) {
        var i;
        var ret = {};
        for(i in obj){
            if (obj.hasOwnProperty(i)) {
                ret[i] = obj[i];
            }
        }
        var overflow = obj.overflow;
        if (overflow) {
            for(i in obj){
                if (obj.hasOwnProperty(i)) {
                    ret.overflow[i] = obj.overflow[i];
                }
            }
        }
        return ret;
    },
    mix: mix,
    getWindowScrollLeft: function getWindowScrollLeft(w) {
        return getScrollLeft(w);
    },
    getWindowScrollTop: function getWindowScrollTop(w) {
        return getScrollTop(w);
    },
    merge: function merge() {
        var ret = {};
        for(var i = 0; i < arguments.length; i++){
            utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
        }
        return ret;
    },
    viewportWidth: 0,
    viewportHeight: 0
};
mix(utils, domUtils);
/**
 * 得到会导致元素显示不全的祖先元素
 */ var getParent = utils.getParent;
function getOffsetParent(element) {
    if (utils.isWindow(element) || element.nodeType === 9) {
        return null;
    }
    // ie 这个也不是完全可行
    /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */ // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
    //  In other browsers it only includes elements with position absolute, relative or
    // fixed, not elements with overflow set to auto or scroll.
    //        if (UA.ie && ieMode < 8) {
    //            return element.offsetParent;
    //        }
    // 统一的 offsetParent 方法
    var doc = utils.getDocument(element);
    var body = doc.body;
    var parent;
    var positionStyle = utils.css(element, 'position');
    var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
    if (!skipStatic) {
        return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
    }
    for(parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)){
        positionStyle = utils.css(parent, 'position');
        if (positionStyle !== 'static') {
            return parent;
        }
    }
    return null;
}
var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
    if (utils.isWindow(element) || element.nodeType === 9) {
        return false;
    }
    var doc = utils.getDocument(element);
    var body = doc.body;
    var parent = null;
    for(parent = getParent$1(element); // 修复元素位于 document.documentElement 下导致崩溃问题
    parent && parent !== body && parent !== doc; parent = getParent$1(parent)){
        var positionStyle = utils.css(parent, 'position');
        if (positionStyle === 'fixed') {
            return true;
        }
    }
    return false;
}
/**
 * 获得元素的显示部分的区域
 */ function getVisibleRectForElement(element, alwaysByViewport) {
    var visibleRect = {
        left: 0,
        right: Infinity,
        top: 0,
        bottom: Infinity
    };
    var el = getOffsetParent(element);
    var doc = utils.getDocument(element);
    var win = doc.defaultView || doc.parentWindow;
    var body = doc.body;
    var documentElement = doc.documentElement;
    // Determine the size of the visible rect by climbing the dom accounting for
    // all scrollable containers.
    while(el){
        // clientWidth is zero for inline block elements in ie.
        if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
        // viewport. In some browsers, el.offsetParent may be
        // document.documentElement, so check for that too.
        el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
            var pos = utils.offset(el);
            // add border
            pos.left += el.clientLeft;
            pos.top += el.clientTop;
            visibleRect.top = Math.max(visibleRect.top, pos.top);
            visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
            pos.left + el.clientWidth);
            visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
            visibleRect.left = Math.max(visibleRect.left, pos.left);
        } else if (el === body || el === documentElement) {
            break;
        }
        el = getOffsetParent(el);
    }
    // Set element position to fixed
    // make sure absolute element itself don't affect it's visible area
    // https://github.com/ant-design/ant-design/issues/7601
    var originalPosition = null;
    if (!utils.isWindow(element) && element.nodeType !== 9) {
        originalPosition = element.style.position;
        var position = utils.css(element, 'position');
        if (position === 'absolute') {
            element.style.position = 'fixed';
        }
    }
    var scrollX = utils.getWindowScrollLeft(win);
    var scrollY = utils.getWindowScrollTop(win);
    var viewportWidth = utils.viewportWidth(win);
    var viewportHeight = utils.viewportHeight(win);
    var documentWidth = documentElement.scrollWidth;
    var documentHeight = documentElement.scrollHeight;
    // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
    // We should cut this ourself.
    var bodyStyle = window.getComputedStyle(body);
    if (bodyStyle.overflowX === 'hidden') {
        documentWidth = win.innerWidth;
    }
    if (bodyStyle.overflowY === 'hidden') {
        documentHeight = win.innerHeight;
    }
    // Reset element position after calculate the visible area
    if (element.style) {
        element.style.position = originalPosition;
    }
    if (alwaysByViewport || isAncestorFixed(element)) {
        // Clip by viewport's size.
        visibleRect.left = Math.max(visibleRect.left, scrollX);
        visibleRect.top = Math.max(visibleRect.top, scrollY);
        visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
        visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
    } else {
        // Clip by document's size.
        var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
        visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
        var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
        visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
    }
    return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
    var pos = utils.clone(elFuturePos);
    var size = {
        width: elRegion.width,
        height: elRegion.height
    };
    if (overflow.adjustX && pos.left < visibleRect.left) {
        pos.left = visibleRect.left;
    }
    // Left edge inside and right edge outside viewport, try to resize it.
    if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
        size.width -= pos.left + size.width - visibleRect.right;
    }
    // Right edge outside viewport, try to move it.
    if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
        // 保证左边界和可视区域左边界对齐
        pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
    }
    // Top edge outside viewport, try to move it.
    if (overflow.adjustY && pos.top < visibleRect.top) {
        pos.top = visibleRect.top;
    }
    // Top edge inside and bottom edge outside viewport, try to resize it.
    if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
        size.height -= pos.top + size.height - visibleRect.bottom;
    }
    // Bottom edge outside viewport, try to move it.
    if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
        // 保证上边界和可视区域上边界对齐
        pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
    }
    return utils.mix(pos, size);
}
function getRegion(node) {
    var offset;
    var w;
    var h;
    if (!utils.isWindow(node) && node.nodeType !== 9) {
        offset = utils.offset(node);
        w = utils.outerWidth(node);
        h = utils.outerHeight(node);
    } else {
        var win = utils.getWindow(node);
        offset = {
            left: utils.getWindowScrollLeft(win),
            top: utils.getWindowScrollTop(win)
        };
        w = utils.viewportWidth(win);
        h = utils.viewportHeight(win);
    }
    offset.width = w;
    offset.height = h;
    return offset;
}
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */ function getAlignOffset(region, align) {
    var V = align.charAt(0);
    var H = align.charAt(1);
    var w = region.width;
    var h = region.height;
    var x = region.left;
    var y = region.top;
    if (V === 'c') {
        y += h / 2;
    } else if (V === 'b') {
        y += h;
    }
    if (H === 'c') {
        x += w / 2;
    } else if (H === 'r') {
        x += w;
    }
    return {
        left: x,
        top: y
    };
}
function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
    var p1 = getAlignOffset(refNodeRegion, points[1]);
    var p2 = getAlignOffset(elRegion, points[0]);
    var diff = [
        p2.left - p1.left,
        p2.top - p1.top
    ];
    return {
        left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
        top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
    };
}
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */ // http://yiminghe.iteye.com/blog/1124720
function isFailX(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
    return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
    var ret = [];
    utils.each(points, function(p) {
        ret.push(p.replace(reg, function(m) {
            return map[m];
        }));
    });
    return ret;
}
function flipOffset(offset, index) {
    offset[index] = -offset[index];
    return offset;
}
function convertOffset(str, offsetLen) {
    var n;
    if (/%$/.test(str)) {
        n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
    } else {
        n = parseInt(str, 10);
    }
    return n || 0;
}
function normalizeOffset(offset, el) {
    offset[0] = convertOffset(offset[0], el.width);
    offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */ function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
    var points = align.points;
    var offset = align.offset || [
        0,
        0
    ];
    var targetOffset = align.targetOffset || [
        0,
        0
    ];
    var overflow = align.overflow;
    var source = align.source || el;
    offset = [].concat(offset);
    targetOffset = [].concat(targetOffset);
    overflow = overflow || {};
    var newOverflowCfg = {};
    var fail = 0;
    var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
    // 当前节点可以被放置的显示区域
    var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
    // 当前节点所占的区域, left/top/width/height
    var elRegion = getRegion(source);
    // 将 offset 转换成数值，支持百分比
    normalizeOffset(offset, elRegion);
    normalizeOffset(targetOffset, tgtRegion);
    // 当前节点将要被放置的位置
    var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
    // 当前节点将要所处的区域
    var newElRegion = utils.merge(elRegion, elFuturePos);
    // 如果可视区域不能完全放置当前节点时允许调整
    if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
        if (overflow.adjustX) {
            // 如果横向不能放下
            if (isFailX(elFuturePos, elRegion, visibleRect)) {
                // 对齐位置反下
                var newPoints = flip(points, /[lr]/gi, {
                    l: 'r',
                    r: 'l'
                });
                // 偏移量也反下
                var newOffset = flipOffset(offset, 0);
                var newTargetOffset = flipOffset(targetOffset, 0);
                var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
                if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
                    fail = 1;
                    points = newPoints;
                    offset = newOffset;
                    targetOffset = newTargetOffset;
                }
            }
        }
        if (overflow.adjustY) {
            // 如果纵向不能放下
            if (isFailY(elFuturePos, elRegion, visibleRect)) {
                // 对齐位置反下
                var _newPoints = flip(points, /[tb]/gi, {
                    t: 'b',
                    b: 't'
                });
                // 偏移量也反下
                var _newOffset = flipOffset(offset, 1);
                var _newTargetOffset = flipOffset(targetOffset, 1);
                var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
                if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
                    fail = 1;
                    points = _newPoints;
                    offset = _newOffset;
                    targetOffset = _newTargetOffset;
                }
            }
        }
        // 如果失败，重新计算当前节点将要被放置的位置
        if (fail) {
            elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
            utils.mix(newElRegion, elFuturePos);
        }
        var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
        var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
        // 检查反下后的位置是否可以放下了，如果仍然放不下：
        // 1. 复原修改过的定位参数
        if (isStillFailX || isStillFailY) {
            var _newPoints2 = points;
            // 重置对应部分的翻转逻辑
            if (isStillFailX) {
                _newPoints2 = flip(points, /[lr]/gi, {
                    l: 'r',
                    r: 'l'
                });
            }
            if (isStillFailY) {
                _newPoints2 = flip(points, /[tb]/gi, {
                    t: 'b',
                    b: 't'
                });
            }
            points = _newPoints2;
            offset = align.offset || [
                0,
                0
            ];
            targetOffset = align.targetOffset || [
                0,
                0
            ];
        }
        // 2. 只有指定了可以调整当前方向才调整
        newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
        newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
        // 确实要调整，甚至可能会调整高度宽度
        if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
            newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
        }
    }
    // need judge to in case set fixed with in css on height auto element
    if (newElRegion.width !== elRegion.width) {
        utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
    }
    if (newElRegion.height !== elRegion.height) {
        utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
    }
    // https://github.com/kissyteam/kissy/issues/190
    // 相对于屏幕位置没变，而 left/top 变了
    // 例如 <div 'relative'><el absolute></div>
    utils.offset(source, {
        left: newElRegion.left,
        top: newElRegion.top
    }, {
        useCssRight: align.useCssRight,
        useCssBottom: align.useCssBottom,
        useCssTransform: align.useCssTransform,
        ignoreShake: align.ignoreShake
    });
    return {
        points: points,
        offset: offset,
        targetOffset: targetOffset,
        overflow: newOverflowCfg
    };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/ function isOutOfVisibleRect(target, alwaysByViewport) {
    var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
    var targetRegion = getRegion(target);
    return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
    var target = align.target || refNode;
    var refNodeRegion = getRegion(target);
    var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
    return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */ function alignPoint(el, tgtPoint, align) {
    var pageX;
    var pageY;
    var doc = utils.getDocument(el);
    var win = doc.defaultView || doc.parentWindow;
    var scrollX = utils.getWindowScrollLeft(win);
    var scrollY = utils.getWindowScrollTop(win);
    var viewportWidth = utils.viewportWidth(win);
    var viewportHeight = utils.viewportHeight(win);
    if ('pageX' in tgtPoint) {
        pageX = tgtPoint.pageX;
    } else {
        pageX = scrollX + tgtPoint.clientX;
    }
    if ('pageY' in tgtPoint) {
        pageY = tgtPoint.pageY;
    } else {
        pageY = scrollY + tgtPoint.clientY;
    }
    var tgtRegion = {
        left: pageX,
        top: pageY,
        width: 0,
        height: 0
    };
    var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
    // Provide default target point
    var points = [
        align.points[0],
        'cc'
    ];
    return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
        points: points
    }), pointInView);
}
const __TURBOPACK__default__export__ = alignElement;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/blito-frontend/node_modules/rc-align/es/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buffer",
    ()=>buffer,
    "isSamePoint",
    ()=>isSamePoint,
    "isSimilarValue",
    ()=>isSimilarValue,
    "isWindow",
    ()=>isWindow,
    "restoreFocus",
    ()=>restoreFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-util/es/Dom/contains.js [app-ssr] (ecmascript)");
;
function buffer(fn, ms) {
    var timer = void 0;
    function clear() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
    function bufferFn() {
        clear();
        timer = setTimeout(fn, ms);
    }
    bufferFn.clear = clear;
    return bufferFn;
}
function isSamePoint(prev, next) {
    if (prev === next) return true;
    if (!prev || !next) return false;
    if ('pageX' in next && 'pageY' in next) {
        return prev.pageX === next.pageX && prev.pageY === next.pageY;
    }
    if ('clientX' in next && 'clientY' in next) {
        return prev.clientX === next.clientX && prev.clientY === next.clientY;
    }
    return false;
}
function isWindow(obj) {
    return obj && typeof obj === 'object' && obj.window === obj;
}
function isSimilarValue(val1, val2) {
    var int1 = Math.floor(val1);
    var int2 = Math.floor(val2);
    return Math.abs(int1 - int2) <= 1;
}
function restoreFocus(activeElement, container) {
    // Focus back if is in the container
    if (activeElement !== document.activeElement && (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(container, activeElement)) {
        activeElement.focus();
    }
}
}),
"[project]/blito-frontend/node_modules/rc-align/es/Align.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/createClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/possibleConstructorReturn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/inherits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$dom$2d$align$2f$dist$2d$web$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/dom-align/dist-web/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-util/es/Dom/addEventListener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-align/es/util.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function getElement(func) {
    if (typeof func !== 'function' || !func) return null;
    return func();
}
function getPoint(point) {
    if (typeof point !== 'object' || !point) return null;
    return point;
}
var Align = function(_Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Align, _Component);
    function Align() {
        var _ref;
        var _temp, _this, _ret;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, Align);
        for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, (_ref = Align.__proto__ || Object.getPrototypeOf(Align)).call.apply(_ref, [
            this
        ].concat(args))), _this), _this.forceAlign = function() {
            var _this$props = _this.props, disabled = _this$props.disabled, target = _this$props.target, align = _this$props.align, onAlign = _this$props.onAlign;
            if (!disabled && target) {
                var source = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(_this);
                var result = void 0;
                var element = getElement(target);
                var point = getPoint(target);
                // IE lose focus after element realign
                // We should record activeElement and restore later
                var activeElement = document.activeElement;
                if (element) {
                    result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$dom$2d$align$2f$dist$2d$web$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alignElement"])(source, element, align);
                } else if (point) {
                    result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$dom$2d$align$2f$dist$2d$web$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alignPoint"])(source, point, align);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["restoreFocus"])(activeElement, source);
                if (onAlign) {
                    onAlign(source, result);
                }
            }
        }, _temp), (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this, _ret);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Align, [
        {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var props = this.props;
                // if parent ref not attached .... use document.getElementById
                this.forceAlign();
                if (!props.disabled && props.monitorWindowResize) {
                    this.startMonitorWindowResize();
                }
            }
        },
        {
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                var reAlign = false;
                var props = this.props;
                if (!props.disabled) {
                    var source = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this);
                    var sourceRect = source ? source.getBoundingClientRect() : null;
                    if (prevProps.disabled) {
                        reAlign = true;
                    } else {
                        var lastElement = getElement(prevProps.target);
                        var currentElement = getElement(props.target);
                        var lastPoint = getPoint(prevProps.target);
                        var currentPoint = getPoint(props.target);
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWindow"])(lastElement) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWindow"])(currentElement)) {
                            // Skip if is window
                            reAlign = false;
                        } else if (lastElement !== currentElement || // Element change
                        lastElement && !currentElement && currentPoint || // Change from element to point
                        lastPoint && currentPoint && currentElement || // Change from point to element
                        currentPoint && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSamePoint"])(lastPoint, currentPoint)) {
                            reAlign = true;
                        }
                        // If source element size changed
                        var preRect = this.sourceRect || {};
                        if (!reAlign && source && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSimilarValue"])(preRect.width, sourceRect.width) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSimilarValue"])(preRect.height, sourceRect.height))) {
                            reAlign = true;
                        }
                    }
                    this.sourceRect = sourceRect;
                }
                if (reAlign) {
                    this.forceAlign();
                }
                if (props.monitorWindowResize && !props.disabled) {
                    this.startMonitorWindowResize();
                } else {
                    this.stopMonitorWindowResize();
                }
            }
        },
        {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.stopMonitorWindowResize();
            }
        },
        {
            key: 'startMonitorWindowResize',
            value: function startMonitorWindowResize() {
                if (!this.resizeHandler) {
                    this.bufferMonitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buffer"])(this.forceAlign, this.props.monitorBufferTime);
                    this.resizeHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(window, 'resize', this.bufferMonitor);
                }
            }
        },
        {
            key: 'stopMonitorWindowResize',
            value: function stopMonitorWindowResize() {
                if (this.resizeHandler) {
                    this.bufferMonitor.clear();
                    this.resizeHandler.remove();
                    this.resizeHandler = null;
                }
            }
        },
        {
            key: 'render',
            value: function render() {
                var _this2 = this;
                var _props = this.props, childrenProps = _props.childrenProps, children = _props.children;
                var child = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.only(children);
                if (childrenProps) {
                    var newProps = {};
                    var propList = Object.keys(childrenProps);
                    propList.forEach(function(prop) {
                        newProps[prop] = _this2.props[childrenProps[prop]];
                    });
                    return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, newProps);
                }
                return child;
            }
        }
    ]);
    return Align;
}(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]);
Align.propTypes = {
    childrenProps: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    align: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object.isRequired,
    target: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
            clientX: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
            clientY: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
            pageX: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
            pageY: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number
        })
    ]),
    onAlign: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    monitorBufferTime: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    monitorWindowResize: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    disabled: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    children: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any
};
Align.defaultProps = {
    target: function target() {
        return window;
    },
    monitorBufferTime: 50,
    monitorWindowResize: false,
    disabled: false
};
const __TURBOPACK__default__export__ = Align;
}),
"[project]/blito-frontend/node_modules/rc-align/es/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export this package's api
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$Align$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-align/es/Align.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$Align$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/blito-frontend/node_modules/rc-animate/es/ChildrenUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findChildInChildrenByKey",
    ()=>findChildInChildrenByKey,
    "findHiddenChildInChildrenByKey",
    ()=>findHiddenChildInChildrenByKey,
    "findShownChildInChildrenByKey",
    ()=>findShownChildInChildrenByKey,
    "isSameChildren",
    ()=>isSameChildren,
    "mergeChildren",
    ()=>mergeChildren,
    "toArrayChildren",
    ()=>toArrayChildren
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function toArrayChildren(children) {
    var ret = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.forEach(children, function(child) {
        ret.push(child);
    });
    return ret;
}
function findChildInChildrenByKey(children, key) {
    var ret = null;
    if (children) {
        children.forEach(function(child) {
            if (ret) {
                return;
            }
            if (child && child.key === key) {
                ret = child;
            }
        });
    }
    return ret;
}
function findShownChildInChildrenByKey(children, key, showProp) {
    var ret = null;
    if (children) {
        children.forEach(function(child) {
            if (child && child.key === key && child.props[showProp]) {
                if (ret) {
                    throw new Error('two child with same key for <rc-animate> children');
                }
                ret = child;
            }
        });
    }
    return ret;
}
function findHiddenChildInChildrenByKey(children, key, showProp) {
    var found = 0;
    if (children) {
        children.forEach(function(child) {
            if (found) {
                return;
            }
            found = child && child.key === key && !child.props[showProp];
        });
    }
    return found;
}
function isSameChildren(c1, c2, showProp) {
    var same = c1.length === c2.length;
    if (same) {
        c1.forEach(function(child, index) {
            var child2 = c2[index];
            if (child && child2) {
                if (child && !child2 || !child && child2) {
                    same = false;
                } else if (child.key !== child2.key) {
                    same = false;
                } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
                    same = false;
                }
            }
        });
    }
    return same;
}
function mergeChildren(prev, next) {
    var ret = [];
    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextChildrenPending = {};
    var pendingChildren = [];
    prev.forEach(function(child) {
        if (child && findChildInChildrenByKey(next, child.key)) {
            if (pendingChildren.length) {
                nextChildrenPending[child.key] = pendingChildren;
                pendingChildren = [];
            }
        } else {
            pendingChildren.push(child);
        }
    });
    next.forEach(function(child) {
        if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
            ret = ret.concat(nextChildrenPending[child.key]);
        }
        ret.push(child);
    });
    ret = ret.concat(pendingChildren);
    return ret;
}
}),
"[project]/blito-frontend/node_modules/rc-animate/es/util/animate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var util = {
    isAppearSupported: function isAppearSupported(props) {
        return props.transitionName && props.transitionAppear || props.animation.appear;
    },
    isEnterSupported: function isEnterSupported(props) {
        return props.transitionName && props.transitionEnter || props.animation.enter;
    },
    isLeaveSupported: function isLeaveSupported(props) {
        return props.transitionName && props.transitionLeave || props.animation.leave;
    },
    allowAppearCallback: function allowAppearCallback(props) {
        return props.transitionAppear || props.animation.appear;
    },
    allowEnterCallback: function allowEnterCallback(props) {
        return props.transitionEnter || props.animation.enter;
    },
    allowLeaveCallback: function allowLeaveCallback(props) {
        return props.transitionLeave || props.animation.leave;
    }
};
const __TURBOPACK__default__export__ = util;
}),
"[project]/blito-frontend/node_modules/rc-animate/es/AnimateChild.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/* eslint react/prop-types: 0 */ var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f40$ant$2d$design$2f$css$2d$animation$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/@ant-design/css-animation/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$util$2f$animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-animate/es/util/animate.js [app-ssr] (ecmascript)");
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
;
;
;
;
var transitionMap = {
    enter: 'transitionEnter',
    appear: 'transitionAppear',
    leave: 'transitionLeave'
};
var AnimateChild = function(_React$Component) {
    _inherits(AnimateChild, _React$Component);
    function AnimateChild() {
        _classCallCheck(this, AnimateChild);
        return _possibleConstructorReturn(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
    }
    _createClass(AnimateChild, [
        {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.stop();
            }
        },
        {
            key: 'componentWillEnter',
            value: function componentWillEnter(done) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$util$2f$animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isEnterSupported(this.props)) {
                    this.transition('enter', done);
                } else {
                    done();
                }
            }
        },
        {
            key: 'componentWillAppear',
            value: function componentWillAppear(done) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$util$2f$animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isAppearSupported(this.props)) {
                    this.transition('appear', done);
                } else {
                    done();
                }
            }
        },
        {
            key: 'componentWillLeave',
            value: function componentWillLeave(done) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$util$2f$animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isLeaveSupported(this.props)) {
                    this.transition('leave', done);
                } else {
                    // always sync, do not interupt with react component life cycle
                    // update hidden -> animate hidden ->
                    // didUpdate -> animate leave -> unmount (if animate is none)
                    done();
                }
            }
        },
        {
            key: 'transition',
            value: function transition(animationType, finishCallback) {
                var _this2 = this;
                var node = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this);
                var props = this.props;
                var transitionName = props.transitionName;
                var nameIsObj = typeof transitionName === 'object';
                this.stop();
                var end = function end() {
                    _this2.stopper = null;
                    finishCallback();
                };
                if ((__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f40$ant$2d$design$2f$css$2d$animation$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCssAnimationSupported"] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
                    var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
                    var activeName = name + '-active';
                    if (nameIsObj && transitionName[animationType + 'Active']) {
                        activeName = transitionName[animationType + 'Active'];
                    }
                    this.stopper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f40$ant$2d$design$2f$css$2d$animation$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, {
                        name: name,
                        active: activeName
                    }, end);
                } else {
                    this.stopper = props.animation[animationType](node, end);
                }
            }
        },
        {
            key: 'stop',
            value: function stop() {
                var stopper = this.stopper;
                if (stopper) {
                    this.stopper = null;
                    stopper.stop();
                }
            }
        },
        {
            key: 'render',
            value: function render() {
                return this.props.children;
            }
        }
    ]);
    return AnimateChild;
}(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
const __TURBOPACK__default__export__ = AnimateChild;
}),
"[project]/blito-frontend/node_modules/rc-animate/es/Animate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/* eslint react/prop-types: 0 */ var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$unsafeLifecyclesPolyfill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-util/es/unsafeLifecyclesPolyfill.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-animate/es/ChildrenUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$AnimateChild$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-animate/es/AnimateChild.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$util$2f$animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-animate/es/util/animate.js [app-ssr] (ecmascript)");
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
;
;
;
;
;
var defaultKey = 'rc_animate_' + Date.now();
function getChildrenFromProps(props) {
    var children = props.children;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(children)) {
        if (!children.key) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
                key: defaultKey
            });
        }
    }
    return children;
}
function noop() {}
var Animate = function(_React$Component) {
    _inherits(Animate, _React$Component);
    function Animate(props) {
        _classCallCheck(this, Animate);
        var _this = _possibleConstructorReturn(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));
        _initialiseProps.call(_this);
        _this.currentlyAnimatingKeys = {};
        _this.keysToEnter = [];
        _this.keysToLeave = [];
        _this.state = {
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArrayChildren"])(getChildrenFromProps(props))
        };
        _this.childrenRefs = {};
        return _this;
    } // eslint-disable-line
    _createClass(Animate, [
        {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;
                var showProp = this.props.showProp;
                var children = this.state.children;
                if (showProp) {
                    children = children.filter(function(child) {
                        return !!child.props[showProp];
                    });
                }
                children.forEach(function(child) {
                    if (child) {
                        _this2.performAppear(child.key);
                    }
                });
            }
        },
        {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                var _this3 = this;
                this.nextProps = nextProps;
                var nextChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArrayChildren"])(getChildrenFromProps(nextProps));
                var props = this.props;
                // exclusive needs immediate response
                if (props.exclusive) {
                    Object.keys(this.currentlyAnimatingKeys).forEach(function(key) {
                        _this3.stop(key);
                    });
                }
                var showProp = props.showProp;
                var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
                // last props children if exclusive
                var currentChildren = props.exclusive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArrayChildren"])(getChildrenFromProps(props)) : this.state.children;
                // in case destroy in showProp mode
                var newChildren = [];
                if (showProp) {
                    currentChildren.forEach(function(currentChild) {
                        var nextChild = currentChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildInChildrenByKey"])(nextChildren, currentChild.key);
                        var newChild = void 0;
                        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
                            newChild = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
                        } else {
                            newChild = nextChild;
                        }
                        if (newChild) {
                            newChildren.push(newChild);
                        }
                    });
                    nextChildren.forEach(function(nextChild) {
                        if (!nextChild || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildInChildrenByKey"])(currentChildren, nextChild.key)) {
                            newChildren.push(nextChild);
                        }
                    });
                } else {
                    newChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeChildren"])(currentChildren, nextChildren);
                }
                // need render to avoid update
                this.setState({
                    children: newChildren
                });
                nextChildren.forEach(function(child) {
                    var key = child && child.key;
                    if (child && currentlyAnimatingKeys[key]) {
                        return;
                    }
                    var hasPrev = child && (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildInChildrenByKey"])(currentChildren, key);
                    if (showProp) {
                        var showInNext = child.props[showProp];
                        if (hasPrev) {
                            var showInNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
                            if (!showInNow && showInNext) {
                                _this3.keysToEnter.push(key);
                            }
                        } else if (showInNext) {
                            _this3.keysToEnter.push(key);
                        }
                    } else if (!hasPrev) {
                        _this3.keysToEnter.push(key);
                    }
                });
                currentChildren.forEach(function(child) {
                    var key = child && child.key;
                    if (child && currentlyAnimatingKeys[key]) {
                        return;
                    }
                    var hasNext = child && (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildInChildrenByKey"])(nextChildren, key);
                    if (showProp) {
                        var showInNow = child.props[showProp];
                        if (hasNext) {
                            var showInNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findShownChildInChildrenByKey"])(nextChildren, key, showProp);
                            if (!showInNext && showInNow) {
                                _this3.keysToLeave.push(key);
                            }
                        } else if (showInNow) {
                            _this3.keysToLeave.push(key);
                        }
                    } else if (!hasNext) {
                        _this3.keysToLeave.push(key);
                    }
                });
            }
        },
        {
            key: 'componentDidUpdate',
            value: function componentDidUpdate() {
                var keysToEnter = this.keysToEnter;
                this.keysToEnter = [];
                keysToEnter.forEach(this.performEnter);
                var keysToLeave = this.keysToLeave;
                this.keysToLeave = [];
                keysToLeave.forEach(this.performLeave);
            }
        },
        {
            key: 'isValidChildByKey',
            value: function isValidChildByKey(currentChildren, key) {
                var showProp = this.props.showProp;
                if (showProp) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findChildInChildrenByKey"])(currentChildren, key);
            }
        },
        {
            key: 'stop',
            value: function stop(key) {
                delete this.currentlyAnimatingKeys[key];
                var component = this.childrenRefs[key];
                if (component) {
                    component.stop();
                }
            }
        },
        {
            key: 'render',
            value: function render() {
                var _this4 = this;
                var props = this.props;
                this.nextProps = props;
                var stateChildren = this.state.children;
                var children = null;
                if (stateChildren) {
                    children = stateChildren.map(function(child) {
                        if (child === null || child === undefined) {
                            return child;
                        }
                        if (!child.key) {
                            throw new Error('must set key for <rc-animate> children');
                        }
                        return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$AnimateChild$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            key: child.key,
                            ref: function ref(node) {
                                _this4.childrenRefs[child.key] = node;
                            },
                            animation: props.animation,
                            transitionName: props.transitionName,
                            transitionEnter: props.transitionEnter,
                            transitionAppear: props.transitionAppear,
                            transitionLeave: props.transitionLeave
                        }, child);
                    });
                }
                var Component = props.component;
                if (Component) {
                    var passedProps = props;
                    if (typeof Component === 'string') {
                        passedProps = _extends({
                            className: props.className,
                            style: props.style
                        }, props.componentProps);
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, passedProps, children);
                }
                return children[0] || null;
            }
        }
    ]);
    return Animate;
}(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
Animate.isAnimate = true;
Animate.defaultProps = {
    animation: {},
    component: 'span',
    componentProps: {},
    transitionEnter: true,
    transitionLeave: true,
    transitionAppear: false,
    onEnd: noop,
    onEnter: noop,
    onLeave: noop,
    onAppear: noop
};
var _initialiseProps = function _initialiseProps() {
    var _this5 = this;
    this.performEnter = function(key) {
        // may already remove by exclusive
        if (_this5.childrenRefs[key]) {
            _this5.currentlyAnimatingKeys[key] = true;
            _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
        }
    };
    this.performAppear = function(key) {
        if (_this5.childrenRefs[key]) {
            _this5.currentlyAnimatingKeys[key] = true;
            _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
        }
    };
    this.handleDoneAdding = function(key, type) {
        var props = _this5.props;
        delete _this5.currentlyAnimatingKeys[key];
        // if update on exclusive mode, skip check
        if (props.exclusive && props !== _this5.nextProps) {
            return;
        }
        var currentChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArrayChildren"])(getChildrenFromProps(props));
        if (!_this5.isValidChildByKey(currentChildren, key)) {
            // exclusive will not need this
            _this5.performLeave(key);
        } else if (type === 'appear') {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$util$2f$animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].allowAppearCallback(props)) {
                props.onAppear(key);
                props.onEnd(key, true);
            }
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$util$2f$animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].allowEnterCallback(props)) {
            props.onEnter(key);
            props.onEnd(key, true);
        }
    };
    this.performLeave = function(key) {
        // may already remove by exclusive
        if (_this5.childrenRefs[key]) {
            _this5.currentlyAnimatingKeys[key] = true;
            _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
        }
    };
    this.handleDoneLeaving = function(key) {
        var props = _this5.props;
        delete _this5.currentlyAnimatingKeys[key];
        // if update on exclusive mode, skip check
        if (props.exclusive && props !== _this5.nextProps) {
            return;
        }
        var currentChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toArrayChildren"])(getChildrenFromProps(props));
        // in case state change is too fast
        if (_this5.isValidChildByKey(currentChildren, key)) {
            _this5.performEnter(key);
        } else {
            var end = function end() {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$util$2f$animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].allowLeaveCallback(props)) {
                    props.onLeave(key);
                    props.onEnd(key, false);
                }
            };
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$ChildrenUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameChildren"])(_this5.state.children, currentChildren, props.showProp)) {
                _this5.setState({
                    children: currentChildren
                }, end);
            } else {
                end();
            }
        }
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$unsafeLifecyclesPolyfill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Animate);
}),
"[project]/blito-frontend/node_modules/@ant-design/css-animation/es/Event.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var START_EVENT_NAME_MAP = {
    transitionstart: {
        transition: 'transitionstart',
        WebkitTransition: 'webkitTransitionStart',
        MozTransition: 'mozTransitionStart',
        OTransition: 'oTransitionStart',
        msTransition: 'MSTransitionStart'
    },
    animationstart: {
        animation: 'animationstart',
        WebkitAnimation: 'webkitAnimationStart',
        MozAnimation: 'mozAnimationStart',
        OAnimation: 'oAnimationStart',
        msAnimation: 'MSAnimationStart'
    }
};
var END_EVENT_NAME_MAP = {
    transitionend: {
        transition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        OTransition: 'oTransitionEnd',
        msTransition: 'MSTransitionEnd'
    },
    animationend: {
        animation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        OAnimation: 'oAnimationEnd',
        msAnimation: 'MSAnimationEnd'
    }
};
var startEvents = [];
var endEvents = [];
function detectEvents() {
    var testEl = document.createElement('div');
    var style = testEl.style;
    if (!('AnimationEvent' in window)) {
        delete START_EVENT_NAME_MAP.animationstart.animation;
        delete END_EVENT_NAME_MAP.animationend.animation;
    }
    if (!('TransitionEvent' in window)) {
        delete START_EVENT_NAME_MAP.transitionstart.transition;
        delete END_EVENT_NAME_MAP.transitionend.transition;
    }
    function process(EVENT_NAME_MAP, events) {
        for(var baseEventName in EVENT_NAME_MAP){
            if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
                var baseEvents = EVENT_NAME_MAP[baseEventName];
                for(var styleName in baseEvents){
                    if (styleName in style) {
                        events.push(baseEvents[styleName]);
                        break;
                    }
                }
            }
        }
    }
    process(START_EVENT_NAME_MAP, startEvents);
    process(END_EVENT_NAME_MAP, endEvents);
}
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function addEventListener(node, eventName, eventListener) {
    node.addEventListener(eventName, eventListener, false);
}
function removeEventListener(node, eventName, eventListener) {
    node.removeEventListener(eventName, eventListener, false);
}
var TransitionEvents = {
    // Start events
    startEvents: startEvents,
    addStartEventListener: function addStartEventListener(node, eventListener) {
        if (startEvents.length === 0) {
            window.setTimeout(eventListener, 0);
            return;
        }
        startEvents.forEach(function(startEvent) {
            addEventListener(node, startEvent, eventListener);
        });
    },
    removeStartEventListener: function removeStartEventListener(node, eventListener) {
        if (startEvents.length === 0) {
            return;
        }
        startEvents.forEach(function(startEvent) {
            removeEventListener(node, startEvent, eventListener);
        });
    },
    // End events
    endEvents: endEvents,
    addEndEventListener: function addEndEventListener(node, eventListener) {
        if (endEvents.length === 0) {
            window.setTimeout(eventListener, 0);
            return;
        }
        endEvents.forEach(function(endEvent) {
            addEventListener(node, endEvent, eventListener);
        });
    },
    removeEndEventListener: function removeEndEventListener(node, eventListener) {
        if (endEvents.length === 0) {
            return;
        }
        endEvents.forEach(function(endEvent) {
            removeEventListener(node, endEvent, eventListener);
        });
    }
};
const __TURBOPACK__default__export__ = TransitionEvents;
}),
"[project]/blito-frontend/node_modules/@ant-design/css-animation/es/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isCssAnimationSupported",
    ()=>isCssAnimationSupported
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f40$ant$2d$design$2f$css$2d$animation$2f$es$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/@ant-design/css-animation/es/Event.js [app-ssr] (ecmascript)");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
;
var isCssAnimationSupported = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f40$ant$2d$design$2f$css$2d$animation$2f$es$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].endEvents.length !== 0;
var capitalPrefixes = [
    'Webkit',
    'Moz',
    'O',
    // ms is special .... !
    'ms'
];
var prefixes = [
    '-webkit-',
    '-moz-',
    '-o-',
    'ms-',
    ''
];
function getStyleProperty(node, name) {
    // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    var style = window.getComputedStyle(node, null);
    var ret = '';
    for(var i = 0; i < prefixes.length; i++){
        ret = style.getPropertyValue(prefixes[i] + name);
        if (ret) {
            break;
        }
    }
    return ret;
}
function fixBrowserByTimeout(node) {
    if (isCssAnimationSupported) {
        var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
        var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
        var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
        var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
        var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
        // sometimes, browser bug
        node.rcEndAnimTimeout = setTimeout(function() {
            node.rcEndAnimTimeout = null;
            if (node.rcEndListener) {
                node.rcEndListener();
            }
        }, time * 1000 + 200);
    }
}
function clearBrowserBugTimeout(node) {
    if (node.rcEndAnimTimeout) {
        clearTimeout(node.rcEndAnimTimeout);
        node.rcEndAnimTimeout = null;
    }
}
var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
    var className = nameIsObj ? transitionName.name : transitionName;
    var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
    var end = endCallback;
    var start = void 0;
    var active = void 0;
    if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
        end = endCallback.end;
        start = endCallback.start;
        active = endCallback.active;
    }
    if (node.rcEndListener) {
        node.rcEndListener();
    }
    node.rcEndListener = function(e) {
        if (e && e.target !== node) {
            return;
        }
        if (node.rcAnimTimeout) {
            clearTimeout(node.rcAnimTimeout);
            node.rcAnimTimeout = null;
        }
        clearBrowserBugTimeout(node);
        node.classList.remove(className);
        node.classList.remove(activeClassName);
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f40$ant$2d$design$2f$css$2d$animation$2f$es$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].removeEndEventListener(node, node.rcEndListener);
        node.rcEndListener = null;
        // Usually this optional end is used for informing an owner of
        // a leave animation and telling it to remove the child.
        if (end) {
            end();
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f40$ant$2d$design$2f$css$2d$animation$2f$es$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].addEndEventListener(node, node.rcEndListener);
    if (start) {
        start();
    }
    node.classList.add(className);
    node.rcAnimTimeout = setTimeout(function() {
        node.rcAnimTimeout = null;
        node.classList.add(activeClassName);
        if (active) {
            active();
        }
        fixBrowserByTimeout(node);
    }, 0);
    return {
        stop: function stop() {
            if (node.rcEndListener) {
                node.rcEndListener();
            }
        }
    };
};
cssAnimation.style = function(node, style, callback) {
    if (node.rcEndListener) {
        node.rcEndListener();
    }
    node.rcEndListener = function(e) {
        if (e && e.target !== node) {
            return;
        }
        if (node.rcAnimTimeout) {
            clearTimeout(node.rcAnimTimeout);
            node.rcAnimTimeout = null;
        }
        clearBrowserBugTimeout(node);
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f40$ant$2d$design$2f$css$2d$animation$2f$es$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].removeEndEventListener(node, node.rcEndListener);
        node.rcEndListener = null;
        // Usually this optional callback is used for informing an owner of
        // a leave animation and telling it to remove the child.
        if (callback) {
            callback();
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f40$ant$2d$design$2f$css$2d$animation$2f$es$2f$Event$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].addEndEventListener(node, node.rcEndListener);
    node.rcAnimTimeout = setTimeout(function() {
        for(var s in style){
            if (style.hasOwnProperty(s)) {
                node.style[s] = style[s];
            }
        }
        node.rcAnimTimeout = null;
        fixBrowserByTimeout(node);
    }, 0);
};
cssAnimation.setTransition = function(node, p, value) {
    var property = p;
    var v = value;
    if (value === undefined) {
        v = property;
        property = '';
    }
    property = property || '';
    capitalPrefixes.forEach(function(prefix) {
        node.style[prefix + 'Transition' + property] = v;
    });
};
cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
;
const __TURBOPACK__default__export__ = cssAnimation;
}),
"[project]/blito-frontend/node_modules/performance-now/lib/performance-now.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Generated by CoffeeScript 1.12.2
(function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) {
        module.exports = function() {
            return performance.now();
        };
    } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
            return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
            var hr;
            hr = hrtime();
            return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
        module.exports = function() {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    } else {
        module.exports = function() {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
}).call(/*TURBOPACK member replacement*/ __turbopack_context__.e); //# sourceMappingURL=performance-now.js.map
}),
"[project]/blito-frontend/node_modules/raf/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var now = __turbopack_context__.r("[project]/blito-frontend/node_modules/performance-now/lib/performance-now.js [app-ssr] (ecmascript)"), root = ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable", vendors = [
    'moz',
    'webkit'
], suffix = 'AnimationFrame', raf = root['request' + suffix], caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for(var i = 0; !raf && i < vendors.length; i++){
    raf = root[vendors[i] + 'Request' + suffix];
    caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}
// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
    var last = 0, id = 0, queue = [], frameDuration = 1000 / 60;
    raf = function(callback) {
        if (queue.length === 0) {
            var _now = now(), next = Math.max(0, frameDuration - (_now - last));
            last = next + _now;
            setTimeout(function() {
                var cp = queue.slice(0);
                // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue
                queue.length = 0;
                for(var i = 0; i < cp.length; i++){
                    if (!cp[i].cancelled) {
                        try {
                            cp[i].callback(last);
                        } catch (e) {
                            setTimeout(function() {
                                throw e;
                            }, 0);
                        }
                    }
                }
            }, Math.round(next));
        }
        queue.push({
            handle: ++id,
            callback: callback,
            cancelled: false
        });
        return id;
    };
    caf = function(handle) {
        for(var i = 0; i < queue.length; i++){
            if (queue[i].handle === handle) {
                queue[i].cancelled = true;
            }
        }
    };
}
module.exports = function(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn);
};
module.exports.cancel = function() {
    caf.apply(root, arguments);
};
module.exports.polyfill = function(object) {
    if (!object) {
        object = root;
    }
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
};
}),
"[project]/blito-frontend/node_modules/rc-trigger/es/LazyRenderBox.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/possibleConstructorReturn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/inherits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var LazyRenderBox = function(_Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(LazyRenderBox, _Component);
    function LazyRenderBox() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, LazyRenderBox);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, _Component.apply(this, arguments));
    }
    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return nextProps.hiddenClassName || nextProps.visible;
    };
    LazyRenderBox.prototype.render = function render() {
        var _props = this.props, hiddenClassName = _props.hiddenClassName, visible = _props.visible, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_props, [
            'hiddenClassName',
            'visible'
        ]);
        if (hiddenClassName || __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.count(props.children) > 1) {
            if (!visible && hiddenClassName) {
                props.className += ' ' + hiddenClassName;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', props);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.only(props.children);
    };
    return LazyRenderBox;
}(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]);
LazyRenderBox.propTypes = {
    children: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    visible: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    hiddenClassName: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
};
const __TURBOPACK__default__export__ = LazyRenderBox;
}),
"[project]/blito-frontend/node_modules/rc-trigger/es/PopupInner.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/possibleConstructorReturn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/inherits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$LazyRenderBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-trigger/es/LazyRenderBox.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var PopupInner = function(_Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(PopupInner, _Component);
    function PopupInner() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, PopupInner);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, _Component.apply(this, arguments));
    }
    PopupInner.prototype.render = function render() {
        var props = this.props;
        var className = props.className;
        if (!props.visible) {
            className += ' ' + props.hiddenClassName;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', {
            className: className,
            onMouseEnter: props.onMouseEnter,
            onMouseLeave: props.onMouseLeave,
            style: props.style
        }, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$LazyRenderBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            className: props.prefixCls + '-content',
            visible: props.visible
        }, props.children));
    };
    return PopupInner;
}(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]);
PopupInner.propTypes = {
    hiddenClassName: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    prefixCls: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    onMouseEnter: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onMouseLeave: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    children: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any
};
const __TURBOPACK__default__export__ = PopupInner;
}),
"[project]/blito-frontend/node_modules/rc-trigger/es/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAlignFromPlacement",
    ()=>getAlignFromPlacement,
    "getAlignPopupClassName",
    ()=>getAlignPopupClassName,
    "saveRef",
    ()=>saveRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/extends.js [app-ssr] (ecmascript)");
;
function isPointsEq(a1, a2, isAlignPoint) {
    if (isAlignPoint) {
        return a1[0] === a2[0];
    }
    return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
    var baseAlign = builtinPlacements[placementStr] || {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, baseAlign, align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
    var points = align.points;
    for(var placement in builtinPlacements){
        if (builtinPlacements.hasOwnProperty(placement)) {
            if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
                return prefixCls + '-placement-' + placement;
            }
        }
    }
    return '';
}
function saveRef(name, component) {
    this[name] = component;
}
}),
"[project]/blito-frontend/node_modules/rc-trigger/es/Popup.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/possibleConstructorReturn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/inherits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-align/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$Animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-animate/es/Animate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$raf$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/raf/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$PopupInner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-trigger/es/PopupInner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$LazyRenderBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-trigger/es/LazyRenderBox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-trigger/es/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
var Popup = function(_Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Popup, _Component);
    function Popup(props) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, Popup);
        var _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, _Component.call(this, props));
        _initialiseProps.call(_this);
        _this.state = {
            // Used for stretch
            stretchChecked: false,
            targetWidth: undefined,
            targetHeight: undefined
        };
        _this.savePopupRef = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveRef"].bind(_this, 'popupInstance');
        _this.saveAlignRef = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveRef"].bind(_this, 'alignInstance');
        return _this;
    }
    Popup.prototype.componentDidMount = function componentDidMount() {
        this.rootNode = this.getPopupDomNode();
        this.setStretchSize();
    };
    Popup.prototype.componentDidUpdate = function componentDidUpdate() {
        this.setStretchSize();
    };
    // Record size if stretch needed
    Popup.prototype.getPopupDomNode = function getPopupDomNode() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].findDOMNode(this.popupInstance);
    };
    // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align
    Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
        var props = this.props;
        var transitionName = props.maskTransitionName;
        var animation = props.maskAnimation;
        if (!transitionName && animation) {
            transitionName = props.prefixCls + '-' + animation;
        }
        return transitionName;
    };
    Popup.prototype.getTransitionName = function getTransitionName() {
        var props = this.props;
        var transitionName = props.transitionName;
        if (!transitionName && props.animation) {
            transitionName = props.prefixCls + '-' + props.animation;
        }
        return transitionName;
    };
    Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
        return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
    };
    Popup.prototype.getPopupElement = function getPopupElement() {
        var _this2 = this;
        var savePopupRef = this.savePopupRef;
        var _state = this.state, stretchChecked = _state.stretchChecked, targetHeight = _state.targetHeight, targetWidth = _state.targetWidth;
        var _props = this.props, align = _props.align, visible = _props.visible, prefixCls = _props.prefixCls, style = _props.style, getClassNameFromAlign = _props.getClassNameFromAlign, destroyPopupOnHide = _props.destroyPopupOnHide, stretch = _props.stretch, children = _props.children, onMouseEnter = _props.onMouseEnter, onMouseLeave = _props.onMouseLeave;
        var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
        var hiddenClassName = prefixCls + '-hidden';
        if (!visible) {
            this.currentAlignClassName = null;
        }
        var sizeStyle = {};
        if (stretch) {
            // Stretch with target
            if (stretch.indexOf('height') !== -1) {
                sizeStyle.height = targetHeight;
            } else if (stretch.indexOf('minHeight') !== -1) {
                sizeStyle.minHeight = targetHeight;
            }
            if (stretch.indexOf('width') !== -1) {
                sizeStyle.width = targetWidth;
            } else if (stretch.indexOf('minWidth') !== -1) {
                sizeStyle.minWidth = targetWidth;
            }
            // Delay force align to makes ui smooth
            if (!stretchChecked) {
                sizeStyle.visibility = 'hidden';
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$raf$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
                    if (_this2.alignInstance) {
                        _this2.alignInstance.forceAlign();
                    }
                });
            }
        }
        var newStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, sizeStyle, style, this.getZIndexStyle());
        var popupInnerProps = {
            className: className,
            prefixCls: prefixCls,
            ref: savePopupRef,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            style: newStyle
        };
        if (destroyPopupOnHide) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$Animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                component: '',
                exclusive: true,
                transitionAppear: true,
                transitionName: this.getTransitionName(),
                onLeave: this.onAnimateLeaved
            }, visible ? __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                target: this.getAlignTarget(),
                key: 'popup',
                ref: this.saveAlignRef,
                monitorWindowResize: true,
                align: align,
                onAlign: this.onAlign
            }, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$PopupInner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                visible: true
            }, popupInnerProps), children)) : null);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$Animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            component: '',
            exclusive: true,
            transitionAppear: true,
            transitionName: this.getTransitionName(),
            showProp: 'xVisible',
            onLeave: this.onAnimateLeaved
        }, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$align$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            target: this.getAlignTarget(),
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            xVisible: visible,
            childrenProps: {
                visible: 'xVisible'
            },
            disabled: !visible,
            align: align,
            onAlign: this.onAlign
        }, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$PopupInner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            hiddenClassName: hiddenClassName
        }, popupInnerProps), children)));
    };
    Popup.prototype.getZIndexStyle = function getZIndexStyle() {
        var style = {};
        var props = this.props;
        if (props.zIndex !== undefined) {
            style.zIndex = props.zIndex;
        }
        return style;
    };
    Popup.prototype.getMaskElement = function getMaskElement() {
        var props = this.props;
        var maskElement = void 0;
        if (props.mask) {
            var maskTransition = this.getMaskTransitionName();
            maskElement = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$LazyRenderBox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: this.getZIndexStyle(),
                key: 'mask',
                className: props.prefixCls + '-mask',
                hiddenClassName: props.prefixCls + '-mask-hidden',
                visible: props.visible
            });
            if (maskTransition) {
                maskElement = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$animate$2f$es$2f$Animate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    key: 'mask',
                    showProp: 'visible',
                    transitionAppear: true,
                    component: '',
                    transitionName: maskTransition
                }, maskElement);
            }
        }
        return maskElement;
    };
    Popup.prototype.render = function render() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement('div', null, this.getMaskElement(), this.getPopupElement());
    };
    return Popup;
}(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"]);
Popup.propTypes = {
    visible: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    style: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    getClassNameFromAlign: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onAlign: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    getRootDomNode: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    onMouseEnter: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    align: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    destroyPopupOnHide: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    prefixCls: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    onMouseLeave: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    stretch: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    children: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    point: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].shape({
        pageX: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
        pageY: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number
    })
};
var _initialiseProps = function _initialiseProps() {
    var _this3 = this;
    this.onAlign = function(popupDomNode, align) {
        var props = _this3.props;
        var currentAlignClassName = props.getClassNameFromAlign(align);
        // FIX: https://github.com/react-component/trigger/issues/56
        // FIX: https://github.com/react-component/tooltip/issues/79
        if (_this3.currentAlignClassName !== currentAlignClassName) {
            _this3.currentAlignClassName = currentAlignClassName;
            popupDomNode.className = _this3.getClassName(currentAlignClassName);
        }
        props.onAlign(popupDomNode, align);
    };
    this.onAnimateLeaved = function() {
        var stretch = _this3.props.stretch;
        var stretchChecked = _this3.state.stretchChecked;
        if (stretch && stretchChecked) {
            _this3.setState({
                stretchChecked: false
            });
        }
    };
    this.setStretchSize = function() {
        var getRootDomNode = _this3.props.getRootDomNode;
        var _state2 = _this3.state, stretchChecked = _state2.stretchChecked, targetHeight = _state2.targetHeight, targetWidth = _state2.targetWidth;
        var $ele = getRootDomNode();
        if (!$ele) return;
        var height = $ele.offsetHeight;
        var width = $ele.offsetWidth;
        if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
            _this3.setState({
                stretchChecked: true,
                targetHeight: height,
                targetWidth: width
            });
        }
    };
    this.getTargetElement = function() {
        return _this3.props.getRootDomNode();
    };
    this.getAlignTarget = function() {
        var point = _this3.props.point;
        if (point) {
            return point;
        }
        return _this3.getTargetElement;
    };
};
const __TURBOPACK__default__export__ = Popup;
}),
"[project]/blito-frontend/node_modules/rc-trigger/es/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/possibleConstructorReturn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/babel-runtime/helpers/inherits.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-util/es/Dom/contains.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-util/es/Dom/addEventListener.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-trigger/es/Popup.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-trigger/es/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$ContainerRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-util/es/ContainerRender.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-util/es/Portal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$unsafeLifecyclesPolyfill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/rc-util/es/unsafeLifecyclesPolyfill.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function noop() {}
function returnEmptyString() {
    return '';
}
function returnDocument() {
    return window.document;
}
var ALL_HANDLERS = [
    'onClick',
    'onMouseDown',
    'onTouchStart',
    'onMouseEnter',
    'onMouseLeave',
    'onFocus',
    'onBlur',
    'onContextMenu'
];
var IS_REACT_16 = !!__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"];
var Trigger = function(_React$Component) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$inherits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Trigger, _React$Component);
    function Trigger(props) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, Trigger);
        var _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$possibleConstructorReturn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, _React$Component.call(this, props));
        _initialiseProps.call(_this);
        var popupVisible = void 0;
        if ('popupVisible' in props) {
            popupVisible = !!props.popupVisible;
        } else {
            popupVisible = !!props.defaultPopupVisible;
        }
        _this.prevPopupVisible = popupVisible;
        _this.state = {
            popupVisible: popupVisible
        };
        ALL_HANDLERS.forEach(function(h) {
            _this['fire' + h] = function(e) {
                _this.fireEvents(h, e);
            };
        });
        return _this;
    }
    Trigger.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({}, {
            popupVisible: this.state.popupVisible
        });
    };
    Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
        var popupVisible = _ref.popupVisible;
        if (popupVisible !== undefined) {
            this.setState({
                popupVisible: popupVisible
            });
        }
    };
    Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
        var props = this.props;
        var state = this.state;
        var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
            if (prevState.popupVisible !== state.popupVisible) {
                props.afterPopupVisibleChange(state.popupVisible);
            }
        };
        if (!IS_REACT_16) {
            this.renderComponent(null, triggerAfterPopupVisibleChange);
        }
        this.prevPopupVisible = prevState.popupVisible;
        // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50
        if (state.popupVisible) {
            var currentDocument = void 0;
            if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
                currentDocument = props.getDocument();
                this.clickOutsideHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
            }
            // always hide on mobile
            if (!this.touchOutsideHandler) {
                currentDocument = currentDocument || props.getDocument();
                this.touchOutsideHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
            }
            // close popup when trigger type contains 'onContextMenu' and document is scrolling.
            if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
                currentDocument = currentDocument || props.getDocument();
                this.contextMenuOutsideHandler1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
            }
            // close popup when trigger type contains 'onContextMenu' and window is blur.
            if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
                this.contextMenuOutsideHandler2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$addEventListener$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(window, 'blur', this.onContextMenuClose);
            }
            return;
        }
        this.clearOutsideHandler();
    };
    Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
    };
    Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
        // for test
        if (this._component && this._component.getPopupDomNode) {
            return this._component.getPopupDomNode();
        }
        return null;
    };
    Trigger.prototype.getPopupAlign = function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement, popupAlign = props.popupAlign, builtinPlacements = props.builtinPlacements;
        if (popupPlacement && builtinPlacements) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
        }
        return popupAlign;
    };
    /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */ Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        this.clearDelayTimer();
        if (this.state.popupVisible !== popupVisible) {
            if (!('popupVisible' in this.props)) {
                this.setState({
                    popupVisible: popupVisible
                });
            }
            this.props.onPopupVisibleChange(popupVisible);
        }
        // Always record the point position since mouseEnterDelay will delay the show
        if (alignPoint && event) {
            this.setPoint(event);
        }
    };
    Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;
        var delay = delayS * 1000;
        this.clearDelayTimer();
        if (delay) {
            var point = event ? {
                pageX: event.pageX,
                pageY: event.pageY
            } : null;
            this.delayTimer = setTimeout(function() {
                _this2.setPopupVisible(visible, point);
                _this2.clearDelayTimer();
            }, delay);
        } else {
            this.setPopupVisible(visible, event);
        }
    };
    Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
    };
    Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
            this.clickOutsideHandler.remove();
            this.clickOutsideHandler = null;
        }
        if (this.contextMenuOutsideHandler1) {
            this.contextMenuOutsideHandler1.remove();
            this.contextMenuOutsideHandler1 = null;
        }
        if (this.contextMenuOutsideHandler2) {
            this.contextMenuOutsideHandler2.remove();
            this.contextMenuOutsideHandler2 = null;
        }
        if (this.touchOutsideHandler) {
            this.touchOutsideHandler.remove();
            this.touchOutsideHandler = null;
        }
    };
    Trigger.prototype.createTwoChains = function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;
        if (childPros[event] && props[event]) {
            return this['fire' + event];
        }
        return childPros[event] || props[event];
    };
    Trigger.prototype.isClickToShow = function isClickToShow() {
        var _props = this.props, action = _props.action, showAction = _props.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
    };
    Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
        var _props2 = this.props, action = _props2.action, showAction = _props2.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
    };
    Trigger.prototype.isClickToHide = function isClickToHide() {
        var _props3 = this.props, action = _props3.action, hideAction = _props3.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
    };
    Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
        var _props4 = this.props, action = _props4.action, showAction = _props4.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
    };
    Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
        var _props5 = this.props, action = _props5.action, hideAction = _props5.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
    };
    Trigger.prototype.isFocusToShow = function isFocusToShow() {
        var _props6 = this.props, action = _props6.action, showAction = _props6.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
    };
    Trigger.prototype.isBlurToHide = function isBlurToHide() {
        var _props7 = this.props, action = _props7.action, hideAction = _props7.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
    };
    Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
        if (this.state.popupVisible && this._component && this._component.alignInstance) {
            this._component.alignInstance.forceAlign();
        }
    };
    Trigger.prototype.fireEvents = function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];
        if (childCallback) {
            childCallback(e);
        }
        var callback = this.props[type];
        if (callback) {
            callback(e);
        }
    };
    Trigger.prototype.close = function close() {
        this.setPopupVisible(false);
    };
    Trigger.prototype.render = function render() {
        var _this3 = this;
        var popupVisible = this.state.popupVisible;
        var _props8 = this.props, children = _props8.children, forceRender = _props8.forceRender, alignPoint = _props8.alignPoint, className = _props8.className;
        var child = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.only(children);
        var newChildProps = {
            key: 'trigger'
        };
        if (this.isContextMenuToShow()) {
            newChildProps.onContextMenu = this.onContextMenu;
        } else {
            newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        }
        if (this.isClickToHide() || this.isClickToShow()) {
            newChildProps.onClick = this.onClick;
            newChildProps.onMouseDown = this.onMouseDown;
            newChildProps.onTouchStart = this.onTouchStart;
        } else {
            newChildProps.onClick = this.createTwoChains('onClick');
            newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
            newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        }
        if (this.isMouseEnterToShow()) {
            newChildProps.onMouseEnter = this.onMouseEnter;
            if (alignPoint) {
                newChildProps.onMouseMove = this.onMouseMove;
            }
        } else {
            newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        }
        if (this.isMouseLeaveToHide()) {
            newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
            newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
            newChildProps.onFocus = this.onFocus;
            newChildProps.onBlur = this.onBlur;
        } else {
            newChildProps.onFocus = this.createTwoChains('onFocus');
            newChildProps.onBlur = this.createTwoChains('onBlur');
        }
        var childrenClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(child && child.props && child.props.className, className);
        if (childrenClassName) {
            newChildProps.className = childrenClassName;
        }
        var trigger = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, newChildProps);
        if (!IS_REACT_16) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$ContainerRender$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                parent: this,
                visible: popupVisible,
                autoMount: false,
                forceRender: forceRender,
                getComponent: this.getComponent,
                getContainer: this.getContainer
            }, function(_ref2) {
                var renderComponent = _ref2.renderComponent;
                _this3.renderComponent = renderComponent;
                return trigger;
            });
        }
        var portal = void 0;
        // prevent unmounting after it's rendered
        if (popupVisible || this._component || forceRender) {
            portal = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                key: 'portal',
                getContainer: this.getContainer,
                didUpdate: this.handlePortalUpdate
            }, this.getComponent());
        }
        return [
            trigger,
            portal
        ];
    };
    return Trigger;
}(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component);
Trigger.propTypes = {
    children: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    action: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string)
    ]),
    showAction: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    hideAction: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    getPopupClassNameFromAlign: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    onPopupVisibleChange: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    afterPopupVisibleChange: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    popup: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func
    ]).isRequired,
    popupStyle: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    prefixCls: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    popupClassName: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    className: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    popupPlacement: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    builtinPlacements: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    popupTransitionName: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    popupAnimation: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].any,
    mouseEnterDelay: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    mouseLeaveDelay: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    focusDelay: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    blurDelay: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    getPopupContainer: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    getDocument: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    forceRender: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    destroyPopupOnHide: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    mask: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    maskClosable: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    onPopupAlign: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    popupAlign: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    popupVisible: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    defaultPopupVisible: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    maskTransitionName: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    maskAnimation: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    stretch: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    alignPoint: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool // Maybe we can support user pass position in the future
};
Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: []
};
var _initialiseProps = function _initialiseProps() {
    var _this4 = this;
    this.onMouseEnter = function(e) {
        var mouseEnterDelay = _this4.props.mouseEnterDelay;
        _this4.fireEvents('onMouseEnter', e);
        _this4.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
    };
    this.onMouseMove = function(e) {
        _this4.fireEvents('onMouseMove', e);
        _this4.setPoint(e);
    };
    this.onMouseLeave = function(e) {
        _this4.fireEvents('onMouseLeave', e);
        _this4.delaySetPopupVisible(false, _this4.props.mouseLeaveDelay);
    };
    this.onPopupMouseEnter = function() {
        _this4.clearDelayTimer();
    };
    this.onPopupMouseLeave = function(e) {
        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && _this4._component && _this4._component.getPopupDomNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_this4._component.getPopupDomNode(), e.relatedTarget)) {
            return;
        }
        _this4.delaySetPopupVisible(false, _this4.props.mouseLeaveDelay);
    };
    this.onFocus = function(e) {
        _this4.fireEvents('onFocus', e);
        // incase focusin and focusout
        _this4.clearDelayTimer();
        if (_this4.isFocusToShow()) {
            _this4.focusTime = Date.now();
            _this4.delaySetPopupVisible(true, _this4.props.focusDelay);
        }
    };
    this.onMouseDown = function(e) {
        _this4.fireEvents('onMouseDown', e);
        _this4.preClickTime = Date.now();
    };
    this.onTouchStart = function(e) {
        _this4.fireEvents('onTouchStart', e);
        _this4.preTouchTime = Date.now();
    };
    this.onBlur = function(e) {
        _this4.fireEvents('onBlur', e);
        _this4.clearDelayTimer();
        if (_this4.isBlurToHide()) {
            _this4.delaySetPopupVisible(false, _this4.props.blurDelay);
        }
    };
    this.onContextMenu = function(e) {
        e.preventDefault();
        _this4.fireEvents('onContextMenu', e);
        _this4.setPopupVisible(true, e);
    };
    this.onContextMenuClose = function() {
        if (_this4.isContextMenuToShow()) {
            _this4.close();
        }
    };
    this.onClick = function(event) {
        _this4.fireEvents('onClick', event);
        // focus will trigger click
        if (_this4.focusTime) {
            var preTime = void 0;
            if (_this4.preClickTime && _this4.preTouchTime) {
                preTime = Math.min(_this4.preClickTime, _this4.preTouchTime);
            } else if (_this4.preClickTime) {
                preTime = _this4.preClickTime;
            } else if (_this4.preTouchTime) {
                preTime = _this4.preTouchTime;
            }
            if (Math.abs(preTime - _this4.focusTime) < 20) {
                return;
            }
            _this4.focusTime = 0;
        }
        _this4.preClickTime = 0;
        _this4.preTouchTime = 0;
        if (event && event.preventDefault) {
            event.preventDefault();
        }
        var nextVisible = !_this4.state.popupVisible;
        if (_this4.isClickToHide() && !nextVisible || nextVisible && _this4.isClickToShow()) {
            _this4.setPopupVisible(!_this4.state.popupVisible, event);
        }
    };
    this.onDocumentClick = function(event) {
        if (_this4.props.mask && !_this4.props.maskClosable) {
            return;
        }
        var target = event.target;
        var root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findDOMNode"])(_this4);
        var popupNode = _this4.getPopupDomNode();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(root, target) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$contains$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(popupNode, target)) {
            _this4.close();
        }
    };
    this.getRootDomNode = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findDOMNode"])(_this4);
    };
    this.getPopupClassNameFromAlign = function(align) {
        var className = [];
        var _props9 = _this4.props, popupPlacement = _props9.popupPlacement, builtinPlacements = _props9.builtinPlacements, prefixCls = _props9.prefixCls, alignPoint = _props9.alignPoint, getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;
        if (popupPlacement && builtinPlacements) {
            className.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
        }
        if (getPopupClassNameFromAlign) {
            className.push(getPopupClassNameFromAlign(align));
        }
        return className.join(' ');
    };
    this.getComponent = function() {
        var _props10 = _this4.props, prefixCls = _props10.prefixCls, destroyPopupOnHide = _props10.destroyPopupOnHide, popupClassName = _props10.popupClassName, action = _props10.action, onPopupAlign = _props10.onPopupAlign, popupAnimation = _props10.popupAnimation, popupTransitionName = _props10.popupTransitionName, popupStyle = _props10.popupStyle, mask = _props10.mask, maskAnimation = _props10.maskAnimation, maskTransitionName = _props10.maskTransitionName, zIndex = _props10.zIndex, popup = _props10.popup, stretch = _props10.stretch, alignPoint = _props10.alignPoint;
        var _state = _this4.state, popupVisible = _state.popupVisible, point = _state.point;
        var align = _this4.getPopupAlign();
        var mouseProps = {};
        if (_this4.isMouseEnterToShow()) {
            mouseProps.onMouseEnter = _this4.onPopupMouseEnter;
        }
        if (_this4.isMouseLeaveToHide()) {
            mouseProps.onMouseLeave = _this4.onPopupMouseLeave;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$trigger$2f$es$2f$Popup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$babel$2d$runtime$2f$helpers$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            prefixCls: prefixCls,
            destroyPopupOnHide: destroyPopupOnHide,
            visible: popupVisible,
            point: alignPoint && point,
            className: popupClassName,
            action: action,
            align: align,
            onAlign: onPopupAlign,
            animation: popupAnimation,
            getClassNameFromAlign: _this4.getPopupClassNameFromAlign
        }, mouseProps, {
            stretch: stretch,
            getRootDomNode: _this4.getRootDomNode,
            style: popupStyle,
            mask: mask,
            zIndex: zIndex,
            transitionName: popupTransitionName,
            maskAnimation: maskAnimation,
            maskTransitionName: maskTransitionName,
            ref: _this4.savePopup
        }), typeof popup === 'function' ? popup() : popup);
    };
    this.getContainer = function() {
        var props = _this4.props;
        var popupContainer = document.createElement('div');
        // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41
        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';
        var mountNode = props.getPopupContainer ? props.getPopupContainer((0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findDOMNode"])(_this4)) : props.getDocument().body;
        mountNode.appendChild(popupContainer);
        return popupContainer;
    };
    this.setPoint = function(point) {
        var alignPoint = _this4.props.alignPoint;
        if (!alignPoint || !point) return;
        _this4.setState({
            point: {
                pageX: point.pageX,
                pageY: point.pageY
            }
        });
    };
    this.handlePortalUpdate = function() {
        if (_this4.prevPopupVisible !== _this4.state.popupVisible) {
            _this4.props.afterPopupVisibleChange(_this4.state.popupVisible);
        }
    };
    this.savePopup = function(node) {
        _this4._component = node;
    };
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$rc$2d$util$2f$es$2f$unsafeLifecyclesPolyfill$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(Trigger);
}),
"[project]/blito-frontend/node_modules/moment-range/dist/moment-range.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, e) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e(__turbopack_context__.r("[project]/blito-frontend/node_modules/moment/moment.js [app-ssr] (ecmascript)")) : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(t) {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t;
        }, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return e.d(n, "a", n), n;
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, e.p = "", e(e.s = 3);
    }([
        function(t, e, n) {
            "use strict";
            var r = n(5)();
            t.exports = function(t) {
                return t !== r && null !== t;
            };
        },
        function(t, e, n) {
            "use strict";
            t.exports = n(18)() ? Symbol : n(20);
        },
        function(e, n) {
            e.exports = t;
        },
        function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function u(t) {
                return t.range = function(e, n) {
                    var r = this;
                    return "string" == typeof e && y.hasOwnProperty(e) ? new h(t(r).startOf(e), t(r).endOf(e)) : new h(e, n);
                }, t.rangeFromInterval = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t();
                    if (t.isMoment(r) || (r = t(r)), !r.isValid()) throw new Error("Invalid date.");
                    var o = r.clone().add(n, e), i = [];
                    return i.push(t.min(r, o)), i.push(t.max(r, o)), new h(i);
                }, t.rangeFromISOString = function(e) {
                    var n = a(e), r = t.parseZone(n[0]), o = t.parseZone(n[1]);
                    return new h(r, o);
                }, t.parseZoneRange = t.rangeFromISOString, t.fn.range = t.range, t.range.constructor = h, t.isRange = function(t) {
                    return t instanceof h;
                }, t.fn.within = function(t) {
                    return t.contains(this.toDate());
                }, t;
            }
            function a(t) {
                return t.split("/");
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.DateRange = void 0;
            var s = function() {
                function t(t, e) {
                    var n = [], r = !0, o = !1, i = void 0;
                    try {
                        for(var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t;
                    } finally{
                        try {
                            !r && a.return && a.return();
                        } finally{
                            if (o) throw i;
                        }
                    }
                    return n;
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            }(), c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, f = function() {
                function t(t, e) {
                    for(var n = 0; n < e.length; n++){
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e;
                };
            }();
            e.extendMoment = u;
            var l = n(2), v = r(l), d = n(1), p = r(d), y = {
                year: !0,
                quarter: !0,
                month: !0,
                week: !0,
                day: !0,
                hour: !0,
                minute: !0,
                second: !0
            }, h = e.DateRange = function() {
                function t(e, n) {
                    i(this, t);
                    var r = e, o = n;
                    if (1 === arguments.length || void 0 === n) {
                        if ("object" === (void 0 === e ? "undefined" : c(e)) && 2 === e.length) {
                            var u = s(e, 2);
                            r = u[0], o = u[1];
                        } else if ("string" == typeof e) {
                            var f = a(e), l = s(f, 2);
                            r = l[0], o = l[1];
                        }
                    }
                    this.start = r || 0 === r ? (0, v.default)(r) : (0, v.default)(-864e13), this.end = o || 0 === o ? (0, v.default)(o) : (0, v.default)(864e13);
                }
                return f(t, [
                    {
                        key: "adjacent",
                        value: function(t) {
                            var e = this.start.isSame(t.end), n = this.end.isSame(t.start);
                            return e && t.start.valueOf() <= this.start.valueOf() || n && t.end.valueOf() >= this.end.valueOf();
                        }
                    },
                    {
                        key: "add",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                adjacent: !1
                            };
                            return this.overlaps(t, e) ? new this.constructor(v.default.min(this.start, t.start), v.default.max(this.end, t.end)) : null;
                        }
                    },
                    {
                        key: "by",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                excludeEnd: !1,
                                step: 1
                            }, n = this;
                            return o({}, p.default.iterator, function() {
                                var r = e.step || 1, o = Math.abs(n.start.diff(n.end, t)) / r, i = e.excludeEnd || !1, u = 0;
                                return e.hasOwnProperty("exclusive") && (i = e.exclusive), {
                                    next: function() {
                                        var e = n.start.clone().add(u * r, t), a = i ? !(u < o) : !(u <= o);
                                        return u++, {
                                            done: a,
                                            value: a ? void 0 : e
                                        };
                                    }
                                };
                            });
                        }
                    },
                    {
                        key: "byRange",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                excludeEnd: !1,
                                step: 1
                            }, n = this, r = e.step || 1, i = this.valueOf() / t.valueOf() / r, u = Math.floor(i), a = e.excludeEnd || !1, s = 0;
                            return e.hasOwnProperty("exclusive") && (a = e.exclusive), o({}, p.default.iterator, function() {
                                return u === 1 / 0 ? {
                                    done: !0
                                } : {
                                    next: function() {
                                        var e = (0, v.default)(n.start.valueOf() + t.valueOf() * s * r), o = u === i && a ? !(s < u) : !(s <= u);
                                        return s++, {
                                            done: o,
                                            value: o ? void 0 : e
                                        };
                                    }
                                };
                            });
                        }
                    },
                    {
                        key: "center",
                        value: function() {
                            var t = this.start.valueOf() + this.diff() / 2;
                            return (0, v.default)(t);
                        }
                    },
                    {
                        key: "clone",
                        value: function() {
                            return new this.constructor(this.start.clone(), this.end.clone());
                        }
                    },
                    {
                        key: "contains",
                        value: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                excludeStart: !1,
                                excludeEnd: !1
                            }, r = this.start.valueOf(), o = this.end.valueOf(), i = e.valueOf(), u = e.valueOf(), a = n.excludeStart || !1, s = n.excludeEnd || !1;
                            n.hasOwnProperty("exclusive") && (a = s = n.exclusive), e instanceof t && (i = e.start.valueOf(), u = e.end.valueOf());
                            var c = r < i || r <= i && !a, f = o > u || o >= u && !s;
                            return c && f;
                        }
                    },
                    {
                        key: "diff",
                        value: function(t, e) {
                            return this.end.diff(this.start, t, e);
                        }
                    },
                    {
                        key: "duration",
                        value: function(t, e) {
                            return this.diff(t, e);
                        }
                    },
                    {
                        key: "intersect",
                        value: function(t) {
                            var e = this.start.valueOf(), n = this.end.valueOf(), r = t.start.valueOf(), o = t.end.valueOf(), i = e == n, u = r == o;
                            if (i) {
                                var a = e;
                                if (a == r || a == o) return null;
                                if (a > r && a < o) return this.clone();
                            } else if (u) {
                                var s = r;
                                if (s == e || s == n) return null;
                                if (s > e && s < n) return new this.constructor(s, s);
                            }
                            return e <= r && r < n && n < o ? new this.constructor(r, n) : r < e && e < o && o <= n ? new this.constructor(e, o) : r < e && e <= n && n < o ? this.clone() : e <= r && r <= o && o <= n ? new this.constructor(r, o) : null;
                        }
                    },
                    {
                        key: "isEqual",
                        value: function(t) {
                            return this.start.isSame(t.start) && this.end.isSame(t.end);
                        }
                    },
                    {
                        key: "isSame",
                        value: function(t) {
                            return this.isEqual(t);
                        }
                    },
                    {
                        key: "overlaps",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                adjacent: !1
                            }, n = null !== this.intersect(t);
                            return e.adjacent && !n ? this.adjacent(t) : n;
                        }
                    },
                    {
                        key: "reverseBy",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                excludeStart: !1,
                                step: 1
                            }, n = this;
                            return o({}, p.default.iterator, function() {
                                var r = e.step || 1, o = Math.abs(n.start.diff(n.end, t)) / r, i = e.excludeStart || !1, u = 0;
                                return e.hasOwnProperty("exclusive") && (i = e.exclusive), {
                                    next: function() {
                                        var e = n.end.clone().subtract(u * r, t), a = i ? !(u < o) : !(u <= o);
                                        return u++, {
                                            done: a,
                                            value: a ? void 0 : e
                                        };
                                    }
                                };
                            });
                        }
                    },
                    {
                        key: "reverseByRange",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                excludeStart: !1,
                                step: 1
                            }, n = this, r = e.step || 1, i = this.valueOf() / t.valueOf() / r, u = Math.floor(i), a = e.excludeStart || !1, s = 0;
                            return e.hasOwnProperty("exclusive") && (a = e.exclusive), o({}, p.default.iterator, function() {
                                return u === 1 / 0 ? {
                                    done: !0
                                } : {
                                    next: function() {
                                        var e = (0, v.default)(n.end.valueOf() - t.valueOf() * s * r), o = u === i && a ? !(s < u) : !(s <= u);
                                        return s++, {
                                            done: o,
                                            value: o ? void 0 : e
                                        };
                                    }
                                };
                            });
                        }
                    },
                    {
                        key: "snapTo",
                        value: function(t) {
                            var e = this.clone();
                            return e.start.isSame((0, v.default)(-864e13)) || (e.start = e.start.startOf(t)), e.end.isSame((0, v.default)(864e13)) || (e.end = e.end.endOf(t)), e;
                        }
                    },
                    {
                        key: "subtract",
                        value: function(t) {
                            var e = this.start.valueOf(), n = this.end.valueOf(), r = t.start.valueOf(), o = t.end.valueOf();
                            return null === this.intersect(t) ? [
                                this
                            ] : r <= e && e < n && n <= o ? [] : r <= e && e < o && o < n ? [
                                new this.constructor(o, n)
                            ] : e < r && r < n && n <= o ? [
                                new this.constructor(e, r)
                            ] : e < r && r < o && o < n ? [
                                new this.constructor(e, r),
                                new this.constructor(o, n)
                            ] : e < r && r < n && o < n ? [
                                new this.constructor(e, r),
                                new this.constructor(r, n)
                            ] : [];
                        }
                    },
                    {
                        key: "toDate",
                        value: function() {
                            return [
                                this.start.toDate(),
                                this.end.toDate()
                            ];
                        }
                    },
                    {
                        key: "toString",
                        value: function() {
                            return this.start.format() + "/" + this.end.format();
                        }
                    },
                    {
                        key: "valueOf",
                        value: function() {
                            return this.end.valueOf() - this.start.valueOf();
                        }
                    }
                ]), t;
            }();
        },
        function(t, e, n) {
            "use strict";
            var r, o = n(6), i = n(13), u = n(9), a = n(15);
            r = t.exports = function(t, e) {
                var n, r, u, s, c;
                return arguments.length < 2 || "string" != typeof t ? (s = e, e = t, t = null) : s = arguments[2], null == t ? (n = u = !0, r = !1) : (n = a.call(t, "c"), r = a.call(t, "e"), u = a.call(t, "w")), c = {
                    value: e,
                    configurable: n,
                    enumerable: r,
                    writable: u
                }, s ? o(i(s), c) : c;
            }, r.gs = function(t, e, n) {
                var r, s, c, f;
                return "string" != typeof t ? (c = n, n = e, e = t, t = null) : c = arguments[3], null == e ? e = void 0 : u(e) ? null == n ? n = void 0 : u(n) || (c = n, n = void 0) : (c = e, e = n = void 0), null == t ? (r = !0, s = !1) : (r = a.call(t, "c"), s = a.call(t, "e")), f = {
                    get: e,
                    set: n,
                    configurable: r,
                    enumerable: s
                }, c ? o(i(c), f) : f;
            };
        },
        function(t, e, n) {
            "use strict";
            t.exports = function() {};
        },
        function(t, e, n) {
            "use strict";
            t.exports = n(7)() ? Object.assign : n(8);
        },
        function(t, e, n) {
            "use strict";
            t.exports = function() {
                var t, e = Object.assign;
                return "function" == typeof e && (t = {
                    foo: "raz"
                }, e(t, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                }), t.foo + t.bar + t.trzy === "razdwatrzy");
            };
        },
        function(t, e, n) {
            "use strict";
            var r = n(10), o = n(14), i = Math.max;
            t.exports = function(t, e) {
                var n, u, a, s = i(arguments.length, 2);
                for(t = Object(o(t)), a = function(r) {
                    try {
                        t[r] = e[r];
                    } catch (t) {
                        n || (n = t);
                    }
                }, u = 1; u < s; ++u)e = arguments[u], r(e).forEach(a);
                if (void 0 !== n) throw n;
                return t;
            };
        },
        function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return "function" == typeof t;
            };
        },
        function(t, e, n) {
            "use strict";
            t.exports = n(11)() ? Object.keys : n(12);
        },
        function(t, e, n) {
            "use strict";
            t.exports = function() {
                try {
                    return Object.keys("primitive"), !0;
                } catch (t) {
                    return !1;
                }
            };
        },
        function(t, e, n) {
            "use strict";
            var r = n(0), o = Object.keys;
            t.exports = function(t) {
                return o(r(t) ? Object(t) : t);
            };
        },
        function(t, e, n) {
            "use strict";
            var r = n(0), o = Array.prototype.forEach, i = Object.create, u = function(t, e) {
                var n;
                for(n in t)e[n] = t[n];
            };
            t.exports = function(t) {
                var e = i(null);
                return o.call(arguments, function(t) {
                    r(t) && u(Object(t), e);
                }), e;
            };
        },
        function(t, e, n) {
            "use strict";
            var r = n(0);
            t.exports = function(t) {
                if (!r(t)) throw new TypeError("Cannot use null or undefined");
                return t;
            };
        },
        function(t, e, n) {
            "use strict";
            t.exports = n(16)() ? String.prototype.contains : n(17);
        },
        function(t, e, n) {
            "use strict";
            var r = "razdwatrzy";
            t.exports = function() {
                return "function" == typeof r.contains && !0 === r.contains("dwa") && !1 === r.contains("foo");
            };
        },
        function(t, e, n) {
            "use strict";
            var r = String.prototype.indexOf;
            t.exports = function(t) {
                return r.call(this, t, arguments[1]) > -1;
            };
        },
        function(t, e, n) {
            "use strict";
            var r = {
                object: !0,
                symbol: !0
            };
            t.exports = function() {
                var t;
                if ("function" != typeof Symbol) return !1;
                t = Symbol("test symbol");
                try {
                    String(t);
                } catch (t) {
                    return !1;
                }
                return !!r[typeof Symbol.iterator] && !!r[typeof Symbol.toPrimitive] && !!r[typeof Symbol.toStringTag];
            };
        },
        function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return !!t && ("symbol" == typeof t || !!t.constructor && "Symbol" === t.constructor.name && "Symbol" === t[t.constructor.toStringTag]);
            };
        },
        function(t, e, n) {
            "use strict";
            var r, o, i, u, a = n(4), s = n(21), c = Object.create, f = Object.defineProperties, l = Object.defineProperty, v = Object.prototype, d = c(null);
            if ("function" == typeof Symbol) {
                r = Symbol;
                try {
                    String(r()), u = !0;
                } catch (t) {}
            }
            var p = function() {
                var t = c(null);
                return function(e) {
                    for(var n, r, o = 0; t[e + (o || "")];)++o;
                    return e += o || "", t[e] = !0, n = "@@" + e, l(v, n, a.gs(null, function(t) {
                        r || (r = !0, l(this, n, a(t)), r = !1);
                    })), n;
                };
            }();
            i = function(t) {
                if (this instanceof i) throw new TypeError("Symbol is not a constructor");
                return o(t);
            }, t.exports = o = function t(e) {
                var n;
                if (this instanceof t) throw new TypeError("Symbol is not a constructor");
                return u ? r(e) : (n = c(i.prototype), e = void 0 === e ? "" : String(e), f(n, {
                    __description__: a("", e),
                    __name__: a("", p(e))
                }));
            }, f(o, {
                for: a(function(t) {
                    return d[t] ? d[t] : d[t] = o(String(t));
                }),
                keyFor: a(function(t) {
                    var e;
                    s(t);
                    for(e in d)if (d[e] === t) return e;
                }),
                hasInstance: a("", r && r.hasInstance || o("hasInstance")),
                isConcatSpreadable: a("", r && r.isConcatSpreadable || o("isConcatSpreadable")),
                iterator: a("", r && r.iterator || o("iterator")),
                match: a("", r && r.match || o("match")),
                replace: a("", r && r.replace || o("replace")),
                search: a("", r && r.search || o("search")),
                species: a("", r && r.species || o("species")),
                split: a("", r && r.split || o("split")),
                toPrimitive: a("", r && r.toPrimitive || o("toPrimitive")),
                toStringTag: a("", r && r.toStringTag || o("toStringTag")),
                unscopables: a("", r && r.unscopables || o("unscopables"))
            }), f(i.prototype, {
                constructor: a(o),
                toString: a("", function() {
                    return this.__name__;
                })
            }), f(o.prototype, {
                toString: a(function() {
                    return "Symbol (" + s(this).__description__ + ")";
                }),
                valueOf: a(function() {
                    return s(this);
                })
            }), l(o.prototype, o.toPrimitive, a("", function() {
                var t = s(this);
                return "symbol" == typeof t ? t : t.toString();
            })), l(o.prototype, o.toStringTag, a("c", "Symbol")), l(i.prototype, o.toStringTag, a("c", o.prototype[o.toStringTag])), l(i.prototype, o.toPrimitive, a("c", o.prototype[o.toPrimitive]));
        },
        function(t, e, n) {
            "use strict";
            var r = n(19);
            t.exports = function(t) {
                if (!r(t)) throw new TypeError(t + " is not a symbol");
                return t;
            };
        }
    ]);
}); //# sourceMappingURL=moment-range.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("check", __iconNode);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDownIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }
    ]
];
const ChevronUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-up", __iconNode);
;
 //# sourceMappingURL=chevron-up.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronUpIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MapPin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRightLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 3 4 4-4 4",
            key: "1x1c3m"
        }
    ],
    [
        "path",
        {
            d: "M20 7H4",
            key: "zbl0bi"
        }
    ],
    [
        "path",
        {
            d: "m8 21-4-4 4-4",
            key: "h9nckh"
        }
    ],
    [
        "path",
        {
            d: "M4 17h16",
            key: "g4d7ey"
        }
    ]
];
const ArrowRightLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-right-left", __iconNode);
;
 //# sourceMappingURL=arrow-right-left.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-ssr] (ecmascript) <export default as ArrowRightLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRightLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/arrow-right-left.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/bus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Bus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 6v6",
            key: "18i7km"
        }
    ],
    [
        "path",
        {
            d: "M15 6v6",
            key: "1sg6z9"
        }
    ],
    [
        "path",
        {
            d: "M2 12h19.6",
            key: "de5uta"
        }
    ],
    [
        "path",
        {
            d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
            key: "1wwztk"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "18",
            r: "2",
            key: "19iecd"
        }
    ],
    [
        "path",
        {
            d: "M9 18h5",
            key: "lrx6i"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "18",
            r: "2",
            key: "1v4tcr"
        }
    ]
];
const Bus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("bus", __iconNode);
;
 //# sourceMappingURL=bus.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/bus.js [app-ssr] (ecmascript) <export default as Bus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/bus.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>DollarSign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22",
            key: "7eqyqh"
        }
    ],
    [
        "path",
        {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }
    ]
];
const DollarSign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("dollar-sign", __iconNode);
;
 //# sourceMappingURL=dollar-sign.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DollarSign",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/route.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Route
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "6",
            cy: "19",
            r: "3",
            key: "1kj8tv"
        }
    ],
    [
        "path",
        {
            d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
            key: "1d8sl"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }
    ]
];
const Route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("route", __iconNode);
;
 //# sourceMappingURL=route.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/route.js [app-ssr] (ecmascript) <export default as Route>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Route",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/route.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>User
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
];
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("user", __iconNode);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LogOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 17 5-5-5-5",
            key: "1bji2h"
        }
    ],
    [
        "path",
        {
            d: "M21 12H9",
            key: "dn1m92"
        }
    ],
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ]
];
const LogOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("log-out", __iconNode);
;
 //# sourceMappingURL=log-out.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/blito-frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return zeroGap;
    }
    //TURBOPACK unreachable
    ;
    var offsets;
    var documentWidth;
    var windowWidth;
};
}),
"[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function() {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            } else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
    }, [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/blito-frontend/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/blito-frontend/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(function() {
        return {
            // value
            value: initialValue,
            // last callback
            callback: callback,
            // "memoized" public interface
            facade: {
                get current () {
                    return ref.value;
                },
                set current (value){
                    var last = ref.value;
                    if (last !== value) {
                        ref.value = value;
                        ref.callback(value, last);
                    }
                }
            }
        };
    })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/blito-frontend/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/use-callback-ref/dist/es2015/useRef.js [app-ssr] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
        });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function() {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function(ref) {
                if (!nextRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                }
            });
            nextRefs_1.forEach(function(ref) {
                if (!prevRefs_1.has(ref)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/blito-frontend/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/blito-frontend/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/use-sidecar/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
{
    var options;
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lastProps.current = props;
    }, [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__spreadArray"])([
                props.lockRef.current
            ], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function(el) {
                return el.classList.add("allow-interactivity-".concat(id));
            });
            return function() {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function(el) {
                    return el.classList.remove("allow-interactivity-".concat(id));
                });
            };
        }
        return;
    }, [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event, parent) {
        if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        } else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
        // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
            return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
                return node.contains(event.target);
            });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(name, delta, target, should) {
        var event = {
            name: name,
            delta: delta,
            target: target,
            should: should,
            shadowParent: getOutermostShadowParent(target)
        };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
                return e !== event;
            });
        }, 1);
    }, []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](function(event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        return function() {
            lockStack = lockStack.filter(function(inst) {
                return inst !== Style;
            });
            document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nonPassive"]);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/use-sidecar/dist/es2015/exports.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/medium.js [app-ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/UI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-ssr] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript)");
}),
"[project]/blito-frontend/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/get-nonce/dist/es2015/index.js [app-ssr] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](function() {
            sheet.add(styles);
            return function() {
                sheet.remove();
            };
        }, [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/singleton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$blito$2d$frontend$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/blito-frontend/node_modules/react-style-singleton/dist/es2015/hook.js [app-ssr] (ecmascript)");
;
;
;
}),
];

//# sourceMappingURL=86e87_f14bd8c4._.js.map