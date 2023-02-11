import { App } from 'vue'
import './index.css'
import Plugin from './plugin'
import BaseAvatar from './components/BaseAvatar/BaseAvatar.vue'
import BaseAvatarGroup from './components/BaseAvatar/BaseAvatarGroup.vue'
import BaseBadge from './components/BaseBadge/BaseBadge.vue'
import BaseButton from './components/BaseButton/BaseButton.vue'
import BaseIcon from './components/BaseIcon/BaseIcon.vue'
import BaseTag from './components/BaseTag/BaseTag.vue'

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

const components = {
  BaseAvatar,
  BaseAvatarGroup,
  BaseBadge,
  BaseButton,
  BaseIcon,
  BaseTag,
}

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

export {
  BaseAvatar,
  BaseAvatarGroup,
  BaseBadge,
  BaseButton,
  BaseIcon,
  BaseTag,
  Plugin,
}
