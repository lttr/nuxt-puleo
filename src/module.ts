import { defineNuxtModule, createResolver } from "@nuxt/kit"

// Module options TypeScript interface definition
// export interface ModuleOptions {}

export default defineNuxtModule({
  meta: {
    name: "nuxt-puleo",
    configKey: "puleo",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    _nuxt.options.css.push("@lttr/puleo")
  },
})
