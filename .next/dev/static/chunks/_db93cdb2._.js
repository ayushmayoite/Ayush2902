(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/home/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const titleVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};
function Hero({ title, subtitle, variant = "default", backgroundImage, videoBackground, showButton = true, buttonText = "Discover office furniture", buttonLink = "/products" }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const yParallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "30%"
    ]);
    const opacityFade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.7
    ], [
        1,
        0
    ]);
    const isSmall = variant === "small";
    const isCinema = variant === "cinema";
    const getHeightClass = ()=>{
        if (isSmall) return "h-[50vh] min-h-[400px]";
        if (isCinema) return "h-[85vh] md:h-screen md:min-h-[1050px]";
        return "h-[80vh] md:h-screen";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: `relative w-full overflow-hidden group bg-neutral-900 hero-section ${getHeightClass()}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: yParallax,
                    opacity: opacityFade
                },
                className: "absolute inset-0 w-full h-[130%] -top-[15%]",
                children: [
                    videoBackground ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        poster: backgroundImage,
                        className: "w-full h-full object-cover scale-105 transition-opacity duration-1000 opacity-0 data-[ready=true]:opacity-100",
                        onCanPlay: (e)=>e.currentTarget.dataset.ready = "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: videoBackground,
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this) : backgroundImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: backgroundImage,
                        alt: "Hero Background",
                        fill: true,
                        className: "object-cover scale-105",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-neutral-800"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-neutral-900/40"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-linear-to-t from-neutral-900 via-transparent to-neutral-900/30"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 flex flex-col justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide h-full flex flex-col justify-center pb-20 pt-32",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        animate: "visible",
                        className: "max-w-4xl space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: titleVariants,
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `${isSmall ? "text-4xl md:text-6xl" : "text-[56px] sm:text-[72px] md:text-[96px]"} font-light text-white leading-[1.05] tracking-tight`,
                                    children: title || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Create your ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/home/Hero.tsx",
                                                lineNumber: 125,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/80 italic font-serif",
                                                children: "best work."
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/Hero.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: titleVariants,
                                className: "text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl font-light leading-relaxed",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this),
                            showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: titleVariants,
                                className: "pt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: buttonLink,
                                    className: "group inline-flex items-center justify-center gap-4 bg-primary px-10 py-5 text-white transition-all hover:bg-primary-hover hover:shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold uppercase tracking-[0.2em]",
                                            children: buttonText
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Hero.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-5 h-5 transition-transform group-hover:translate-x-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Hero.tsx",
                                            lineNumber: 152,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/Hero.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 2
                },
                className: "absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-20 bg-white/20 relative overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                y: [
                                    "-100%",
                                    "100%"
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "absolute inset-0 w-full h-1/2 bg-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.4em] text-white/50 origin-center rotate-90 translate-y-8",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Hero.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(Hero, "K0He2kuwc6NmoqaizRXxaZNjh0A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/products/[category]/FilterGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterGrid",
    ()=>FilterGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ─── Helpers ─────────────────────────────────────────────────────────────────
function buildUrl(pathname, filters) {
    const params = new URLSearchParams();
    if (filters.series !== "all") params.set("series", filters.series);
    if (filters.query) params.set("q", filters.query);
    if (filters.sort !== "az") params.set("sort", filters.sort);
    filters.subcategory.forEach((v)=>params.append("sub", v));
    filters.useCase.forEach((v)=>params.append("use", v));
    filters.priceRange.forEach((v)=>params.append("price", v));
    filters.material.forEach((v)=>params.append("mat", v));
    if (filters.hasHeadrest) params.set("headrest", "1");
    if (filters.isHeightAdjustable) params.set("height-adj", "1");
    if (filters.bifmaCertified) params.set("bifma", "1");
    if (filters.isStackable) params.set("stackable", "1");
    if (filters.minEcoScore > 0) params.set("eco", filters.minEcoScore.toString());
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
}
function parseFilters(sp) {
    return {
        series: sp.get("series") ?? "all",
        query: sp.get("q") ?? "",
        sort: sp.get("sort") ?? "az",
        subcategory: sp.getAll("sub"),
        useCase: sp.getAll("use"),
        priceRange: sp.getAll("price"),
        material: sp.getAll("mat"),
        hasHeadrest: sp.get("headrest") === "1",
        isHeightAdjustable: sp.get("height-adj") === "1",
        bifmaCertified: sp.get("bifma") === "1",
        isStackable: sp.get("stackable") === "1",
        minEcoScore: parseInt(sp.get("eco") || "0", 10)
    };
}
function countActive(f) {
    let n = 0;
    if (f.series !== "all") n++;
    if (f.subcategory.length) n += f.subcategory.length;
    if (f.useCase.length) n += f.useCase.length;
    if (f.priceRange.length) n += f.priceRange.length;
    if (f.material.length) n += f.material.length;
    if (f.hasHeadrest) n++;
    if (f.isHeightAdjustable) n++;
    if (f.bifmaCertified) n++;
    if (f.isStackable) n++;
    if (f.minEcoScore > 0) n++;
    return n;
}
// ─── Accordion Section ───────────────────────────────────────────────────────
function AccordionSection({ title, count, children, defaultOpen = false }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-neutral-100 last:border-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                className: "w-full flex items-center justify-between px-4 py-3 text-left group",
                "aria-expanded": open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-600 group-hover:text-neutral-900 transition-colors flex items-center gap-2",
                        children: [
                            title,
                            count !== undefined && count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-neutral-900 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none",
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        className: "w-3.5 h-3.5 text-neutral-400"
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-3.5 h-3.5 text-neutral-400"
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pb-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 133,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(AccordionSection, "pG0khZI24VrkSmCZcWM9qqrVMh4=");
_c = AccordionSection;
// ─── Multi-checkbox list ──────────────────────────────────────────────────────
function CheckList({ options, selected, onToggle }) {
    if (!options.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-xs text-neutral-400 italic",
        children: "No options available"
    }, void 0, false, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 151,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "space-y-1.5",
        children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex items-center gap-2.5 cursor-pointer group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            checked: selected.includes(opt),
                            onChange: ()=>onToggle(opt),
                            className: "w-3.5 h-3.5 accent-neutral-900"
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors capitalize",
                            children: opt
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this)
            }, opt, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c1 = CheckList;
// ─── Price Range Buttons ─────────────────────────────────────────────────────
const PRICE_RANGES = [
    "budget",
    "mid",
    "premium",
    "luxury"
];
function PriceButtons({ selected, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2",
        children: PRICE_RANGES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onToggle(p),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-3 py-1.5 text-xs rounded-sm border transition-all capitalize font-medium", selected.includes(p) ? "bg-neutral-900 text-white border-neutral-900" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"),
                children: p
            }, p, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_c2 = PriceButtons;
// ─── Feature Toggle ───────────────────────────────────────────────────────────
function Toggle({ label, checked, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex items-center justify-between gap-3 cursor-pointer py-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-neutral-600",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                role: "switch",
                "aria-checked": checked,
                onClick: ()=>onChange(!checked),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative w-9 h-5 rounded-full transition-colors flex items-center shrink-0", checked ? "bg-neutral-900" : "bg-neutral-200"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute w-3.5 h-3.5 bg-white rounded-full shadow transition-all", checked ? "left-[18px]" : "left-[3px]")
                }, void 0, false, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
_c3 = Toggle;
// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, categoryId }) {
    _s1();
    const firstImage = product.images && product.images.length > 0 ? product.images[0] : product.flagshipImage;
    const [imgSrc, setImgSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(firstImage || "/images/fallback/category.webp");
    const displayName = product.name;
    const ecoScore = product.metadata?.sustainabilityScore || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/products/${categoryId}/${product.id}`,
        className: "group block bg-white border border-neutral-100 hover:border-neutral-300 transition-all duration-200 hover:shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-square bg-stone-50 rounded-md overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: imgSrc,
                        alt: displayName,
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        className: "object-contain p-4 transition-transform duration-500 group-hover:scale-103",
                        onError: ()=>setImgSrc("/images/fallback/category.webp")
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    product.metadata?.bifmaCertified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-600 px-2.5 py-1.5 rounded-sm shadow-sm",
                        children: "BIFMA"
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this),
                    product.metadata?.priceRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-2 bg-neutral-900/75 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2.5 py-1.5 rounded-sm shadow-sm",
                        children: product.metadata.priceRange
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    ecoScore > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("absolute bottom-2 left-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-sm shadow-sm", ecoScore > 7 ? "bg-green-100/90 text-green-800" : "bg-white/90 text-neutral-600"),
                        children: [
                            "Eco-Score: ",
                            ecoScore,
                            "/10"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase tracking-widest text-neutral-400 font-medium mb-1",
                        children: product.seriesName
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors leading-tight",
                        children: displayName
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed",
                        children: product.description
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    product.metadata?.useCase && product.metadata.useCase.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1 mt-2",
                        children: product.metadata.useCase.slice(0, 2).map((uc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] uppercase tracking-wider font-medium text-neutral-400 bg-neutral-50 px-1.5 py-0.5 rounded-sm",
                                children: uc
                            }, uc, false, {
                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                lineNumber: 310,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
_s1(ProductCard, "pb5Ly1dqdEx9+ks2iCiOd6gP1Hg=");
_c4 = ProductCard;
// ─── Active Filter Chips ─────────────────────────────────────────────────────
function ActiveChips({ filters, onRemove, onClearAll, total }) {
    if (total === 0) return null;
    const chips = [];
    if (filters.series !== "all") chips.push({
        label: `Series: ${filters.series}`,
        key: "series"
    });
    filters.subcategory.forEach((v)=>chips.push({
            label: v,
            key: "subcategory",
            value: v
        }));
    filters.useCase.forEach((v)=>chips.push({
            label: v,
            key: "useCase",
            value: v
        }));
    filters.priceRange.forEach((v)=>chips.push({
            label: `${v} range`,
            key: "priceRange",
            value: v
        }));
    filters.material.forEach((v)=>chips.push({
            label: v,
            key: "material",
            value: v
        }));
    if (filters.hasHeadrest) chips.push({
        label: "With headrest",
        key: "hasHeadrest"
    });
    if (filters.isHeightAdjustable) chips.push({
        label: "Height adjustable",
        key: "isHeightAdjustable"
    });
    if (filters.bifmaCertified) chips.push({
        label: "BIFMA certified",
        key: "bifmaCertified"
    });
    if (filters.isStackable) chips.push({
        label: "Stackable",
        key: "isStackable"
    });
    if (filters.minEcoScore > 0) chips.push({
        label: `Eco Score >= ${filters.minEcoScore}`,
        key: "minEcoScore"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-2 py-3 border-b border-neutral-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold uppercase tracking-widest text-neutral-400",
                children: "Active:"
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this),
            chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onRemove(chip.key, chip.value),
                    className: "flex items-center gap-1.5 bg-neutral-900 text-white text-xs px-2.5 py-1 rounded-sm hover:bg-neutral-700 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "capitalize",
                            children: chip.label
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this)
                    ]
                }, `${chip.key}-${chip.value ?? ""}`, true, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onClearAll,
                className: "text-xs text-neutral-500 hover:text-neutral-900 underline transition-colors ml-1",
                children: "Clear all"
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 368,
        columnNumber: 5
    }, this);
}
_c5 = ActiveChips;
// ─── Inner Component (needs useSearchParams) ──────────────────────────────────
function AdvancedFilterGridInner({ category, categoryId }) {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [drawerOpen, setDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Parse filters from URL
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdvancedFilterGridInner.useMemo[filters]": ()=>parseFilters(searchParams)
    }["AdvancedFilterGridInner.useMemo[filters]"], [
        searchParams
    ]);
    // Flat product list
    const allProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdvancedFilterGridInner.useMemo[allProducts]": ()=>category.series.flatMap({
                "AdvancedFilterGridInner.useMemo[allProducts]": (s)=>s.products.map({
                        "AdvancedFilterGridInner.useMemo[allProducts]": (p)=>({
                                ...p,
                                seriesId: s.id,
                                seriesName: s.name
                            })
                    }["AdvancedFilterGridInner.useMemo[allProducts]"])
            }["AdvancedFilterGridInner.useMemo[allProducts]"])
    }["AdvancedFilterGridInner.useMemo[allProducts]"], [
        category
    ]);
    // Build filter option lists from available products
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdvancedFilterGridInner.useMemo[options]": ()=>{
            const sub = new Set();
            const useCase = new Set();
            const material = new Set();
            allProducts.forEach({
                "AdvancedFilterGridInner.useMemo[options]": (p)=>{
                    if (p.metadata?.subcategory) sub.add(p.metadata.subcategory);
                    p.metadata?.useCase?.forEach({
                        "AdvancedFilterGridInner.useMemo[options]": (u)=>useCase.add(u)
                    }["AdvancedFilterGridInner.useMemo[options]"]);
                    p.metadata?.material?.forEach({
                        "AdvancedFilterGridInner.useMemo[options]": (m)=>material.add(m)
                    }["AdvancedFilterGridInner.useMemo[options]"]);
                }
            }["AdvancedFilterGridInner.useMemo[options]"]);
            return {
                subcategory: [
                    ...sub
                ].sort(),
                useCase: [
                    ...useCase
                ].sort(),
                material: [
                    ...material
                ].sort()
            };
        }
    }["AdvancedFilterGridInner.useMemo[options]"], [
        allProducts
    ]);
    // Apply filters
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdvancedFilterGridInner.useMemo[filteredProducts]": ()=>{
            let list = [
                ...allProducts
            ];
            // Series
            if (filters.series !== "all") {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.seriesId === filters.series
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            // Search
            if (filters.query.trim()) {
                const q = filters.query.trim().toLowerCase();
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            // Subcategory
            if (filters.subcategory.length) {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.metadata?.subcategory && filters.subcategory.includes(p.metadata.subcategory)
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            // Use case
            if (filters.useCase.length) {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.metadata?.useCase?.some({
                            "AdvancedFilterGridInner.useMemo[filteredProducts]": (u)=>filters.useCase.includes(u)
                        }["AdvancedFilterGridInner.useMemo[filteredProducts]"])
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            // Price range
            if (filters.priceRange.length) {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.metadata?.priceRange && filters.priceRange.includes(p.metadata.priceRange)
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            // Material
            if (filters.material.length) {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.metadata?.material?.some({
                            "AdvancedFilterGridInner.useMemo[filteredProducts]": (m)=>filters.material.includes(m)
                        }["AdvancedFilterGridInner.useMemo[filteredProducts]"])
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            // Feature toggles
            if (filters.hasHeadrest) {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.metadata?.hasHeadrest
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            if (filters.isHeightAdjustable) {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.metadata?.isHeightAdjustable
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            if (filters.bifmaCertified) {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.metadata?.bifmaCertified
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            if (filters.isStackable) {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>p.metadata?.isStackable
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            // Eco Score
            if (filters.minEcoScore > 0) {
                list = list.filter({
                    "AdvancedFilterGridInner.useMemo[filteredProducts]": (p)=>(p.metadata?.sustainabilityScore || 0) >= filters.minEcoScore
                }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            }
            // Sort
            list.sort({
                "AdvancedFilterGridInner.useMemo[filteredProducts]": (a, b)=>filters.sort === "za" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
            }["AdvancedFilterGridInner.useMemo[filteredProducts]"]);
            return list;
        }
    }["AdvancedFilterGridInner.useMemo[filteredProducts]"], [
        allProducts,
        filters
    ]);
    // Update URL on filter change
    const updateFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdvancedFilterGridInner.useCallback[updateFilters]": (next)=>{
            const updated = {
                ...filters,
                ...next
            };
            router.push(buildUrl(pathname, updated), {
                scroll: false
            });
        }
    }["AdvancedFilterGridInner.useCallback[updateFilters]"], [
        filters,
        router,
        pathname
    ]);
    const toggleArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdvancedFilterGridInner.useCallback[toggleArray]": (key, value)=>{
            const current = filters[key];
            const next = current.includes(value) ? current.filter({
                "AdvancedFilterGridInner.useCallback[toggleArray]": (v)=>v !== value
            }["AdvancedFilterGridInner.useCallback[toggleArray]"]) : [
                ...current,
                value
            ];
            updateFilters({
                [key]: next
            });
        }
    }["AdvancedFilterGridInner.useCallback[toggleArray]"], [
        filters,
        updateFilters
    ]);
    const removeChip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdvancedFilterGridInner.useCallback[removeChip]": (key, value)=>{
            if (key === "subcategory" || key === "useCase" || key === "priceRange" || key === "material") {
                const current = filters[key];
                updateFilters({
                    [key]: current.filter({
                        "AdvancedFilterGridInner.useCallback[removeChip]": (v)=>v !== value
                    }["AdvancedFilterGridInner.useCallback[removeChip]"])
                });
            } else if (key === "hasHeadrest" || key === "isHeightAdjustable" || key === "bifmaCertified" || key === "isStackable") {
                updateFilters({
                    [key]: false
                });
            } else if (key === "minEcoScore") {
                updateFilters({
                    minEcoScore: 0
                });
            } else if (key === "series") {
                updateFilters({
                    series: "all"
                });
            }
        }
    }["AdvancedFilterGridInner.useCallback[removeChip]"], [
        filters,
        updateFilters
    ]);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdvancedFilterGridInner.useCallback[clearAll]": ()=>{
            router.push(pathname, {
                scroll: false
            });
        }
    }["AdvancedFilterGridInner.useCallback[clearAll]"], [
        router,
        pathname
    ]);
    const activeCount = countActive(filters);
    // ── Sidebar content (shared between desktop + drawer) ──
    const SidebarContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-neutral-200 rounded-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-neutral-100 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this),
                            "Filters",
                            activeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-neutral-900 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none",
                                children: activeCount
                            }, void 0, false, {
                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 579,
                        columnNumber: 9
                    }, this),
                    activeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearAll,
                        className: "text-[10px] text-neutral-500 hover:text-neutral-900 underline transition-colors",
                        children: "Clear all"
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 589,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {
                title: "Series",
                count: filters.series !== "all" ? 1 : 0,
                defaultOpen: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>updateFilters({
                                    series: "all"
                                }),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("w-full text-left text-sm py-1.5 px-2 rounded-sm transition-colors", filters.series === "all" ? "bg-neutral-900 text-white font-semibold" : "text-neutral-600 hover:bg-neutral-50"),
                            children: "All Series"
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 605,
                            columnNumber: 11
                        }, this),
                        category.series.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>updateFilters({
                                        series: s.id
                                    }),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("w-full text-left text-sm py-1.5 px-2 rounded-sm transition-colors", filters.series === s.id ? "bg-neutral-900 text-white font-semibold" : "text-neutral-600 hover:bg-neutral-50"),
                                children: s.name
                            }, s.id, false, {
                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                lineNumber: 617,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 604,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, this),
            options.subcategory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {
                title: "Type",
                count: filters.subcategory.length,
                defaultOpen: filters.subcategory.length > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckList, {
                    options: options.subcategory,
                    selected: filters.subcategory,
                    onToggle: (v)=>toggleArray("subcategory", v)
                }, void 0, false, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 640,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 635,
                columnNumber: 9
            }, this),
            options.useCase.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {
                title: "Use Case",
                count: filters.useCase.length,
                defaultOpen: filters.useCase.length > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckList, {
                    options: options.useCase,
                    selected: filters.useCase,
                    onToggle: (v)=>toggleArray("useCase", v)
                }, void 0, false, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 655,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 650,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {
                title: "Price Range",
                count: filters.priceRange.length,
                defaultOpen: filters.priceRange.length > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PriceButtons, {
                    selected: filters.priceRange,
                    onToggle: (v)=>toggleArray("priceRange", v)
                }, void 0, false, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 669,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 664,
                columnNumber: 7
            }, this),
            options.material.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {
                title: "Material",
                count: filters.material.length,
                defaultOpen: filters.material.length > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckList, {
                    options: options.material,
                    selected: filters.material,
                    onToggle: (v)=>toggleArray("material", v)
                }, void 0, false, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 682,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 677,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {
                title: "Features",
                count: (filters.hasHeadrest ? 1 : 0) + (filters.isHeightAdjustable ? 1 : 0) + (filters.bifmaCertified ? 1 : 0) + (filters.isStackable ? 1 : 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                            label: "With Headrest",
                            checked: filters.hasHeadrest,
                            onChange: (v)=>updateFilters({
                                    hasHeadrest: v
                                })
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 701,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                            label: "Height Adjustable",
                            checked: filters.isHeightAdjustable,
                            onChange: (v)=>updateFilters({
                                    isHeightAdjustable: v
                                })
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 706,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                            label: "BIFMA Certified",
                            checked: filters.bifmaCertified,
                            onChange: (v)=>updateFilters({
                                    bifmaCertified: v
                                })
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 711,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                            label: "Stackable",
                            checked: filters.isStackable,
                            onChange: (v)=>updateFilters({
                                    isStackable: v
                                })
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 700,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 691,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionSection, {
                title: "Sustainability",
                count: filters.minEcoScore > 0 ? 1 : 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 pt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "eco-score-range",
                            className: "text-sm text-neutral-600 block",
                            children: [
                                "Min Eco-Score: ",
                                filters.minEcoScore
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 730,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "eco-score-range",
                            type: "range",
                            min: "0",
                            max: "10",
                            step: "1",
                            value: filters.minEcoScore,
                            onChange: (e)=>updateFilters({
                                    minEcoScore: parseInt(e.target.value, 10)
                                }),
                            className: "w-full accent-neutral-900"
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 729,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 725,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 576,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-[#f8f9fa]",
        "aria-label": `${category.name} product catalog`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-white border-b border-neutral-200 sticky top-16 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-wide py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDrawerOpen(true),
                                    className: "lg:hidden flex items-center gap-2 h-10 px-3 bg-white border border-neutral-200 rounded-sm text-sm text-neutral-700 hover:border-neutral-400 transition-colors shrink-0",
                                    "aria-label": "Open filters",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                            lineNumber: 768,
                                            columnNumber: 15
                                        }, this),
                                        "Filters",
                                        activeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-neutral-900 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none",
                                            children: activeCount
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                            lineNumber: 771,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                    lineNumber: 763,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-1 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                            lineNumber: 779,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: `Search ${category.name.toLowerCase()}…`,
                                            "aria-label": `Search ${category.name}`,
                                            className: "w-full h-10 pl-9 pr-8 bg-white border border-neutral-200 rounded-sm text-sm focus:outline-none focus:border-neutral-800 transition-colors",
                                            value: filters.query,
                                            onChange: (e)=>updateFilters({
                                                    query: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                            lineNumber: 780,
                                            columnNumber: 15
                                        }, this),
                                        filters.query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>updateFilters({
                                                    query: ""
                                                }),
                                            className: "absolute right-3 top-1/2 -translate-y-1/2",
                                            "aria-label": "Clear search",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-3.5 h-3.5 text-neutral-400 hover:text-neutral-800"
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                                lineNumber: 794,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                            lineNumber: 789,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                    lineNumber: 778,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-live": "polite",
                                            "aria-atomic": "true",
                                            className: "text-xs text-neutral-500 font-medium whitespace-nowrap",
                                            children: [
                                                filteredProducts.length,
                                                " / ",
                                                allProducts.length,
                                                " products"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                            lineNumber: 801,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            "aria-label": "Sort products",
                                            className: "h-10 px-3 bg-white border border-neutral-200 rounded-sm text-sm text-neutral-700 focus:outline-none focus:border-neutral-800",
                                            value: filters.sort,
                                            onChange: (e)=>updateFilters({
                                                    sort: e.target.value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "az",
                                                    children: "Name A–Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "za",
                                                    children: "Name Z–A"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "newest",
                                                    children: "Newest"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                            lineNumber: 808,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                    lineNumber: 800,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 761,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveChips, {
                            filters: filters,
                            onRemove: removeChip,
                            onClearAll: clearAll,
                            total: activeCount
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 824,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                    lineNumber: 760,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 759,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-wide py-8 flex gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "hidden lg:block w-64 shrink-0 self-start sticky top-32",
                        children: SidebarContent
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 836,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-24 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-5 h-5 text-neutral-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                        lineNumber: 845,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                    lineNumber: 844,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base font-semibold text-neutral-700 mb-1",
                                    children: "No products found"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                    lineNumber: 847,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-neutral-400 mb-4",
                                    children: "Try adjusting your filters or search query"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                    lineNumber: 850,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: clearAll,
                                    className: "text-sm underline text-neutral-600 hover:text-neutral-900 transition-colors",
                                    children: "Clear all filters"
                                }, void 0, false, {
                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                    lineNumber: 853,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 843,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4",
                            children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "transition-all duration-300 animate-fadein",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                        product: product,
                                        categoryId: categoryId
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                        lineNumber: 867,
                                        columnNumber: 19
                                    }, this)
                                }, product.id, false, {
                                    fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                    lineNumber: 863,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                            lineNumber: 861,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 841,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                lineNumber: 834,
                columnNumber: 7
            }, this),
            drawerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/40 z-40 lg:hidden",
                        onClick: ()=>setDrawerOpen(false),
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 879,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-y-0 left-0 w-80 max-w-full bg-[#f8f9fa] z-50 overflow-y-auto lg:hidden shadow-2xl",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "Filter products",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 py-4 border-b border-neutral-200 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold text-neutral-900 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                                lineNumber: 893,
                                                columnNumber: 17
                                            }, this),
                                            "Filters",
                                            activeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-neutral-900 text-white text-[9px] font-bold rounded-full px-1.5 py-0.5 leading-none",
                                                children: activeCount
                                            }, void 0, false, {
                                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                                lineNumber: 896,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                        lineNumber: 892,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDrawerOpen(false),
                                        "aria-label": "Close filters",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5 text-neutral-500 hover:text-neutral-900"
                                        }, void 0, false, {
                                            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                            lineNumber: 905,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                        lineNumber: 901,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                lineNumber: 891,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: SidebarContent
                            }, void 0, false, {
                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                lineNumber: 908,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky bottom-0 bg-white border-t border-neutral-100 p-4 flex gap-2",
                                children: [
                                    activeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            clearAll();
                                            setDrawerOpen(false);
                                        },
                                        className: "flex-1 h-10 border border-neutral-200 text-sm text-neutral-700 rounded-sm hover:bg-neutral-50 transition-colors",
                                        children: "Clear all"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                        lineNumber: 911,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setDrawerOpen(false),
                                        className: "flex-1 h-10 bg-neutral-900 text-white text-sm rounded-sm hover:bg-neutral-700 transition-colors font-medium",
                                        children: [
                                            "View ",
                                            filteredProducts.length,
                                            " results"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                        lineNumber: 921,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                                lineNumber: 909,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
                        lineNumber: 885,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 754,
        columnNumber: 5
    }, this);
}
_s2(AdvancedFilterGridInner, "fSnTnbqL96Aew2+2D8rnJINrrfo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c6 = AdvancedFilterGridInner;
function FilterGrid({ category, categoryId }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-64 flex items-center justify-center text-neutral-400 text-sm",
            children: "Loading products…"
        }, void 0, false, {
            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
            lineNumber: 947,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdvancedFilterGridInner, {
            category: category,
            categoryId: categoryId
        }, void 0, false, {
            fileName: "[project]/app/products/[category]/FilterGrid.tsx",
            lineNumber: 952,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/products/[category]/FilterGrid.tsx",
        lineNumber: 945,
        columnNumber: 5
    }, this);
}
_c7 = FilterGrid;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "AccordionSection");
__turbopack_context__.k.register(_c1, "CheckList");
__turbopack_context__.k.register(_c2, "PriceButtons");
__turbopack_context__.k.register(_c3, "Toggle");
__turbopack_context__.k.register(_c4, "ProductCard");
__turbopack_context__.k.register(_c5, "ActiveChips");
__turbopack_context__.k.register(_c6, "AdvancedFilterGridInner");
__turbopack_context__.k.register(_c7, "FilterGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_db93cdb2._.js.map