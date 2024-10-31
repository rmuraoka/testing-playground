import globals from "globals";
import eslintPluginJs from '@eslint/js'

const nodeAndJestGlobals = {
    ...globals.node,
    ...globals.jest
};

export default {
    languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        globals: {
            ...globals.browser,
            ...nodeAndJestGlobals
        },
    },
    plugins: {
        '@eslint/js': eslintPluginJs
    },
    rules: {
    }
};
