import { fixupConfigRules } from "@eslint/compat"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"
import * as tsEslint from "typescript-eslint"
import tsPArser from "@typescript-eslint/parser"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default tsEslint.config(
    ...tsEslint.configs.recommendedTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked,
    {
        ignores: ["**/dist", "**/.eslintrc.cjs", "src/components/ui/**"],
    },
    ...fixupConfigRules(
        compat.extends(
            "eslint:recommended",
            "plugin:react/recommended",
            "plugin:react/jsx-runtime",
            "plugin:react-hooks/recommended"
        )
    ),
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            "react-refresh": reactRefresh,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tsPArser,

            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                project: "./tsconfig.json",
            },
        },

        settings: {
            react: {
                version: "18.2",
            },
        },

        rules: {
            "react/jsx-no-target-blank": "off",

            "react-refresh/only-export-components": [
                "warn",
                {
                    allowConstantExport: true,
                },
            ],
        },
    }
)
