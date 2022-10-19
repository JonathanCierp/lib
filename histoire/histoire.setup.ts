import { defineSetupVue3 } from '@histoire/plugin-vue'
import ui from 'ui'
import 'ui/dist/style.css'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(ui)
})
