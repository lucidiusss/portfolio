module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/components/Song.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__ = __turbopack_context__.i("[externals]/@heroui/react [external] (@heroui/react, esm_import, [project]/node_modules/@heroui/react)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__ = __turbopack_context__.i("[externals]/@splicemood/react-music-player [external] (@splicemood/react-music-player, cjs, [project]/node_modules/@splicemood/react-music-player)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const Song = ({ song })=>{
    const audio = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__["useAudio"])();
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const isCurrentTrack = audio.currentTrackIndex === song.id - 1;
    const handleTrackClick = ()=>{
        audio.setCurrentTrack(song.id - 1);
        audio.play();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["ListBox"].Item, {
        id: song.id,
        onClick: handleTrackClick,
        textValue: song.title,
        className: `
                rounded-lg transition border-2
                px-4 py-2 w-2/4
                hover:border-neutral-700 hover:bg-neutral-900!
                ${isCurrentTrack ? "border-neutral-700 bg-neutral-900" : "border-transparent"}
            `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    !imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["Skeleton"], {
                        className: "absolute inset-0 rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/components/Song.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["Avatar"], {
                        className: "rounded-lg",
                        size: "md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["Avatar"].Image, {
                            onLoad: ()=>setImageLoaded(true),
                            alt: song.title,
                            src: song.cover,
                            className: !imageLoaded ? "opacity-0" : "opacity-100"
                        }, void 0, false, {
                            fileName: "[project]/components/Song.tsx",
                            lineNumber: 45,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Song.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Song.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex gap-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["Label"], {
                        className: "text-white text-xl",
                        children: song.title
                    }, void 0, false, {
                        fileName: "[project]/components/Song.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["Description"], {
                        className: "text-[#a1a1a1] text-[16px]",
                        children: song.artist
                    }, void 0, false, {
                        fileName: "[project]/components/Song.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Song.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["ListBox"].ItemIndicator, {}, void 0, false, {
                fileName: "[project]/components/Song.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, song.id, true, {
        fileName: "[project]/components/Song.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Song;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Controls.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__ = __turbopack_context__.i("[externals]/@heroui/react [external] (@heroui/react, esm_import, [project]/node_modules/@heroui/react)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__ = __turbopack_context__.i("[externals]/@splicemood/react-music-player [external] (@splicemood/react-music-player, cjs, [project]/node_modules/@splicemood/react-music-player)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [ssr] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [ssr] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [ssr] (ecmascript) <export default as SkipForward>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const Controls = ()=>{
    const audio = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__["useAudio"])();
    const handlePlayNext = ()=>{
        audio.next();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["Button"], {
                onClick: audio.previous,
                className: "  rounded-lg w-12 h-12 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                    className: "border border-transparent w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/components/Controls.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Controls.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["Button"], {
                onClick: audio.togglePlayPause,
                className: "  rounded-lg w-12 h-12 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white",
                children: !audio.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                    className: "border border-transparent w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/components/Controls.tsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                    className: "border border-transparent w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/components/Controls.tsx",
                    lineNumber: 33,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Controls.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["Button"], {
                onClick: handlePlayNext,
                className: "  rounded-lg w-12 h-12 p-4  bg-neutral-900 hover:bg-neutral-800 text-[#a1a1a1] hover:text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                    className: "border border-transparent w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/components/Controls.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Controls.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Controls.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Controls;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/utils.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import, [project]/node_modules/clsx)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$29$__ = __turbopack_context__.i("[externals]/tailwind-merge [external] (tailwind-merge, esm_import, [project]/node_modules/tailwind-merge)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$clsx$29$__["clsx"])(inputs));
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ui/slider.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$radix$2d$ui$29$__ = __turbopack_context__.i("[externals]/radix-ui [external] (radix-ui, esm_import, [project]/node_modules/radix-ui)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$radix$2d$ui$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$radix$2d$ui$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
    const _values = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"](()=>Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [
            min,
            max
        ], [
        value,
        defaultValue,
        min,
        max
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$radix$2d$ui$29$__["Slider"].Root, {
        "data-slot": "slider",
        defaultValue: defaultValue,
        value: value,
        min: min,
        max: max,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$radix$2d$ui$29$__["Slider"].Track, {
                "data-slot": "slider-track",
                className: "relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$radix$2d$ui$29$__["Slider"].Range, {
                    "data-slot": "slider-range",
                    className: "absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full"
                }, void 0, false, {
                    fileName: "[project]/components/ui/slider.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/slider.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            Array.from({
                length: _values.length
            }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$radix$2d$ui__$5b$external$5d$__$28$radix$2d$ui$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$radix$2d$ui$29$__["Slider"].Thumb, {
                    "data-slot": "slider-thumb",
                    className: "relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
                }, index, false, {
                    fileName: "[project]/components/ui/slider.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/slider.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ProgressBar.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__ = __turbopack_context__.i("[externals]/@splicemood/react-music-player [external] (@splicemood/react-music-player, cjs, [project]/node_modules/@splicemood/react-music-player)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/slider.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const ProgressBar = ()=>{
    const audio = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__["useAudio"])();
    const formatTime = (timeInSeconds)=>{
        if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "w-1/2 flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "text-white select-none",
                children: formatTime(audio.currentTime)
            }, void 0, false, {
                fileName: "[project]/components/ProgressBar.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                value: [
                    audio.currentTime
                ],
                max: audio.maxTime,
                step: 0.1,
                onValueChange: (value)=>audio.setUpdateTime(value[0]),
                className: "w-full group",
                trackClassName: "h-4 bg-neutral-800 rounded-full transition-all duration-200",
                rangeClassName: "bg-[#a1a1a1] group-hover:bg-white rounded-full",
                thumbClassName: "block w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:scale-125 transition-all duration-200 focus:outline-none"
            }, void 0, false, {
                fileName: "[project]/components/ProgressBar.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: "text-white select-none",
                children: formatTime(audio.maxTime)
            }, void 0, false, {
                fileName: "[project]/components/ProgressBar.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProgressBar.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProgressBar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/components/Player.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__ = __turbopack_context__.i("[externals]/@splicemood/react-music-player [external] (@splicemood/react-music-player, cjs, [project]/node_modules/@splicemood/react-music-player)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Controls.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgressBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProgressBar.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/slider.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$1$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume1$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-1.js [ssr] (ecmascript) <export default as Volume1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [ssr] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgressBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgressBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
const Player = ()=>{
    const audio = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__["useAudio"])();
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(100);
    const [prevVolume, setPrevVolume] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(100);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (audio.volume !== undefined && !isNaN(audio.volume)) {
            const newVolume = Math.round(audio.volume * 100);
            setVolume(newVolume);
            if (newVolume > 0) {
                setPrevVolume(newVolume);
            }
        }
    }, [
        audio.volume
    ]);
    const currentSong = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (audio.playlist.length > 0 && audio.currentTrackIndex !== undefined) {
            return audio.playlist[audio.currentTrackIndex];
        }
        return undefined;
    }, [
        audio.playlist,
        audio.currentTrackIndex
    ]);
    const displayVolume = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>isNaN(volume) ? 0 : Math.min(100, Math.max(0, volume)), [
        volume
    ]);
    const VolumeIcon = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (displayVolume === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"];
        return displayVolume < 50 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$1$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume1$3e$__["Volume1"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"];
    }, [
        displayVolume
    ]);
    const handleVolumeChange = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((value)=>{
        const newVolume = Math.round(value[0]);
        setVolume(newVolume);
        if (newVolume > 0) {
            setPrevVolume(newVolume);
        }
        audio.setVolume(newVolume / 100);
    }, [
        audio
    ]); // audio dependency
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (volume === 0) {
            audio.setVolume(prevVolume / 100);
            setVolume(prevVolume);
        } else {
            setPrevVolume(volume);
            audio.setVolume(0);
            setVolume(0);
        }
    }, [
        audio,
        volume,
        prevVolume
    ]);
    const sliderClasses = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>({
            trackClassName: "h-1 bg-neutral-700 rounded-full transition-all duration-200",
            rangeClassName: "bg-[#a1a1a1] group-hover:bg-white rounded-full",
            thumbClassName: "block w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:scale-125 transition-all duration-200 focus:outline-none"
        }), []);
    const SongInfo = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center flex-1/4 ml-10 gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        width: 64,
                        height: 64,
                        className: "w-16 h-16 rounded-lg object-cover",
                        src: currentSong?.cover,
                        alt: currentSong?.title
                    }, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 84,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 83,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "text-white",
                            children: currentSong?.title || "No track"
                        }, void 0, false, {
                            fileName: "[project]/components/Player.tsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: currentSong?.artistLink || "#",
                            className: "text-[#a1a1a1] hover:underline transition",
                            children: currentSong?.artist
                        }, void 0, false, {
                            fileName: "[project]/components/Player.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Player.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)), [
        currentSong
    ]);
    const VolumeControl = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "w-48 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: toggleMute,
                    className: "focus:outline-none cursor-pointer text-[#a1a1a1] hover:text-white",
                    "aria-label": displayVolume === 0 ? "Unmute" : "Mute",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VolumeIcon, {
                        className: "w-6 h-6"
                    }, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 116,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$slider$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                    value: [
                        displayVolume
                    ],
                    min: 0,
                    max: 100,
                    step: 1,
                    onValueChange: handleVolumeChange,
                    className: "w-full group",
                    trackClassName: sliderClasses.trackClassName,
                    rangeClassName: sliderClasses.rangeClassName,
                    thumbClassName: sliderClasses.thumbClassName,
                    showThumb: true
                }, void 0, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "text-[#a1a1a1] select-none text-md min-w-10",
                    children: [
                        displayVolume,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 132,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Player.tsx",
            lineNumber: 110,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)), [
        displayVolume,
        toggleMute,
        handleVolumeChange,
        VolumeIcon,
        sliderClasses
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "w-full fixed bottom-5 items-center flex h-16 bg-black/20 backdrop-blur-sm",
        children: [
            SongInfo,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-3/4 gap-2 items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgressBar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1/4 flex justify-end mr-10",
                children: VolumeControl
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 147,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Player;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/playlist/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__ = __turbopack_context__.i("[externals]/@splicemood/react-music-player [external] (@splicemood/react-music-player, cjs, [project]/node_modules/@splicemood/react-music-player)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Song$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Song.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__ = __turbopack_context__.i("[externals]/@heroui/react [external] (@heroui/react, esm_import, [project]/node_modules/@heroui/react)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Player$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Player.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Song$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Player$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Song$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Player$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const SONGS = [
    {
        id: 1,
        title: "Mournin",
        artist: "Rich Amiri",
        artistLink: "https://soundcloud.com/richamiri",
        cover: "/covers/mournin.jpg",
        src: "/songs/mournin.mp3"
    },
    {
        id: 2,
        title: "sinister",
        artist: "deathkeylon",
        artistLink: "https://soundcloud.com/deathkeylon",
        cover: "/covers/sinister.jpg",
        src: "/songs/sinister.mp3"
    },
    {
        id: 3,
        title: "Osamawalk",
        artist: "klmketa",
        artistLink: "https://soundcloud.com/user-18726447",
        cover: "/covers/osamawalk.jpg",
        src: "/songs/osamawalk.mp3"
    },
    {
        id: 4,
        title: "omg its uuu+",
        artist: "deathkeylon",
        artistLink: "https://soundcloud.com/deathkeylon",
        cover: "/covers/omgitsuuu+.jpg",
        src: "/songs/omgitsu.mp3"
    },
    {
        id: 5,
        title: "lyfeRULEs",
        artist: "gerrarti",
        artistLink: "https://soundcloud.com/ya_raspalsya/popular-tracks",
        cover: "/covers/lyferules.jpg",
        src: "/songs/lyfeRULEs.mp3"
    },
    {
        id: 6,
        title: "HUNCHOS",
        artist: "Rich Amiri",
        artistLink: "https://soundcloud.com/richamiri",
        cover: "/covers/hunchos.jpg",
        src: "/songs/HUNCHOS.mp3"
    },
    {
        id: 7,
        title: "200",
        artist: "sosocamo",
        artistLink: "https://soundcloud.com/sosocamo",
        cover: "/covers/200.jpg",
        src: "/songs/200sosocamo.flac"
    },
    {
        id: 8,
        title: "Flex or die tryin",
        artist: "klmketa",
        artistLink: "https://soundcloud.com/user-18726447",
        cover: "/covers/flexordietryin.jpg",
        src: "/songs/flexordietryin.mp3"
    },
    {
        id: 9,
        title: "COMË N GO",
        artist: "Yeat",
        artistLink: "https://soundcloud.com/lilyeat",
        cover: "/covers/comengo.jpg",
        src: "/songs/comengoyeat.flac"
    },
    {
        id: 10,
        title: "Sleepwalker",
        artist: "akiaura",
        artistLink: "https://soundcloud.com/akiaura",
        cover: "/covers/sleepwalker.jpg",
        src: "/songs/sleepwalker.mp3"
    },
    {
        id: 11,
        title: "Reloaded",
        artist: "klmketa",
        artistLink: "https://soundcloud.com/user-18726447",
        cover: "/covers/reloaded.jpg",
        src: "/songs/reloaded.mp3"
    }
];
const Playlist = ()=>{
    const audio = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$splicemood$2f$react$2d$music$2d$player__$5b$external$5d$__$2840$splicemood$2f$react$2d$music$2d$player$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$29$__["useAudio"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        audio.replacePlaylist(SONGS);
        audio.setVolumePercent(50);
        return ()=>{
            audio.replacePlaylist([]);
        };
    }, []);
    const songList = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>audio.playlist.map((song)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Song$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                song: song
            }, song.id, false, {
                fileName: "[project]/pages/playlist/index.tsx",
                lineNumber: 111,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))), [
        audio.playlist
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "flex relative h-screen items-center justify-center flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$29$__["ListBox"], {
                "aria-label": "Songs",
                className: "flex gap-1 items-center",
                selectionMode: "single",
                children: songList
            }, void 0, false, {
                fileName: "[project]/pages/playlist/index.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Player$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/playlist/index.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/playlist/index.tsx",
        lineNumber: 116,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Playlist;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f0e48005._.js.map