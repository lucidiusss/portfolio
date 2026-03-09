(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/hooks/useLenis.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLenis",
    ()=>useLenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useLenis(options = {}) {
    _s();
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLenis.useEffect": ()=>{
            if (lenisRef.current) return;
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 0.8,
                easing: {
                    "useLenis.useEffect": (t)=>t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
                }["useLenis.useEffect"],
                smoothWheel: true,
                syncTouch: false,
                touchMultiplier: 2,
                lerp: 0.4,
                wheelMultiplier: 1.5,
                eventsTarget: window,
                orientation: "vertical",
                gestureOrientation: "vertical",
                infinite: false,
                autoResize: true,
                ...options
            });
            let rafId;
            function raf(time) {
                lenis.raf(time);
                rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
            lenisRef.current = lenis;
            return ({
                "useLenis.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    lenis.destroy();
                    lenisRef.current = null;
                }
            })["useLenis.useEffect"];
        }
    }["useLenis.useEffect"], []);
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useLenis.useCallback[scrollTo]": (target, opts = {})=>{
            if (lenisRef.current) {
                if (typeof target === "string" || target instanceof HTMLElement) {
                    const element = typeof target === "string" ? document.querySelector(target) : target;
                    if (!element) {
                        console.warn(`Element not found`);
                        return;
                    }
                    // Get element's position
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementHeight = rect.height;
                    // Calculate position to center the element in viewport
                    // We want the element's center to be at viewport center
                    const viewportHeight = window.innerHeight;
                    // Log for debugging
                    console.log({
                        elementTop,
                        elementHeight,
                        viewportHeight,
                        scrollPosition: elementTop - viewportHeight / 2 + elementHeight / 2
                    });
                    // This puts the element's center at the viewport's center
                    const centerPosition = elementTop - viewportHeight / 2 + elementHeight / 2;
                    // Ensure we don't scroll past the document boundaries
                    const maxScroll = document.documentElement.scrollHeight - viewportHeight;
                    const finalPosition = Math.max(0, Math.min(centerPosition, maxScroll));
                    lenisRef.current.scrollTo(finalPosition, {
                        duration: 1.2,
                        easing: {
                            "useLenis.useCallback[scrollTo]": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                        }["useLenis.useCallback[scrollTo]"],
                        ...opts
                    });
                } else {
                    lenisRef.current.scrollTo(target, {
                        duration: 1.2,
                        easing: {
                            "useLenis.useCallback[scrollTo]": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                        }["useLenis.useCallback[scrollTo]"],
                        ...opts
                    });
                }
            }
        }
    }["useLenis.useCallback[scrollTo]"], []);
    return {
        scrollTo
    };
}
_s(useLenis, "sZSQzKTOs2kngmUd4Aq/BbNyTvM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_hooks_useLenis_ts_9cc5300b._.js.map