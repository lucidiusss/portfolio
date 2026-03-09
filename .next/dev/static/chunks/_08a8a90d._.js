(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Song.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/react/dist/components/avatar/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$description$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/react/dist/components/description/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/react/dist/components/label/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$list$2d$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/react/dist/components/list-box/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@splicemood/react-music-player/dist/esm/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Song = ({ song })=>{
    _s();
    const audio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"])();
    const isCurrentTrack = audio.currentTrackIndex === song.id - 1;
    const handleTrackClick = ()=>{
        audio.setCurrentTrack(song.id - 1);
        audio.play();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$list$2d$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ListBox"].Item, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"], {
                    className: "rounded-lg",
                    size: "md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$avatar$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Avatar"].Image, {
                        alt: song.title,
                        src: song.cover
                    }, void 0, false, {
                        fileName: "[project]/components/Song.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Song.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Song.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$label$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Label"], {
                        className: "text-white text-xl",
                        children: song.title
                    }, void 0, false, {
                        fileName: "[project]/components/Song.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$description$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Description"], {
                        className: "text-[#a1a1a1] text-[16px]",
                        children: song.artist
                    }, void 0, false, {
                        fileName: "[project]/components/Song.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Song.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$list$2d$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ListBox"].ItemIndicator, {}, void 0, false, {
                fileName: "[project]/components/Song.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, song.id, true, {
        fileName: "[project]/components/Song.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Song, "88uChD9YYzE1JEyuZluNcKnsyI4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"]
    ];
});
_c = Song;
const __TURBOPACK__default__export__ = Song;
var _c;
__turbopack_context__.k.register(_c, "Song");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/consts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SONGS",
    ()=>SONGS
]);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PlaylistContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$list$2d$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/react/dist/components/list-box/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@splicemood/react-music-player/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Song$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Song.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/consts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const Player = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/Player.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/Player.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-16 bg-black/20"
        }, void 0, false, {
            fileName: "[project]/components/PlaylistContent.tsx",
            lineNumber: 11,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0))
});
_c = Player;
const PlaylistContent = ()=>{
    _s();
    const audio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlaylistContent.useEffect": ()=>{
            audio.replacePlaylist(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$consts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SONGS"]);
            audio.setVolumePercent(50);
            return ({
                "PlaylistContent.useEffect": ()=>{
                    audio.replacePlaylist([]);
                }
            })["PlaylistContent.useEffect"];
        }
    }["PlaylistContent.useEffect"], []);
    const songList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlaylistContent.useMemo[songList]": ()=>audio.playlist.map({
                "PlaylistContent.useMemo[songList]": (song)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Song$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        song: song
                    }, song.id, false, {
                        fileName: "[project]/components/PlaylistContent.tsx",
                        lineNumber: 27,
                        columnNumber: 44
                    }, ("TURBOPACK compile-time value", void 0))
            }["PlaylistContent.useMemo[songList]"])
    }["PlaylistContent.useMemo[songList]"], [
        audio.playlist
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$react$2f$dist$2f$components$2f$list$2d$box$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ListBox"], {
                "aria-label": "Songs",
                className: "flex gap-1 items-center",
                selectionMode: "single",
                children: songList
            }, void 0, false, {
                fileName: "[project]/components/PlaylistContent.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Player, {}, void 0, false, {
                fileName: "[project]/components/PlaylistContent.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(PlaylistContent, "bJGMO6WGXcN6RU3lleyCl1eCyAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$splicemood$2f$react$2d$music$2d$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAudio"]
    ];
});
_c1 = PlaylistContent;
const __TURBOPACK__default__export__ = PlaylistContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "Player");
__turbopack_context__.k.register(_c1, "PlaylistContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PlaylistContent.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/PlaylistContent.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_08a8a90d._.js.map