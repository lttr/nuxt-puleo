// @ts-check
import { createConfigForNuxt } from "@nuxt/eslint-config/flat"
import customConfig from "@lttr/nuxt-config-eslint"

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
  },
  dirs: {
    src: ["./playground"],
  },
}).append(customConfig)
