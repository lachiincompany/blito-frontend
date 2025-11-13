module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/blito-frontend/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/86e87_4060b6f5._.js",
  "build/chunks/[root-of-the-server]__f25bc8f9._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/blito-frontend/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];