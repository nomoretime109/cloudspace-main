/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
declare module '@kangc/v-md-editor/lib/preview'
declare module 'prismjs'
declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/theme/github.js'


