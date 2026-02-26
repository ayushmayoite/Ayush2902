module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/layout/MobileMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenu",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const MAIN_LINKS = [
    {
        label: "Products",
        href: "/products",
        description: "Browse our furniture collections"
    },
    {
        label: "Solutions",
        href: "/solutions",
        description: "Workspace solutions"
    },
    {
        label: "Gallery",
        href: "/gallery",
        description: "Project references"
    },
    {
        label: "About",
        href: "/about",
        description: "Company information"
    }
];
const PRODUCT_CATEGORIES = [
    {
        label: "Workstations",
        href: "/products/oando-workstations"
    },
    {
        label: "Seating",
        href: "/products/oando-seating"
    },
    {
        label: "Tables",
        href: "/products/oando-tables"
    },
    {
        label: "Storage",
        href: "/products/oando-storage"
    },
    {
        label: "Soft Seating",
        href: "/products/oando-soft-seating"
    }
];
const SECONDARY_LINKS = [
    {
        label: "Contact",
        href: "/contact"
    },
    {
        label: "Downloads",
        href: "/downloads"
    },
    {
        label: "Sustainability",
        href: "/sustainability"
    }
];
function MobileMenu({ isOpen, onClose }) {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: "100%"
            },
            animate: {
                opacity: 1,
                x: 0
            },
            exit: {
                opacity: 0,
                x: "100%"
            },
            transition: {
                type: "tween",
                duration: 0.3,
                ease: "circOut"
            },
            className: "fixed inset-0 bg-neutral-50 z-50 flex flex-col font-sans overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 h-16 bg-white border-b border-neutral-100 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold text-sm",
                                        children: "O"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/MobileMenu.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileMenu.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-semibold text-neutral-900",
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileMenu.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/MobileMenu.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-10 h-10 flex items-center justify-center bg-white hover:bg-neutral-100 rounded-xl transition-colors shadow-sm",
                            "aria-label": "Close mobile menu",
                            title: "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-neutral-700"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileMenu.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/MobileMenu.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col min-h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-full h-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                                lineNumber: 82,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/MobileMenu.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search furniture...",
                                            className: "w-full h-12 pl-11 pr-4 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-base",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/MobileMenu.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/MobileMenu.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "px-6 pb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: MAIN_LINKS.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: 0.1 + idx * 0.05
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    onClick: onClose,
                                                    className: "block group py-3 min-h-[44px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl font-light text-neutral-900 group-hover:text-primary transition-colors",
                                                                    children: link.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/MobileMenu.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    className: "w-5 h-5 text-neutral-400 group-hover:text-primary transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/layout/MobileMenu.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/layout/MobileMenu.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 27
                                                        }, this),
                                                        link.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-neutral-500 mt-1",
                                                            children: link.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/MobileMenu.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/MobileMenu.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                                lineNumber: 99,
                                                columnNumber: 23
                                            }, this)
                                        }, link.href, false, {
                                            fileName: "[project]/components/layout/MobileMenu.tsx",
                                            lineNumber: 98,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileMenu.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 pb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "typ-eyebrow mb-3",
                                        children: "Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/MobileMenu.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: PRODUCT_CATEGORIES.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: category.href,
                                                onClick: onClose,
                                                className: "text-sm text-neutral-700 hover:text-primary transition-colors flex items-center min-h-[44px]",
                                                children: category.label
                                            }, category.href, false, {
                                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/MobileMenu.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-neutral-100 mx-6 mb-8"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "px-6 pb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: SECONDARY_LINKS.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                transition: {
                                                    delay: 0.3 + idx * 0.05
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    onClick: onClose,
                                                    className: "text-base text-neutral-600 hover:text-neutral-900 transition-colors flex items-center min-h-[44px]",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/MobileMenu.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                                lineNumber: 152,
                                                columnNumber: 23
                                            }, this)
                                        }, link.href, false, {
                                            fileName: "[project]/components/layout/MobileMenu.tsx",
                                            lineNumber: 151,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileMenu.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/MobileMenu.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/MobileMenu.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border-t border-neutral-100 shrink-0 sticky bottom-0 z-50 px-6 py-4 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            onClick: onClose,
                            className: "bg-neutral-900 text-white font-semibold text-sm h-12 px-6 rounded-sm flex items-center justify-center hover:bg-neutral-800 transition-colors w-full sm:w-auto",
                            children: "Get Quote"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileMenu.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:flex items-center gap-4 text-neutral-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-2 hover:text-neutral-900 transition-colors",
                                "aria-label": "Change language",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/MobileMenu.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/MobileMenu.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/MobileMenu.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileMenu.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/MobileMenu.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/MobileMenu.tsx",
            lineNumber: 48,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/MobileMenu.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/layout/SearchOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchOverlay",
    ()=>SearchOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const SUGGESTIONS = [
    "WINEA PRO Desk",
    "Acoustic Panels",
    "Meeting Tables",
    "Ergonomics Guide",
    "Showrooms"
];
function SearchOverlay({ isOpen, onClose }) {
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Focus input when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setTimeout(()=>inputRef.current?.focus(), 100);
        }
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 bg-white/95 backdrop-blur-sm z-60 flex flex-col items-center justify-start pt-32 px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    title: "Close Search",
                    className: "absolute top-8 right-8 p-2 hover:bg-neutral-100 rounded-full transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-8 h-8 text-neutral-400 hover:text-neutral-900"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/SearchOverlay.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/SearchOverlay.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-3xl relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            type: "text",
                            value: query,
                            onChange: (e)=>setQuery(e.target.value),
                            placeholder: "Search for products, solutions...",
                            className: "w-full text-4xl md:text-5xl font-light text-neutral-900 placeholder:text-neutral-300 bg-transparent border-b-2 border-neutral-200 focus:border-primary outline-none py-4 pr-12 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/SearchOverlay.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-neutral-400"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/SearchOverlay.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/SearchOverlay.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-3xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium uppercase tracking-wide text-neutral-400 mb-6",
                                    children: "Popular Searches"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/SearchOverlay.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: SUGGESTIONS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-lg md:text-xl font-light text-neutral-600 hover:text-primary transition-colors flex items-center gap-2 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/SearchOverlay.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 23
                                                    }, this),
                                                    item
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/SearchOverlay.tsx",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, this)
                                        }, item, false, {
                                            fileName: "[project]/components/layout/SearchOverlay.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/SearchOverlay.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/SearchOverlay.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-medium uppercase tracking-wide text-neutral-400 mb-6",
                                    children: "Results"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/SearchOverlay.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-neutral-50 border border-neutral-100 text-neutral-500 italic",
                                    children: [
                                        'Showing results for "',
                                        query,
                                        '"...',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/layout/SearchOverlay.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs not-italic text-neutral-400",
                                            children: "(This is a simulated search interface)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/SearchOverlay.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/SearchOverlay.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/SearchOverlay.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/SearchOverlay.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/SearchOverlay.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/SearchOverlay.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/layout/MegaMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MegaMenu",
    ()=>MegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MegaMenu({ isOpen, items, cards, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 10
            },
            transition: {
                duration: 0.2
            },
            className: "absolute top-full left-0 w-full bg-white shadow-lg border-t border-neutral-100 z-[998]",
            onMouseLeave: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-6 2xl:px-0 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/4 pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-col gap-3",
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "text-[15px] font-normal text-neutral-800 hover:text-primary transition-colors block",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/MegaMenu.tsx",
                                            lineNumber: 45,
                                            columnNumber: 23
                                        }, this)
                                    }, item.label, false, {
                                        fileName: "[project]/components/layout/MegaMenu.tsx",
                                        lineNumber: 44,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MegaMenu.tsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MegaMenu.tsx",
                            lineNumber: 41,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3/4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-6",
                                children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: card.href,
                                        className: "group block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[16/9] bg-neutral-100 mb-3 overflow-hidden",
                                                children: [
                                                    card.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: card.image,
                                                        alt: card.title,
                                                        fill: true,
                                                        className: "object-cover group-hover:scale-105 transition-transform duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/MegaMenu.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/layout/MegaMenu.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/MegaMenu.tsx",
                                                lineNumber: 65,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-neutral-900 group-hover:text-primary transition-colors mb-1",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/MegaMenu.tsx",
                                                lineNumber: 76,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-neutral-500 font-light",
                                                children: card.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/MegaMenu.tsx",
                                                lineNumber: 79,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, card.title, true, {
                                        fileName: "[project]/components/layout/MegaMenu.tsx",
                                        lineNumber: 60,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MegaMenu.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MegaMenu.tsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/MegaMenu.tsx",
                    lineNumber: 39,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/MegaMenu.tsx",
                lineNumber: 38,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/layout/MegaMenu.tsx",
            lineNumber: 30,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/MegaMenu.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/catalog.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @deprecated — LEGACY STATIC CATALOG
 *
 * Product pages now fetch dynamically from Supabase via lib/getProducts.ts.
 * This file is ONLY kept for client-side components that need category
 * names/IDs for navigation (Header, CategoryGrid, InteractiveRoom).
 *
 * DO NOT add new products here. Add them to the Supabase 'products' table
 * and use getCatalog() from lib/getProducts.ts instead.
 *
 * To fully remove this file:
 *   1. Convert Header/CategoryGrid/InteractiveRoom to receive catalog
 *      data as props from a server component parent.
 *   2. Delete this file.
 */ __turbopack_context__.s([
    "oandoCatalog",
    ()=>oandoCatalog
]);
const oandoCatalog = [
    {
        id: "oando-workstations",
        name: "Workstations",
        description: "Modular workstation solutions for modern offices",
        series: [
            {
                id: "oando-workstations-series",
                name: "Workstations Series",
                description: "Premium workstations solutions",
                products: [
                    {
                        id: "curvivo",
                        name: "Curvivo",
                        description: "A dynamic and innovative workstation that is adaptable to different workspaces. Curvivo office solution for enhanced efficiency, embracing fluidity and harmony.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6899aa009be5eb667a604f17_image%20(5).png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e2908a7da0ff41267d9c_CURVIVO%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "A dynamic and innovative workstation that is adaptable to different workspaces. Curvivo office solution for enhanced efficiency, embracing fluidity and harmony.",
                            features: [
                                "Enhanced Efficiency",
                                "Fluid Design",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Steel frame, powder-coated",
                                "Melamine-finish MDF work surface",
                                "Adjustable levelling feet"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "workstations",
                            subcategory: "Linear Workstation",
                            priceRange: "premium",
                            useCase: [
                                "Executive Office",
                                "Focused Work"
                            ],
                            material: [
                                "Steel",
                                "MDF",
                                "Melamine"
                            ],
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "adaptable",
                        name: "Adaptable",
                        description: "Adaptable modular office furniture designed for flexible workstations, modern offices, and collaborative spaces. Ideal for office furniture, modular office furniture, and workspace solutions.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/694a6270eafa71d6f5e33b7f_HAT%202A.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/694a627695a9d78481b7e4ac_HAT%202B.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Adaptable modular office furniture designed for flexible workstations, modern offices, and collaborative spaces. Ideal for office furniture, modular office furniture, and workspace solutions.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Steel frame, powder-coated",
                                "Melamine-finish MDF work surface",
                                "Adjustable levelling feet"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "workstations",
                            subcategory: "Modular Workstation",
                            priceRange: "mid",
                            useCase: [
                                "Open Office",
                                "Collaborative"
                            ],
                            material: [
                                "Steel",
                                "MFC"
                            ],
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "deskpro",
                        name: "DeskPro",
                        description: "DeskPro office workstations for efficient layouts. Discover modular desks for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6899a993e44404f6f3bcc398_image%20(3).png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e32607cc220a51bf8b9d_DESKPRO%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "DeskPro office workstations for efficient layouts. Discover modular desks for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Steel frame, powder-coated",
                                "Melamine-finish MDF work surface",
                                "Adjustable levelling feet"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "workstations",
                            subcategory: "L-Shaped Workstation",
                            priceRange: "mid",
                            useCase: [
                                "Corner Office",
                                "Managerial"
                            ],
                            material: [
                                "Metal",
                                "Laminate"
                            ],
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "sleek",
                        name: "Sleek",
                        description: "Sleek modern office furniture for stylish and functional workspaces. Explore solutions for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6899a9c13d41a799c8276857_image%20(4).png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e2ecfb7309f199638de2_SLEEK%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Sleek modern office furniture for stylish and functional workspaces. Explore solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Steel frame, powder-coated",
                                "Melamine-finish MDF work surface",
                                "Adjustable levelling feet"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "workstations",
                            subcategory: "Linear Workstation",
                            priceRange: "budget",
                            useCase: [
                                "BPO",
                                "Compact Office"
                            ],
                            material: [
                                "Steel",
                                "MFC"
                            ],
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "trio-2",
                        name: "Trio",
                        description: "A workstation system built for open spaces, crafted to bring flow and flexibility. Modular and adaptable solution designed to shape every kind of workstyle.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/69271a27cccef8a26e5b982b_TRIO%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6927184380ed83acea41c477_TRIO%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "A workstation system built for open spaces, crafted to bring flow and flexibility. Modular and adaptable solution designed to shape every kind of workstyle, from focused corners to collaborative zones, creating harmony across the workplace.",
                            features: [
                                "Flow and Flexibility",
                                "Modular Adaptability",
                                "Supportive Design"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Steel frame, powder-coated",
                                "Melamine-finish MDF work surface",
                                "Adjustable levelling feet"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "workstations",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "panel-pro",
                        name: "Panel Pro",
                        description: "Panel Pro office partition systems for modular layouts and space division. Discover solutions for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6899aa91f03e6a89282d60c6_image%20(7).png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e19ce6798d83eab6341c_PANELPRO%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Panel Pro office partition systems for modular layouts and space division. Discover solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Steel frame, powder-coated",
                                "Melamine-finish MDF work surface",
                                "Adjustable levelling feet"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "workstations",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "x-bench",
                        name: "X Bench",
                        description: "X-Bench workstation system for collaborative offices. Discover modular benching for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "X-Bench workstation system for collaborative offices. Discover modular benching for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Steel frame, powder-coated",
                                "Melamine-finish MDF work surface",
                                "Adjustable levelling feet"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "workstations",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "fenix",
                        name: "Fenix",
                        description: "Workstation featuring a strong 40x40 leg framework that pairs durability with a sleek, minimal profile. Modular adaptability supports the changing needs of contemporary teams.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/693aa6dc791283acd3853cfa_FENIX%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/693aa49ea09525af1fd89213_FENIX%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Workstation featuring a strong 40x40 leg framework that pairs durability with a sleek, minimal profile. Modular adaptability supports the changing needs of contemporary teams through composed function.",
                            features: [
                                "40x40 Leg Framework",
                                "Sleek Profile",
                                "Modular Adaptability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Steel frame, powder-coated",
                                "Melamine-finish MDF work surface",
                                "Adjustable levelling feet"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "workstations",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "oando-tables",
        name: "Tables",
        description: "Conference tables, meeting tables, and office desks",
        series: [
            {
                id: "oando-tables-series",
                name: "Tables Series",
                description: "Premium tables solutions",
                products: [
                    {
                        id: "exquisite",
                        name: "Exquisite",
                        description: "Exquisite blends refined craftsmanship with modern authority. Premium executive office furniture designed for modern cabins, creating a bold yet graceful presence.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/690f482177b80a5aa8d4f314_EXQUISITE.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/690f47e748a3ed3ed1be7cc6_EXQUISITE%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Exquisite blends refined craftsmanship with modern authority. It uses premium veneers and precise detailing to create a bold yet graceful presence that defines the executive space.",
                            features: [
                                "Refined Craftsmanship",
                                "Premium Veneers",
                                "Modern Authority"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "nextable",
                        name: "NexTable",
                        description: "Nextable height-adjustable tables for ergonomic comfort. Improve posture and productivity with One and Only sit-stand desks.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0b807564dd58e2a3306e_NEXTABLE%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0b83bc8b483e98f3fac6_NEXTABLE%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Nextable height-adjustable tables for ergonomic comfort. Improve posture and productivity with One and Only sit-stand desks.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "impulse",
                        name: "Impulse",
                        description: "Impulse workstation system for modular office layouts. Discover efficient space planning and premium design for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0bcdb10ee7e0d263392f_IMPULSE%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0bd085bc1496ca4105d3_IMPULSE%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Impulse workstation system for modular office layouts. Discover efficient space planning and premium design for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "crest",
                        name: "Crest",
                        description: "Crest executive office table crafted for leadership spaces. Modular office furniture with premium finishes for modern corporate interiors.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/690320cae57dfa867bb9fb19_CREST.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/690320ce4217d21446ea5d49_CREST%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Crest executive office table crafted for leadership spaces. Modular office furniture with premium finishes for modern corporate interiors.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "opus-2",
                        name: "Opus",
                        description: "Opus 2 executive office desk crafted for premium interiors. Luxury office furniture designed for modern executive workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/69207b1e31e6cda889f3dc1e_OPUS.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/69207b23866b7196e978d54f_OPUS%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Opus 2 executive office desk crafted for premium interiors. Luxury office furniture designed for modern executive workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "convesso",
                        name: "Convesso",
                        description: "Convesso conference table for meeting rooms. Stylish office meeting table designed for collaboration and modern workspace design.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac09820580a18498c921c1_CONVESSO.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac098849f11a71a090963b_CONVESSO%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Convesso conference table for meeting rooms. Stylish office meeting table designed for collaboration and modern workspace design.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "uniflip",
                        name: "Uniflip",
                        description: "Uniflip training and flip tables for flexible learning spaces and meetings. Explore versatile table solutions for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0be40f3412327f1d163e_uniflip%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0be83d6190304fcb2304_uniflip%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Uniflip training and flip tables for flexible learning spaces and meetings. Explore versatile table solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "sleek-meet",
                        name: "Sleek-Meet",
                        description: "Sleek Meet conference tables for modern meeting rooms. Discover tables for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac09a549f11a71a090b1bc_SLEEK-MEET.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac09a949f11a71a090b349_SLEEK-MEET%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Sleek Meet conference tables for modern meeting rooms. Discover tables for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "convene",
                        name: "Convene",
                        description: "Convene meeting table designed for conference rooms. Functional office meeting table supporting teamwork and productivity.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0ad23ae62d06453de864_CANVENE%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0ad5acae760a25ca4248_CANVENE%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Convene meeting table designed for conference rooms. Functional office meeting table supporting teamwork and productivity.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "desk-meet",
                        name: "Desk-Meet",
                        description: "Desk Meet conference table for productive discussions. Durable office table furniture ideal for modern meeting rooms and offices.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac09c017fc68ec25131aa8_DESK-MEET.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac09c77564dd58e2a1b62d_DESK-MEET%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Desk Meet conference table for productive discussions. Durable office table furniture ideal for modern meeting rooms and offices.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "modulus",
                        name: "Modulus",
                        description: "Modulus modular office furniture for flexible layouts and efficient space planning. Explore modern solutions for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0c17a71dc35ac0df3c77_MODULUS%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0c1b0580a18498cb0b67_MODULUS%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Modulus modular office furniture for flexible layouts and efficient space planning. Explore modern solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "presidency",
                        name: "Presidency",
                        description: "Presidency executive table designed for luxury boss cabins. Premium office furniture for modern corporate offices across India.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6899abac81b853e07c6bdded_image%201238.png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e46703f08bf146fecda9_PRESIDENCY%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Presidency executive table designed for luxury boss cabins. Premium office furniture for modern corporate offices across India.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "curvivo-meet",
                        name: "Curvivo",
                        description: "Curvivo Meet table for offices and training rooms. Smart modular office furniture built for collaboration and daily meetings.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac09debc8b483e98f2e291_CURVIVO.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac09e3acae760a25c9e330_CURVIVO%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Curvivo Meet table for offices and training rooms. Smart modular office furniture built for collaboration and daily meetings.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "stake",
                        name: "Stake",
                        description: "Stake versatile modular table and desk system offering functionality and durability. Ideal workspace solution for daily workstations and team meetings.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0b19714954caacc56e8c_STAKE%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0b1e04e90dca0d907df1_STAKE%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Stake versatile modular table and desk system offering functionality and durability. Ideal workspace solution for daily workstations and team meetings.",
                            features: [
                                "Modular Table System",
                                "Versatile Layouts",
                                "Durability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "inox",
                        name: "Inox",
                        description: "Inox metal office furniture with durable construction. Strong tables and storage solutions built for modern office furniture needs.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0ae80580a18498c9f668_INOX%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0aec17fc68ec2513f118_INOX%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Inox metal office furniture with durable construction. Strong tables and storage solutions built for modern office furniture needs.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "consulate",
                        name: "Consulate",
                        description: "Consulate executive office table with elegant styling and durability. Perfect modular office furniture for cabins and leadership spaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6899ab6c10d61f61929e6bbb_image%201240.png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e438d2d6d279597506e0_CONSULATE%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Consulate executive office table with elegant styling and durability. Perfect modular office furniture for cabins and leadership spaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "x-meet",
                        name: "X Meet",
                        description: "X Meet conference table for boardrooms and offices. Spacious and durable office meeting table for modern corporate setups.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "X Meet conference table for boardrooms and offices. Spacious and durable office meeting table for modern corporate setups.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "sleek-tab",
                        name: "Sleek",
                        description: "Sleek Tab training and meeting table for offices. Flexible training table furniture for collaborative workstations and conference rooms.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0a8c7b975fe679fd0ee3_CAFE%20SLEEK%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0a913ae62d06453da920_CAFE%20SLEEK%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Sleek Tab training and meeting table for offices. Flexible training table furniture for collaborative workstations and conference rooms.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "letz-think",
                        name: "Letz",
                        description: "Letz Think training table for classrooms and offices. Flexible training table furniture for workshops, seminars, and learning spaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0a42acae760a25ca04cd_LETZ%20THINK.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68ac0a493ae62d06453d5aa9_LETZ%20THINK%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Letz Think training table for classrooms and offices. Flexible training table furniture for workshops, seminars, and learning spaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "apex",
                        name: "Apex",
                        description: "Apex executive office desk offering modern design and durability. Ideal office table furniture for professional and corporate cabins.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6899ac6f98d87ab3c05862ed_image%201218.png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e4f47c86ba66b1d6d195_APEX%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Apex executive office desk offering modern design and durability. Ideal office table furniture for professional and corporate cabins.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "1800900750mm (standard)",
                            materials: [
                                "MFC top (25mm thick)",
                                "Steel powder-coated base",
                                "PVC edge banding 2mm"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "tables",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "oando-storage",
        name: "Storage",
        description: "Filing cabinets, lockers, and storage solutions",
        series: [
            {
                id: "oando-storage-series",
                name: "Storage Series",
                description: "Premium storage solutions",
                products: [
                    {
                        id: "prelam-locker",
                        name: "Wooden",
                        description: "The wooden locker blends style and functionality, offering secure storage for everyday use in offices, gyms, and schools. Its thoughtful design ensures organized spaces while adding warmth to shared e",
                        flagshipImage: "/images/products/imported/storage/image-14.webp",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a33d88ac691a23437da4a9_LOCKER%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "The wooden locker blends style and functionality, offering secure storage for everyday use in offices, gyms, and schools. Its thoughtful design ensures organized spaces while adding warmth to shared e",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W900D450H1800mm (wardrobe)",
                            materials: [
                                "CRCA steel, powder-coated",
                                "Piano hinge doors",
                                "Adjustable shelves"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "storage",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "pedestal",
                        name: "Prelam",
                        description: "Office pedestal storage unit for organized workstations. Compact office storage solution with secure drawers for everyday use.",
                        flagshipImage: "/images/products/imported/storage/image-15.webp",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a33aed4aa7c59dfbd123f7_PEDESTAL%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Office pedestal storage unit for organized workstations. Compact office storage solution with secure drawers for everyday use.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W900D450H1800mm (wardrobe)",
                            materials: [
                                "CRCA steel, powder-coated",
                                "Piano hinge doors",
                                "Adjustable shelves"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "storage",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "metal-pedestal",
                        name: "Metal Pedestal",
                        description: "Office pedestal storage units for desks and workstations. Discover compact and secure storage solutions for modern workspaces.",
                        flagshipImage: "/images/products/imported/storage/image-16.webp",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a33bd6c74b7831216a4bd2_PEDESTAL%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Office pedestal storage units for desks and workstations. Discover compact and secure storage solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W900D450H1800mm (wardrobe)",
                            materials: [
                                "CRCA steel, powder-coated",
                                "Piano hinge doors",
                                "Adjustable shelves"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "storage",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "compactor",
                        name: "Compactor",
                        description: "High-density compactor storage systems for files and documents. Explore space-saving storage solutions for modern workspaces.",
                        flagshipImage: "/images/products/imported/storage/image-39.webp",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a33d1345008068da79673a_COMPACTOR%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "High-density compactor storage systems for files and documents. Explore space-saving storage solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W900D450H1800mm (wardrobe)",
                            materials: [
                                "CRCA steel, powder-coated",
                                "Piano hinge doors",
                                "Adjustable shelves"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "storage",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "metal-locker",
                        name: "Metal Locker",
                        description: "Metal lockers for offices and institutions. Discover secure, durable, and space-efficient locker storage solutions for modern workspaces.",
                        flagshipImage: "/images/products/imported/storage/image-42.webp",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a33d4537b54c7c3b17f77b_METAL%20LOCKER%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Metal lockers for offices and institutions. Discover secure, durable, and space-efficient locker storage solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W900D450H1800mm (wardrobe)",
                            materials: [
                                "CRCA steel, powder-coated",
                                "Piano hinge doors",
                                "Adjustable shelves"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "storage",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "prelam-storage",
                        name: "Prelam",
                        description: "Office side units and storage cabinets for organized workspaces. Discover modern storage for modern workspaces.",
                        flagshipImage: "/images/products/imported/storage/image-45.webp",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a33aed4aa7c59dfbd123f7_PEDESTAL%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Office side units and storage cabinets for organized workspaces. Discover modern storage for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W900D450H1800mm (wardrobe)",
                            materials: [
                                "CRCA steel, powder-coated",
                                "Piano hinge doors",
                                "Adjustable shelves"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "storage",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "metal-storages",
                        name: "Metal",
                        description: "Office side units for workspace organization. Discover modern side storage cabinets for modern workspaces.",
                        flagshipImage: "/images/products/imported/storage/image-73.webp",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a33bd6c74b7831216a4bd2_PEDESTAL%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Office side units for workspace organization. Discover modern side storage cabinets for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W900D450H1800mm (wardrobe)",
                            materials: [
                                "CRCA steel, powder-coated",
                                "Piano hinge doors",
                                "Adjustable shelves"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "storage",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "heavy-duty-racks",
                        name: "Heavy Dut",
                        description: "Office storage racks for organized workspaces. Discover durable shelving and rack storage solutions for modern workspaces.",
                        flagshipImage: "/images/products/imported/storage/image-75.webp",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a33cd07e416b6139611e93_RACKS%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Office storage racks for organized workspaces. Discover durable shelving and rack storage solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W900D450H1800mm (wardrobe)",
                            materials: [
                                "CRCA steel, powder-coated",
                                "Piano hinge doors",
                                "Adjustable shelves"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "storage",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "oando-soft-seating",
        name: "Soft Seating",
        description: "Lounge chairs, sofas, and casual seating",
        series: [
            {
                id: "oando-soft-seating-series",
                name: "Soft Seating Series",
                description: "Premium soft seating solutions",
                products: [
                    {
                        id: "verka",
                        name: "Verka",
                        description: "Verka lounge chair for receptions and breakout areas, providing a stylish and comfortable seating solution for modern professional environments.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Verka lounge chair for receptions and breakout areas, providing a stylish and comfortable seating solution for modern professional environments.",
                            features: [
                                "Ergonomic Support",
                                "Modular Design",
                                "Sustainability"
                            ],
                            dimensions: "W680 D700 H820mm",
                            materials: [
                                "High-density foam",
                                "Premium fabric upholstery",
                                "Steel base"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            subcategory: "Lounge Chair",
                            useCase: [
                                "Reception",
                                "Breakout"
                            ],
                            priceRange: "mid",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "high-cafe",
                        name: "High Cafe",
                        description: "High Cafe bar chair for breakout and dining spaces, offering a modern seating solution for cafeterias and collaborative zones.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "High Cafe bar chair for breakout and dining spaces, offering a modern seating solution for cafeterias and collaborative zones.",
                            features: [
                                "Sleek Profile",
                                "Durable Frame",
                                "Ergonomic Footrest"
                            ],
                            dimensions: "W450 D480 H1050mm",
                            materials: [
                                "Powder-coated steel",
                                "Molded plywood seat"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            subcategory: "Bar Stool",
                            useCase: [
                                "Cafeteria",
                                "Collaborative"
                            ],
                            priceRange: "budget",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "grace",
                        name: "Grace",
                        description: "Grace lounge seating for waiting areas and relaxed office spaces, offering a refined and comfortable aesthetic for modern professional environments.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/694b91752b9659cee7897a61_GRACE%20landing%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/694b917ae8eb928ca73aa6c9_GRACE%20landing%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Grace lounge seating for waiting areas and relaxed office spaces, offering a refined and comfortable aesthetic for modern professional environments.",
                            features: [
                                "Elegant Silhouette",
                                "Soft Cushioning",
                                "Durable Upholstery"
                            ],
                            dimensions: "W720 D750 H850mm",
                            materials: [
                                "Internal wood frame",
                                "Memory foam topper",
                                "Reinforced fabric"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            subcategory: "Lounge Chair",
                            useCase: [
                                "Waiting Area",
                                "Lounge"
                            ],
                            priceRange: "premium",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "brim",
                        name: "Brim",
                        description: "Brim lounge seating for waiting areas and informal spaces, designed to provide comfort and a touch of modern flair to shared office zones.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/69280b87ff297e69976d3ab6_BRIM%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/69280b8ae5a83b56217012b6_BRIM%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Brim lounge seating for waiting areas and informal spaces, designed to provide comfort and a touch of modern flair to shared office zones.",
                            features: [
                                "Versatile Styling",
                                "Compact Footprint",
                                "High-resilience Foam"
                            ],
                            dimensions: "W650 D680 H800mm",
                            materials: [
                                "Molded internal frame",
                                "Premium textile finish"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            subcategory: "Lounge Chair",
                            useCase: [
                                "Breakout",
                                "Informal Meeting"
                            ],
                            priceRange: "mid",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "fynn",
                        name: "Fynn",
                        description: "Fynn lounge seating for waiting areas and relaxed office spaces, combining ergonomic support with a contemporary design for professional settings.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/692af3dff014edab0a0eab6d_FYNN.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/692af3e311e33e59fa4fc9a6_FYNN%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Fynn lounge seating for waiting areas and relaxed office spaces, combining ergonomic support with a contemporary design for professional settings.",
                            features: [
                                "Ergonomic Contouring",
                                "Contemporary Aesthetic",
                                "Built-to-last"
                            ],
                            dimensions: "W700 D720 H830mm",
                            materials: [
                                "Stainless steel legs",
                                "Contoured foam shell"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            subcategory: "Lounge Chair",
                            useCase: [
                                "Reception",
                                "Private Lounge"
                            ],
                            priceRange: "premium",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "accent",
                        name: "Accent",
                        description: "Accent office side and storage units for organized workspaces. Discover modern storage for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Accent office side and storage units for organized workspaces. Discover modern storage for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "como",
                        name: "Como",
                        description: "Como lounge chair with plush cushioning and solid wood legs, perfect for executive waiting areas and breakout lounges.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Como executive office desks for premium leadership spaces. Explore modern desks for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "padora",
                        name: "Padora",
                        description: "Padora office chairs for comfort and durability. Discover modern seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Padora office chairs for comfort and durability. Discover modern seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "trion",
                        name: "Trion",
                        description: "Trion modular office furniture for flexible layouts and modern workspace needs. Discover solutions for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Trion modular office furniture for flexible layouts and modern workspace needs. Discover solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "luna",
                        name: "Luna",
                        description: "Luna lounge chair with Scandinavian-inspired wooden legs and deep cushioned seat. A calm, welcoming addition to any reception or breakout space.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Nordic office furniture inspired by clean lines and modern design. Discover workstations for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "armora",
                        name: "Armora",
                        description: "Armora office storage cabinets for durability and workspace organization. Discover storage for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Armora office storage cabinets for durability and workspace organization. Discover storage for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "nuvora",
                        name: "Nuvora",
                        description: "Nuvora marker board for offices. Ideal for meetings and brainstorming with a sleek and durable design for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Nuvora marker board for offices. Ideal for meetings and brainstorming with a sleek and durable design for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "nook",
                        name: "Nook",
                        description: "Nook lounge seating for waiting areas and informal spaces. Discover soft seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Nook lounge seating for waiting areas and informal spaces. Discover soft seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "opera",
                        name: "Opera",
                        description: "Opera executive office furniture for premium aesthetics and durability. Discover solutions for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Opera executive office furniture for premium aesthetics and durability. Discover solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "crossa",
                        name: "Crossa",
                        description: "Crossa office chair collection offering ergonomic comfort and modern design. Discover quality seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Crossa office chair collection offering ergonomic comfort and modern design. Discover quality seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "alonzo",
                        name: "Alonzo",
                        description: "Alonzo designer office chairs for comfort and modern interiors. Explore seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Alonzo designer office chairs for comfort and modern interiors. Explore seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "spectrum",
                        name: "Spectrum",
                        description: "Spectrum office furniture for flexible workspaces. Discover modern desks and seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Spectrum office furniture for flexible workspaces. Discover modern desks and seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "virello",
                        name: "Virello",
                        description: "Virello office chairs for comfort and durability. Discover ergonomic seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Virello office chairs for comfort and durability. Discover ergonomic seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "arco",
                        name: "Arco",
                        description: "Arco modern office furniture for stylish and functional workspaces. Discover contemporary designs for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Arco modern office furniture for stylish and functional workspaces. Discover contemporary designs for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "esmor",
                        name: "Esmor",
                        description: "Esmor modern office furniture for stylish and functional workspaces. Explore solutions for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Esmor modern office furniture for stylish and functional workspaces. Explore solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "cirq",
                        name: "Cirq",
                        description: "Cirq collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Cirq collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "orb",
                        name: "Orb",
                        description: "Orb collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a319f5dafd6cd106ec5943_ORBIT.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a319f94efd22af34df6e61_ORBIT%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Orb collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "tectara",
                        name: "Tectara",
                        description: "Tectara office workstations for efficient layouts. Discover modular workspace solutions for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Tectara office workstations for efficient layouts. Discover modular workspace solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "velto",
                        name: "Velto",
                        description: "Velto ergonomic office chairs for posture support and productivity. Discover seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Velto ergonomic office chairs for posture support and productivity. Discover seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "cocoon",
                        name: "Cocoon",
                        description: "Cocoon acoustic lounge chair wrapping you in comfort and focus. A high-back shell design ideal for breakout zones and informal meetings.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Cocoon acoustic seating for privacy and focus. Discover modern pod seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "moon",
                        name: "Moon",
                        description: "Moon lounge seating for waiting areas and relaxed office spaces. Discover soft seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/694bc1c696a177177806618c_MOONLIGHT%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/694bc1cb4c86a76f8dfce0e1_MOONLIGHT%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Moon lounge seating for waiting areas and relaxed office spaces. Discover soft seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "cone",
                        name: "Cone",
                        description: "Cone office seating for modern interiors. Discover stylish and comfortable chairs for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Cone office seating for modern interiors. Discover stylish and comfortable chairs for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "rattique",
                        name: "Rattique",
                        description: "Rattique designer office seating for comfort and contemporary appeal. Discover stylish seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Rattique designer office seating for comfort and contemporary appeal. Discover stylish seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "cove",
                        name: "Cove",
                        description: "Cove lounge seating for waiting areas and offices. Discover modern soft seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Cove lounge seating for waiting areas and offices. Discover modern soft seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "luxar",
                        name: "Luxar",
                        description: "Luxar executive office chairs for premium comfort. Discover leadership seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Luxar executive office chairs for premium comfort. Discover leadership seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "ceda",
                        name: "Ceda",
                        description: "Ceda executive office desk for leadership spaces. Discover premium workspace aesthetics for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Ceda executive office desk for leadership spaces. Discover premium workspace aesthetics for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "hush",
                        name: "Hush",
                        description: "Hush acoustic office seating for privacy and focused workspaces. Explore seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Hush acoustic office seating for privacy and focused workspaces. Explore seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "eclips",
                        name: "Eclips",
                        description: "Eclips executive office desk for premium workspaces. Explore durable design and modern aesthetics for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Eclips executive office desk for premium workspaces. Explore durable design and modern aesthetics for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "twig",
                        name: "Twig",
                        description: "Twig office chairs for modern workspaces. Discover ergonomic seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Twig office chairs for modern workspaces. Discover ergonomic seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "margas",
                        name: "Margas",
                        description: "Margas modular office furniture for flexible layouts and workspace efficiency. Explore modern solutions for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Margas modular office furniture for flexible layouts and workspace efficiency. Explore modern solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "lura",
                        name: "Lura",
                        description: "Lura office seating solutions for comfort and modern workspace appeal. Explore seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Lura office seating solutions for comfort and modern workspace appeal. Explore seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "embrace",
                        name: "Embrace",
                        description: "Embrace collaborative seating for teamwork and shared workspaces. Discover modern seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Embrace collaborative seating for teamwork and shared workspaces. Discover modern seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "halo",
                        name: "Halo",
                        description: "Halo ergonomic office chairs for superior comfort and posture support. Explore productivity-focused seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Halo ergonomic office chairs for superior comfort and posture support. Explore productivity-focused seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "relax",
                        name: "Relax",
                        description: "Relax lounge seating for waiting areas and informal office spaces. Explore soft seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Relax lounge seating for waiting areas and informal office spaces. Explore soft seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "arcana",
                        name: "Arcana",
                        description: "Arcana premium office furniture for executive spaces. Explore modern design and long-lasting performance for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Arcana premium office furniture for executive spaces. Explore modern design and long-lasting performance for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "plumb",
                        name: "Plumb",
                        description: "Plumb office furniture collection for modern design and functional workspaces. Explore solutions for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Plumb office furniture collection for modern design and functional workspaces. Explore solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "casca",
                        name: "Casca",
                        description: "Casca designer office seating combining comfort and durability. Explore stylish chairs for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Casca designer office seating combining comfort and durability. Explore stylish chairs for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "adam",
                        name: "Adam",
                        description: "Adam office seating for modern workspaces. Discover durable and comfortable chairs for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Adam office seating for modern workspaces. Discover durable and comfortable chairs for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "cozy",
                        name: "Cozy",
                        description: "Cozy lounge seating for relaxed office spaces and waiting areas. Discover modern soft seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Cozy lounge seating for relaxed office spaces and waiting areas. Discover modern soft seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "covea",
                        name: "Covea",
                        description: "Covea lounge and waiting seating for offices. Discover stylish and comfortable seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Covea lounge and waiting seating for offices. Discover stylish and comfortable seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600 D600 H900-1000mm (adj.)",
                            materials: [
                                "Solid wood or steel frame",
                                "High-density foam (40D)",
                                "Premium fabric or PU leather upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "soft-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "oando-chairs",
        name: "Chairs",
        description: "Ergonomic task, executive and visitor seating",
        series: [
            {
                id: "oando-chairs-series",
                name: "Chair Series",
                description: "Premium ergonomic chairs",
                products: [
                    {
                        id: "myel",
                        name: "Myel",
                        description: "A task chair for modern thinkers. MYEL combines weight-sensitive tilt and a dynamic backrest to provide effortless support throughout the workday.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a5ea1e27650a56b2eca017_MYEL.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e6c8d1f0c9ec3a36402e_MYEL%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Myel is a task chair that adapts to your movements. It features a weight-sensitive tilt mechanism that provides automatic tension based on the user's weight.",
                            features: [
                                "Weight-sensitive Tilt",
                                "Dynamic Backrest",
                                "Adjustable Armrests",
                                "Effortless Support"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, 50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "chairs",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "sway",
                        name: "Sway",
                        description: "Sway office chairs designed for posture support and comfort. Discover seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a5eab3fd8ab056401d2236_SWAY.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e6b469d0d522d9374f4e_SWAY%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Sway ergonomic mesh chairs designed for posture support and long-term comfort. Features a high mesh back with headrest and synchronous tilt mechanism.",
                            features: [
                                "Adjustable Headrest",
                                "Synchronous Tilt",
                                "Ergonomic Lumbar Support"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, 50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "chairs",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "halo",
                        name: "Halo",
                        description: "Halo ergonomic mesh chair with a wide headrest and supportive shell design. Engineered for daily productivity and style.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Halo ergonomic mesh chair featuring a distinctive wide headrest and a robust frame for maximum support throughout the workday.",
                            features: [
                                "Wide Headrest",
                                "Supportive Shell Design",
                                "Premium Mesh Breathability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, 50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "chairs",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "arvo",
                        name: "Arvo",
                        description: "Arvo modern office chairs for comfort and sleek workspace design. Discover seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6925776c61a4fc592515c2e5_ARVO%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6925777061a4fc592515c69c_ARVO%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Arvo modern office chairs for comfort and sleek workspace design. Discover seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, 50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "chairs",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "fluid-x",
                        name: "Fluid X",
                        description: "Fluid-X ergonomic office chair for posture support and comfort. Discover modern seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e5fb9a9c228d092378d58_image%20(4).png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e6541579aa1f426713a8_FLUID-X%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Fluid X takes the ergonomic excellence of Fluid and adds a dedicated headrest for enhanced neck and upper back support.",
                            features: [
                                "Adjustable Headrest",
                                "High Mesh Back",
                                "Superior Back Support"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, 50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "chairs",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "oando-other-seating",
        name: "Other Seating",
        description: "Conference, guest and training seating solutions",
        series: [
            {
                id: "oando-other-seating-series",
                name: "Other Seating Series",
                description: "Specialized seating solutions",
                products: [
                    {
                        id: "cafe-sleek",
                        name: "Sleek Cafe",
                        description: "Sleek Cafe cafeteria chair for dining spaces and informal meeting zones.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Sleek Cafe cafeteria chair for dining spaces and informal meeting zones, designed for durability and ease of maintenance.",
                            features: [
                                "Stackable Design",
                                "Lightweight",
                                "Durable Finish"
                            ],
                            dimensions: "W520 D540 H800mm",
                            materials: [
                                "Polypropylene shell",
                                "Chromed steel legs"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "other-seating",
                            subcategory: "Cafe Chair",
                            isStackable: true,
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "flip",
                        name: "Flip",
                        description: "Flip training chair with optional tablet arm, designed for agility and comfort in learning environments.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/6899a8d08871a2e0d561e8c1_image%20(2).png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Flip training chair with optional tablet arm, designed for agility and comfort in flexible learning and meeting environments. Mobile and nestable for easy storage.",
                            features: [
                                "Nesting Capability",
                                "Optional Tablet Arm",
                                "Agile Design"
                            ],
                            dimensions: "W600D600H9001000mm",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, 50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "other-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "crox",
                        name: "Crox",
                        description: "Crox visitor and cafe chair, offering a comfortable and versatile seating solution.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Crox visitor and cafe chair, offering a comfortable and versatile seating solution for receptions, lounges, and waiting areas.",
                            features: [
                                "Ergonomic Back",
                                "Compact Footprint",
                                "Modern Aesthetic"
                            ],
                            dimensions: "W550 D560 H810mm",
                            materials: [
                                "Molded shell",
                                "Steel tube base"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "other-seating",
                            subcategory: "Visitor Chair",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "nordic",
                        name: "Nordic",
                        description: "Nordic wooden frame visitor chair inspired by Scandinavian minimalism.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31b13bfe5e60313f47ce4_NORDIC%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31b177c1f6e1027de894f_NORDIC%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Nordic wooden frame visitor chair inspired by Scandinavian minimalism. Perfect for breakout zones and professional guest seating.",
                            features: [
                                "Wooden Frame",
                                "Minimalist Aesthetic",
                                "Comfortable Shell Design"
                            ],
                            dimensions: "W600D600H9001000mm",
                            materials: [
                                "Wooden frame",
                                "Fabric upholstery"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "other-seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "flex",
                        name: "Flex",
                        description: "Flex office furniture for adaptable workspaces. Discover modular desks and seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6149bc6ce0dfcc87218c_image%20(7).png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e5f9ae1623fcafd8f52a_FLEX%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Flex office furniture for adaptable workspaces. Features a minimalist design with a black frame and a slim mesh backrest for agile teams.",
                            features: [
                                "Minimalist Design",
                                "Slim Mesh Backrest",
                                "Adaptable Support"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "canaret",
                        name: "Canaret",
                        description: "Canaret office seating for comfort and contemporary interiors. Explore quality chairs for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31c938f8548f856a7f6a1_CANARET%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31c96d894469092d7693c_CANARET%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Canaret office seating for comfort and contemporary interiors. Explore quality chairs for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "logica",
                        name: "Logica",
                        description: "Logica modular workstations for modern offices. Discover flexible layouts for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/689e6183b6b2ad870cbb12d5_image%20(8).png",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a2e5dabb1b4a667224668c_logica%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Logica modular workstations for modern offices. Discover flexible layouts for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "sullion",
                        name: "Sullion",
                        description: "Sullion office seating for modern interiors. Discover comfortable chairs for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3187ab4a82e5395e600e1_SULLION.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3187fadfc2439348d8514_SULLION%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Sullion executive seating offering refined comfort and modern appeal for professional leadership spaces.",
                            features: [
                                "Executive Appeal",
                                "Premium Comfort",
                                "Modern Interior Compatibility"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "dive",
                        name: "Dive",
                        description: "Dive collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31cc1478c76ab43d196ef_DIVE%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31cc53600e311453077bb_DIVE%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Dive collaborative seating for teamwork and shared spaces. Discover modern office seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "nuvic",
                        name: "Nuvic",
                        description: "Nuvic office chairs designed for comfort and posture support. Discover seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a318cdbbc6bed952aadb99_NUVIC.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a318d3d9ec04942e25c33e_NUVIC%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Nuvic office chairs feature a clean white frame and mesh back designed for maximum breathability and posture support.",
                            features: [
                                "Clean White Frame",
                                "Breathable Mesh",
                                "Lumbar Support"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "wing",
                        name: "Wing",
                        description: "Wing ergonomic office chairs for posture support and daily comfort. Explore modern seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31cf0d7ec67119f64d16d_WING%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31cf31ae614368cd23141_WING%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Wing ergonomic office chairs for posture support and daily comfort. Explore modern seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "rock",
                        name: "Rock",
                        description: "Rock office chairs for durability and comfort. Discover ergonomic seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31900c133220d935bc837_ROCK.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a319051c705d568f054edd_ROCK%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Rock office chairs for durability and comfort. Discover ergonomic seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "casca",
                        name: "Casca",
                        description: "Casca provides a sleek and modern seating solution with a focus on clean lines and ergonomic comfort for dynamic workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Casca is designed for the modern workspace, combining a minimalist aesthetic with high-performance ergonomic features.",
                            features: [
                                "Minimalist Design",
                                "High-performance Mesh",
                                "Durable Frame"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "breeze",
                        name: "Breeze",
                        description: "Breeze office chairs for modern workspaces. Discover breathable ergonomic seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a3193d56916b83fc69b8e7_BREEZE.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31942172e85cd6ddd61e5_BREEZE%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Breeze ergonomic chairs offer maximum airflow through advanced mesh technology, ensuring comfort during long work sessions.",
                            features: [
                                "Advanced Breathability",
                                "High Mesh Back",
                                "Ergonomic Base"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "leaf",
                        name: "Leaf",
                        description: "Leaf collaborative seating for teamwork and shared workspaces. Discover modern seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31d2456916b83fc6b424c_LEAF%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31d2741014346c6585d9d_LEAF%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Leaf collaborative seating for teamwork and shared workspaces. Discover modern seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "x-mesh",
                        name: "X Mesh",
                        description: "X-Mesh ergonomic office chair for breathability and comfort. Discover seating for modern workspaces.",
                        flagshipImage: "",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "X-Mesh provides targeted lumbar support and breathable mesh for an exceptionally comfortable and cool sitting experience.",
                            features: [
                                "Targeted Lumbar Support",
                                "Cool Mesh Technology",
                                "Dynamic Tension Adjustment"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "lexus",
                        name: "Lexus",
                        description: "Lexus executive office chairs for premium comfort and durability. Explore seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/692aeb4277a173215bea0157_LEXUS%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/692aeb4707459fa95409abb2_LEXUS%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Lexus executive office chairs for premium comfort and durability. Explore seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "orbit",
                        name: "Orbit",
                        description: "Orbit office chairs designed for posture support and comfort. Discover seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a319f5dafd6cd106ec5943_ORBIT.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a319f94efd22af34df6e61_ORBIT%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Orbit office chairs provide full-body support with a design focused on posture and effortless movement within the workspace.",
                            features: [
                                "Posture Focus",
                                "Effortless Movement",
                                "Robust Build"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "flare",
                        name: "Flare",
                        description: "Flare designer office seating combining comfort and modern style. Explore seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31d89957f8dd43671be6d_FLARE%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31d8c1b8d8744c7be292e_FLARE%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Flare designer office seating combining comfort and modern style. Explore seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "toro",
                        name: "Toro",
                        description: "Toro office chairs for durability and comfort. Discover ergonomic seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31a2e940b87db21c355cf_TORO.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31a31b454908c4aaf87de_TORO%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Toro features a robust frame and high-quality mesh for durable, ergonomic support that stands up to daily use in busy offices.",
                            features: [
                                "Robust Frame",
                                "High-Quality Mesh",
                                "Daily Productivity Support"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "zilo",
                        name: "Zilo",
                        description: "Zilo modern office furniture for flexible and stylish workspaces. Explore solutions for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31db490f077faa2376637_ZILO%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31db7a0f7151158d75a52_ZILO%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Zilo modern office furniture for flexible and stylish workspaces. Explore solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "caneva-high",
                        name: "Caneva-High",
                        description: "Caneva high-back office chairs for executive comfort and ergonomic support. Discover seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/692af83816126cc8ec1b69b6_CANEVA%20H%201.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/692af717336420a74d899c14_CANEVA%20H%202.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Caneva high-back office chairs for executive comfort and ergonomic support. Discover seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "lisbo",
                        name: "Lisbo",
                        description: "Lisbo lounge seating for relaxed office spaces and modern interiors. Explore soft seating for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31eb7223f7db62e3d5a4f_LISBO.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31eb7223f7db62e3d5a4f_LISBO.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Lisbo lounge seating for relaxed office spaces and modern interiors. Explore soft seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "fusion",
                        name: "Fusion",
                        description: "Fusion modular office furniture for flexible layouts and efficient workspace planning. Discover solutions for modern workspaces.",
                        flagshipImage: "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31eefb54dafe0b542c697_FUSION.jpg",
                        sceneImages: [
                            "https://cdn.prod.website-files.com/686d3b55385e7b905b01d3a5/68a31eefb54dafe0b542c697_FUSION.jpg"
                        ],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: []
                            }
                        ],
                        detailedInfo: {
                            overview: "Fusion modular office furniture for flexible layouts and efficient workspace planning. Discover solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D600H9001000mm (seat height adj. via gas lift)",
                            materials: [
                                "Mesh or fabric back",
                                "Moulded foam seat, polyester cover",
                                "Nylon 5-star base, �50mm casters"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "seating",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "oando-educational",
        name: "Educational",
        description: "Classroom furniture and educational institution solutions",
        series: [
            {
                id: "oando-educational-series",
                name: "Educational Series",
                description: "Premium educational solutions",
                products: [
                    {
                        id: "performer",
                        name: "Performer",
                        description: "Performer office chair designed for comfort, durability, and daily productivity. Discover modern ergonomic seating for modern workspaces.",
                        flagshipImage: "/images/products/imported/adam/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Performer office chair designed for comfort, durability, and daily productivity. Discover modern ergonomic seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "connecta",
                        name: "Connecta",
                        description: "Connecta collaborative office furniture for teamwork and shared spaces. Discover solutions for modern workspaces.",
                        flagshipImage: "/images/products/imported/arcana/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Connecta collaborative office furniture for teamwork and shared spaces. Discover solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "wooden-bed",
                        name: "Wooden Bed",
                        description: "Wooden beds for institutional and staff accommodation. Discover durable furniture for modern workspaces.",
                        flagshipImage: "/images/products/imported/crossa/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Wooden beds for institutional and staff accommodation. Discover durable furniture for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "audi-chair",
                        name: "Audi Chair",
                        description: "Audi ergonomic office chair designed for posture support and comfort. Discover modern seating for modern workspaces.",
                        flagshipImage: "/images/products/imported/lab-furniture/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Audi ergonomic office chair designed for posture support and comfort. Discover modern seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "xplorer",
                        name: "Xplorer",
                        description: "Xplorer office workstations for modern offices. Discover modular layouts and efficient workspace solutions for modern workspaces.",
                        flagshipImage: "/images/products/imported/adam/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Xplorer office workstations for modern offices. Discover modular layouts and efficient workspace solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "forma",
                        name: "Forma",
                        description: "Forma modular office furniture for flexible layouts and workspace efficiency. Discover solutions for modern workspaces.",
                        flagshipImage: "/images/products/imported/arcana/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Forma modular office furniture for flexible layouts and workspace efficiency. Discover solutions for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "metal-bed",
                        name: "Metal Bed",
                        description: "Metal beds for hostels and institutions. Discover durable accommodation furniture for modern workspaces.",
                        flagshipImage: "/images/products/imported/adam/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Metal beds for hostels and institutions. Discover durable accommodation furniture for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "podium",
                        name: "Podium",
                        description: "Office podium furniture for presentations and meetings. Discover durable and modern podium designs for modern workspaces.",
                        flagshipImage: "/images/products/imported/arcana/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Office podium furniture for presentations and meetings. Discover durable and modern podium designs for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "academia",
                        name: "Academia",
                        description: "Academia educational furniture for schools and colleges. Discover durable desks and seating for modern workspaces.",
                        flagshipImage: "/images/products/imported/crossa/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Academia educational furniture for schools and colleges. Discover durable desks and seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "magazine-rack",
                        name: "Magazine Rack",
                        description: "Office magazine racks and display units for organized reception areas. Discover storage for modern workspaces.",
                        flagshipImage: "/images/products/imported/lab-furniture/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Office magazine racks and display units for organized reception areas. Discover storage for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "classcraft",
                        name: "Classcraft",
                        description: "Classcraft classroom furniture for schools and institutes. Discover desks and seating for modern workspaces.",
                        flagshipImage: "/images/products/imported/adam/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Classcraft classroom furniture for schools and institutes. Discover desks and seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    },
                    {
                        id: "learnix",
                        name: "Learnix",
                        description: "Learnix classroom furniture for modern learning spaces. Discover desks and seating for modern workspaces.",
                        flagshipImage: "/images/products/imported/arcana/image-1.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/imported/accent/image-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Learnix classroom furniture for modern learning spaces. Discover desks and seating for modern workspaces.",
                            features: [
                                "Manufacturing",
                                "Sustainability"
                            ],
                            dimensions: "W600D500H720900mm",
                            materials: [
                                "Steel frame, epoxy-coated",
                                "Plywood seat & back",
                                "Rubber feet, stackable"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "educational",
                            bifmaCertified: true,
                            warrantyYears: 5
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "oando-collaborative",
        name: "Collaborative Spaces",
        description: "Soft seating for dynamic team work and informal discussions",
        series: [
            {
                id: "oando-collaborative-series",
                name: "Collaborative Series",
                description: "Soft seating solutions for modern collaborative workspaces",
                products: [
                    {
                        id: "solace-pod",
                        name: "Solace Pod",
                        description: "Solace Pod — an acoustic privacy pod designed for teams needing focused conversation space in open offices. High curved back provides noise dampening without full enclosure.",
                        flagshipImage: "/images/products/imported/pod/image-2.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/softseating-solace-1.webp",
                                    "/images/products/softseating-solace-2.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Solace Lounge provides comfortable seating for collaborative workspaces, perfect for informal discussions and team meetings.",
                            features: [
                                "Ergonomic Design",
                                "Modular Configuration",
                                "Premium Upholstery",
                                "Easy Maintenance"
                            ],
                            dimensions: "Multiple configurations available",
                            materials: [
                                "High-density foam",
                                "Premium fabric",
                                "Sturdy frame construction"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "collaborative",
                            bifmaCertified: true,
                            warrantyYears: 5,
                            tags: [
                                "collaborative",
                                "soft-seating",
                                "lounge"
                            ]
                        }
                    },
                    {
                        id: "cocoon-pod",
                        name: "Cocoon Pod",
                        description: "Cocoon Pod provides full acoustic enclosure with integrated USB charging, ideal for private calls and focused deep work in collaborative office environments.",
                        flagshipImage: "/images/products/imported/pod/image-11.webp",
                        sceneImages: [],
                        variants: [
                            {
                                id: "standard",
                                variantName: "Standard Model",
                                galleryImages: [
                                    "/images/products/softseating-solace-1.webp"
                                ]
                            }
                        ],
                        detailedInfo: {
                            overview: "Cocoon seating provides privacy and comfort for focused collaborative work in open office environments.",
                            features: [
                                "Sound Absorbing",
                                "Privacy Panels",
                                "Integrated Power",
                                "Modular Design"
                            ],
                            dimensions: "Standard pod configuration",
                            materials: [
                                "Acoustic panels",
                                "Premium upholstery",
                                "Integrated technology"
                            ]
                        },
                        metadata: {
                            source: "oando.co.in",
                            category: "collaborative",
                            bifmaCertified: true,
                            warrantyYears: 5,
                            tags: [
                                "collaborative",
                                "privacy",
                                "pods"
                            ]
                        }
                    }
                ]
            }
        ]
    }
];
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OneAndOnlyLogo",
    ()=>OneAndOnlyLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function OneAndOnlyLogo({ className, variant = "orange" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative w-auto", className),
        children: variant === "orange" ? // Blue logo for scrolled state
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "/logo-final.png",
            alt: "One and Only Furniture",
            width: 240,
            height: 80,
            className: "h-full w-auto object-contain",
            priority: true
        }, void 0, false, {
            fileName: "[project]/components/ui/Logo.tsx",
            lineNumber: 16,
            columnNumber: 9
        }, this) : // White logo for dark hero
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "/logo-final.png",
            alt: "One and Only Furniture",
            width: 240,
            height: 80,
            className: "h-full w-auto object-contain grayscale brightness-0 invert-[0.9] opacity-90",
            priority: true
        }, "white-logo", false, {
            fileName: "[project]/components/ui/Logo.tsx",
            lineNumber: 26,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/Logo.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/MobileMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SearchOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/SearchOverlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MegaMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/MegaMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/catalog.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Logo.tsx [app-ssr] (ecmascript)");
"use client";
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
const discoverMenuItems = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oandoCatalog"].map((category)=>({
        label: category.name,
        href: `/products/${category.id}`
    })).concat([
    {
        label: "All Products",
        href: "/products"
    }
]);
const discoverMenuCards = [
    {
        title: "Seating",
        description: "Ergonomic office chairs and task seating for every workspace.",
        image: "/images/products/imported/fluid/image-1.webp",
        href: "/products/oando-seating"
    },
    {
        title: "Workstations",
        description: "Modular workstation solutions for modern offices.",
        image: "/images/products/imported/cabin/image-1.webp",
        href: "/products/oando-workstations"
    },
    {
        title: "Soft Seating",
        description: "Comfortable seating solutions for collaborative environments.",
        image: "/images/products/imported/cocoon/image-1.webp",
        href: "/products/oando-soft-seating"
    }
];
function Header() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setActiveMenu(null);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        lastScrollY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out", isVisible ? "translate-y-0" : "-translate-y-full", isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-0", "border-b border-neutral-100"),
                onMouseLeave: ()=>setActiveMenu(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("w-full flex justify-end items-center transition-all duration-300 overflow-hidden bg-white border-b border-neutral-100", isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "container-wide flex justify-end items-center gap-6 text-[11px] uppercase tracking-widest font-bold text-neutral-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden md:inline mr-auto text-neutral-500 font-medium",
                                            children: "One and Only Furniture"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/service",
                                            className: "hover:text-primary transition-colors",
                                            children: "Service"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/showrooms",
                                            className: "hover:text-primary transition-colors",
                                            children: "Showrooms"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "hover:text-primary transition-colors",
                                            children: "Contact us"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsSearchOpen(true),
                                            className: "hover:text-primary transition-colors flex items-center gap-1.5",
                                            title: "Search",
                                            "aria-label": "Open search overlay",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("container-wide flex items-center justify-between transition-all duration-300", isScrolled ? "h-16" : "h-20 lg:h-24"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "flex items-center py-2",
                                            "aria-label": "One and Only Home",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OneAndOnlyLogo"], {
                                                className: "h-12 md:h-[60px]",
                                                variant: isScrolled ? "orange" : "orange"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "hidden lg:flex items-center gap-8 h-full",
                                        children: [
                                            {
                                                label: "Home",
                                                href: "/"
                                            },
                                            {
                                                label: "Products",
                                                href: "/products",
                                                hasMegaMenu: true
                                            },
                                            {
                                                label: "About",
                                                href: "/about"
                                            },
                                            {
                                                label: "Contact",
                                                href: "/contact"
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full flex items-center relative",
                                                onMouseEnter: ()=>item.hasMegaMenu ? setActiveMenu(item.label) : setActiveMenu(null),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("h-full flex items-center text-[15px] font-semibold uppercase tracking-widest transition-all duration-300 border-b-2 border-transparent", activeMenu === item.label ? "text-primary border-primary-hover" : "text-neutral-900 hover:text-primary"),
                                                    children: [
                                                        item.label,
                                                        item.hasMegaMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ml-1.5 w-4 h-4 transition-transform opacity-40", activeMenu === item.label && "rotate-180")
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/layout/Header.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Header.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this)
                                            }, item.label, false, {
                                                fileName: "[project]/components/layout/Header.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-center gap-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "btn-primary typ-cta",
                                            children: "Request Quote"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMenuOpen(true),
                                        className: "flex lg:hidden items-center justify-center w-10 h-10 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors shadow-sm",
                                        title: "Open menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "w-5 h-5 text-neutral-700"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Header.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Header.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MegaMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MegaMenu"], {
                        isOpen: activeMenu === "Products",
                        onClose: ()=>setActiveMenu(null),
                        items: discoverMenuItems,
                        cards: discoverMenuCards
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileMenu"], {
                isOpen: isMenuOpen,
                onClose: ()=>setIsMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$SearchOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchOverlay"], {
                isOpen: isSearchOpen,
                onClose: ()=>setIsSearchOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-ssr] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
"use client";
;
;
;
const TRUST_BADGES = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        label: "5-Year Warranty",
        sub: "On all products"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        label: "BIFMA Certified",
        sub: "Internationally tested"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"],
        label: "Sustainable",
        sub: "Eco-conscious materials"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        label: "Made in India",
        sub: "Patna, Bihar"
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer w-full font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-neutral-900 text-white border-t border-neutral-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide py-8 grid grid-cols-2 md:grid-cols-4 gap-6",
                    children: TRUST_BADGES.map(({ icon: Icon, label, sub })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-4 h-4 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Footer.tsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] font-bold uppercase tracking-widest text-white",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-neutral-400 font-light",
                                            children: sub
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-neutral-50 text-neutral-500 py-16 lg:py-20 text-base lg:text-xl border-t border-neutral-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-8 lg:col-span-1 border-r border-neutral-100 pr-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "block",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold tracking-tighter text-neutral-900",
                                                children: "One and Only"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Footer.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm lg:text-base font-light",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold text-neutral-900 uppercase tracking-wider",
                                                    children: "Our Headquarters"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        "One And Only Furniture ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 42
                                                        }, this),
                                                        "Patna, Bihar, India ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 39
                                                        }, this),
                                                        "+91 90310 22875"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/919031022875?text=Hi%2C+I%27d+like+to+enquire+about+office+furniture",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest px-4 py-2.5 hover:bg-[#128C7E] transition-colors rounded-sm",
                                            "aria-label": "Chat on WhatsApp",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this),
                                                "WhatsApp Us"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl lg:text-2xl font-semibold text-neutral-900",
                                                    children: "Products"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-3 text-sm lg:text-lg font-light",
                                                    children: [
                                                        {
                                                            href: "/products",
                                                            label: "All Products"
                                                        },
                                                        {
                                                            href: "/products/oando-seating",
                                                            label: "Seating"
                                                        },
                                                        {
                                                            href: "/products/oando-workstations",
                                                            label: "Workstations"
                                                        },
                                                        {
                                                            href: "/products/oando-tables",
                                                            label: "Tables"
                                                        },
                                                        {
                                                            href: "/products/oando-storage",
                                                            label: "Storage"
                                                        },
                                                        {
                                                            href: "/products/oando-soft-seating",
                                                            label: "Soft Seating"
                                                        },
                                                        {
                                                            href: "/configurator",
                                                            label: "3D Configurator",
                                                            highlight: true
                                                        }
                                                    ].map(({ href, label, highlight })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: href,
                                                                className: `hover:text-primary transition-colors ${highlight ? "text-primary font-medium italic" : ""}`,
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, href, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl lg:text-2xl font-semibold text-neutral-900",
                                                    children: "One and Only"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-3 text-sm lg:text-lg font-light",
                                                    children: [
                                                        {
                                                            href: "/about",
                                                            label: "About Us"
                                                        },
                                                        {
                                                            href: "/sustainability",
                                                            label: "Sustainability"
                                                        },
                                                        {
                                                            href: "/career",
                                                            label: "Career",
                                                            dot: true
                                                        },
                                                        {
                                                            href: "/gallery",
                                                            label: "Project Gallery"
                                                        },
                                                        {
                                                            href: "/news",
                                                            label: "News"
                                                        }
                                                    ].map(({ href, label, dot })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: href,
                                                                className: "relative hover:text-primary transition-colors inline-block",
                                                                children: [
                                                                    label,
                                                                    dot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute -top-1 -right-2 w-1.5 h-1.5 bg-red-600 rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/layout/Footer.tsx",
                                                                        lineNumber: 128,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, href, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl lg:text-2xl font-semibold text-neutral-900",
                                                    children: "Service"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "flex flex-col gap-3 text-sm lg:text-lg font-light",
                                                    children: [
                                                        {
                                                            href: "/downloads",
                                                            label: "Downloads"
                                                        },
                                                        {
                                                            href: "/planning",
                                                            label: "Space Planning"
                                                        },
                                                        {
                                                            href: "/showrooms",
                                                            label: "Showrooms"
                                                        },
                                                        {
                                                            href: "/contact",
                                                            label: "Contact"
                                                        },
                                                        {
                                                            href: "/tracking",
                                                            label: "Order Tracking"
                                                        }
                                                    ].map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: href,
                                                                className: "hover:text-primary transition-colors",
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/layout/Footer.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, href, false, {
                                                            fileName: "[project]/components/layout/Footer.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/layout/Footer.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-20 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm lg:text-base font-light text-neutral-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 lg:gap-12 flex-wrap justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/imprint",
                                            className: "hover:text-neutral-900 transition-colors",
                                            children: "Imprint"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/privacy",
                                            className: "hover:text-neutral-900 transition-colors",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/terms",
                                            className: "hover:text-neutral-900 transition-colors",
                                            children: "Terms & Conditions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Footer.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    suppressHydrationWarning: true,
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " One and Only. All rights reserved."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Footer.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Footer.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Footer.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Footer.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/bot/AdvancedBot.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdvancedBot",
    ()=>AdvancedBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
;
const initialState = {
    useCase: null,
    companyName: "",
    seats: "",
    city: "",
    budget: "",
    timeline: null,
    contactMethod: null,
    contactValue: "",
    notes: ""
};
function AdvancedBot() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const canGoNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (step === 0) return state.useCase !== null;
        if (step === 1) return state.seats.trim().length > 0;
        if (step === 2) return state.companyName.trim().length > 0 && state.city.trim().length > 0 && state.timeline !== null;
        if (step === 3) return state.contactMethod !== null && state.contactValue.trim().length > 0;
        return true;
    }, [
        step,
        state
    ]);
    const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const lines = [];
        lines.push("Enquiry for One and Only via Website Bot");
        if (state.useCase) {
            const labels = {
                workstations: "Workstations",
                seating: "Seating",
                meeting: "Meeting and conference",
                storage: "Storage",
                acoustics: "Acoustic solutions",
                reception: "Reception and lounge",
                cafeteria: "Cafeteria and breakout",
                "full-office": "Full office fitout",
                other: "Other"
            };
            lines.push(`Product family / project type: ${labels[state.useCase]}`);
        }
        if (state.companyName.trim()) {
            lines.push(`Company: ${state.companyName.trim()}`);
        }
        if (state.seats.trim()) lines.push(`Approx seats / units: ${state.seats.trim()}`);
        if (state.city.trim()) lines.push(`City: ${state.city.trim()}`);
        if (state.timeline) {
            const labels = {
                immediately: "Immediate (0–4 weeks)",
                "one-to-three": "1–3 months",
                "three-to-six": "3–6 months",
                exploring: "Just exploring / no fixed date"
            };
            lines.push(`Timeline: ${labels[state.timeline]}`);
        }
        if (state.budget.trim()) lines.push(`Budget range: ${state.budget.trim()}`);
        if (state.contactMethod && state.contactValue.trim()) {
            const label = state.contactMethod === "whatsapp" ? "WhatsApp" : "Email";
            lines.push(`${label}: ${state.contactValue.trim()}`);
        }
        if (state.notes.trim()) lines.push(`Notes: ${state.notes.trim()}`);
        return lines.join("\n");
    }, [
        state
    ]);
    const whatsappUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return `https://wa.me/919031022875?text=${encodeURIComponent(`One and Only workspace enquiry via website bot\n\n${summary}`)}`;
    }, [
        summary
    ]);
    const mailtoUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return `mailto:sales@oando.co.in?subject=${encodeURIComponent("One and Only workspace enquiry via website bot")}&body=${encodeURIComponent(summary)}`;
    }, [
        summary
    ]);
    const resetBot = ()=>{
        setState(initialState);
        setStep(0);
    };
    const closeBot = ()=>{
        setIsOpen(false);
    };
    const openBot = ()=>{
        setIsOpen(true);
    };
    const handleNext = ()=>{
        if (!canGoNext) return;
        if (step < 4) {
            setStep(step + 1);
        }
    };
    const handleBack = ()=>{
        if (step === 0) {
            closeBot();
            return;
        }
        setStep(step - 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: ()=>{
                    if (!isOpen) {
                        resetBot();
                        openBot();
                    } else {
                        closeBot();
                    }
                },
                className: "fixed bottom-6 right-6 z-60 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary-hover transition-colors",
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.95
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "w-7 h-7"
                }, void 0, false, {
                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/bot/AdvancedBot.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 20,
                        scale: 0.95
                    },
                    transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 22
                    },
                    className: "fixed bottom-24 right-6 z-60 w-80 max-w-[90vw] rounded-2xl bg-white shadow-2xl border border-neutral-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 py-3 border-b border-neutral-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-neutral-900",
                                            children: "One and Only Assistant"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-neutral-500",
                                            children: "Share a few details about your project"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeBot,
                                    "aria-label": "Close chat assistant",
                                    title: "Close chat assistant",
                                    className: "p-1 rounded-full hover:bg-neutral-100 text-neutral-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/bot/AdvancedBot.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-3 space-y-3 text-sm",
                            children: [
                                step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-800",
                                            children: "Which product family or project type is this for?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            useCase: "workstations"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.useCase === "workstations" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Workstations"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            useCase: "seating"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.useCase === "seating" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Seating"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            useCase: "meeting"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.useCase === "meeting" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Meeting tables"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            useCase: "storage"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.useCase === "storage" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Storage"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            useCase: "acoustics"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.useCase === "acoustics" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Acoustics"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            useCase: "reception"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.useCase === "reception" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Reception & lounge"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            useCase: "cafeteria"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.useCase === "cafeteria" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Cafeteria"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            useCase: "full-office"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.useCase === "full-office" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Full office"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            useCase: "other"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.useCase === "other" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 196,
                                    columnNumber: 17
                                }, this),
                                step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-800",
                                            children: "Roughly how many seats or units do you need?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 307,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: state.seats,
                                            onChange: (e)=>setState({
                                                    ...state,
                                                    seats: e.target.value
                                                }),
                                            placeholder: "e.g. 12 workstations, 30 chairs",
                                            className: "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 306,
                                    columnNumber: 17
                                }, this),
                                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-800",
                                            children: "Tell us about your company and project timing."
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 324,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: state.companyName,
                                            onChange: (e)=>setState({
                                                    ...state,
                                                    companyName: e.target.value
                                                }),
                                            placeholder: "Company name",
                                            className: "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: state.city,
                                            onChange: (e)=>setState({
                                                    ...state,
                                                    city: e.target.value
                                                }),
                                            placeholder: "City and state",
                                            className: "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 336,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            timeline: "immediately"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.timeline === "immediately" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "ASAP (0–4 weeks)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            timeline: "one-to-three"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.timeline === "one-to-three" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "1–3 months"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            timeline: "three-to-six"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.timeline === "three-to-six" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "3–6 months"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            timeline: "exploring"
                                                        }),
                                                    className: `px-3 py-1.5 rounded-full border text-xs ${state.timeline === "exploring" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Just exploring"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 345,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: state.budget,
                                            onChange: (e)=>setState({
                                                    ...state,
                                                    budget: e.target.value
                                                }),
                                            className: "w-full rounded-md border border-neutral-200 px-3 py-2 text-xs text-neutral-700 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400",
                                            "aria-label": "Your approximate budget",
                                            placeholder: "e.g. ₹5,00,000",
                                            title: "Your approximate budget"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 395,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 323,
                                    columnNumber: 17
                                }, this),
                                step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-800",
                                            children: "How should we contact you?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 411,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            contactMethod: "whatsapp"
                                                        }),
                                                    className: `flex-1 px-3 py-1.5 rounded-full border text-xs ${state.contactMethod === "whatsapp" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setState({
                                                            ...state,
                                                            contactMethod: "email"
                                                        }),
                                                    className: `flex-1 px-3 py-1.5 rounded-full border text-xs ${state.contactMethod === "email" ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-700 hover:border-neutral-500"}`,
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 425,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 412,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: state.contactValue,
                                            onChange: (e)=>setState({
                                                    ...state,
                                                    contactValue: e.target.value
                                                }),
                                            placeholder: state.contactMethod === "email" ? "Your email address" : "Your WhatsApp number with country code",
                                            className: "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 438,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 410,
                                    columnNumber: 17
                                }, this),
                                step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-800",
                                            children: "Any additional notes or special requirements?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 456,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: state.notes,
                                            onChange: (e)=>setState({
                                                    ...state,
                                                    notes: e.target.value
                                                }),
                                            rows: 3,
                                            placeholder: "Optional details about layout, timelines, or brands.",
                                            className: "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 459,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-md bg-neutral-50 border border-neutral-200 px-3 py-2 text-[11px] leading-snug text-neutral-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium mb-1",
                                                    children: "Preview of what we receive:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "whitespace-pre-wrap font-mono text-[10px] text-neutral-700",
                                                    children: summary
                                                }, void 0, false, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 468,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2 pt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: whatsappUrl,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#20bd5a] transition-colors",
                                                    children: [
                                                        "Send via WhatsApp",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: mailtoUrl,
                                                    className: "inline-flex items-center gap-1.5 rounded-full border border-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors",
                                                    children: [
                                                        "Send via Email",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 455,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-4 py-3 border-t border-neutral-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBack,
                                    className: "text-xs text-neutral-600 hover:text-neutral-900",
                                    children: step === 0 ? "Close" : "Back"
                                }, void 0, false, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 499,
                                    columnNumber: 15
                                }, this),
                                step < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleNext,
                                    disabled: !canGoNext,
                                    className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${canGoNext ? "bg-neutral-900 text-white hover:bg-neutral-800" : "bg-neutral-200 text-neutral-500 cursor-not-allowed"}`,
                                    children: [
                                        "Next",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                                            lineNumber: 516,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 506,
                                    columnNumber: 17
                                }, this),
                                step === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: resetBot,
                                    className: "text-xs text-neutral-500 hover:text-neutral-800",
                                    children: "Start over"
                                }, void 0, false, {
                                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                                    lineNumber: 520,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/bot/AdvancedBot.tsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/bot/AdvancedBot.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/bot/AdvancedBot.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/ai/Advisor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIAdvisor",
    ()=>AIAdvisor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const SAMPLE_QUERIES = [
    "Ergonomic seating for Bihar government project, 50 people",
    "Modular workstations for a 20-person tech startup in Patna",
    "Conference room furniture for corporate head office",
    "Complete office setup for 100-seat BPO centre"
];
function AIAdvisor() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Focus input when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) setTimeout(()=>inputRef.current?.focus(), 100);
    }, [
        open
    ]);
    async function handleSubmit(e, prefill) {
        e?.preventDefault();
        const q = prefill ?? query;
        if (!q.trim()) return;
        setLoading(true);
        setResult(null);
        try {
            const res = await fetch("/api/ai-advisor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: q
                })
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error ?? "Something went wrong");
            }
            setResult(data);
            if (prefill) setQuery(prefill);
        } catch (err) {
            const msg = err instanceof Error ? err.message : "Failed to get recommendations";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(msg, {
                duration: 4000,
                style: {
                    background: "#1a1a1a",
                    color: "#fff",
                    borderLeft: "4px solid #ef4444",
                    borderRadius: "4px"
                }
            });
        } finally{
            setLoading(false);
        }
    }
    const categorySlug = {
        "oando-workstations": "oando-workstations",
        "oando-seating": "oando-seating",
        "oando-tables": "oando-tables",
        "oando-storage": "oando-storage",
        "oando-soft-seating": "oando-soft-seating",
        "oando-educational": "oando-educational",
        "oando-collaborative": "oando-collaborative"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "bottom-right"
            }, void 0, false, {
                fileName: "[project]/components/ai/Advisor.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: "ai-advisor-trigger",
                onClick: ()=>setOpen(true),
                "aria-label": "Open AI Workspace Advisor",
                className: `fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-neutral-900 text-white px-5 py-3.5 rounded-full shadow-2xl shadow-black/30 hover:bg-primary transition-all duration-300 group ${open ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-4 h-4 text-primary group-hover:text-white transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/components/ai/Advisor.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-bold tracking-wide",
                        children: "AI Advisor"
                    }, void 0, false, {
                        fileName: "[project]/components/ai/Advisor.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ai/Advisor.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "AI Workspace Advisor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/ai/Advisor.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full sm:w-[480px] bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[85vh] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-6 py-5 border-b border-neutral-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 bg-neutral-900 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                    className: "w-5 h-5 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ai/Advisor.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-neutral-900 text-sm leading-none",
                                                        children: "AI Workspace Consultant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ai/Advisor.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-neutral-400 mt-0.5",
                                                        children: "Powered by One & Only × GPT-4o"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ai/Advisor.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ai/Advisor.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpen(false),
                                        className: "w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors",
                                        "aria-label": "Close advisor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai/Advisor.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ai/Advisor.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ai/Advisor.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-6 py-5 space-y-6",
                                children: [
                                    !result && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-neutral-500 leading-relaxed",
                                                children: "Describe your workspace project — team size, industry, location, and budget — and I'll engineer a curated system recommendation from our live catalog."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold tracking-widest uppercase text-neutral-400",
                                                        children: "Try a sample"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ai/Advisor.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: SAMPLE_QUERIES.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleSubmit(undefined, q),
                                                                className: "text-xs px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 transition-colors",
                                                                children: q
                                                            }, q, false, {
                                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ai/Advisor.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center py-12 gap-4 text-neutral-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-8 h-8 animate-spin text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "Analysing catalog and engineering your recommendations…"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ai/Advisor.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this),
                                    result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 bg-neutral-50 rounded-xl border border-neutral-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold tracking-widest uppercase text-neutral-400 mb-2",
                                                        children: "Consultant Summary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ai/Advisor.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-neutral-700 leading-relaxed",
                                                        children: result.summary
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ai/Advisor.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-neutral-400",
                                                                children: "Estimated project total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-neutral-900",
                                                                children: result.totalBudget
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ai/Advisor.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold tracking-widest uppercase text-neutral-400",
                                                        children: [
                                                            "Recommended Systems (",
                                                            result.recommendations?.length ?? 0,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ai/Advisor.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, this),
                                                    result.recommendations?.map((rec, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 rounded-xl border border-neutral-200 hover:border-neutral-400 transition-colors group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start justify-between gap-2 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-semibold text-neutral-900 text-sm leading-tight",
                                                                            children: rec.productName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ai/Advisor.tsx",
                                                                            lineNumber: 220,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: `/products/${categorySlug[rec.category] ?? rec.category}`,
                                                                            className: "shrink-0 w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white flex items-center justify-center transition-colors",
                                                                            "aria-label": `View ${rec.productName}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                className: "w-3.5 h-3.5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                                                lineNumber: 228,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ai/Advisor.tsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/ai/Advisor.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-neutral-500 leading-relaxed mb-3",
                                                                    children: rec.why
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ai/Advisor.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600 font-medium",
                                                                            children: rec.category?.replace("oando-", "").replace(/-/g, " ")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ai/Advisor.tsx",
                                                                            lineNumber: 235,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-primary font-semibold",
                                                                            children: rec.budgetEstimate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/ai/Advisor.tsx",
                                                                            lineNumber: 240,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/ai/Advisor.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/components/ai/Advisor.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setResult(null);
                                                    setQuery("");
                                                },
                                                className: "text-xs text-neutral-400 hover:text-neutral-900 transition-colors underline",
                                                children: "Start a new query"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 248,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ai/Advisor.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ai/Advisor.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            !result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "px-6 py-4 border-t border-neutral-100 bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            ref: inputRef,
                                            id: "ai-advisor-input",
                                            rows: 2,
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter" && !e.shiftKey) {
                                                    e.preventDefault();
                                                    handleSubmit();
                                                }
                                            },
                                            placeholder: "e.g. Ergonomic seating for Bihar government project, 50 people…",
                                            className: "flex-1 resize-none text-sm border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900 placeholder:text-neutral-400 bg-neutral-50",
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai/Advisor.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading || !query.trim(),
                                            id: "ai-advisor-submit",
                                            className: "w-11 h-11 bg-neutral-900 rounded-xl flex items-center justify-center text-white hover:bg-primary transition-colors disabled:opacity-40 shrink-0",
                                            "aria-label": "Send query",
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 292,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ai/Advisor.tsx",
                                                lineNumber: 294,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ai/Advisor.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ai/Advisor.tsx",
                                    lineNumber: 267,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ai/Advisor.tsx",
                                lineNumber: 263,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ai/Advisor.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ai/Advisor.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__571e8986._.js.map