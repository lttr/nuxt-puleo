import { defineNuxtModule, installModule } from "@nuxt/kit"

// Module options TypeScript interface definition
// export interface ModuleOptions {}

export default defineNuxtModule({
  meta: {
    name: "nuxt-puleo",
    configKey: "puleo",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    await installModule("@lttr/nuxt-config-postcss", {
      filesWithGlobals: ["./node_modules/@lttr/puleo/output/media.css"],
    })

    _nuxt.options.css.unshift("@lttr/puleo")
  },
})
