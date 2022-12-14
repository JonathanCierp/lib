import { App } from 'vue'
import './index.css'
import Plugin from './plugin'
import BaseButton from './components/BaseButton/BaseButton.vue'

interface AppOptions {
  autoImport: {
    components: boolean
  }
}

const defaultOptions: AppOptions = {
  autoImport: {
    components: true,
  },
}

const components = { BaseButton }

/**
 * It imports all the components in the `components` and `modules` directories, and registers them with
 * the Vue instance
 * @param {App} app - App - The app object that is passed to the plugin function.
 */
export default (app: App, options: AppOptions) => {
  const mergedOptions = { ...defaultOptions, ...options }

  if (mergedOptions.autoImport.components) {
    Object.entries({ ...components }).forEach(([name, component]: any) => {
      app.component(name, component)
    })
  }
}

export { BaseButton, Plugin }
