export default [
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            eqeqeq: ["error", "always"],
            "no-empty-function": "error",
            "no-implicit-coercion": "error",
        },
        ignores: ["package.json", "package-lock.json", "node_modules", "dist"],
    },
];
